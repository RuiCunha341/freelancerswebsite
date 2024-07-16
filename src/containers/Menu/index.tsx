import React from 'react';
import './styles.scss';
import { IMenu } from './interface';

function Menu({ reference }: IMenu) {
    return (
        <div className='website-menu' ref={reference}>
            <div className='website-menu__left-side'>Menu Left-Side</div>
            <div className='website-menu__right-side'>Menu Right-Side</div>
        </div>
    );
}

export default Menu;
