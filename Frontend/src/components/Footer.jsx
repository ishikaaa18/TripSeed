import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Column */}
        <div className="footer-brand">
          <h2>WanderWorld</h2>
          <p>Explore beyond boundaries. We turn your travel dreams into reality.</p>
          <div className="footer-contact">
            <p><FaMapMarkerAlt className="footer-icon" /> 123 Beachside Lane, Mumbai</p>
            <p><FaEnvelope className="footer-icon" /> info@wanderworldtours.com</p>
            <p><FaPhoneAlt className="footer-icon" /> +91 9876543210</p>
          </div>
        </div>

        {/* Middle Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Destinations</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Right - Social + Newsletter */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#"><FaInstagram className="icon" /></a>
            <a href="#"><FaFacebook className="icon" /></a>
            <a href="#"><FaTwitter className="icon" /></a>
            <a href="#"><FaLinkedin className="icon" /></a>
          </div>
          <h4>Subscribe</h4>
          <form className="newsletter">
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      <hr />
      <p className="footer-copy">© 2025 WanderWorld Tours. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
