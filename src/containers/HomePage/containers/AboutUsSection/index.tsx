import React from 'react';
import './styles.scss';
import Effects from 'components/Effects';
import { SectionEnum } from 'enums/sections';

function AboutUsSection() {
    return (
        <div className='about-us-section' id={SectionEnum.AboutUs}>
            <div className='about-us-section__text-container'>
                <Effects
                    duration={0.8}
                    triggerOnElementPositionOnScreen={95}
                    initialState={{ opacity: 0, positionX: '-200px' }}
                    finalState={{ opacity: 1, positionX: '0px' }}
                >
                    <p>First impressions set the</p>
                </Effects>
                <Effects
                    duration={0.8}
                    triggerOnElementPositionOnScreen={95}
                    initialState={{ opacity: 0, positionX: '-200px' }}
                    finalState={{ opacity: 1, positionX: '0px' }}
                >
                    <p>tone—make sure you</p>
                </Effects>
                <Effects
                    duration={0.8}
                    triggerOnElementPositionOnScreen={95}
                    initialState={{ opacity: 0, positionX: '-200px' }}
                    finalState={{ opacity: 1, positionX: '0px' }}
                >
                    <p>
                        leave a <span>lasting</span> impact.
                    </p>
                </Effects>
            </div>
        </div>
    );
}

export default AboutUsSection;
