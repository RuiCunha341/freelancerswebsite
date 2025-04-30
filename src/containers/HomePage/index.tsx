import React from 'react';
import './styles.scss';
import InitialSection from './containers/InitialSection';
import ServicesSection from './containers/ServicesSection';
import VideoSection from './containers/VideoSection';
import AboutUsSection from './containers/AboutUsSection';
import ContactUsSection from './containers/ContactUsSection';

function HomePage() {
    return (
        <div className='home-page'>
            <InitialSection />
            <AboutUsSection />
            <VideoSection />
            <ServicesSection />
            <ContactUsSection />
        </div>
    );
}

export default HomePage;
