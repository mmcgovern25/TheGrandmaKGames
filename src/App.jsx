import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import './index.css';
import FeaturedGames from './components/FeaturedGames';
import { useState } from 'react';


function App() {

  const [theme, setTheme] = useState('light');



  return (
    <div className={`${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <FeaturedGames/>
      <About/>

    </div>
  )
}

export default App
