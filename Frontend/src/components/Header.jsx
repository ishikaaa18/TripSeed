import React, { useState } from 'react';
import '../styles/Header.css';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header transparent">
      <div className="logo">
        <img src="/logo.svg" alt="Logo" className="logo-image" />
        <div className="logo-text">TripSeed</div>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </header>
  );
};

export default Header;
