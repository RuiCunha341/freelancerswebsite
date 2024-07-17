import React from 'react';
import './styles.scss';
import Effects from 'components/Effects';
import { useTranslation } from 'react-i18next';
import BackgroundImage from '../../../../assets/images/temporary.webp';

function InitialSection() {
    const { t } = useTranslation();

    return (
        <div className='initial-section'>
            <Effects
                duration={0.8}
                delay={0.1}
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
                    initialState={{ opacity: 0, scale: 0.5 }}
                    finalState={{ opacity: 1, scale: 1 }}
                >
                    <div className='initial-section__text-container__text'>
                        {t('homePage.INITIAL_SECTION_1')}
                    </div>
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.7}
                    initialState={{ opacity: 0, scale: 0.5 }}
                    finalState={{ opacity: 1, scale: 1 }}
                >
                    <div className='initial-section__text-container__text'>
                        {t('homePage.INITIAL_SECTION_2')}
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
                        {t('homePage.INITIAL_SECTION_3')}
                    </div>
                </Effects>
            </div>
        </div>
    );
}

export default InitialSection;
