// components/AboutSection.js
import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">About Me</h2>
        <div className="info-card">
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="info-card">
                <h3 className="mb-4">Personal Details</h3>
                <ul className="list-unstyled">
                  <li className="mb-3"><strong>Full Name:</strong> Obba Mark Calvin</li>
                  <li className="mb-3"><strong>Student ID:</strong> S23B23\047</li>
                  <li className="mb-3"><strong>Course:</strong> BSc Computer Science</li>
                  <li className="mb-3"><strong>Year:</strong> 2</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-card">
                <h3 className="mb-4">Hobbies & Interests</h3>
                <ul className="list-unstyled">
                  <li className="mb-3"><i className="fas fa-futbol mr-2"></i> Football</li>
                  <li className="mb-3"><i className="fas fa-gamepad mr-2"></i> Video Games</li>
                  <li className="mb-3"><i className="fas fa-code mr-2"></i> Coding</li>
                  <li className="mb-3"><i className="fas fa-car mr-2"></i> Driving & Car Spotting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;