// components/MediaGallery.js
import React from 'react';

function MediaGallery() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Media Gallery</h2>
        <div className="row">
          {/* Profile Picture */}
          <div className="col-md-4">
            <div className="info-card text-center">
              <h4 className="mb-3">Profile Picture</h4>
              <img src="/WhatsApp Image 2025-02-05 at 19.28.07_13ac4287.jpg" alt="Profile" className="img-fluid rounded profile-img mb-3" style={{ maxWidth: '100%', height: 'auto' }} />
              <p className="text-muted">My Professional Shot</p>
            </div>
          </div>
          {/* Video 1 */}
          <div className="col-md-4">
            <div className="info-card text-center">
              <h4 className="mb-3">Travelling</h4>
              <div className="embed-responsive embed-responsive-16by9 mb-3">
                <video className="embed-responsive-item" controls>
                  <source src="/WhatsApp Video 2025-02-07 at 23.38.41_b84e761b.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-muted">Travelling</p>
            </div>
          </div>
          {/* Video 2 */}
          <div className="col-md-4">
            <div className="info-card text-center">
              <h4 className="mb-3">Car spotting</h4>
              <div className="embed-responsive embed-responsive-16by9 mb-3">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/R9IZKxEWHBE?si=vciNpE-3Y2YM8kSF" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-muted">Reviewing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaGallery;