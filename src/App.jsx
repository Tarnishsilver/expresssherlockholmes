import { useState} from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Scoreboard from './components/Scoreboard'
import Sponsors from './components/Sponsors'
import Support from './components/Support'
import "./images/flipped-hero-image.png"
import './style.css'
import { BrowserRouter as Router, Routes, Route , useLocation } from 'react-router-dom';


function AppWrapper() {

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={isHome ? 'h-screen w-screen overflow-hidden ': 'overflow-x-hidden '}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/support" element={<Support />} />
        </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App
