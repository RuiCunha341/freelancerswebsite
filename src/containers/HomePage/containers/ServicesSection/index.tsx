import React from 'react';
import './styles.scss';
import Effects from 'components/Effects';
import { useTranslation } from 'react-i18next';
import { SectionEnum } from 'enums/sections';
import Button from 'components/Button';
import BackgroundImage from '../../../../assets/images/temporary2.webp';

function ServicesSection() {
    const { t } = useTranslation();

    return (
        <div className='services-section' id={SectionEnum.Services}>
            <Effects
                duration={0.8}
                triggerOnElementPositionOnScreen={95}
                initialState={{ opacity: 0, positionX: '-200px' }}
                finalState={{ opacity: 1, positionX: '0px' }}
            >
                <p className='services-section__title'>
                    {t('general.SERVICES')}
                </p>
            </Effects>
            <div className='services-section__container'>
                <div className='services-section__container__left-side'>
                    <img src={BackgroundImage} alt='Services' />
                </div>
                <Effects
                    duration={0.8}
                    triggerOnElementPositionOnScreen={95}
                    initialState={{ opacity: 0, scale: 0.5 }}
                    finalState={{ opacity: 1, scale: 1 }}
                >
                    <div className='services-section__container__right-side'>
                        <p className='services-section__container__right-side__text'>
                            {t('homePage.INITIAL_SECTION_1')}
                        </p>
                        <p className='services-section__container__right-side__text'>
                            {t('homePage.INITIAL_SECTION_2')}
                        </p>
                        <p className='services-section__container__right-side__text'>
                            {t('homePage.INITIAL_SECTION_3')}
                        </p>
                        <Button text={t('general.CONTACT_US')} />
                    </div>
                </Effects>
            </div>
        </div>
    );
}

export default ServicesSection;
