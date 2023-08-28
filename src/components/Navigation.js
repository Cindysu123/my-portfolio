import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../assets/css/Navigation.css';

const Navigation = () => {
  const [activeLinkPosition, setActiveLinkPosition] = useState({ left: 0, width: 0 });
  const location = useLocation();

  useEffect(() => {
    const activeLink = document.querySelector('.navigation__link.active');
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setActiveLinkPosition({ left: offsetLeft, width: offsetWidth+40 });
    }
  }, [location]);

  const blueRectangleStyle = {
    left: activeLinkPosition.left,
    width: activeLinkPosition.width
  };

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
      <div className="blue-rectangle" style={blueRectangleStyle}></div>
    </nav>
  );
};

export default Navigation;
