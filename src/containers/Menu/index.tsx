import React from 'react';
import './styles.scss';
import Button from 'components/Button';

function Menu() {
    return (
        <div className='website-menu'>
            <div className='website-menu__left-side'>Logo</div>
            <div className='website-menu__right-side'>
                <Button text='Contact Us' animateText={false} />
            </div>
        </div>
    );
}

export default Menu;
