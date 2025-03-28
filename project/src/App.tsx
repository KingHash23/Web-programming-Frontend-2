import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MediaGallery from './components/MediaGallery';
import AcademicResults from './components/AcademicResults';
import Contact from './components/Contact';
import CareerGoals from './components/CareerGoals';
import Login from './components/Login';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
    
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    
    if (newMode) {
      document.body.style.backgroundColor = '#1E1E1E';
      document.querySelector('.navbar')!.style.backgroundColor = '#121212'; 
      
    } else {
      document.body.style.backgroundColor = '#f8f9fa';
      document.querySelector('.navbar')!.style.backgroundColor = '#ffffff';
    }
  };

  const handleLogin = (email: string, password: string) => {
    if (email === 'obba@gmail.com' && password === 'Markcalvin27#') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div style={{ backgroundColor: darkMode ? '#1E1E1E' : '#f8f9fa' }}>
      <Navbar toggleMode={toggleMode} darkMode={darkMode} onLogout={handleLogout} />
      <Hero />
      <About />
      <MediaGallery />
      <AcademicResults />
      <Contact />
      <CareerGoals />
    </div>
  );
}

export default App;