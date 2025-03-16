// components/Navbar.js
import React from 'react';

function Navbar({ darkMode, switchMode }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">Calvin's Portfolio🌍</a>
        <button 
          id="toggleMode" 
          onClick={switchMode} 
          className={darkMode ? "btn btn-light" : "btn btn-dark"} 
          style={{ marginRight: 'auto' }}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;