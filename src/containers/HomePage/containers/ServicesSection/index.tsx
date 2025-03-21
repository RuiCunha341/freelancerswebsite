import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { SectionEnum } from 'enums/sections';
import { IService } from 'components/Service/interface';
import Service from 'components/Service';
import useElementOnScreen from 'hooks/useElementOnScreen';

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
                >
                    <Service
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        index={service.index}
                        title={service.title}
                        description={service.description}
                    />
                </div>
            ))}
        </div>
    );
}

export default ServicesSection;
