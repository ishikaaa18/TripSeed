import React from 'react';
import '../styles/Hero.css';
import { FaSearch } from 'react-icons/fa';
import bgVideo from '../assets/bg-video.mp4';
import RotatingText from './RotatingText'; // ✅ import component

const Hero = () => {
  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-top-shade"></div>

      <div className="hero-content">
        <h1>
          <RotatingText
            texts={['Explore the World', 'Find Your Dream Place', 'Travel with Us', 'Create Memories']}
            mainClassName="overflow-hidden text-3xl sm:text-4xl md:text-5xl font-bold"
            splitLevelClassName="block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
        </h1>
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
