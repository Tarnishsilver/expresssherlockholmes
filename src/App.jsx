import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import "./images/flipped-hero-image.png"
import './style.css'


function App() {

  return (
    <>
      <div className='bg-[url(./images/flipped-hero-image)]'> 
        {/*THIS DOESNT WORK YAAARRRRR 😭💔 */}
        <Navbar />
        <HeroSection />
      </div>
    </>
  )
}

export default App
