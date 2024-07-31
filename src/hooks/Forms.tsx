/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';
import useAxios from 'axios-hooks';

export interface ISubmitData {
    [key: string]: unknown;
}

interface IUseFormPropsError {
    title: string;
    description: string;
}

export interface ResolveFuncProps<T> {
    dirty: boolean;
    hasErrors: boolean;
    firstSubmitTry: boolean;
    hasChanges: boolean;
    form: T;
    defaultResolveCanSubmit: (props: ResolveFuncProps<T>) => boolean;
}

interface IUseFormProps<T> {
    /** API URL to make the request to */
    url: string;
    /** Initial form object */
    initialForm?: T;
    /** Type of request */
    type?: 'POST' | 'PUT' | 'PATCH';
    /** Method to transform the form object before sending */
    resolveData?: (form: T, e?: any) => ISubmitData | FormData;
    /** Event when the API request returns an error */
    onError?: (data: unknown, error: AxiosError) => IUseFormPropsError | void;
    /** Event when the API request returns success */
    onSuccess?: (data: any, form: T) => void;
    /** If it returns false, this hook doesn't allow the form to be submitted. It also makes the button state disabled */
    resolveCanSubmit?: (props: ResolveFuncProps<T>) => boolean;
    /** If if returns true, the fields form this library will show the errors */
    resolveShowErrors?: (props: ResolveFuncProps<T>) => boolean;
    /** If set, this method is invoked instead of the regular submit(), allowing the submit logic to be overriten */
    resolveSubmit?: () => void;
}
export interface IFormErrorsValue {
    type: 'regex' | 'required' | 'custom-validation';
    value?: number;
}
export interface IRegisterOptions<T, K extends keyof T> {
    /** Regex patterns to apply to the field */
    regex?: RegExp | RegExp[];
    /** If true, the field is required to be filled */
    $required?: boolean;
    /** Custom validation */
    isValid?: (value: T[K], form: T) => boolean;
    /** If the field is not valid (required, regex or custom validation), this method is triggered. The return value must be a string of the error to be shown. */
    resolveError?: (value: T[K], formError: IFormErrorsValue) => string;
    /** This method triggers validations for another field. In case of a field is connected to this one. e.g: Password and Repeat password field, when changing the password, the repeat password must check if both input fields are equal */
    triggers?: (trigger: (prop: keyof T) => void, form: T) => void;
}

type IFormErrors<T> = {
    [key in keyof T]: IFormErrorsValue | null;
};

type IFormPropOptions<T, K extends keyof T> = {
    [key in keyof T]: IRegisterOptions<T, K> | undefined;
};

export type UpdateFormValue<T, K extends keyof T> = (form: T[K]) => T[K];

/**
 * Default rules to allow submitting the form
 *
 * @param { ResolveFuncProps<T> } param0
 * @returns { boolean } Can submit form
 */
function defaultResolveCanSubmit<T>({
    dirty,
    hasErrors,
    firstSubmitTry,
    hasChanges,
}: ResolveFuncProps<T>) {
    return !firstSubmitTry || (dirty && !hasErrors && hasChanges);
}

/**
 * Default rules to show the errors on the fields
 *
 * @param { ResolveFuncProps<T> } param0
 * @returns { boolean } Show errors
 */
function defaultResolveShowErrors<T>({
    hasErrors,
    firstSubmitTry,
}: ResolveFuncProps<T>) {
    return firstSubmitTry && hasErrors;
}

/**
 *
 * @param { IUseFormProps<T> } param0 Form props
 * @returns Form state
 */
