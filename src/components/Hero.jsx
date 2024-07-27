import React from 'react';
import { motion } from 'framer-motion';
import ShamrockSVG from './ShamrockSVG';

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
    <div className='mt-20 flex flex-col justify-center items-center px-4'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='bruno-ace-sc-regular text-black text-1xl sm:text-2xl md:text-3xl lg:text-4xl sm:mb-2 md:mb-4'
      >
        Welcome to
      </motion.div>

      <div className="flex items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className='bruno-ace-sc-regular text-center text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mr-2'
        >
          The Grandma K Games
        </motion.h1>

        <ShamrockSVG color={'green'} className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-1 lg:mb-3 lg:ml-2" />
      </div>


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
