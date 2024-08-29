import React, { useState } from 'react';
import { mil } from '../assets';

const Trivia = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Change the index to match the active `li`

  const items = [
    { id: 1, text: '$ 100' },
    { id: 2, text: '$ 200' },
    { id: 3, text: '$ 300' },
    { id: 4, text: '$ 400' }
  ];

  return (
    <div className="h-screen flex">
      <div className="w-[75%]" style={{ backgroundImage: `url(${mil})`, backgroundSize: 'cover' }}>
        main
      </div>
      <div className="w-[25%] flex items-center text-center justify-center">
        <ul className='w-[100%] p-[20px]'>
          {items.map((item, index) => (
            <li
              key={item.id}
              className={`flex items-center p-2 rounded-md ${activeIndex === index ? 'bg-gradient-to-b from-green-500 to-green-700 text-white' : ''}`}
            >
              <span className='text-[18px] font-thin'>{item.id}</span>
              <span className='ml-2 text-[20px] font-light'>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Trivia;
