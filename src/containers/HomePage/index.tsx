import React from 'react';
import './styles.scss';
import InitialSection from './containers/InitialSection';
import ServicesSection from './containers/ServicesSection';
import ProjectsSection from './containers/ProjectsSection';
import AboutUsSection from './containers/AboutUsSection';

function HomePage() {
    return (
        <div className='home-page'>
            <InitialSection />
            <AboutUsSection />
            <ProjectsSection />
            <ServicesSection />
        </div>
    );
}

export default HomePage;
