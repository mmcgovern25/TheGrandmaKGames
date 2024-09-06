import { useEffect, useState } from 'react'
import '../extraCSS/quiz.css'; // Import the custom CSS

const Quiz = ({ data, setTimeOut, questionNumber, setQuestionNumber }) => {
  const [question, setquestion] = useState(null);

  useEffect(()=> {
    setquestion(data[questionNumber - 1])
  }, [data, questionNumber]);

  return (
    <div className='h-[100%] flex flex-col items-center justify-around'>
      <div className='w-[80%] bg-gradient-to-b from-green-500 to-green-700 border-white text-[20px] border-2 text-center p-[20px] rounded-[10px]'>
        {question?.question}
      </div>
      <div className='w-[100%] flex justify-center flex-wrap'>
        {question?.answers.map((answer, index) => (
          <div
            key={index}
            className='wrong w-[40%] p-[10px] content-center border border-solid rounded-xl text-[20px] cursor-pointer font-light text-center mt-0 mr-2.5 mb-5 ml-2.5 gradient-bg'
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
