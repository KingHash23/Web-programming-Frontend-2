import React from 'react';

const MediaGallery: React.FC = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Media Gallery</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="info-card text-center">
              <h4 className="mb-3">Profile Picture</h4>
              <img
                src="/Assets/WhatsApp Image 2025-02-05 at 19.28.07_13ac4287.jpg"
                alt="Profile Picture"
                className="img-fluid rounded profile-img mb-3"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <p className="text-muted">My Professional Shot</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card text-center">
              <h4 className="mb-3">Travelling</h4>
              <div className="embed-responsive embed-responsive-16by9 mb-3">
                <video className="embed-responsive-item" controls>
                  <source
                    src="/Assets/WhatsApp Video 2025-02-07 at 23.38.41_b84e761b.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-muted">Travelling</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card text-center">
              <h4 className="mb-3">Car spotting</h4>
              <div className="embed-responsive embed-responsive-16by9 mb-3">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/R9IZKxEWHBE?si=vciNpE-3Y2YM8kSF"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
};

export default MediaGallery;