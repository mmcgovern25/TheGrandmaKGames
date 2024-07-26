import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
    </>
  )
}

export default App
