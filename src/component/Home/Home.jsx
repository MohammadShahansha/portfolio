import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import NavBar from '../NavBar/NavBar';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div className='mx-28'>
            <NavBar></NavBar>
            <BannerSection></BannerSection>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;