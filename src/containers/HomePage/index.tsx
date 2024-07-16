import React from 'react';
import './styles.scss';
import InitialSection from './containers/InitialSection';
import ExampleSection from './containers/ExampleSection';
import ExampleSection2 from './containers/ExampleSection2';

function HomePage() {
    return (
        <div className='home-page'>
            <InitialSection />
            <ExampleSection2 />
            <ExampleSection />
            <ExampleSection2 />
        </div>
    );
}

export default HomePage;
