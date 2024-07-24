import { useState } from 'react'
import logo from '../assets/grandmagames.png'
//import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='relative z-50 transition duration-700 bg-white'>

      <div className='flex justify-between p-4'>
          <img src={logo} alt="The Grandma Games" className="-ml-4 w-[125px] sm:w-[125px] md:w-[125px]"/>
        <ul className="flex flex-row p-4 md:flex space-y-5 ml-8">
          <li>About</li>
          <li>Trivia</li>
          <li>Connect 4</li>
          <li>Memory Lane</li>
          <li>Tik Tak Toe</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
