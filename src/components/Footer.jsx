import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Saleem</h3>
            <p className="footer-tagline">
              Building practical software solutions for modern businesses
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-link-group">
              <h4 className="footer-link-title">Navigation</h4>
              <a href="#about" className="footer-link">About</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
            
            <div className="footer-link-group">
              <h4 className="footer-link-title">Connect</h4>
              <a href="https://github.com/saleem" target="_blank" rel="noopener noreferrer" className="footer-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/saleem" target="_blank" rel="noopener noreferrer" className="footer-link">
                LinkedIn
              </a>
              <a href="mailto:saleem.dev@example.com" className="footer-link">
                Email
              </a>
              <a href="https://fiverr.com/saleem" target="_blank" rel="noopener noreferrer" className="footer-link">
                Fiverr
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Saleem. All rights reserved.
          </p>
          <p className="footer-built">
            Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
