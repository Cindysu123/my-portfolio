import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import menu from '../assets/icon/Menu.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='nav_bar'>
      <div onClick={() => setIsOpen(!isOpen)} className='menu_icon'><img src={menu}/></div>
      {isOpen && (
        <nav className='menu medium2Text'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/my-projects">My Projects</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
