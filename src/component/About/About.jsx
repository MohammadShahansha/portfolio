import React from 'react';
import img from '../../assets/images/me.jpg'
import git from '../../assets/images/github.png'
import fac from '../../assets/images/Facebook.png'
import linkdin from '../../assets/images/linkedin.png'


const About = () => {
    return (
        <div id='about' className='my-20'>
            <div className='text-center p-2'>
                <h2 className='text-center text-5xl font-semibold underline'>About Me</h2>
                <img src={img} alt="" className='rounded-full md:h-[500px] md:w-[500px] text-center mx-auto my-3 border-black border-solid border-4' />
            </div>
            <p className='px-2'>
                I am Mohammad Shahansha.I am a Bangladeshi.I read in Comilla University in 3rd year and My subject is B.Sc Engineering in Information & Communication Technology. As a MERN stack developer I am <span className='font-semibold text-lg'> specializes in using MongoDB, Express.js, React, and Node.js to develop full-stack web applications. I work with MongoDB for database management, Express.js for server-side development, React for client-side UI, and Node.js for server-side logic.</span> Responsibilities include designing the application architecture, implementing APIs, managing the database, building UI components, handling state management, and deploying the application.As well as I have <span className='font-semibold text-lg'> strong JavaScript, HTML, CSS skills </span> which are must essential, along with knowledge of web development principles and technologies.
            </p>
            <div className='flex sm:justify-center md:justify-start items-center mt-2 gap-2 px-2'>
                <div className='flex items-center gap-1'>
                    <img src={git} alt="" className='h-5 w-5' />
                    <a href="https://github.com/" className='font-semibold underline'>GitHub</a>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={linkdin} alt="" className='h-5 w-5' />
                    <a href="https://github.com/" className='font-semibold underline'>LinkedIn</a>
                </div>
                <div className='flex items-center'>
                    <img src={fac} alt="" className='h-5 w-7' />
                    <a href="https://www.facebook.com/profile.php?id=100083540903880&mibextid=ZbWKwL" className='font-semibold underline'>FaceBook</a>
                </div>
            </div>
        </div>
    );
};

export default About;