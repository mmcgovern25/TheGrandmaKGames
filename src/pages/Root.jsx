import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';

function Root() {

  const [theme, setTheme] = useState('light')

  return (
  <>
    <Navbar theme={theme} setTheme={setTheme}/>
    <Outlet />
  </>
  )
}

export default Root;
