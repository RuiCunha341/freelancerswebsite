/* eslint-disable react/no-array-index-key */
import React from 'react';
import './styles.scss';
import Effects from 'components/Effects';
import { useTranslation } from 'react-i18next';
import { SectionEnum } from 'enums/sections';
import { IService } from 'components/Service/interface';
import Service from 'components/Service';
import VideographyIcon from 'assets/icons/VideographyIcon';
import PhotographyIcon from 'assets/icons/PhotographyIcon';
import VideoEditingIcon from 'assets/icons/VideoEditingIcon';
import MotionGraphicsIcon from 'assets/icons/MotionGraphicsIcon';

export const currentServices: IService[] = [
    {
        icon: <VideographyIcon />,
        service: 'VIDEOGRAPHY',
    },
    {
        icon: <PhotographyIcon />,
        service: 'PHOTOGRAPHY',
    },
    {
        icon: <VideoEditingIcon />,
        service: 'VIDEO_EDITING',
    },
    {
        icon: <MotionGraphicsIcon />,
        service: 'MOTION_GRAPHICS',
    },
];

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
            <div className='services-section__services'>
                {currentServices.map((service, index) => (
                    <Effects
                        duration={0.8}
                        delay={index / 10}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, scale: 0.5 }}
                        finalState={{ opacity: 1, scale: 1 }}
                    >
                        <div className='services-section__services__service'>
                            <Service
                                key={index}
                                icon={service.icon}
                                service={service.service}
                            />
                        </div>
                    </Effects>
                ))}
            </div>
        </div>
    );
}

export default ServicesSection;
