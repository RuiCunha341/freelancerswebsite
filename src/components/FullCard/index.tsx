import React from 'react';
import TopChains from 'assets/cardExtras/top-chains.png';
import BottomChains from 'assets/cardExtras/bottom-chains.png';
import Star from 'assets/cardExtras/star.svg';
import './styles.scss';
import classNames from 'classnames';
import { IFullCardProps } from './interface';

function FullCard({
    text,
    image,
    stars = 0,
    hideText = false,
}: IFullCardProps) {
    return (
        <div className='card'>
            <div className='card__top-part'>
                <div className='card__top-part__stars-container'>
                    <img
                        alt='Middle Star'
                        src={Star}
                        className={classNames(
                            'card__top-part__stars-container__star',
                            {
                                hide: stars === 0,
                            },
                        )}
                    />
                    <img
                        alt='Middle Star'
                        src={Star}
                        className={classNames(
                            'card__top-part__stars-container__star',
                            {
                                hide: stars <= 1,
                            },
                        )}
                    />
                    <img
                        alt='Middle Star'
                        src={Star}
                        className={classNames(
                            'card__top-part__stars-container__star',
                            {
                                hide: stars <= 2,
                            },
                        )}
                    />
                    <img
                        alt='Middle Star'
                        src={Star}
                        className={classNames(
                            'card__top-part__stars-container__star',
                            {
                                hide: stars <= 3,
                            },
                        )}
                    />
                    <img
                        alt='Middle Star'
                        src={Star}
                        className={classNames(
                            'card__top-part__stars-container__star',
                            {
                                hide: stars <= 4,
                            },
                        )}
                    />
                </div>
                <img
                    alt='Top Chains'
                    src={TopChains}
                    className='card__top-part__top-chains'
                />
                <div className='card__top-part__illustration-container'>
                    <img
                        alt='Card Illustration'
                        src={image}
                        className='card__top-part__illustration-container__image'
                    />
                </div>
                <img
                    alt='Bottom Chains'
                    src={BottomChains}
                    className='card__top-part__bottom-chains'
                />
            </div>
            <div
                className={classNames('card__bottom-part', {
                    hideText,
                })}
            >
                {text}
            </div>
        </div>
    );
}

export default FullCard;
