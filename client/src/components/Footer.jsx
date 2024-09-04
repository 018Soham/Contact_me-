import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Soham. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="https://github.com/018Soham" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/soham-ghosh-79259631a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://wa.me/7602197847" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
