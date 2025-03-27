import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Make sure your CSS is properly linked.

const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0); // Keeps track of last scroll position
  const [isVisible, setIsVisible] = useState(true); // Determines if the navbar is visible

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scroll Down - Hide navbar
        setIsVisible(false);
      } else {
        // Scroll Up - Show navbar
        setIsVisible(true);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Prevent negative scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div id="navbar-wrapper" className={isVisible ? 'navbar-show' : 'hidden'}>
      <div className="navbar-content">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="92" height="44" viewBox="0 0 92 44" fill="none">
            {/* Add your logo SVG or other content */}
            <circle cx="22" cy="22" r="20" fill="white" />
          </svg>
        </div>
        <div className="menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="white" />
          </svg>
        </div>
      </div>
      <div id="toggle-container-mob" className="nav-toggle-container">
        <a className="nav-toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
