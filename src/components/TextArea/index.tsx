import React from 'react';
import './styles.scss';
import { TextAreaProps } from './interface';

function TextArea({
    placeholder,
    disabled,
    onChange,
    maxLength,
    value,
    readonly,
    $error,
    $required,
}: TextAreaProps) {
    return (
        <div className='text-area'>
            <textarea
                className='text-area__field'
                placeholder={placeholder}
                value={value || ''}
                disabled={disabled || readonly}
                required={$required}
                readOnly={readonly}
                maxLength={maxLength}
                onChange={
                    onChange ? ev => onChange(ev.target.value) : undefined
                }
                rows={4}
                autoComplete='off'
            />
            {$error && typeof $error === 'string' && (
                <p className='text-area__message'>{$error}</p>
            )}
        </div>
    );
}

export default TextArea;
