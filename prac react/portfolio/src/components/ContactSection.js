// components/ContactSection.js
import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="info-card text-center">
              <div className="mb-4">
                <i className="fas fa-envelope fa-2x mb-3 text-primary"></i>
                <p><a href="mailto:markcalvin2003@gmail.com" className="custom-link">markcalvin2003@gmail.com</a></p>
              </div>
              <div className="social-links">
                <a href="https://github.com/KingHash23" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;