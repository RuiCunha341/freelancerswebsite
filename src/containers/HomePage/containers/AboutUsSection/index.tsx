/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import './styles.scss';
import Effects from 'components/Effects';
import { SectionEnum } from 'enums/sections';

function AboutUsSection() {
    const [text, setText] = useState<string[]>([]);

    useEffect(() => {
        setText([
            'First impressions set the',
            'tone—make sure you',
            'leave a <span>lasting</span> impact.',
        ]);
    }, []);

    return (
        <div className='about-us-section' id={SectionEnum.AboutUs}>
            <div className='about-us-section__text-container'>
                {text.map((phrase, index) => (
                    <Effects
                        duration={0.8}
                        delay={index / 5}
                        triggerOnScrollPosition={500}
                        initialState={{ opacity: 0, positionX: '-200px' }}
                        finalState={{ opacity: 1, positionX: '0px' }}
                    >
                        <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: phrase }}
                        />
                    </Effects>
                ))}
            </div>
        </div>
    );
}

export default AboutUsSection;
