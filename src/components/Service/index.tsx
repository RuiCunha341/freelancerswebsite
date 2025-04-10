import React, { useEffect, useRef, useState } from 'react';
import useElementOnScreen from 'hooks/useElementOnScreen';
import Lottie from 'lottie-react';
import { IService } from './interface';
import './styles.scss';

function Service({ index, title, animation, description }: IService) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggered = useElementOnScreen(sectionRef, 0, false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (triggered && !visible) setVisible(true);
    }, [triggered]);

    return (
        <div className='service-container' ref={sectionRef}>
            <p className='service-container__index'>{index}</p>
            <div>
                <Lottie animationData={animation} loop />
            </div>
            <div className='service-container__content'>
                <p className='service-container__content__title title'>
                    {title}
                </p>
                {description.map((phrase, i) => (
                    <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={i}
                        className={`service-container__content__description ${
                            visible ? 'visible' : ''
                        }`}
                    >
                        {phrase}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
