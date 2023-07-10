import React from 'react';
import img from '../../assets/images/me.jpg'
import git from '../../assets/images/github.png'
import fac from '../../assets/images/face.jpg'
import linkdin from '../../assets/images/linkedin.png'


const About = () => {
    return (
        <div id='about' className='my-20'>
            <h2 className='text-center text-5xl text-white font-semibold underline'>About Me</h2>
            <div className='w-full flex flex-col md:flex-row md:gap-10 items-center'>
                <div className=' md:w-1/2 text-center p-2'>
                    <img src={img} alt="" className='rounded-full md:h-[350px] md:w-[350px] text-center mx-auto my-3 border-blue-600 border-solid border-4' />
                </div>
                <div className='md:w-1/2 p-5 text-gray-300'>
                    <p className='px-2'>
                        I am Mohammad Shahansha.I am a Bangladeshi.I read in Comilla University in 3rd year and My subject is B.Sc Engineering in Information & Communication Technology. As a MERN stack developer I am <span className='font-semibold text-xl'> specializes in using MongoDB, Express.js, React, and Node.js to develop full-stack web applications. I work with MongoDB for database management, Express.js for server-side development, React for client-side UI, and Node.js for server-side logic.</span> Responsibilities include designing the application architecture, implementing APIs, managing the database, building UI components, handling state management, and deploying the application.As well as I have <span className='font-semibold text-xl'> strong JavaScript, HTML, CSS skills </span> which are must essential, along with knowledge of web development principles and technologies.
                    </p>
                    <div className='flex sm:justify-center md:justify-start items-center mt-2 gap-3 px-2'>
                        <div className='flex items-center gap-1'>
                            <img src={git} alt="" className='h-5 w-5' />
                            <a href="https://github.com/" className='font-semibold underline'>GitHub</a>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={linkdin} alt="" className='h-5 w-5' />
                            <a href="https://github.com/" className='font-semibold underline'>LinkedIn</a>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={fac} alt="" className='h-5 w-5 rounded-full' />
                            <a href="https://www.facebook.com/profile.php?id=100083540903880&mibextid=ZbWKwL" className='font-semibold underline'>FaceBook</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;