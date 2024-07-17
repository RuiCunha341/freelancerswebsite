import React from 'react';
import './styles.scss';
import InitialSection from './containers/InitialSection';
import ExampleSection from './containers/ExampleSection';
import ExampleSection2 from './containers/ExampleSection2';
import AboutUsSection from './containers/AboutUsSection';

function HomePage() {
    return (
        <div className='home-page'>
            <InitialSection />
            <AboutUsSection />
            <ExampleSection />
            <ExampleSection2 />
            <ExampleSection />
            <ExampleSection2 />
        </div>
    );
}

export default HomePage;
