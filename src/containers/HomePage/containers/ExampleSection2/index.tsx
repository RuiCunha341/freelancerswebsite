import React from 'react';
import './styles.scss';
import UserIcon from 'assets/icons/UserIcon';
import Effects from 'components/Effects';
import { useTranslation } from 'react-i18next';

function ExampleSection2() {
    const { t } = useTranslation();

    return (
        <div className='example-section2'>
            <Effects
                duration={0.8}
                triggerOnElementPositionOnScreen={95}
                initialState={{ opacity: 0, scale: 0.5 }}
                finalState={{ opacity: 1, scale: 1 }}
            >
                <div className='example-section2__left-side'>
                    <p className='example-section2__left-side__text'>
                        {t('homePage.INITIAL_SECTION_1')}
                    </p>
                    <p className='example-section2__left-side__text'>
                        {t('homePage.INITIAL_SECTION_2')}
                    </p>
                    <p className='example-section2__left-side__text'>
                        {t('homePage.INITIAL_SECTION_3')}
                    </p>
                </div>
            </Effects>
            <div className='example-section2__right-side'>
                <UserIcon />
            </div>
        </div>
    );
}

export default ExampleSection2;
