import React from 'react';
import './styles.scss';
import Button from 'components/Button';
import LanguageButton from 'components/LanguageButton';
import { useTranslation } from 'react-i18next';
import Link from 'components/Link';

function Menu() {
    const { t } = useTranslation();

    return (
        <div className='website-menu'>
            <div className='website-menu__left-side'>
                <span>Logo</span>
                <LanguageButton />
            </div>
            <div className='website-menu__right-side'>
                <Link text={t('general.ABOUT_US')} href='/#AboutUs' />
                <Link text={t('general.PROJECTS')} href='/' />
                <Link text={t('general.SERVICES')} href='/' />
                <div className='website-menu__right-side__button'>
                    <Button
                        text={t('general.CONTACT_US')}
                        animateText={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default Menu;
