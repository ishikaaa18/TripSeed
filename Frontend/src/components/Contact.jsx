import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactSVG from '../assets/contact-illustration.svg'; // Update the path if needed
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* SVG Illustration (Left) */}
        <div className="contact-illustration">
          <img src={contactSVG} alt="Contact Illustration" />
        </div>

        {/* Contact Details (Right) */}
        <div className="contact-box">
          <div className="contact-row">
            <div className="contact-icon"><FaPhoneAlt /></div>
            <div className="contact-text">
              <h4>Call Us</h4>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="contact-row">
            <div className="contact-icon"><FaEnvelope /></div>
            <div className="contact-text">
              <h4>Email</h4>
              <p>info@wanderworldtours.com</p>
            </div>
          </div>

          <div className="contact-row">
            <div className="contact-icon"><FaMapMarkerAlt /></div>
            <div className="contact-text">
              <h4>Visit Us</h4>
              <p>123 Beachside Lane, Mumbai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
