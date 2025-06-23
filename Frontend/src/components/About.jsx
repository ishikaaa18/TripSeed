import React from 'react';
import '../styles/About.css';
import aboutIllustration from '../assets/about-illustration.svg'; // ✅ Imported SVG

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">          <p>
            Since 2010, WanderWorld Tours has been crafting unforgettable journeys for explorers across the globe.
            Our mission is to deliver personalized travel experiences that blend comfort, culture, and adventure —
            whether it's lounging by tropical beaches or hiking in snow-capped mountains.
          </p>
          <p>
            With a passion for service and attention to detail, we help you travel smart, travel safe, and travel inspired.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutIllustration} alt="Travel Illustration" />
        </div>
      </div>
    </section>
  );
};

export default About;
