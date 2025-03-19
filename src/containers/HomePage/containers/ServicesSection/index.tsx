/* eslint-disable react/no-array-index-key */
import React from 'react';
import './styles.scss';
import Effects from 'components/Effects';
import { SectionEnum } from 'enums/sections';
import { IService } from 'components/Service/interface';
import Service from 'components/Service';

export const currentServices: IService[] = [
    {
        index: '001',
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
        index: '002',
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
        index: '003',
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
        index: '004',
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
    return (
        <div className='services-section' id={SectionEnum.Services}>
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
                                index={service.index}
                                title={service.title}
                                description={service.description}
                            />
                        </div>
                    </Effects>
                ))}
            </div>
        </div>
    );
}

export default ServicesSection;
