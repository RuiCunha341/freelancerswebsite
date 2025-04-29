/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { SectionEnum } from 'enums/sections';
import { IService } from 'components/Service/interface';
import Service from 'components/Service';
import useElementOnScreen from 'hooks/useElementOnScreen';

export const currentServices: IService[] = [
    {
        title: 'Branding & Identity',
        description: [
            'Logo Design',
            'Identity Buildout',
            'Naming Ideation',
            'Creative Direction',
            'Social Design',
        ],
    },
    {
        title: 'Web / App / Platform',
        description: [
            'Concept to Design',
            'Full-stack Development',
            'UI/UX Design',
            'Deployment & Infrastructure',
            'Product Ideation',
        ],
    },
    {
        title: 'Post-Production',
        description: [
            'Marketing Videos',
            'Television Commercials',
            'Documentaries',
            'Product Demos',
            'Short Films',
        ],
    },
    {
        title: 'Animation / VFX',
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
            <div className='services-section__content'>
                {currentServices.map((service, index) => (
                    <div
                        className={`services-section__content__service ${
                            visible ? 'visible' : ''
                        }`}
                        key={index}
                    >
                        <Service
                            key={index}
                            title={service.title}
                            description={service.description}
                        />
                    </div>
                ))}
            </div>
            <p className={`services-section__text ${visible ? 'visible' : ''}`}>
                At your service.
            </p>
        </div>
    );
}

export default ServicesSection;
