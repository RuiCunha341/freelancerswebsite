import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import config from 'config';
import { scrollToSection } from 'utils/scroll';
import { ILink } from './interface';
import './styles.scss';

function Link({ text, href, sectionId }: ILink) {
    if (href)
        return (
            <div className='link'>
                <ReactLink to={`${config.BASE_URL}${href}`}>{text}</ReactLink>
            </div>
        );
    if (sectionId)
        return (
            <button
                className='link'
                type='button'
                onClick={() => scrollToSection(sectionId)}
            >
                {text}
            </button>
        );
    return <div className='link'>{text}</div>;
}

export default Link;
