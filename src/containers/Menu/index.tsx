/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './styles.scss';
import Button from 'components/Button';
import Link from 'components/Link';
import { SectionEnum } from 'enums/sections';
import classNames from 'classnames';
import MenuIcon from 'assets/icons/MenuIcon';
import { scrollToSection } from 'utils/scroll';
import LogoImage from '../../assets/images/LogoImage.webp';

function Menu() {
    const [visible, setVisible] = useState(true);
    const [className, setClassName] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 850); // less than 850px is considered mobile device
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Handle menu visibility
        let lastScrollTop = 0;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollTop = window.scrollY;
                    setVisible(
                        currentScrollTop <= lastScrollTop ||
                            currentScrollTop === 0,
                    );
                    lastScrollTop =
                        currentScrollTop <= 0 ? 0 : currentScrollTop;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setClassName('visible');
        }, 50);
    }, []);

    useEffect(() => {
        if (!visible) setMenuOpen(false);
    }, [visible]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 850);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
            </div>
            {isMobile ? (
                <div
                    className={`website-menu__hamburguer-menu-container ${className}`}
                >
                    <button
                        type='button'
                        aria-label='Toggle navigation menu'
                        aria-expanded={menuOpen} // used to indicate whether a collapsible UI element is open or closed (for Screen readers)
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <MenuIcon />
                    </button>
                </div>
            ) : (
                <div className='website-menu__right-side'>
                    <div
                        className={`website-menu__right-side__link-container ${className}`}
                    >
                        <Link text='Work' sectionId={SectionEnum.Video} />
                    </div>
                    <div
                        className={`website-menu__right-side__link-container ${className}`}
                    >
                        <Link
                            text='Services'
                            sectionId={SectionEnum.Services}
                        />
                    </div>
                    <div
                        className={`website-menu__right-side__button-container ${className}`}
                    >
                        <Button
                            text='Contact'
                            onClick={() =>
                                scrollToSection(SectionEnum.ContactUs)
                            }
                        />
                    </div>
                </div>
            )}
            <div
                className={classNames(
                    'website-menu__hamburguer-menu-opened-container',
                    {
                        visible: menuOpen,
                    },
                )}
            >
                <div
                    className={`website-menu__hamburguer-menu-opened-container__link-container ${className}`}
                >
                    <Link text='Work' sectionId={SectionEnum.Video} />
                </div>
                <div
                    className={`website-menu__hamburguer-menu-opened-container__link-container ${className}`}
                >
                    <Link text='Services' sectionId={SectionEnum.Services} />
                </div>
                <div
                    className={`website-menu__hamburguer-menu-opened-container__link-container ${className}`}
                >
                    <Link text='Contact' sectionId={SectionEnum.ContactUs} />
                </div>
            </div>
        </div>
    );
}

export default Menu;
