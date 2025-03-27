export interface TextAreaProps {
    /** Text to display when the input field is empty */
    placeholder?: string;
    /** Indicates if the input field is disabled */
    disabled?: boolean;
    /** Function used to update the input field value */
    onChange?: (value: string) => void;
    /** Input field max character size */
    maxLength?: number;
    /** Input field current value */
    value?: string;
    /** If present indicates the pattern the input field value must follow */
    regex?: RegExp;
    /** Indicates if the input component has a button to clear the current input value */
    allowClear?: boolean;
    /** Indicates if the input component does not allow user to type */
    readonly?: boolean;
    /** Input field error message */
    $error?: string | boolean;
    /** Indicates if the form field is required */
    $required?: boolean;
}
