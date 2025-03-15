import { FaEnvelope, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

function ContactInformation() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="info-card text-center">
              <div className="mb-4">
                <FaEnvelope className="fa-2x mb-3 text-primary" />
                <p><a href="mailto:markcalvin2003@gmail.com" className="custom-link">markcalvin2003@gmail.com</a></p>
              </div>
              <div className="social-links">
                <a href="https://github.com/KingHash23" target="_blank" className="social-link" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/obba-mark-calvin-m-b299002a7/" target="_blank" className="social-link" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.youtube.com/" target="_blank" className="social-link" rel="noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInformation; 