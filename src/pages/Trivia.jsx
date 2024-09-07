import React, { useState } from 'react';
import { mil } from '../assets';
import Quiz from '../triviacomponents/Quiz';

const Trivia = () => {
  const [activeIndex, setActiveIndex] = useState(14);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$0");

  // List of question values
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

  // List of questions
  const data = [
    {
      id: 1,
      question: "What year did grandma graduate high school?",
      answers: [
        { text: "1940", correct: false },
        { text: "1930", correct: false },
        { text: "1955", correct: false },
        { text: "1958", correct: true }
      ]
    },
    {
      id: 2,
      question: "Where did grandpa and grandma first meet?",
      answers: [
        { text: "The Park", correct: false },
        { text: "School", correct: false },
        { text: "The Bar", correct: true },
        { text: "Baseball Game", correct: false }
      ]
    }
  ];

  // Callback for handling the end of a quiz
  const handleEnd = (isCorrect, amount) => {
    if (isCorrect) {
      setEarned(amount);
    } else {
      setEarned("$0");
    }
    setStop(true);
  };

  return (
    <div className="h-screen flex">
    <div className="w-[75%] flex flex-col" style={{ backgroundImage: `url(${mil})`, backgroundSize: 'cover' }}>
      {stop ? (
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-center text-3xl font-bold text-white bg-black bg-opacity-70 p-4 rounded-lg">
            Still not a Champeen. You earned: {earned}
          </h1>
        </div>
      ) : (
        <>
          <div className='relative h-[50%]'>
            <div className='bottom-[10px] left-[80px] absolute w-[70px] h-[70px] text-[30px] font-bold rounded-full border-2 border-white border-solid flex items-center justify-center text-white'>
              30
            </div>
          </div>
          <div className='h-[50%]'>
            <Quiz
              data={data}
              questionNumber={questionNumber}
              setStop={setStop}
              setQuestionNumber={setQuestionNumber}
              onEnd={handleEnd}
            />
          </div>
        </>
      )}
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
};

export default Trivia;
