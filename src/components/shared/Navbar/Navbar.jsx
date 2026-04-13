import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className='w-full mx-auto  mb-5  bg-white shadow-xl  py-5 px-10 '>
            <div className='flex items-center justify-between'>
                <div>
                    <span className='text-3xl font-bold '>Book Vibe</span>
                </div>



                <div className='flex items-center gap-15'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'btn border border-green-500  p-4 text-green-500' : ''}> Home </NavLink>
                    <NavLink to="/listed-books" className={({ isActive }) => isActive ? 'btn border border-green-500  p-4 text-green-500' : ''}> Listed Books </NavLink>
                    <NavLink to="/pages-to-read" className={({ isActive }) => isActive ? 'btn border border-green-500  p-4 text-green-500' : ''}> Pages to Read </NavLink>
                </div>


                <div className='flex items-center gap-5'>
                    <button className='btn bg-green-500 p-4 text-white'>Sign In </button>
                    <button className='btn bg-blue-500 p-4 text-white'>Sign Up </button>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;