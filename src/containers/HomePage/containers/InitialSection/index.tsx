import React, { useEffect, useState } from 'react';
import './styles.scss';
import NewBackgroundImage from '../../../../assets/images/IntroImage.webp';

function InitialSection() {
    const [className, setClassName] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setClassName('visible');
        }, 200);
    }, []);

    return (
        <div className='initial-section'>
            <img
                src={NewBackgroundImage}
                alt='HomePage Background'
                className={`initial-section__background-image ${className}`}
            />
            <p className={`initial-section__text ${className}`}>
                Your idea, we make it
            </p>
        </div>
    );
}

export default InitialSection;
