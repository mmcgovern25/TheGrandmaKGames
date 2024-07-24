import { useState } from 'react'
import logo from '../assets/grandmagames.png'
//import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="The Grandma Games" className="w-[125px] sm:w-[125px] md:w-[125px]"/>
      <ul>
      </ul>
    </nav>
  )
}

export default Navbar
