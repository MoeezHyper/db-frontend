import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <header className="header">
          <h1 className="header-title">The Book Haven</h1>
        </header>
        <div className="nav-buttons">
          <button className="nav-button"><Link to="/" className="link">Home</Link></button>
          <button className="nav-button"><Link to="/AllCollection" className="link">Collection</Link></button>
          <button className="nav-button"><Link to="/Add" className="link">Add</Link></button>
          <button className="nav-button"><Link to="/About" className="link">About</Link></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
