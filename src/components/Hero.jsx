import React from 'react';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className='bruno-ace-sc-regular text-[25px] md:text-[25px] lg:text-[25px] text-yellow-300'
        >
          Welcome to
        </motion.div>
      </div>
      <div className='flex justify-center items-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className='bruno-ace-sc-regular text-[50px] md:text-[50px] lg:text-[50px] text-green-500'
      >
        The Grandma K Games
      </motion.div>
    </div>

  </>
  );
};

export default Hero;
