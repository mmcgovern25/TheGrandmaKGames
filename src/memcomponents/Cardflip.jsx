import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../extraCSS/memory.css';
import { exampleImg, exampleImg2 } from '../assets';

const Cardflip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className='flex items-center justify-center bg-black h-[800px] cursor-pointer'>
      <div className='flip-card w-[600px] h-[360px]' onClick={handleFlip}>
        <motion.div
          className='flip-card-inner w-[100%] h-[100%]'
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className='flip-card-front w-[100%] h-[100%] bg-cover text-white rounded-lg p-4'
            style={{ backgroundImage: `url(${exampleImg})` }}
          >
            <h1 className='text-2xl font-bold'>Sky</h1>
            <p>This is the paragraph.</p>
          </div>

          <div className='flip-card-back w-[100%] h-[100%] bg-cover text-white rounded-lg p-4'
            style={{ backgroundImage: `url(${exampleImg2})` }}
          >
            <h1 className='text-2xl font-bold'>Earth</h1>
            <p>This is another paragraph.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Cardflip;
