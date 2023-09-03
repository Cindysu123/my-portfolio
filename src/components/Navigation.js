import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../assets/css/Navigation.css';

const Navigation = () => {

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
  
    links.forEach((links) => {
      links.addEventListener('mouseenter', handleHover);
      links.addEventListener('mouseleave', handleUnhover);
    });
  
    return () => {
      links.forEach((links) => {
        links.removeEventListener('mouseenter', handleHover);
        links.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to="/" className="navigation__link" exact="true" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/ui-design" className="navigation__link" activeclassname="active">
            Design Project
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/drawings" className="navigation__link" activeclassname="active">
            Gallery
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/contact" className="navigation__link" activeclassname="active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
