import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import config from 'config';
import { ILink } from './interface';
import './styles.scss';

function Link({ text, href }: ILink) {
    return (
        <div className='link'>
            <ReactLink to={`${config.BASE_URL}${href}`}>{text}</ReactLink>
        </div>
    );
}

export default Link;
