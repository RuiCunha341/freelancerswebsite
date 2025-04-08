/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { SectionEnum } from 'enums/sections';
import { IService } from 'components/Service/interface';
import Service from 'components/Service';
import useElementOnScreen from 'hooks/useElementOnScreen';
import BrandingAndIdentityAnimationData from 'assets/animations/BRANDING_IDENTITY_ANIM_V1.json';
import WebAppPlatformAnimationData from 'assets/animations/WEB_APP_PLATFORM_ANIM_V1.json';
import PostProductionAnimationData from 'assets/animations/POST-PRODUCTION_ANIM_V1.json';
import AnimationVfxAnimationData from 'assets/animations/ANIMATION_VFX_ANIM_V1.json';

export const currentServices: IService[] = [
    {
        index: '001',
        title: 'Branding & Identity',
        animation: BrandingAndIdentityAnimationData,
        description: [
            'Logo Design',
            'Identity Buildout',
            'Naming Ideation',
            'Creative Direction',
            'Social Design',
        ],
    },
    {
        index: '002',
        title: 'Web / App / Platform',
        animation: WebAppPlatformAnimationData,
        description: [
            'Concept to Design',
            'Full-stack Development',
            'UI/UX Design',
            'Deployment & Infrastructure',
            'Product Ideation',
        ],
    },
    {
        index: '003',
        title: 'Post-Production',
        animation: PostProductionAnimationData,
        description: [
            'Marketing Videos',
            'Television Commercials',
            'Documentaries',
            'Product Demos',
            'Short Films',
        ],
    },
    {
        index: '004',
        title: 'Animation / VFX',
        animation: AnimationVfxAnimationData,
        description: [
            '2D Animation',
            '3D Animation',
            'Mixed Media',
            'Live Action',
            'Compositing',
        ],
    },
];

function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggered = useElementOnScreen(sectionRef, 10, false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (triggered && !visible) setVisible(true);
    }, [triggered]);

    return (
        <div
            className='services-section'
            id={SectionEnum.Services}
            ref={sectionRef}
        >
            {currentServices.map((service, index) => (
                <div
                    className={`services-section__service ${
                        visible ? 'visible' : ''
                    }`}
                    key={index}
                >
                    <Service
                        key={index}
                        index={service.index}
                        title={service.title}
                        animation={service.animation}
                        description={service.description}
                    />
                </div>
            ))}
        </div>
    );
}

export default ServicesSection;
