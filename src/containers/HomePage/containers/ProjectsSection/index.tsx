/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import ProjectPreview from 'components/ProjectPreview';
import { SectionEnum } from 'enums/sections';
import { currentProjects } from './utils';

function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(0);

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            entries.forEach(entry =>
                requestAnimationFrame(() => {
                    if (entry.contentRect.width !== size) {
                        setSize(entry.contentRect.width);
                    }
                }),
            );
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [size]);

    return (
        <div className='projects-section-container' id={SectionEnum.Projects}>
            <div className='projects-section-container__projects'>
                {currentProjects.map((project, index) => (
                    <div
                        className='projects-section-container__projects__project-container'
                        style={{ height: `${size}px` }}
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
