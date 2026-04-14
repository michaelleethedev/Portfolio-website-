import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="navbar-logo" onClick={(e) => {
          e.preventDefault();
          scrollToSection('hero');
        }}>
          Saleem
        </a>

        <button 
          className="navbar-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'navbar-menu-open' : ''}`}>
          <li>
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}>Projects</a>
          </li>
          <li>
            <a href="#services" onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}>Services</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>Contact</a>
          </li>
        </ul>

        <div className="navbar-actions">
          <a 
            href="https://github.com/saleem" 
            target="_blank" 
            rel="noopener noreferrer"
            className="navbar-button navbar-button-secondary"
          >
            GitHub
          </a>
          <a 
            href="/resume.pdf" 
            className="navbar-button navbar-button-primary"
            download
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
