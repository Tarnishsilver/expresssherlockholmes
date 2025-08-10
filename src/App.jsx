import { useState} from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Contact from './components/Contact'
import Sponsors from './components/Sponsors'
import Leaderboard from './components/Leaderboard'
import LeaderWaiting from './components/LeaderWaiting'
import "./images/flipped-hero-image.png"
import './style.css'
import { BrowserRouter as Router, Routes, Route , useLocation } from 'react-router-dom';


function AppWrapper() {

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={isHome ? 'h-screen w-screen overflow-x-hidden ': 'overflow-x-hidden '}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsors" element={<Sponsors />} />
          {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
          <Route path="/leaderboard" element={<LeaderWaiting />} />
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
