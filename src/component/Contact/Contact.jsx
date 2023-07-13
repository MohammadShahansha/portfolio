import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import ins from '../../assets/images/ins.jpg'
import fac from '../../assets/images/face.jpg'
import tel from '../../assets/images/teli.jpg'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ljwtoak', 'template_z48ygop', form.current, 'Zzk-PPbjeY6j2WdvR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

//hello
    return (
        <div id='contact' className='mt-20 px-2 pb-10'>
            <h2 className='text-5xl font-semibold text-center text-white underline mb-3'>Contact Me</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10'>
                <form name="contact" ref={form} onSubmit={sendEmail} className='' netlify>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300 font-md text-lg">Your Name:</span>
                        </label>
                        <input type="text" name="user_name" placeholder="Enter Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300 font-md text-lg">Your Email:</span>
                        </label>
                        <input type="email" name="user_email" placeholder="Enter Your email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-300 font-md text-lg">Your Message:</span>
                        </label>
                        <textarea type="text" name="message" placeholder="Type Your Message" className="input input-bordered" />
                    </div>
                    <input type="submit" value="Send" className='w-full text-center text-gray-300 bg-blue-900 py-2 cursor-pointer rounded-lg mt-2' />
                </form>
                <div className='text-gray-300 mt-10'>
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
