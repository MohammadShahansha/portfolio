import React from 'react';
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import taiwind from '../../assets/images/taiwind.png'
import bootstrap from '../../assets/images/bootstrape.png'
import react from '../../assets/images/react.webp'
import firebase from '../../assets/images/firebase_logo.webp'
import js from '../../assets/images/js.png'
import mongo from '../../assets/images/mongodb.webp'
import ex from '../../assets/images/express.png'
import stripe from '../../assets/images/stripe.png'
import nodejs from '../../assets/images/nodejs.png'
import jwt from '../../assets/images/jwt.png'
import git from '../../assets/images/github.png'

const Skills = () => {
    return (
        <div id='skill' className='my-10'>
            <h2 className='text-5xl text-center font-semibold underline mb-4'>Skills</h2>
            <div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 items-center gap-3 px-2'>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={html} alt="HTML" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Expert in <br /> HTML & HTML5</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={css} alt="CSS" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Expert in <br />CSS & CSS3</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={taiwind} alt="TailWind" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Expert in <br />Tailwind</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={bootstrap} alt="BootsTrap" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Expert in <br />Bootstrap</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={react} alt="react" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Expert in <br />React</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={firebase} alt="Firebasr" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Expert in <br />Firebase</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={js} alt="JavaScript" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Comfortable in <br />JavaScript</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={mongo} alt="Mongodb" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Comfortable in <br />Mongodb</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={ex} alt="Express js" className='rounded-full h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Comfortable in <br />Express JS</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={stripe} alt="Stripe" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Comfortable in <br />Stripe</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={git} alt="Stripe" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Comfortable in <br />Git & GitHub</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={nodejs} alt="Node js" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Familiar in <br />Node JS</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={stripe} alt="Stripe" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Familiar in <br />Stripe</h2>
                        </div>
                    </div>
                    <div className="card card-side bg-black shadow-xl py-4 px-8">
                        <figure><img src={jwt} alt="jwt" className='h-28 w-28'/></figure>
                        <div className="card-body">
                            <h2 className='text-white text-lg font-semibold'>Familiar in <br />JWT</h2>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>

    );
};

export default Skills;