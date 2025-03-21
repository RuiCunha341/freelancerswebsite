/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './styles.scss';
import Button from 'components/Button';
// import LanguageSelector from 'components/LanguageSelector';
import Link from 'components/Link';
import { SectionEnum } from 'enums/sections';
import classNames from 'classnames';
import MenuIcon from 'assets/icons/MenuIcon';
import { scrollToSection } from 'utils/scroll';
import LogoImage from '../../assets/images/LogoImage.webp';

function Menu() {
    const [visible, setVisible] = useState(true);
    const [className, setClassName] = useState('');

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

    useEffect(() => {
        setTimeout(() => {
            setClassName('visible');
        }, 50);
    }, []);

    return (
        <div
            className={classNames('website-menu', {
                visible,
                hidden: !visible,
            })}
        >
            <div className='website-menu__left-side'>
                <img
                    src={LogoImage}
                    alt='HomePage Background'
                    className={`website-menu__left-side__logo-image ${className}`}
                />
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
            <div className='website-menu__hamburguer-menu-container'>
                <button
                    type='button'
                    aria-label='Menu'
                    onClick={() => {
                        //
                    }}
                >
                    <MenuIcon />
                </button>
            </div>
            <div className='website-menu__right-side'>
                <div
                    className={`website-menu__right-side__link-container ${className}`}
                >
                    <Link text='About' sectionId={SectionEnum.AboutUs} />
                </div>
                <div
                    className={`website-menu__right-side__link-container ${className}`}
                >
                    <Link text='Services' sectionId={SectionEnum.Services} />
                </div>
                <div
                    className={`website-menu__right-side__link-container ${className}`}
                >
                    <Link text='Work' sectionId={SectionEnum.Projects} />
                </div>
                <div
                    className={`website-menu__right-side__button-container ${className}`}
                >
                    <Button
                        text='Contact'
                        animateText={false}
                        onClick={() => scrollToSection(SectionEnum.ContactUs)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Menu;
