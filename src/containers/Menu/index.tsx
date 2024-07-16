import React from 'react';
import './styles.scss';
import Button from 'components/Button';
import { IMenu } from './interface';

function Menu({ reference }: IMenu) {
    return (
        <div className='website-menu' ref={reference}>
            <div className='website-menu__left-side'>Logo</div>
            <div className='website-menu__right-side'>
                <Button text='Contact Us' />
            </div>
        </div>
    );
}

export default Menu;
