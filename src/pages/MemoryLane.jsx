import React, { useState } from 'react'
import Cardflip from '../memcomponents/Cardflip'

const MemoryLane = () => {

  const [inputValue, setInputValue] = useState('')


  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <>
    <div className="flex flex-col justify-center px-4">
      <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl bruno-ace-sc-regular">Memory Lane</div>


    <Cardflip />
    <label className='text-center'>what is it</label>
    <input
      type="text"
      placeholder='Can you recall the event taking place?'
      value={inputValue}
      onChange={handleInputValue}
      className="justify-center w-64 text-center px-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    </div>
    </>
  )
}

export default MemoryLane
