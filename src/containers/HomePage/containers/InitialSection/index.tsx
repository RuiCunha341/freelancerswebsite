import React from 'react';
import './styles.scss';
import Effects from 'components/Effects';
import NewBackgroundImage from '../../../../assets/images/IntroImage.webp';

function InitialSection() {
    return (
        <div className='initial-section'>
            <Effects
                duration={0.8}
                delay={0.1}
                initialState={{ opacity: 0 }}
                finalState={{ opacity: 0.8 }}
            >
                <img
                    src={NewBackgroundImage}
                    alt='HomePage Background'
                    className='initial-section__background-image'
                />
            </Effects>
            <Effects
                duration={0.8}
                delay={0.5}
                initialState={{ opacity: 0, scale: 0.5 }}
                finalState={{ opacity: 1, scale: 1 }}
            >
                <div className='initial-section__text'>
                    Your idea, we make it
                </div>
            </Effects>
        </div>
    );
}

export default InitialSection;
