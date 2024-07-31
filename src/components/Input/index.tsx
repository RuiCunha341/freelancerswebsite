import React from 'react';
import './styles.scss';
import { InputProps } from './interface';

function Input({
    placeholder,
    disabled,
    onChange,
    maxLength,
    value,
    regex,
    allowClear,
    readonly,
    $error,
    $required,
}: InputProps) {
    return (
        <div className='input'>
            <input
                className='input__field'
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
}

export default Input;
