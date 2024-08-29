import React from 'react'

const Quiz = () => {
  return (
    <div className='h-[100%] flex flex-col items-center justify-around'>
      <div className='w-[80%] bg-gradient-to-b from-green-500 to-green-700 border-white text-[20px] border-2 text-center p-[20px] rounded-[10px]'>what color is my hair?</div>
      <div className='w-[100%] flex justify-center'>
        <div className='w-[40%] p-[10px] content-center bg-gradient-to-b from-green-500 to-green-700'>orange</div>
        <div className=''>red</div>
        <div className=''>green</div>
        <div className=''>blue</div>
      </div>
    </div>
  )
}

export default Quiz
