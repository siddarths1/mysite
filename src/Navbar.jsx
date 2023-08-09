// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <a href="/" className="navbar-brand">
          My Portfolio
        </a>
        <ul className="navbar-nav">
          <li className="nav-item"> 
            <a href="#Home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#Work" className="nav-link">
              My Journey
            </a>
          </li>
          <li className="nav-item">
            <a href="#Contact" className="nav-link">
              Connect
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
