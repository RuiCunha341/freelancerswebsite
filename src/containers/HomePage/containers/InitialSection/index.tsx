import React, { useState } from 'react';
import './styles.scss';
import BackgroundImage1920 from '../../../../assets/images/IntroImage1920.webp';
import BackgroundImage1600 from '../../../../assets/images/IntroImage1600.webp';
import BackgroundImage1024 from '../../../../assets/images/IntroImage1024.webp';

function InitialSection() {
    const [className, setClassName] = useState('');

    const handleImageLoad = () => {
        // wait for the image to load and after 200 miliseconds change the className to visible
        setTimeout(() => {
            setClassName('visible');
        }, 200);
    };

    return (
        <div className='initial-section'>
            <img
                loading='lazy' // loads only when visible
                src={BackgroundImage1920}
                srcSet={`${BackgroundImage1024} 1024w, ${BackgroundImage1600} 1600w, ${BackgroundImage1920} 1920w`} // loads the correct image based on devide width
                alt='HomePage Background'
                onLoad={handleImageLoad} // Fires only when the correct image has fully loaded
                className={`initial-section__background-image ${className}`}
            />
            <p className={`initial-section__text ${className}`}>
                Your idea, we make it
            </p>
        </div>
    );
}

export default InitialSection;
