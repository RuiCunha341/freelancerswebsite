import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { SectionEnum } from 'enums/sections';
import useElementOnScreen from 'hooks/useElementOnScreen';

function AboutUsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggered = useElementOnScreen(sectionRef, 0, false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (triggered && !visible) setVisible(true);
    }, [triggered]);

    return (
        <div
            className='about-us-section'
            id={SectionEnum.AboutUs}
            ref={sectionRef}
        >
            <div className='about-us-section__text-container'>
                <p
                    className={`about-us-section__text-container__text ${
                        visible ? 'visible' : ''
                    }`}
                >
                    First impressions set the
                </p>
                <p
                    className={`about-us-section__text-container__text ${
                        visible ? 'visible' : ''
                    }`}
                >
                    tone—make sure you
                </p>
                <p
                    className={`about-us-section__text-container__text ${
                        visible ? 'visible' : ''
                    }`}
                >
                    leave a <span>lasting</span> impact.
                </p>
            </div>
        </div>
    );
}

export default AboutUsSection;
