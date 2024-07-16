import React from 'react';
import './styles.scss';
import Effects from 'components/Effects';
import BackgroundImage from '../../../../assets/images/temporary.webp';

function InitialSection() {
    return (
        <div className='initial-section'>
            <Effects
                duration={0.8}
                delay={0.1}
                triggerOnElementPositionOnScreen={0}
                initialState={{ opacity: 0 }}
                finalState={{ opacity: 1 }}
            >
                <img
                    src={BackgroundImage}
                    alt='HomePage Background'
                    className='initial-section__background-image'
                />
            </Effects>
            <div className='initial-section__text-container'>
                <Effects
                    duration={0.8}
                    delay={0.5}
                    triggerOnElementPositionOnScreen={0}
                    initialState={{ opacity: 0, scale: 0.5 }}
                    finalState={{ opacity: 1, scale: 1 }}
                >
                    <div className='initial-section__text-container__text'>
                        Rethink — Recycling: Creating a
                    </div>
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.7}
                    triggerOnElementPositionOnScreen={0}
                    initialState={{ opacity: 0, scale: 0.5 }}
                    finalState={{ opacity: 1, scale: 1 }}
                >
                    <div className='initial-section__text-container__text'>
                        Sustainable Circular Economy
                    </div>
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.8}
                    triggerOnElementPositionOnScreen={0}
                    initialState={{ opacity: 0, scale: 0.5 }}
                    finalState={{ opacity: 1, scale: 1 }}
                >
                    <div className='initial-section__text-container__text'>
                        for Plastics
                    </div>
                </Effects>
            </div>
        </div>
    );
}

export default InitialSection;
