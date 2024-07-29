import React, { useState } from 'react';
import logo from '../assets/slicedUp.gif';
import { motion } from 'framer-motion'
//import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, x: '250px' },
  visible: {
    opacity: 1,
    x: '0px',
    transition: {
      staggerChildren: 0.2, // Adjust delay between animations
      delayChildren: 0.2, // Optional: delay before starting animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 80 }, // Adjust x for the initial position
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 90 },
  },
};


const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className='relative z-50 transition duration-700 bg-white border-b-2'>
      <div className='flex justify-between items-center p-4'>
        <img src={logo} alt="The Grandma Games" className="mr-4 w-[50px] sm:w-[50px] md:w-[50px]" />

        <motion.ul className="hidden md:flex flex-row p-4 space-x-14 mr-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"

        >
          <motion.button
          variants={itemVariants}
            whileHover={{
              scale: 1.1,
              color: '#4A773C',
            }}
            transition={{ type: 'spring', stiffness: 150 }}
          >About</motion.button>
          <motion.button
          variants={itemVariants}
            whileHover={{
              scale: 1.1,
              color: '#4A773C'
            }}
            transition={{ type: 'spring', stiffness: 150 }}
          >Trivia</motion.button>
          <motion.button
          variants={itemVariants}
            whileHover={{
              scale: 1.1,
              color: '#4A773C'
            }}
            transition={{ type: 'spring', stiffness: 150 }}
          >Connect 4</motion.button>
          <motion.button
          variants={itemVariants}
            whileHover={{
              scale: 1.1,
              color: '#4A773C'
            }}
            transition={{ type: 'spring', stiffness: 150 }}
          >Memory Lane</motion.button>
          <motion.button
          variants={itemVariants}
            whileHover={{
              scale: 1.1,
              color: '#4A773C'
            }}
            transition={{ type: 'spring', stiffness: 150 }}
          >Tik Tak Toe</motion.button>
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
