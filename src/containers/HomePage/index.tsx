import React from 'react';
import './styles.scss';
import BackgroundImage from '../../assets/images/temporary.webp';
import { sectionContentMotion } from './animation';

function HomePage() {
    return (
        <div className='home-page'>
            <div
                className='home-page__initial-section'
                {...sectionContentMotion}
            >
                <img
                    src={BackgroundImage}
                    alt='HomePage Background'
                    className='home-page__initial-section__background-image'
                />
                <p>Rethink — Recycling: Creating a</p>
                <p>Sustainable Circular Economy</p>
                <p>for Plastics</p>
            </div>
        </div>
    );
}

export default HomePage;
