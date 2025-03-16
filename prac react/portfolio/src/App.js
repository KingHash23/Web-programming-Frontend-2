// App.js
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MediaGallery from './components/MediaGallery';
import AcademicResults from './components/AcademicResults';
import ContactSection from './components/ContactSection';
import CareerGoals from './components/CareerGoals';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Load saved preference when component mounts
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  const switchMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkMode={darkMode} switchMode={switchMode} />
      <HeroSection />
      <AboutSection />
      <MediaGallery />
      <AcademicResults />
      <ContactSection />
      <CareerGoals />
      
      {/* Bootstrap and jQuery scripts */}
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default App;