/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.scss';
import Link from 'components/Link';
import { useTranslation } from 'react-i18next';
import { SectionEnum } from 'enums/sections';

function Footer() {
    const { t } = useTranslation();

    return (
        <div className='website-footer'>
            <div className='website-footer__left-side'>@Footer</div>
            <div className='website-footer__right-side'>
                <Link
                    text={t('general.ABOUT_US')}
                    sectionId={SectionEnum.AboutUs}
                />
                <Link
                    text={t('general.WORK')}
                    sectionId={SectionEnum.Projects}
                />
                <Link
                    text={t('general.SERVICES')}
                    sectionId={SectionEnum.Services}
                />
            </div>
        </div>
    );
}

export default Footer;
