import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate('/contact'); // Navigate to the Contact page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
      <button className="navbar-hire-me" onClick={handleHireMeClick}>
        Hire me
      </button>
    </nav>
  );
}

export default Navbar;
