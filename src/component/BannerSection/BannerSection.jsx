import React from 'react';
import ReactPlayer from 'react-player';

import ban from '../../assets/images/ban.jpg'
import dev from '../../assets/images/dev.mp4'

const BannerSection = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row gap-10 items-center mt-20 md:mx-auto md:p-5'>
            <div className='ps-8'>
                <h2 className='text-2xl font-semibold text-success mb-2'>Hello, I'm</h2>
                <h1 className='text-5xl font-semibold text-white'>Mohammad Shahansha</h1>
                <h3 className='text-3xl font-semibold text-success my-3'>I'm a <span className='font-bold text-purple-600'>Mern Stack</span> Web Developer</h3>

                <a href="../../../public/resumeComplete.pdf" download><button className='btn btn-success '> Download Resume</button></a>
            </div>
            <div className='text-end md:ms-32'>
                {/* <video src={dev} autoPlay className='rounded-lg'></video> */}
                <iframe className='h-[350px] w-[350px]' src="https://embed.lottiefiles.com/animation/99312"></iframe>
                
            </div>
        </div>
    );
};

export default BannerSection;