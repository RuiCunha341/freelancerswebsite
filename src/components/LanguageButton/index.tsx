import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

function LanguageButton() {
    // language => "en" or "pt"
    const { i18n } = useTranslation();

    return (
        <div className='language-button-container'>
            <button
                type='button'
                onClick={() => i18n.changeLanguage('en')}
                className={classNames(
                    'language-button-container__button bold',
                    {
                        active: i18n.language === 'en',
                    },
                )}
            >
                EN
            </button>
            <button
                type='button'
                className={classNames(
                    'language-button-container__button bold',
                    {
                        active:
                            i18n.language === 'pt' || i18n.language === 'pt-PT',
                    },
                )}
                onClick={() => i18n.changeLanguage('pt')}
            >
                PT
            </button>
        </div>
    );
}

export default LanguageButton;
