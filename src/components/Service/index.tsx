import React, { useEffect, useRef, useState } from 'react';
import useElementOnScreen from 'hooks/useElementOnScreen';
import { IService } from './interface';
import './styles.scss';

function Service({ title, description }: IService) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggered = useElementOnScreen(sectionRef, 0, false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (triggered && !visible) setVisible(true);
    }, [triggered]);

    return (
        <div className='service-container' ref={sectionRef}>
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
