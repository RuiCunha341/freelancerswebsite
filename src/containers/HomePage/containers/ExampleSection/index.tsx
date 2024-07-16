import React from 'react';
import './styles.scss';
import UserIcon from 'assets/icons/UserIcon';
import Effects from 'components/Effects';

function ExampleSection() {
    return (
        <div className='example-section'>
            <div className='example-section__left-side'>
                <UserIcon />
            </div>
            <Effects
                duration={0.8}
                triggerOnElementPositionOnScreen={95}
                initialState={{ opacity: 0, scale: 0.5 }}
                finalState={{ opacity: 1, scale: 1 }}
            >
                <div className='example-section__right-side'>
                    <p className='example-section__right-side__text'>
                        Rethink — Recycling: Creating a
                    </p>
                    <p className='example-section__right-side__text'>
                        Sustainable Circular Economy
                    </p>
                    <p className='example-section__right-side__text'>
                        for Plastics
                    </p>
                </div>
            </Effects>
        </div>
    );
}

export default ExampleSection;
