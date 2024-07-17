import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { LanguageEnum } from 'enums/languages';

function LanguageButton() {
    // language => "en" or "pt"
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState<LanguageEnum>(
        LanguageEnum.English,
    );

    useEffect(() => {
        // Get the current language from the html element
        const currentLang = document.documentElement.lang;

        if (currentLang === 'pt') setLanguage(LanguageEnum.Portuguese);
        // default language is EN
        setLanguage(LanguageEnum.English);
    }, []);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    return (
        <div className='language-button-container'>
            <button
                type='button'
                onClick={() => setLanguage(LanguageEnum.English)}
                className={classNames(
                    'language-button-container__button bold',
                    {
                        active: language === LanguageEnum.English,
                    },
                )}
            >
                {LanguageEnum.English.toUpperCase()}
            </button>
            <button
                type='button'
                className={classNames(
                    'language-button-container__button bold',
                    {
                        active: language === LanguageEnum.Portuguese,
                    },
                )}
                onClick={() => setLanguage(LanguageEnum.Portuguese)}
            >
                {LanguageEnum.Portuguese.toUpperCase()}
            </button>
        </div>
    );
}

export default LanguageButton;
