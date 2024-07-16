import React from 'react';
import './styles.scss';
import { IButton } from './interface';

function Button({ text }: IButton) {
    return (
        <button type='button' className='button'>
            {text}
        </button>
    );
}

export default Button;
