import React from 'react';

interface NavbarProps {
  toggleMode: () => void;
  darkMode: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMode, darkMode, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a style={{ color: 'white' }} className="navbar-brand" href="#">
          Calvin's Portfolio🌍
        </a>
        <button
          id="toggleMode"
          onClick={toggleMode}
          className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} mr-2`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a style={{ color: 'white' }} className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color: 'white' }} className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button
                onClick={onLogout}
                className="btn btn-outline-light ml-2"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;