import Hero from './components/Hero';
import About from './components/About';
import './index.css';
import FeaturedGames from './components/FeaturedGames';
import { useOutletContext } from 'react-router-dom';

function App() {
  const { theme } = useOutletContext();

  return (
    <div className={`hero ${theme}`}>
      <Hero />
      <FeaturedGames />
      <About />
    </div>
  );
}

export default App;
