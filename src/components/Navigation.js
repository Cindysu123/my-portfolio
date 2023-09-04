import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../assets/css/Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
  
    const handleHover = () => {
      cursor.classList.remove('cursor-default');
      cursor.classList.add('cursor-hover');
    };
  
    const handleUnhover = () => {
      cursor.classList.remove('cursor-hover');
      cursor.classList.add('cursor-default');
    };
  
    const links = document.querySelectorAll('.navigation__link');
  
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleHover);
      link.addEventListener('mouseleave', handleUnhover);
    });
  
    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleHover);
        link.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleMenu}>
        {menuOpen ? 'X' : '☰'}
      </button>
      <ul className={`navigation__list ${menuOpen ? 'open' : ''}`}>
        <li className="navigation__item">
          <NavLink to="/" className="navigation__link" exact="true" activeclassname="active" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/ui-design" className="navigation__link" activeclassname="active" onClick={closeMenu}>
            UI Design Project
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/product-design" className="navigation__link" activeclassname="active" onClick={closeMenu}>
            Other Project
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/drawings" className="navigation__link" activeclassname="active" onClick={closeMenu}>
            Gallery
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/contact" className="navigation__link" activeclassname="active" onClick={closeMenu}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
