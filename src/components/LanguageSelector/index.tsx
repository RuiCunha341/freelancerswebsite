import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { LanguageEnum } from 'enums/languages';
import DownArrowIcon from 'assets/icons/DownArrowIcon';
import useClickOutside from 'hooks/ClickOutside';

function LanguageSelector() {
    // language => "en" or "pt"
    const { i18n } = useTranslation();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [language, setLanguage] = useState<LanguageEnum>(
        LanguageEnum.English,
    );
    const dropdownContainerRef = useRef<HTMLDivElement>(null);

    /** Function used to toggle on and off the dropdown content visibility */
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    /** Force close the dropdown menu when the user clicks outside of its container */
    useClickOutside(dropdownContainerRef, () => setDropdownVisible(false));

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, []);

    return (
        <div className='language-selector-container' ref={dropdownContainerRef}>
            <button
                type='button'
                onClick={toggleDropdown}
                className='language-selector-container__button'
            >
                <span>{language.toUpperCase()}</span>
                <DownArrowIcon />
            </button>
            <div
                className={classNames('language-selector-container__dropdown', {
                    active: dropdownVisible,
                })}
            >
                {language.toUpperCase() !==
                    LanguageEnum.English.toUpperCase() && (
                    <button
                        type='button'
                        onClick={() => {
                            setLanguage(LanguageEnum.English);
                            toggleDropdown();
                        }}
                        className='language-selector-container__dropdown__button'
                    >
                        {LanguageEnum.English.toUpperCase()}
                    </button>
                )}
                {language.toUpperCase() !==
                    LanguageEnum.Portuguese.toUpperCase() && (
                    <button
                        type='button'
                        className='language-selector-container__dropdown__button'
                        onClick={() => {
                            setLanguage(LanguageEnum.Portuguese);
                            toggleDropdown();
                        }}
                    >
                        {LanguageEnum.Portuguese.toUpperCase()}
                    </button>
                )}
            </div>
        </div>
    );
}

export default LanguageSelector;
