import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    // Declare state
    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-blue-100 w-full h-20 flex items-center justify-between mb-12'>
            {/* Brand Name */}
            <p className='ml-12 md:w-80 md:ml-20 font-extrabold text-3xl text-blue-500 hover:text-teal-500'>
                <Link to="/blog">Quiz Feed</Link>
            </p>
            {/* Add event handler to open/close hamburger menu */}
            <div onClick={() => setOpen(!open)} className="h-6 w-6 mr-12 md:hidden" >
                {
                    // ternary operator where close : open
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            {/* make list items inline for desktop with flex, hide menu for mobile with absolute position, md:static means position is static for desktop, perform animation with duration and ease-in */}
            <ul className={`bg-blue-100 w-full h-20 text-start pl-12 md:flex justify-end items-center mr-24 absolute md:static duration-500 ease-in ${open ? 'top-20' : 'top-[-160px]'}`}>

                <li className='text-blue-500 hover:text-teal-500 md:mr-8'>
                    <Link to="/">Dashboard</Link>
                </li>
                <li className='text-blue-500 hover:text-teal-500 md:mr-8'>
                    <Link to="/analytics">Analytics</Link>
                </li>
                <li className='text-blue-500 hover:text-teal-500'>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;