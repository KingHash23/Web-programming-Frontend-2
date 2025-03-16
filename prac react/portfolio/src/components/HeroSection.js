// components/HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <div className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 hero-text">
            <h1 className="mb-4"><b><i>I'm</i></b></h1>
            <p className="lead">
              Obba Mark Calvin a Year 2 Computer Science student with a passion for web development, data analysis, and technology-driven solutions. <br />
              I am particularly interested in leveraging technology for global impact, aspiring to work with international organizations like the United Nations to drive innovation and sustainable development. Welcome to my portfolio!
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src="/WhatsApp Image 2025-02-05 at 19.28.07_13ac4287.jpg" alt="Profile" className="img-fluid rounded-circle profile-img" style={{ width: '300px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
