import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navItem = <div className='lg:flex'>
        <li><Link className='text-2xl font-semibold' to="/">Home</Link></li>
        <li><Link className='text-2xl font-semibold' to='/about'>About</Link></li>
        <li><Link className='text-2xl font-semibold' to='/skill'>Skill</Link></li>
        <li><Link className='text-2xl font-semibold' to='/project'>Project</Link></li>
        <li><Link className='text-2xl font-semibold' to='/alltoys'>Contact</Link></li>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">My Portfolio</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;