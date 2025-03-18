import React, { useState } from 'react';
import './styles.scss';
import classNames from 'classnames';
import { IButton } from './interface';

function Button({ text, animateText = true, onClick }: IButton) {
    const [hovering, setHovering] = useState(false);

    return (
        <button
            type='button'
            className='button'
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={onClick}
        >
            <span
                className={classNames('button__default-text', {
                    hovering,
                    animateText,
                })}
            >
                {text}
            </span>
            <span
                className={classNames('button__hovering-text', {
                    hovering,
                    animateText,
                })}
            >
                {text}
            </span>
            <span className='button__hidden-text'>{text}</span>
        </button>
    );
}

export default Button;
