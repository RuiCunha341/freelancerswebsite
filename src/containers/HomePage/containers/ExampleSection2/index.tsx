import React from 'react';
import './styles.scss';
import UserIcon from 'assets/icons/UserIcon';
import Effects from 'components/Effects';

function ExampleSection2() {
    return (
        <div className='example-section2'>
            <Effects
                duration={0.8}
                triggerOnElementPositionOnScreen={95}
                initialState={{ opacity: 0, scale: 0.5 }}
                finalState={{ opacity: 1, scale: 1 }}
            >
                <div className='example-section2__left-side'>
                    <p className='example-section2__left-side__text'>
                        Rethink — Recycling: Creating a
                    </p>
                    <p className='example-section2__left-side__text'>
                        Sustainable Circular Economy
                    </p>
                    <p className='example-section2__left-side__text'>
                        for Plastics
                    </p>
                </div>
            </Effects>
            <div className='example-section2__right-side'>
                <UserIcon />
            </div>
        </div>
    );
}

export default ExampleSection2;
