/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.scss';
import Link from 'components/Link';
import Effects from 'components/Effects';
import { useTranslation } from 'react-i18next';
import { SectionEnum } from 'enums/sections';

function Footer() {
    const { t } = useTranslation();

    return (
        <div className='website-footer'>
            <div className='website-footer__left-side'>@Footer</div>
            <div className='website-footer__right-side'>
                <Effects
                    duration={0.8}
                    delay={0.2}
                    triggerOnElementPositionOnScreen={95}
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
                    triggerOnElementPositionOnScreen={95}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <div>
                        <Link
                            text={t('general.WORK')}
                            sectionId={SectionEnum.Projects}
                        />
                    </div>
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.4}
                    triggerOnElementPositionOnScreen={95}
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
            </div>
        </div>
    );
}

export default Footer;
