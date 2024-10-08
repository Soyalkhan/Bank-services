import React, { useState } from 'react';
import logo from '../images/logo.jpg'; // Adjust the path as needed
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-lg" >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold flex items-center">
          {/* <img src={logo} alt="Brand Logo" className="max-w-44" /> */}
          <NavLink
            to="/"
          >
            <h2 className='text-blue-800 text-3xl'>Easy <span className='text-[#d90368]'>Loans</span></h2> 
          </NavLink>
         
          
        </div>
        <div className="hidden md:flex space-x-4 ">
          {/* <a href="#" className="text-black hover:text-yellow-50 hover:bg-blue-700 px-3 py-2 rounded transition-all">Home</a> */}
          {/* <a href="#" className="text-black hover:text-yellow-50 hover:bg-blue-700 px-3 py-2 rounded">About</a> */}
          {/* <a href="#" className="text-black hover:text-yellow-50 hover:bg-blue-700 px-3 py-2 rounded">Services</a> */}
          {/* <a href="#" className="text-black hover:text-yellow-50 hover:bg-blue-700 px-3 py-2 rounded">Contact</a> */}
          <button className='w-28 bg-[#e7eaf1] text-[#1b1dc7] p-2 rounded-md hover:bg-blue-900 hover:text-white hover:ease-in duration-300'>Sign In</button>
        </div>
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className= { `md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block text-black hover:text-yellow-50 hover:bg-gray-700 px-3 py-2 rounded">Home</a>
        <a href="#" className="block text-black hover:text-yellow-50 hover:bg-gray-700 px-3 py-2 rounded">About</a>
        <a href="#" className="block text-black hover:text-yellow-50 hover:bg-gray-700 px-3 py-2 rounded">Services</a>
        <a href="#" className="block text-black hover:text-yellow-50 hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
