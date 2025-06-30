import React from 'react';
import '../styles/Hero.css';
import { FaSearch } from 'react-icons/fa';
import bgVideo from '../assets/bg-video.webm';
import TrueFocus from '../components/TrueFocus';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* 🎥 Background video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={bgVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-top-shade"></div>

      <div className="hero-content">
        {/* ✨ Animated Heading */}
        <TrueFocus
          sentence="Travel With Us"
          blurAmount={4}
          borderColor="#f59e0b"
          glowColor="rgba(255, 186, 73, 0.5)"
          animationDuration={0.6}
          pauseBetweenAnimations={1.6}
        />

        {/* Subtitle */}
        <p>Where Every Experience Counts!</p>

        {/* 🔍 Search bar (original) */}
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
