import React from 'react';

import ins from '../../assets/images/ins.jpg'
import fac from '../../assets/images/face.jpg'
import tel from '../../assets/images/teli.jpg'

const Contact = () => {
    return (
        <div className='flex w-full gap-10 my-20'>
            <div className='w-1/2'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-md text-lg">Your Name:</span>
                    </label>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-md text-lg">Your Email:</span>
                    </label>
                    <input type="email" placeholder="Enter Your email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-md text-lg">Your Message:</span>
                    </label>
                    <textarea type="text" placeholder="Type Your Message" className="input input-bordered" />
                </div>
                <input type="submit" value="Send" className='w-full text-center bg-green-400 py-2 rounded-lg mt-2'/>
            </div>
            <div className='w-1/2'>
                <div>
                    <h2 className='font-semibold text-lg mt-2'>Email:</h2>
                    <h2 className='text-lg '>mohammadshahansha111@gmail.com</h2>
                    <h2 className='font-semibold text-lg mt-2'>Phone:</h2>
                    <h2 className='text-lg'>+880 1740252019</h2>
                    <h2 className='font-semibold text-lg mt-2'>Social</h2>
                    <h2 className='flex gap-2'>
                        <a href="#"><img src={fac} alt="" className='rounded-full sm:h-[40px] sm:w-[40px]' /></a>
                        <a href="#"><img src={tel} alt="" className='rounded-full sm:h-[40px] sm:w-[40px]' /></a>
                        <a href="#"><img src={ins} alt="" className='rounded-full sm:h-[40px] sm:w-[40px]' /></a>
                    </h2>
                    <h2 className='font-semibold text-lg mt-2'>Address</h2>
                    <h2 className='text-lg'>Dhaka, Bangladesh</h2>
                </div>

            </div>
        </div>
    );
};

export default Contact;