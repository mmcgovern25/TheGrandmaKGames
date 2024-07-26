import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
}

const Hero = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center px-4'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='bruno-ace-sc-regular text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4'
      >
        Welcome to
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className='bruno-ace-sc-regular text-center text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4'
      >
        The Grandma K Games - testing
      </motion.h1>

      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        className='px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded'
      >
        Play
      </motion.button>
    </div>
  );
};

export default Hero;
