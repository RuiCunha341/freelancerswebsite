/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import ProjectPreview from 'components/ProjectPreview';
import Effects from 'components/Effects';
import { currentProjects } from './utils';

function ProjectsSection() {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    const resizeProjectPreview = () => {
        if (
            containerRef &&
            containerRef.current &&
            containerRef.current.offsetWidth
        )
            setHeight(containerRef.current.offsetWidth);
    };

    useEffect(() => {
        resizeProjectPreview();
    }, [containerRef, containerRef?.current?.offsetWidth]);

    useEffect(() => {
        // Add the resize event listener
        window.addEventListener('resize', resizeProjectPreview);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', resizeProjectPreview);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <div className='projects-section-container'>
            <Effects
                duration={0.8}
                triggerOnElementPositionOnScreen={95}
                initialState={{ opacity: 0, positionX: '-200px' }}
                finalState={{ opacity: 1, positionX: '0px' }}
            >
                <p className='projects-section-container__title'>
                    {t('general.PROJECTS')}
                </p>
            </Effects>
            <div className='projects-section-container__projects'>
                {currentProjects.map((project, index) => (
                    <div
                        className='projects-section-container__projects__project-container'
                        style={{ height: `${height}px` }}
                        ref={index === 0 ? containerRef : undefined}
                        key={index}
                    >
                        <Effects
                            duration={0.8}
                            delay={index / 10}
                            triggerOnElementPositionOnScreen={95}
                            initialState={{ opacity: 0, scale: 0.5 }}
                            finalState={{ opacity: 1, scale: 1 }}
                            key={index}
                        >
                            <div>
                                <ProjectPreview
                                    image={project.image}
                                    preview={project.preview}
                                    title={project.title}
                                />
                            </div>
                        </Effects>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsSection;
