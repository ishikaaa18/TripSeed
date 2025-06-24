import React from 'react';
import '../styles/Hero.css';
import { FaSearch } from 'react-icons/fa';
import bgVideo from '../assets/bg-video.mp4'; // ✅ import video like image

const Hero = () => {
  return (
    <section className="hero-section">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
