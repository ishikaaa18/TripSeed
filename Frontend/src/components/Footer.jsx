import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>WanderWorld</h2>
          <p>Explore beyond boundaries.</p>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Destinations</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-social">
          <p>Follow us</p>
          <div className="social-icons">
            <a href="#"><FaInstagram className="icon" /></a>
            <a href="#"><FaFacebook className="icon" /></a>
            <a href="#"><FaTwitter className="icon" /></a>
            <a href="#"><FaLinkedin className="icon" /></a>
          </div>
        </div>

      </div>

      <hr />
      <p className="copyright">© 2025 WanderWorld Tours. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