export function useForm<T>({
    url,
    initialForm,
    type = 'POST',
    resolveCanSubmit = defaultResolveCanSubmit,
    resolveShowErrors = defaultResolveShowErrors,
    resolveData,
    resolveSubmit,
    onError,
    onSuccess,
}: IUseFormProps<T>) {
    const [form, setForm] = useState<T>(initialForm || ({} as T));
    const [load, setLoad] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [submitTry, setSubmitTry] = useState<boolean>(false);
    const errors = useRef<IFormErrors<T>>({} as IFormErrors<T>);
    const unchangedForm = useRef<T>(form);
    const changedFormKeys = useRef<(keyof T)[]>([]);
    const dirty = useRef<boolean>(false);
    const propOptions = useRef<IFormPropOptions<T, any>>(
        {} as IFormPropOptions<T, any>,
    );
    const firstReqRef = useRef<boolean>(false);
    const [{ data, loading, error }, axiosSubmit] = useAxios(
        {
            url,
            method: type,
        },
        { manual: true },
    );

    useEffect(() => {
        if (loading || !firstReqRef.current) return;

        if (error && onError) {
            const errorMessage = onError(data, error);
            if (errorMessage) {
                // error notification
                // warn user
                /*
                toast.error({
                    title: errorMessage.title,
                    message: errorMessage.description,
                });
                */
            }
        } else if (!error) {
            onSuccess?.(data, form);
            if (modalVisible) setModalVisible(false);
        }
    }, [loading]);

    const submit = (e?: any) => {
        const resolvedData = resolveData ? resolveData({ ...form }, e) : form;

        unchangedForm.current = { ...form };
        changedFormKeys.current = [];
        dirty.current = false;
        firstReqRef.current = true;
        axiosSubmit({
            data: resolvedData,
            ...(!!(resolvedData as any)?.append && {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }),
        });
    };

    const canSubmit = (triedToSubmit?: boolean) =>
        !loading &&
        resolveCanSubmit({
            dirty: dirty.current,
            hasErrors: Object.keys(errors.current).some(
                e => errors.current[e as keyof T] !== null,
            ),
            firstSubmitTry: triedToSubmit || submitTry,
            hasChanges: changedFormKeys.current.length !== 0,
            form,
            defaultResolveCanSubmit,
        });

    const showErrors = () =>
        resolveShowErrors({
            dirty: dirty.current,
            hasErrors: Object.keys(errors.current).some(
                e => errors.current[e as keyof T] !== null,
            ),
            firstSubmitTry: submitTry,
            hasChanges: changedFormKeys.current.length > 0,
            form,
            defaultResolveCanSubmit,
        });

    function checkErrors<K extends keyof T>(
        name: K,
        value: T[K],
        options?: IRegisterOptions<T, K>,
        newForm?: T,
    ) {
        if (
            options?.$required &&
            ((!Array.isArray(value) && !value) ||
                (Array.isArray(value) && value.length === 0)) &&
            (typeof value !== 'number' || value !== 0)
        ) {
            errors.current[name] = {
                type: 'required',
            };
            return;
        }
        if (options?.regex && typeof value === 'string') {
            if (Array.isArray(options.regex)) {
                let invalidRegex = false;
                options.regex.every((r, i) => {
                    if (!r.test(value)) {
                        errors.current[name] = {
                            type: 'regex',
                            value: i,
                        };
                        invalidRegex = true;
                        return false;
                    }
                    return true;
                });
                if (invalidRegex) return;
            } else if (options?.regex) {
                if (!options.regex.test(value)) {
                    errors.current[name] = {
                        type: 'regex',
                    };
                    return;
                }
            }
        }
        if (options?.isValid && !options.isValid(value, newForm || form)) {
            errors.current[name] = {
                type: 'custom-validation',
            };
            return;
        }
        errors.current[name] = null;
    }

    const submitClick = (e?: any) => {
        if (!submitTry) setSubmitTry(true);
        if (canSubmit(true)) {
            if (resolveSubmit) resolveSubmit();
            else submit(e);
        }
    };

    /**
     * Adding register('prop') to an input, connects the input with the form hook
     *
     * @param name Unique key of the form
     * @param options
     * @returns Input props to make the component work (value, onPressEnter, onChange)
     */
    function register<K extends keyof T>(
        name: K,
        options?: IRegisterOptions<T, K>,
    ) {
        if (errors.current[name] === undefined) {
            propOptions.current[name] = options;
            checkErrors(name, form[name], options);
            if (!load) setLoad(true);
        }

        return {
            value: form[name],
            // onPressEnter: submitClick,
            onChange: (value: T[K]) => {
                dirty.current = true;

                const ind = changedFormKeys.current.indexOf(name);
                const isChanged = ind !== -1;

                if (
                    (unchangedForm.current[name] === value ||
                        (!unchangedForm.current[name] && !value)) &&
                    isChanged
                )
                    changedFormKeys.current.splice(ind, 1);
                else if (unchangedForm.current[name] !== value && !isChanged)
                    changedFormKeys.current.push(name);

                checkErrors(name, value, propOptions.current[name]);
                const newForm = { ...form, [name]: value };
                if (propOptions.current[name]?.triggers)
                    propOptions.current[name]!.triggers!(
                        prop =>
                            checkErrors(
                                prop,
                                newForm[prop],
                                propOptions.current[prop],
                                newForm,
                            ),
                        { ...newForm },
                    );
                setForm(f => ({ ...f, [name]: value }));
            },
            name,
            $error:
                errors.current[name] && showErrors()
                    ? (propOptions.current[name]?.resolveError &&
                          propOptions.current[name]!.resolveError!(
                              form[name],
                              errors.current[name]!,
                          )) ||
                      ''
                    : undefined,
            $required: options?.$required,
        };
    }

    /**
     * Adding registerSubmit() to the submit button, connects the button with the form hook
     *
     * @returns Button props to make the component work (onClick, loading, disabled)
     */
    const registerSubmit = () => {
        return {
            onClick: submitClick,
            loading,
            disabled: !canSubmit(),
        };
    };

    /**
     * Updates the form field from code instead of user input
     *
     * @param { K } prop Unique key of the form
     * @param { T[K] | UpdateFormValue<T,K> } value Value to update to
     */
    function updateForm<K extends keyof T>(
        prop: K,
        value: T[K] | UpdateFormValue<T, K>,
    ) {
        const resolvedValue =
            typeof value === 'function'
                ? (value as UpdateFormValue<T, K>)(form[prop])
                : value;
        const options = propOptions.current[prop];

        dirty.current = true;

        const ind = changedFormKeys.current.indexOf(prop);
        const isChanged = ind !== -1;

        if (
            (unchangedForm.current[prop] === resolvedValue ||
                (!unchangedForm.current[prop] && !resolvedValue)) &&
            isChanged
        )
            changedFormKeys.current.splice(ind, 1);
        else if (unchangedForm.current[prop] !== resolvedValue && !isChanged)
            changedFormKeys.current.push(prop);

        checkErrors(prop, resolvedValue, options);
        const newForm = { ...form, [prop]: resolvedValue };
        if (options?.triggers)
            options.triggers(
                p =>
                    checkErrors(
                        prop,
                        newForm[p],
                        propOptions.current[p],
                        newForm,
                    ),
                { ...newForm },
            );
        setForm(f => ({ ...f, [prop]: resolvedValue }));
    }

    /**
     * Updates the form
     *
     * @param { T } newForm Form object
     * @param { boolean } reset If true, clears the errors and dirty state, making it a form from scratch
     */
    function SetForm(newForm: T, reset?: boolean) {
        if (reset) {
            unchangedForm.current = newForm;
            changedFormKeys.current = [];
            dirty.current = false;
            errors.current = {} as IFormErrors<T>;
            setSubmitTry(false);
        }
        Object.keys(newForm as any).forEach(name => {
            if (form[name as keyof T] !== newForm[name as keyof T]) {
                checkErrors(
                    name as keyof T,
                    newForm[name as keyof T],
                    propOptions.current[name as keyof T],
                );
            }
        });
        setForm(newForm);
    }

    /**
     * Clears the errors and dirty state, making it a form from scratch
     */
    function resetForm() {
        changedFormKeys.current = [];
        dirty.current = false;
        errors.current = {} as IFormErrors<T>;
        setSubmitTry(false);

        setForm(initialForm || ({} as T));
    }

    function setDirtyForm(value: T) {
        unchangedForm.current = value;
        dirty.current = false;
        changedFormKeys.current = [];

        Object.keys(value as any).forEach(name => {
            if (
                unchangedForm.current[name as keyof T] !== form[name as keyof T]
            ) {
                changedFormKeys.current.push(name as keyof T);
            }
        });
    }

    return {
        form,
        register,
        registerSubmit,
        submit,
        updateForm,
        setForm: SetForm,
        resetForm,
        setDirtyForm,
        hasChanges: changedFormKeys.current.length > 0,
        submitResponseData: data,
        isSubmitting: loading,
        submitError: error,
        dirty: dirty.current,
        errors: errors.current,
    };
}
