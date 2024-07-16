import React from 'react';
import './styles.scss';
import Effects from 'components/Effects';
import BackgroundImage from '../../assets/images/temporary.webp';

function HomePage() {
    return (
        <div className='home-page'>
            <div className='home-page__initial-section'>
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
                        className='home-page__initial-section__background-image'
                    />
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.5}
                    triggerOnElementPositionOnScreen={0}
                    initialState={{ opacity: 0, scale: 0.5 }}
                    finalState={{ opacity: 1, scale: 1 }}
                >
                    <div className='home-page__initial-section__text'>
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
                    <div className='home-page__initial-section__text'>
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
                    <div className='home-page__initial-section__text'>
                        for Plastics
                    </div>
                </Effects>
            </div>
        </div>
    );
}

export default HomePage;
