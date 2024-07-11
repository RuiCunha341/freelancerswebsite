import React from 'react';
import './styles.scss';
import { sectionContentMotion } from './animation';

function HomePage() {
    return (
        <div className='home-page'>
            <div {...sectionContentMotion} className='home-page__content'>
                HomePage
            </div>
        </div>
    );
}

export default HomePage;
