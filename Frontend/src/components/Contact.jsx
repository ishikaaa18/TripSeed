import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactSVG from '../assets/contact-illustration.svg';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Left: SVG Illustration */}
        <div className="contact-illustration">
          <img src={contactSVG} alt="Contact Illustration" />
        </div>

        {/* Right: Contact Info + Form */}
        <div className="contact-right">
          <div className="contact-info-cards">
            <div className="contact-card">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Call Us</h4>
                <p>+91 9876543210</p>
              </div>
            </div>

            <div className="contact-card">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>info@wanderworldtours.com</p>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Visit Us</h4>
                <p>123 Beachside Lane, Mumbai</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="4" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
