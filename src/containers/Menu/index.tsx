/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './styles.scss';
import Button from 'components/Button';
// import LanguageSelector from 'components/LanguageSelector';
import { useTranslation } from 'react-i18next';
import Link from 'components/Link';
import Effects from 'components/Effects';
import { SectionEnum } from 'enums/sections';
import classNames from 'classnames';
import MenuIcon from 'assets/icons/MenuIcon';
import { scrollToSection } from 'utils/scroll';
import LogoImage from '../../assets/images/LogoImage.webp';

function Menu() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            if (currentScrollTop > lastScrollTop) {
                // User is scrolling down
                setVisible(false);
            } else {
                // User is scrolling up
                setVisible(true);
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={classNames('website-menu', {
                visible,
                hidden: !visible,
            })}
        >
            <div className='website-menu__left-side'>
                <Effects
                    duration={0.8}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <img
                        src={LogoImage}
                        alt='HomePage Background'
                        className='website-menu__left-side__logo-image'
                    />
                </Effects>
                {/** 
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
                */}
            </div>
            <div className='website-menu__menu-right-side'>
                <Effects
                    duration={0.8}
                    delay={0.2}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <button
                        type='button'
                        aria-label='Menu'
                        onClick={() => {
                            //
                        }}
                    >
                        <MenuIcon />
                    </button>
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
                        <Link text='About' sectionId={SectionEnum.AboutUs} />
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
                            text='Services'
                            sectionId={SectionEnum.Services}
                        />
                    </div>
                </Effects>
                <Effects
                    duration={0.8}
                    delay={0.4}
                    initialState={{ opacity: 0, positionY: '-200px' }}
                    finalState={{ opacity: 1, positionY: '0px' }}
                >
                    <div>
                        <Link text='Work' sectionId={SectionEnum.Projects} />
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
                            text='Contact'
                            animateText={false}
                            onClick={() =>
                                scrollToSection(SectionEnum.ContactUs)
                            }
                        />
                    </div>
                </Effects>
            </div>
        </div>
    );
}

export default Menu;
