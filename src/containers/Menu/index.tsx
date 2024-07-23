/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.scss';
import Button from 'components/Button';
import LanguageSelector from 'components/LanguageSelector';
import { useTranslation } from 'react-i18next';
import Link from 'components/Link';
import Effects from 'components/Effects';
import { SectionEnum } from 'enums/sections';

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
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <span className='website-menu__left-side__separator' />
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.1}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <div>
                        <LanguageSelector />
                    </div>
                </Effects>
            </div>
            <div className='website-menu__right-side'>
                <Effects
                    duration={0.8}
                    delay={0.2}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <div>
                        <Link
                            text={t('general.ABOUT_US')}
                            sectionId={SectionEnum.AboutUs}
                        />
                    </div>
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.3}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <div>
                        <Link
                            text={t('general.PROJECTS')}
                            sectionId={SectionEnum.Projects}
                        />
                    </div>
                </Effects>
                {/**
                 *                 <Effects
                    duration={0.8}
                    delay={0.4}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <div>
                        <Link
                            text={t('general.SERVICES')}
                            href='/'
                            sectionId={SectionEnum.Projects}
                        />
                    </div>
                </Effects>
                 */}
                <Effects
                    duration={0.8}
                    delay={0.4}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <div>
                        <Link
                            text={t('general.SERVICES')}
                            sectionId={SectionEnum.Services}
                        />
                    </div>
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.5}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <div className='website-menu__right-side__button'>
                        <Button
                            text={t('general.CONTACT_US')}
                            animateText={false}
                        />
                    </div>
                </Effects>
            </div>
        </div>
    );
}

export default Menu;
