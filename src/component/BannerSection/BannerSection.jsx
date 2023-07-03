import React from 'react';

import ban from '../../assets/images/ban.jpg'
import resume from '../../../public/resumeComplete.pdf'

const BannerSection = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20 md:mx-auto'>
            <div className='ps-8'>
                <h2 className='text-2xl font-semibold text-success mb-2'>Hello, I'm</h2>
                <h1 className='text-5xl font-semibold'>Mohammad Shahansha</h1>
                <h3 className='text-3xl font-semibold text-success my-3'>I'm a <span className='font-bold text-purple-600'>Mern Stack</span> Web Developer</h3>
                {/* <button className='btn btn-success '> Download Resume</button> */}
                <a href="../../../public/resumeComplete.pdf" download><button className='btn btn-success '> Download Resume</button></a>
            </div>
            <div className='text-end md:ms-32'>
                <img src={ban} alt="" className='rounded-lg md:h-[600px] md:w-[500px] p-2' />
            </div>
        </div>
    );
};

export default BannerSection;