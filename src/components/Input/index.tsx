import React from 'react';
import './styles.scss';
import { InputProps } from './interface';

function Input({
    placeholder,
    disabled,
    onChange,
    maxLength,
    value,
    readonly,
    $error,
    $required,
}: InputProps) {
    return (
        <div className='input'>
            <input
                className='input__field'
                placeholder={placeholder}
                value={value || ''}
                disabled={disabled || readonly}
                required={$required}
                readOnly={readonly}
                maxLength={maxLength}
                onChange={
                    onChange ? ev => onChange(ev.target.value) : undefined
                }
                autoComplete='off'
            />
            {$error && typeof $error === 'string' && (
                <p className='input__message'>{$error}</p>
            )}
        </div>
    );
}

export default Input;
