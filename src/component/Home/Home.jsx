import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import NavBar from '../NavBar/NavBar';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import './Home.css';
const Home = () => {
    return (
        <div id='/' className='md:mx-28 bac'>
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