import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, useNavigate, useParams } from 'react-router-dom';
import icon1 from '../assets/images/project4img/Mock.png';
import icon2 from '../assets/images/project5img/mock.png';
import icon3 from '../assets/images/project1img/mock.png';
import icon4 from '../assets/images/project6img/mock.png';

import img1 from '../assets/others/img1.1.png'
import img2 from '../assets/others/img2.1.png'
import img3 from '../assets/others/img3.1.png'
import img4 from '../assets/others/img4.1.png'

import '../assets/css/UIDesign.css';

const UIDesign = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const navigate = useNavigate();
  const [disableScrolling, setDisableScrolling] = useState(false);

  const handleCardClick = (projectId) => {
    setDisableScrolling(true);
    navigate(`/ui-design/${projectId}`);
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
    setScrollAmount(currentScrollPosition);
  
    let backgroundColor = '#fcf2dc';
  
    if (currentScrollPosition > window.innerHeight * 0.5) {
      backgroundColor = '#cadbff';
    }
    if (currentScrollPosition > window.innerHeight * 1.4) {
      backgroundColor = '#9fbe63';
    }
    if (currentScrollPosition > window.innerHeight * 2.1) {
      backgroundColor = '#4b79cc';
    }
  
    document.body.style.backgroundColor = backgroundColor;
  };

  useEffect(() => {
    handleScroll();
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.backgroundColor = 'initial';
    };
  }, []);
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
  
    const handleCardHover = () => {
      cursor.classList.remove('cursor-default');
      cursor.classList.add('cursor-hover');
    };
  
    const handleCardUnhover = () => {
      cursor.classList.remove('cursor-hover');
      cursor.classList.add('cursor-default');
    };
  
    const cards = document.querySelectorAll('.ui-design-card');
  
    cards.forEach((card) => {
      card.addEventListener('mouseenter', handleCardHover);
      card.addEventListener('mouseleave', handleCardUnhover);
    });
  
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', handleCardHover);
        card.removeEventListener('mouseleave', handleCardUnhover);
      });
    };
  }, []);
  
  return (
    <div className="ui-design-container">
      <div className="ui-design-row">
        <div className={`ui-design-card card1 ${scrollAmount < window.innerHeight * 0.5 ? 'visible' : ''}`} style={{backgroundImage: `url(${img1})`}} onClick={() => handleCardClick(1)}>
          <div className="ui-design-content">
            <h3 className="ui-design-title">Pawfect Match</h3>
            <div className='Description'>An online platform where people can find the pet that best suits their preferences and lifestyle</div>
          </div>
          <img className="ui-design-image" src={icon1} alt="Project 1 Icon" />
        </div>
          <div className={`ui-design-card card2 ${scrollAmount > window.innerHeight * 0.5 & scrollAmount < window.innerHeight * 1.4 ? 'visible' : ''}`} style={{backgroundImage: `url(${img2})`}} onClick={() => handleCardClick(2)}>
            <div className="ui-design-content">
            <h3 className="ui-design-title">Campus Match</h3>
          <div className='Description'>A platform that connects students with employers, streamlining the job search and recruitment process.</div>
          </div>
          <img className="ui-design-image" src={icon2} alt="Project 2 Icon" />
        </div>
        <div className={`ui-design-card card3 ${scrollAmount > window.innerHeight * 1.4 & scrollAmount < window.innerHeight * 2.1 ? 'visible' : ''}`} style={{backgroundImage: `url(${img3})`}} onClick={() => handleCardClick(3)}>
          <div className="ui-design-content">
            <h3 className="ui-design-title">Sky's the Limit</h3>
            <div className='Description'>Encourages participation in eco-friendly activities and provides a marketplace for plant-based produce.</div>
          </div>
          <img className="ui-design-image" src={icon3} alt="Project 3 Icon" />
        </div>
        <div className={`ui-design-card card4 ${scrollAmount > window.innerHeight * 2.1 ? 'visible' : ''}`} style={{backgroundImage: `url(${img4})`}} onClick={() => handleCardClick(4)}>
          <div className="ui-design-content">
            <h3 className="ui-design-title">Aqua Task</h3>
            <div className='Description'>A management application designed to enhance productivity and add a touch of creativity to your daily routine</div>
          </div>
          <img className="ui-design-image" src={icon4} alt="Project 4 Icon" />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/ui-design/*" />
      </Routes>
    </div>
  );
};

export default UIDesign;