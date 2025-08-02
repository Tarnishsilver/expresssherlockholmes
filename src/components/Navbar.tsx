import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '../images/hero-without-bg.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Leaderboard', path: '/leaderboard' },
    { title: 'Sponsors', path: '/sponsors' },
    { title: 'Contact Us', path: '/contact' }
  ];

  const handleRegister = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSex0PAOw7S13GpJX4onbBJz2lT0jnJsjDR6jP2_NsFTj9ST8g/viewform",
      "_blank"
    );
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`hidden md:flex fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? 'py-3 bg-[#1a1a1a]/90 backdrop-blur' : 'py-6 bg-transparent'}`}
      >
        <div className="flex items-center justify-between w-full px-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logoImage} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Nav Links */}
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base transition-colors duration-200 hover:text-white ${isActive ? 'text-yellow-400' : 'text-neutral-300'
                  }`
                }
                onClick={closeMenu}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="text-black font-semibold px-4 py-2 w-28 bg-[#facc15] rounded-3xl hover:bg-[#fde047] transition" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        {/* Hamburger */}
        <button
          className="fixed top-4 right-4 bg-[#1a1a1a]/90 backdrop-blur rounded-full p-2 z-50 text-white"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Slide-in Menu */}
        <div
          className={`fixed inset-0 bg-[#1a1a1a]/95 flex flex-col items-center justify-center space-y-8 z-40 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <img src={logoImage} alt="Logo" className="h-14 w-auto" />
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? 'text-yellow-400' : 'text-neutral-200'
                } hover:text-white`
              }
              onClick={closeMenu}
            >
              {link.title}
            </NavLink>
          ))}
          <div className="flex space-x-4 pt-6">
            <button className="text-black font-semibold px-4 py-2 w-28 bg-[#facc15] rounded-3xl hover:bg-[#fde047] transition" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
