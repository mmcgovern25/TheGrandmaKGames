import React, { useState } from 'react';
import logo from '../assets/slicedUp.gif';
import { motion } from 'framer-motion'
//import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className='relative z-50 transition duration-700 bg-white'>
      <div className='flex justify-between items-center p-4'>
        <img src={logo} alt="The Grandma Games" className="mr-4 w-[50px] sm:w-[50px] md:w-[50px]" />

        <motion.ul className="hidden md:flex flex-row p-4 space-x-14 mr-16"
          initial={{ y: '-250px'}}
          animate={{ y: '0px'}}
        >
          <li>About</li>
          <li>Trivia</li>
          <li>Connect 4</li>
          <li>Memory Lane</li>
          <li>Tik Tak Toe</li>
        </motion.ul>

        <div className="relative md:hidden">
          <div
            className="rounded-full hover:bg-gray-200 p-2 cursor-pointer"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {!isMenuToggled ? (
              // Display is Menu Open Icon - Menu is Closed
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            ) : (
              // Display a Menu Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          {isMenuToggled && (
            <div className="flex flex-col md:hidden bg-white shadow-md absolute top-full right-0 animate-slide-in rounded">
              <p className="flex font-medium justify-center items-center cursor-pointer w-[200px] px-4 py-5 hover:bg-gray-200">About</p>
              <p className="flex font-medium justify-center items-center cursor-pointer w-[200px] px-4 py-5 hover:bg-gray-200">Trivia</p>
              <p className="flex font-medium justify-center items-center cursor-pointer w-[200px] px-4 py-5 hover:bg-gray-200">Connect 4</p>
              <p className="flex font-medium justify-center items-center cursor-pointer w-[200px] px-4 py-5 hover:bg-gray-200">Memory Lane</p>
              <p className="flex font-medium justify-center items-center cursor-pointer w-[200px] px-4 py-5 hover:bg-gray-200">Tik-Tak-Toe</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
