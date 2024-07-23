import React from 'react';
import './styles.scss';
import Button from 'components/Button';
import LanguageSelector from 'components/LanguageSelector';
import { useTranslation } from 'react-i18next';
import Link from 'components/Link';
import Effects from 'components/Effects';

function Menu() {
    const { t } = useTranslation();

    return (
        <div className='website-menu'>
            <div className='website-menu__left-side'>
                <Effects
                    duration={0.8}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <span>Logo</span>
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.1}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <LanguageSelector />
                </Effects>
            </div>
            <div className='website-menu__right-side'>
                <Effects
                    duration={0.8}
                    delay={0.2}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <Link text={t('general.ABOUT_US')} href='/#AboutUs' />
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.3}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <Link text={t('general.PROJECTS')} href='/' />
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.4}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <Link text={t('general.SERVICES')} href='/' />
                </Effects>
                <div className='website-menu__right-side__button'>
                    <Effects
                        duration={0.8}
                        delay={0.5}
                        initialState={{ opacity: 0, positionY: '-200px' }}
                        finalState={{ opacity: 1, positionY: '0px' }}
                    >
                        <Button
                            text={t('general.CONTACT_US')}
                            animateText={false}
                        />
                    </Effects>
                </div>
            </div>
        </div>
    );
}

export default Menu;
