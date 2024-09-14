import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../extraCSS/memory.css';

const Cardflip = ({ onFlip, frontImage, backText, frontText, onCorrect, onIncorrect }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  useEffect(() => {
    if (onFlip) {
      handleFlip();
    }
  }, [onFlip]);

  return (
    <div className='flex justify-center h-90vh p-4'>
      <div className='flip-card w-full max-w-[600px] h-[360px] max-h-[360px]'>
        <motion.div
          className='flip-card-inner w-full h-full'
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className='flip-card-front w-full h-full bg-cover text-white rounded-lg p-4'
            style={{ backgroundImage: `url(${frontImage})` }}
          >
            <h1 className='text-2xl font-bold'>{frontText}</h1>
          </div>

          <div className='flip-card-back w-full h-full bg-white text-black rounded-lg p-4 flex flex-col items-center justify-center'>
            <p className='text-xl mb-4'>{backText}</p>
            <div className='flex space-x-4'>
              <button
                onClick={onCorrect}
                className='p-[10px] rounded-md bg-gradient-to-b from-green-500 to-green-700 text-white transition-transform duration-300 transform active:scale-95 active:shadow-inner'
              >
                Correct
              </button>
              <button
                onClick={onIncorrect}
                className='p-[10px] rounded-md bg-gradient-to-b from-red-500 to-red-700 text-white transition-transform duration-300 transform active:scale-95 active:shadow-inner'
              >
                Incorrect
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cardflip;
