import React from 'react';
import './styles.scss';
import InitialSection from './containers/InitialSection';
import ExampleSection from './containers/ExampleSection';
import ProjectsSection from './containers/ProjectsSection';
import AboutUsSection from './containers/AboutUsSection';

function HomePage() {
    return (
        <div className='home-page'>
            <InitialSection />
            <AboutUsSection />
            <ExampleSection />
            <ProjectsSection />
        </div>
    );
}

export default HomePage;
