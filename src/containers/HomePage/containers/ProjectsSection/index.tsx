/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import ProjectPreview from 'components/ProjectPreview';
// import Effects from 'components/Effects';
import { SectionEnum } from 'enums/sections';
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
        <div className='projects-section-container' id={SectionEnum.Projects}>
            <p className='projects-section-container__title'>
                {t('general.WORK')}
            </p>
            <div className='projects-section-container__projects'>
                {currentProjects.map((project, index) => (
                    <div
                        className='projects-section-container__projects__project-container'
                        style={{ height: `${height}px` }}
                        ref={index === 0 ? containerRef : undefined}
                        key={index}
                    >
                        <ProjectPreview
                            image={project.image}
                            preview={project.preview}
                            title={project.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsSection;
