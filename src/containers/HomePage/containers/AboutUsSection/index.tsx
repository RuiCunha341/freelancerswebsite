import React, { useEffect, useState } from 'react';
import './styles.scss';
import Effects from 'components/Effects';
import { useTranslation } from 'react-i18next';
import { SectionEnum } from 'enums/sections';

function AboutUsSection() {
    const { t, i18n } = useTranslation();
    const [words, setWords] = useState<string[]>([
        t('services.VIDEOGRAPHY'),
        t('services.PHOTOGRAPHY'),
        t('services.VIDEO_EDITING'),
        t('services.MOTION_GRAPHICS'),
    ]);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        setWords([
            t('services.VIDEOGRAPHY'),
            t('services.PHOTOGRAPHY'),
            t('services.VIDEO_EDITING'),
            t('services.MOTION_GRAPHICS'),
        ]);
    }, [i18n.language, t]);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 3000); // 3000 milliseconds = 5 seconds

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className='about-us-section' id={SectionEnum.AboutUs}>
            <div className='about-us-section__text-container'>
                <Effects
                    duration={0.8}
                    triggerOnElementPositionOnScreen={95}
                    initialState={{ opacity: 0, positionX: '-200px' }}
                    finalState={{ opacity: 1, positionX: '0px' }}
                >
                    <p>{t('aboutUs.WE_CONNECT')}</p>
                </Effects>
                {wordIndex === 0 && (
                    <Effects
                        duration={0.8}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, positionX: '200px' }}
                        finalState={{ opacity: 1, positionX: '0px' }}
                    >
                        <p className='blue'>{words[wordIndex]}</p>
                    </Effects>
                )}
                {wordIndex === 1 && (
                    <Effects
                        duration={0.8}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, positionX: '200px' }}
                        finalState={{ opacity: 1, positionX: '0px' }}
                    >
                        <p className='blue'>{words[wordIndex]}</p>
                    </Effects>
                )}
                {wordIndex === 2 && (
                    <Effects
                        duration={0.8}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, positionX: '200px' }}
                        finalState={{ opacity: 1, positionX: '0px' }}
                    >
                        <p className='blue'>{words[wordIndex]}</p>
                    </Effects>
                )}
                {wordIndex === 3 && (
                    <Effects
                        duration={0.8}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, positionX: '200px' }}
                        finalState={{ opacity: 1, positionX: '0px' }}
                    >
                        <p className='blue'>{words[wordIndex]}</p>
                    </Effects>
                )}
                <Effects
                    duration={0.8}
                    triggerOnElementPositionOnScreen={95}
                    initialState={{ opacity: 0, positionX: '-200px' }}
                    finalState={{ opacity: 1, positionX: '0px' }}
                >
                    <p>{t('aboutUs.NEEDS')}</p>
                </Effects>
            </div>
        </div>
    );
}

export default AboutUsSection;
