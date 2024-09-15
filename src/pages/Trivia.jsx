import React, { useEffect, useState, useMemo } from 'react';
import { mil } from '../assets';
import Quiz from '../triviacomponents/Quiz';
import Timer from '../triviacomponents/Timer';

// Initial list of questions
const initialQuestions = [
  // Your initial questions here
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
  },
  {
    id: 3,
    question: "Where did grandma´s parents grow up in Ireland?",
    answers: [
      { text: "County Mayo", correct: true },
      { text: "County Cavan", correct: false },
      { text: "County Cork", correct: false },
      { text: "County Donegal", correct: false }
    ]
  },
  {
    id: 4,
    question: "What was grandma´s favorite hobby growing up?",
    answers: [
      { text: "Singing", correct: false },
      { text: "Sports", correct: false },
      { text: "Dancing", correct: true },
      { text: "Cooking", correct: false }
    ]
  },
  {
    id: 5,
    question: "How old was grandma when she had her first child?",
    answers: [
      { text: "21", correct: false },
      { text: "24", correct: false },
      { text: "18", correct: true },
      { text: "20", correct: false }
    ]
  },
  {
    id: 6,
    question: "Which kid was grandma the toughest on?",
    answers: [
      { text: "Laurie", correct: true },
      { text: "Kevin", correct: false },
      { text: "John", correct: false },
      { text: "Ellen", correct: false }
    ]
  }
];

const Trivia = () => {
  const [activeIndex, setActiveIndex] = useState(14); // Start with the last item
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$0");
  const [questions, setQuestions] = useState(initialQuestions);
  const [completedAll, setCompletedAll] = useState(false);

  // List of question values
  const items = useMemo(() => (
    [
      { id: 1, amount: '$100' },
      { id: 2, amount: '$200' },
      { id: 3, amount: '$300' },
      { id: 4, amount: '$500' },
      { id: 5, amount: '$1000' },
      { id: 6, amount: '$2,000' },
      { id: 7, amount: '$4,000' },
      { id: 8, amount: '$8,000' },
      { id: 9, amount: '$16,000' },
      { id: 10, amount: '$32,000' },
      { id: 11, amount: '$64,000' },
      { id: 12, amount: '$125,000' },
      { id: 13, amount: '$250,000' },
      { id: 14, amount: '$500,000' },
      { id: 15, amount: '$1,000,000' },
    ].reverse() // Reverse for display
  ), []);

  useEffect(() => {
    // Update the activeIndex based on questionNumber
    const index = items.findIndex(item => item.id === questionNumber);
    if (index >= 0) {
      setActiveIndex(index);
    }
  }, [questionNumber, items]);

  useEffect(() => {
    if (questionNumber > 1) {
      const currentAmount = items.find((m) => m.id === questionNumber - 1)?.amount;
      if (currentAmount) {
        setEarned(currentAmount);
      }
    }
  }, [questionNumber, items]);

  // Shuffle function to randomize questions
  const shuffleQuestions = (questions) => {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Callback for handling the end of a quiz
  const handleEnd = (isCorrect, amount) => {
    if (isCorrect) {
      if (amount === '$1,000,000') {
        setCompletedAll(true); // Set the completion state
        setStop(true); // Stop the game
      } else {
        setEarned(amount);
        setQuestionNumber(prev => prev + 1); // Move to the next question
      }
    } else {
      setEarned("$0");
      setStop(true);
    }
  };

  // Handle restart with shuffled questions
  const handleShuffleRestart = () => {
    const shuffledQuestions = shuffleQuestions(initialQuestions);
    setQuestions(shuffledQuestions);
    setQuestionNumber(1);
    setStop(false);
    setEarned("$0");
    setCompletedAll(false); // Reset completion state
    setActiveIndex(items.length - 1); // Reset to the last item in the reversed list
  };

  // Handle restart with the current order
  const handleOrderRestart = () => {
    setQuestionNumber(1);
    setStop(false);
    setEarned("$0");
    setCompletedAll(false); // Reset completion state
    setActiveIndex(items.length - 1); // Reset to the last item in the reversed list
  };

  return (
    <div className="h-screen flex">
      <div className="w-[75%] flex flex-col" style={{ backgroundImage: `url(${mil})`, backgroundSize: 'cover' }}>
        {stop ? (
          <div className="relative flex flex-col items-center justify-center h-full">
            <h1 className="text-center text-3xl font-bold text-white bg-black bg-opacity-70 p-4 rounded-lg">
              {earned === "$200" ? (
                "We have a new CHAMPEEN! You won $1,000,000. Now go take your grandmother out for lunch!!"
              ) : (
                `Still not a Champeen. You earned: ${earned}`
              )}
            </h1>
            <button
              onClick={handleShuffleRestart}
              className='mt-4 mb-4 flex items-center p-[10px] rounded-md bg-gradient-to-b from-green-500 to-green-700 text-white transition-transform duration-300 transform active:scale-95 active:shadow-inner'
            >
              Shuffle questions and play again?
            </button>
            <button
              onClick={handleOrderRestart}
              className='mb-4 flex items-center p-[10px] rounded-md bg-gradient-to-b from-green-500 to-green-700 text-white transition-transform duration-300 transform active:scale-95 active:shadow-inner'
            >
              Same questions and play again?
            </button>
          </div>
        ) : (
          <>
            <div className='relative h-[35%]'>
              <div className='bottom-[10px] left-[80px] absolute w-[70px] h-[70px] text-[30px] font-bold rounded-full border-2 border-white border-solid flex items-center justify-center text-white'>
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className='h-[50%]'>
              <Quiz
                data={questions}
                questionNumber={questionNumber}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
                onEnd={handleEnd}
              />
            </div>
          </>
        )}
      </div>
      <div className="sm:w-[27%] md:w-[25%] lg:w-[20%] flex text-center justify-center">
        <ul className='w-[100%] p-[20px]'>
          {items.map((item, index) => (
            <li
              key={item.id}
              className={`flex items-center border p-[5px] rounded-md ${activeIndex === index ? 'bg-gradient-to-b from-green-500 to-green-700 text-white' : ''}`}
            >
              <span className='text-[18px] font-thin w-[30%]'>{item.id}</span>
              <span className='ml-2 text-[18px] font-light'>{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trivia;
