import React, { useState } from 'react';
import Cardflip from '../memcomponents/Cardflip';

const MemoryLane = () => {
  const [inputValue, setInputValue] = useState('');
  const [flipCard, setFlipCard] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true); // Track whether the buttons are disabled

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setFlipCard(true); // Trigger the card flip
    setIsDisabled(false); // Enable the buttons after submitting
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl bruno-ace-sc-regular mb-4">
        Memory Lane
      </div>

      <div className="w-full max-w-lg relative mb-4">
        <Cardflip onFlip={flipCard} />
      </div>

      <div className="flex flex-col items-center w-full mb-4">
        <input
          type="text"
          placeholder="What happened here?"
          value={inputValue}
          onChange={handleInputValue}
          className="h-[50px] text-center px-4 w-full max-w-xs border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button
        onClick={handleSubmit}
        className='mb-4 flex items-center p-[10px] rounded-md bg-gradient-to-b from-green-500 to-green-700 text-white transition-transform duration-300 transform active:scale-95 active:shadow-inner'
      >
        Submit Answer
      </button>

      <div className="flex space-x-4">
        <button
          className={`flex items-center p-[10px] rounded-md ${isDisabled ? 'bg-green-500 bg-opacity-50 text-gray-600 cursor-not-allowed' : 'bg-gradient-to-b from-green-500 to-green-700 text-white'} transition-transform duration-300 transform active:scale-95 active:shadow-inner`}
          disabled={isDisabled}
        >
          Correct?
        </button>
        <button
          className={`flex items-center p-[10px] rounded-md ${isDisabled ? 'bg-red-500 bg-opacity-50 text-gray-600 cursor-not-allowed' : 'bg-gradient-to-b from-red-500 to-red-700 text-white'} transition-transform duration-300 transform active:scale-95 active:shadow-inner`}
          disabled={isDisabled}
        >
          Incorrect?
        </button>
      </div>
    </div>
  );
};

export default MemoryLane;
