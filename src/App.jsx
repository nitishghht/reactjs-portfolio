import {BrowserRouter} from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Hero from './components/Hero';
import Work from './components/Works';
import Contact from './components/Contact';
import StarsCanvas from './components/canvas/Stars'
const App= () => {
  

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Work />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    
    </BrowserRouter>
  )
}

export default App
