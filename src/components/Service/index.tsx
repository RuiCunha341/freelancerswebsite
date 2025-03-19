import React from 'react';
import Effects from 'components/Effects';
import { IService } from './interface';
import './styles.scss';

function Service({ index, title, description }: IService) {
    return (
        <div className='service-container'>
            <p className='service-container__index'>{index}</p>
            <div className='service-container__content'>
                <p className='service-container__content__title title'>
                    {title}
                </p>
                {description.map((phrase, i) => (
                    <Effects
                        duration={0.8}
                        delay={i / 10}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, scale: 0.5 }}
                        finalState={{ opacity: 1, scale: 1 }}
                    >
                        <div className='service-container__content__description'>
                            {phrase}
                        </div>
                    </Effects>
                ))}
            </div>
        </div>
    );
}

export default Service;
