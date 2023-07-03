import React from 'react';

import ins from '../../assets/images/ins.jpg'
import fac from '../../assets/images/face.jpg'
import tel from '../../assets/images/teli.jpg'

const Contact = () => {
    return (
        <div id='contact' className='my-20 px-2'>
            <h2 className='text-5xl font-semibold text-center underline mb-3'>Contact Me</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10'>
                <div className=''>
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
                    <input type="submit" value="Send" className='w-full text-center bg-green-400 py-2 rounded-lg mt-2' />
                </div>
                <div className=''>
                    <div>
                        <h2 className='font-semibold text-lg mt-2'>Email:</h2>
                        <h2 className='text-lg '>mohammadshahansha111@gmail.com</h2>
                        <h2 className='font-semibold text-lg mt-2'>Phone:</h2>
                        <h2 className='text-lg'>+880 1725915331</h2>
                        <h2 className='font-semibold text-lg mt-2'>WhatsApp & Telegram</h2>
                        <h2 className='text-lg'>+880 1740252019</h2>
                        <h2 className='font-semibold text-lg mt-2'>Address</h2>
                        <h2 className='text-lg'>Dhaka, Bangladesh</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
