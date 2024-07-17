import React, { useEffect, useState } from 'react';
import './styles.scss';
import Effects from 'components/Effects';
import { useTranslation } from 'react-i18next';

function AboutUsSection() {
    const { t, i18n } = useTranslation();
    const [words, setWords] = useState<string[]>([
        t('aboutUs.INCREDIBLE'),
        t('aboutUs.SPECIAL'),
        t('aboutUs.UNIQUE'),
    ]);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        setWords([
            t('aboutUs.INCREDIBLE'),
            t('aboutUs.SPECIAL'),
            t('aboutUs.UNIQUE'),
        ]);
    }, [i18n.language]);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 3000); // 3000 milliseconds = 5 seconds

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className='about-us-section' id='AboutUs'>
            <div className='about-us-section__text-container'>
                <Effects
                    duration={0.8}
                    triggerOnElementPositionOnScreen={95}
                    initialState={{ opacity: 0, positionX: '-200px' }}
                    finalState={{ opacity: 1, positionX: '0px' }}
                >
                    <p>{t('aboutUs.WE_MAKE')}</p>
                </Effects>
                {wordIndex === 0 && (
                    <Effects
                        duration={0.8}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, positionX: '200px' }}
                        finalState={{ opacity: 1, positionX: '0px' }}
                    >
                        <p className='red'>{words[wordIndex]}</p>
                    </Effects>
                )}
                {wordIndex === 1 && (
                    <Effects
                        duration={0.8}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, positionX: '200px' }}
                        finalState={{ opacity: 1, positionX: '0px' }}
                    >
                        <p className='red'>{words[wordIndex]}</p>
                    </Effects>
                )}
                {wordIndex === 2 && (
                    <Effects
                        duration={0.8}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, positionX: '200px' }}
                        finalState={{ opacity: 1, positionX: '0px' }}
                    >
                        <p className='red'>{words[wordIndex]}</p>
                    </Effects>
                )}
                <Effects
                    duration={0.8}
                    triggerOnElementPositionOnScreen={95}
                    initialState={{ opacity: 0, positionX: '-200px' }}
                    finalState={{ opacity: 1, positionX: '0px' }}
                >
                    <p>{t('aboutUs.DIGITAL_PRODUCTS')}</p>
                </Effects>
            </div>
        </div>
    );
}

export default AboutUsSection;
