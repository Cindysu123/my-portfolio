// Import required modules and assets
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../assets/css/Home.css';
import img1 from '../assets/others/img1.png';
import img2 from '../assets/others/img2.png';
import img3 from '../assets/others/img3.png';
import img4 from '../assets/others/img4.png';

// Define HomePage component
const HomePage = () => {
  // Constants
  const animationDuration = 500;

  // Hooks
  const navigate = useNavigate();
  const [showHello, setShowHello] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showBlueContainer, setShowBlueContainer] = useState(false);

  // useEffect to handle the animations and transitions
  useEffect(() => {
    // Timers to control the display of components
    const timers = [
      setTimeout(() => setShowHello(true), 0),
      setTimeout(() => setShowIntro(true), animationDuration),
      setTimeout(() => setShowBlueContainer(true), animationDuration * 2),
    ];
    
    // Cleanup function to clear timers
    return () => timers.forEach(clearTimeout);
  }, [animationDuration]);

  // Function to handle image click
  const handleImageClick = (index) => {
    navigate(`/ui-design/${index + 1}`);
  };

  // Function to handle mouse over event on images
  const handleMouseOver = (e) => {
    const images = document.querySelectorAll('.images-container img');
    images.forEach((img) => img.classList.remove('hovered'));
    e.target.classList.add('hovered');
  };

  // Render HomePage component
  return (
    <div className="homepage">
      <div className='bg'></div>
      
      {/* Hello Text Animation */}
      <CSSTransition
        in={showHello}
        timeout={animationDuration}
        classNames="fade"
        unmountOnExit
      >
        <p className='hello'>HELLO, </p>
      </CSSTransition>

      {/* Intro Text Animation */}
      <CSSTransition
        in={showIntro}
        timeout={animationDuration}
        classNames="fade"
        unmountOnExit
      >
        <h1 className="homepage__intro">
          I'm Cindy, a Product Designer dedicated to crafting engaging and meaningful experiences for users.
        </h1>
      </CSSTransition>

      {/* Blue Container Animation */}
      <CSSTransition
        in={showBlueContainer}
        timeout={animationDuration}
        classNames="fade"
        unmountOnExit
      >
        <div className="blue-container">
          <h3>Explore my work and projects to see how I can contribute to your team and help bring your application to life!</h3>
          <div className="images-container">
            <img src={img1} alt="Image 1" className="hovered" onMouseOver={handleMouseOver} onClick={() => handleImageClick(0)}/>
            <img src={img2} alt="Image 2" onMouseOver={handleMouseOver} onClick={() => handleImageClick(1)}/>
            <img src={img3} alt="Image 3" onMouseOver={handleMouseOver} onClick={() => handleImageClick(2)}/>
            <img src={img4} alt="Image 4" onMouseOver={handleMouseOver} onClick={() => handleImageClick(3)}/>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

// Export HomePage component
export default HomePage;