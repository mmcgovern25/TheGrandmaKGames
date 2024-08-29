import React, { useState } from 'react';
import { mil } from '../assets';
import Quiz from '../triviacomponents/Quiz';

const Trivia = () => {
  const [activeIndex, setActiveIndex] = useState(14); // Change the index to match the active `li`

  const items = [
    { id: 1, amount: '$ 100' },
    { id: 2, amount: '$ 200' },
    { id: 3, amount: '$ 300' },
    { id: 4, amount: '$ 500' },
    { id: 5, amount: '$ 1000' },
    { id: 6, amount: '$ 2,000' },
    { id: 7, amount: '$ 4,000' },
    { id: 8, amount: '$ 8,000' },
    { id: 9, amount: '$ 16,000' },
    { id: 10, amount: '$ 32,000' },
    { id: 11, amount: '$ 64,000' },
    { id: 12, amount: '$ 125,000' },
    { id: 13, amount: '$ 250,000' },
    { id: 14, amount: '$ 500,000' },
    { id: 15, amount: '$ 1,000,000' },
  ].reverse();



  return (
    <div className="h-screen flex">
      <div className=" w-[75%] flex flex-col" style={{ backgroundImage: `url(${mil})`, backgroundSize: 'cover' }}>
        <div className='relative h-[50%]'>
        <div className='bottom-[10px] left-[80px] absolute w-[70px] h-[70px] text-[30px] font-bold rounded-full border-2 border-white border-solid flex items-center justify-center text-white'>
          30
        </div>

        </div>
        <div className='h-[50%]'><Quiz /></div>
      </div>
      <div className="w-[25%] flex items-center text-center justify-center">
        <ul className='w-[100%] p-[20px]'>
          {items.map((item, index) => (
            <li
              key={item.id}
              className={`flex items-center p-[5px] rounded-md ${activeIndex === index ? 'bg-gradient-to-b from-green-500 to-green-700 text-white' : ''}`}
            >
              <span className='text-[18px] font-thin w-[30%]'>{item.id}</span>
              <span className='ml-2 text-[20px] font-light'>{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Trivia;
