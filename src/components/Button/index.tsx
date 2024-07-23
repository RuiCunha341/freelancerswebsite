import React, { useState } from 'react';
import './styles.scss';
import classNames from 'classnames';
import { IButton } from './interface';

function Button({ text, animateText = true }: IButton) {
    const [hovering, setHovering] = useState(false);

    return (
        <button
            type='button'
            className='button'
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <span
                className={classNames('button__default-text bold', {
                    hovering,
                    animateText,
                })}
            >
                {text}
            </span>
            <span
                className={classNames('button__hovering-text bold', {
                    hovering,
                    animateText,
                })}
            >
                {text}
            </span>
            <span className='button__hidden-text bold'>{text}</span>
        </button>
    );
}

export default Button;
