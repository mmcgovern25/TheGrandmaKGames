import React from 'react';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <>
      <motion.div className='flex justify-center items-center'>
        <motion.div
          initial={{ }}
          animate={{ }}
          transition={{ }}
          className='bruno-ace-sc-regular text-black'
        >
          Welcome to
        </motion.div>
      </motion.div>
      <div className='flex justify-center items-center'>
      <motion.h1
        initial={{}}
        animate={{}}
        transition={{  }}
        className='bruno-ace-sc-regular text-black'
      >
        The Grandma K Games
      </motion.h1>

      <motion.button
        animate={{}}

      >
        Play
      </motion.button>
    </div>

  </>
  );
};

export default Hero;
