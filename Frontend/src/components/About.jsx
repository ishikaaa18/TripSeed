import React from 'react';
import '../styles/About.css';
import aboutIllustration from '../assets/about-illustration.svg';
import CountUp from 'react-countup';
import TrueFocus from "../components/TrueFocus";
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const About = () => {
  return (
    <section className="about-section">
      <div className="about-heading">
        <TrueFocus words={["Who We Are", "What Drives Us", "WanderWorld Promise"]} />
        <p>WanderWorld Tours — Crafting your travel dreams since 2010</p>
      </div>

      <div className="about-stats">
        <div className="stat-box" data-aos="fade-up" data-aos-delay="100">
          <h3><CountUp end={25} duration={2} suffix="+" /></h3>
          <p>Countries Covered</p>
        </div>
        <div className="stat-box" data-aos="fade-up" data-aos-delay="200">
          <h3><CountUp end={10000} duration={2} separator="," suffix="+" /></h3>
          <p>Happy Travellers</p>
        </div>
        <div className="stat-box" data-aos="fade-up" data-aos-delay="300">
          <h3><CountUp end={500} duration={2} suffix="+" /></h3>
          <p>Custom Tours</p>
        </div>
        <div className="stat-box" data-aos="fade-up" data-aos-delay="400">
          <h3><CountUp end={15} duration={2} suffix="+" /></h3>
          <p>Years of Experience</p>
        </div>
      </div>

      <div className="about-glass" data-aos="zoom-in-up" data-aos-delay="300">
        <div className="about-text">
          <p>
            Since 2010, WanderWorld Tours has been crafting unforgettable journeys for explorers across the globe. Our mission is to deliver personalized travel experiences that blend comfort, culture, and adventure — whether it's lounging by tropical beaches or hiking in snow-capped mountains.
          </p>
          <p>
            With a passion for service and attention to detail, we help you travel smart, travel safe, and travel inspired.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutIllustration} alt="Travel Illustration" className="float" />
        </div>
      </div>
    </section>
  );
};

export default About;
