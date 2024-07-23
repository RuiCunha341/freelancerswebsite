import React, { useState } from 'react';
import './styles.scss';
import classNames from 'classnames';
import { IProjectPreview } from './interface';

function ProjectPreview({
    image,
    preview,
    title = 'Project Title Here',
}: IProjectPreview) {
    const [visible, setVisible] = useState(true);

    return (
        <div
            className='project-preview-container'
            onMouseEnter={() => setVisible(false)}
            onMouseLeave={() => setVisible(true)}
        >
            <button
                type='button'
                className='project-preview-container__button'
                onClick={() => {
                    //
                }}
            >
                <div
                    className={classNames(
                        'project-preview-container__button__title-container',
                        {
                            hidden: visible,
                        },
                    )}
                >
                    <p>{title}</p>
                </div>
                <img
                    src={image}
                    alt='Project Cover'
                    className={classNames(
                        'project-preview-container__button__cover-image',
                        {
                            hidden: !visible,
                        },
                    )}
                />
                <img
                    src={preview}
                    alt='Project Preview'
                    className='project-preview-container__button__preview-image'
                />
            </button>
        </div>
    );
}

export default ProjectPreview;
