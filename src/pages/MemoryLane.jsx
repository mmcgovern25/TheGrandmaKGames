import React, { useState } from 'react';
import Cardflip from '../memcomponents/Cardflip';
import { exampleImg, exampleImg2, memory, blueo, tiktaktoe } from '../assets';

// Sample list of images and descriptions
const images = [
  { front: exampleImg, backText: 'This is the description for Sky.' },
  { front: exampleImg2, backText: 'This is the description for Mountain.' },
  { front: memory, backText: 'This is the description for memory.' },
  { front: blueo, backText: 'This is the description for blueo.' },
  { front: tiktaktoe, backText: 'This is the description for ttt.' },
  // Add more images as needed
];

const MemoryLane = () => {
  const [inputValue, setInputValue] = useState('');
  const [flipCard, setFlipCard] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image index

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setFlipCard(!flipCard);
  };

  const handleCorrect = () => {
    setFlipCard(false); // Hide the card before showing the next one
    setInputValue(''); // Clear the input field

    // Show next image after flip animation completes
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFlipCard(true); // Show the new card
    }, 600); // Delay to match flip animation duration
  };

  const handleIncorrect = () => {
    setFlipCard(false); // Hide the card before showing the next one
    setInputValue(''); // Clear the input field

    // Show next image after flip animation completes
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFlipCard(true); // Show the new card
    }, 600); // Delay to match flip animation duration
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl bruno-ace-sc-regular mb-4">
        Memory Lane
      </div>

      <div className="w-full max-w-lg relative mb-4">
        <Cardflip
          onFlip={flipCard}
          frontImage={images[currentImageIndex].front}
          backText={images[currentImageIndex].backText}
          frontText={images[currentImageIndex].frontText}
          onCorrect={handleCorrect}
          onIncorrect={handleIncorrect}
        />
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
        Show Answer
      </button>
    </div>
  );
};

export default MemoryLane;
