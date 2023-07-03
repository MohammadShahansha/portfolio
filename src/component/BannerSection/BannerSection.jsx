import React from 'react';

import ban from '../../assets/images/ban.jpg'

const BannerSection = () => {
    return (
        <div className='grid grid-cols-2 gap-10 items-center mt-10 mx-auto'>
            <div>
                <h2 className='text-2xl font-semibold text-red-500 mb-2'>Hello, I'm</h2>
                <h1 className='text-5xl font-semibold'>Mohammad Shahansha</h1>
                <h3 className='text-2xl font-semibold text-red-500 my-3'>I'm a Mern Stack Developer</h3>
                <button className='btn btn-success btn-outline'>Download Resume</button>
            </div>
            <div className='text-end ms-32'>
                <img src={ban} alt="" className='rounded-md h-[600px] w-auto' />
            </div>
        </div>
    );
};

export default BannerSection;