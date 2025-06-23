import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import { FaSearch } from 'react-icons/fa';

import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="hero-top-shade"></div>
      <div className="hero-content">
        <h1>Explore the World with Us</h1>
        <p>Where Every Experience Counts!</p>
        <div className="hero-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Enter Your Dream Destination!" />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
