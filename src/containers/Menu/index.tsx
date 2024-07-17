import React from 'react';
import './styles.scss';
import Button from 'components/Button';
import LanguageButton from 'components/LanguageButton';
import { useTranslation } from 'react-i18next';

function Menu() {
    const { t } = useTranslation();

    return (
        <div className='website-menu'>
            <div className='website-menu__left-side'>
                <span>Logo</span>
                <LanguageButton />
            </div>
            <div className='website-menu__right-side'>
                <Button text={t('general.CONTACT_US')} animateText={false} />
            </div>
        </div>
    );
}

export default Menu;
