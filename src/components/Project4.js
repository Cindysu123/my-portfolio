import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/images/project6img/icon.png';
import image1 from '../assets/images/project6img/1.png';
import image2 from '../assets/images/project6img/2.png';
import bs from '../assets/images/project6img/brainstorm.png';
import prototypes from '../assets/images/project6img/prototype.png';
import forest from '../assets/others/forest.png';
import fishs from '../assets/images/project6img/Fish.png';
import demo from '../assets/images/project6img/demo.gif';
import left from '../assets/icon/left.png';
import right from '../assets/icon/right.png';

import '../assets/css/Project4.4.css';

import pre from '../assets/others/img3.2.png';

const Project4 = () => {
  const images = [image1, image2, demo];
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openModal = (index) => { setCurrentImageIndex(index); };
  const closeModal = () => { setCurrentImageIndex(null); };
  const handleOutsideClick = (event) => { if (event.target.id === 'modal-overlay') { closeModal(); }};
  const handleButtonClick = (event, newIndex) => { event.stopPropagation(); setCurrentImageIndex(newIndex); };

  const [showNextProjectLink, setShowNextProjectLink] = useState(false);
  const [blockNextProjectLink, setBlockNextProjectLink] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
  
    const handleHover = () => {
      cursor.classList.remove('cursor-default');
      cursor.classList.add('cursor-zoom');
    };
  
    const handleUnhover = () => {
      cursor.classList.remove('cursor-zoom');
      cursor.classList.add('cursor-default');
    };

    const handleHoverB = () => {
      cursor.classList.remove('cursor-default');
      cursor.classList.add('cursor-hover');
    };
  
    const handleUnhoverB = () => {
      cursor.classList.remove('cursor-hover');
      cursor.classList.add('cursor-default');
    };
  
    const images = document.querySelectorAll('.small-image');
    const button = document.querySelector('.custom-button');
  
    images.forEach((images) => {
      images.addEventListener('mouseenter', handleHover);
      images.addEventListener('mouseleave', handleUnhover);
    });

    button.addEventListener('mouseenter', handleHoverB);
    button.addEventListener('mouseleave', handleUnhoverB);

    return () => {
      images.forEach((images) => {
        images.removeEventListener('mouseenter', handleHover);
        images.removeEventListener('mouseleave', handleUnhover);
      });

      button.addEventListener('mouseenter', handleHoverB);
      button.addEventListener('mouseleave', handleUnhoverB);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > window.innerHeight * 4.4) {
        setShowNextProjectLink(true);
      } else {
        setShowNextProjectLink(false);
      }

      if (currentScrollPosition > window.innerHeight * .3) {
        setBlockNextProjectLink(true);
      } else {
        setBlockNextProjectLink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='p4'>
      <div className='bg'></div>
      <div className="introduction">
        <h1>Aqua Task</h1>
        <p>Aqua Task is a management application designed to enhance productivity and add a touch of creativity to your daily routine. 
           It allows users to organize tasks in a fun and visually appealing way, utilizing a virtual fish tank as the task management interface.</p>
      </div>

      <div className="problem-definition">
        <h2>Defining the Problem</h2>
        <p>The challenge was to transform traditional task management into an engaging and creative process, making organizing 
           and completing tasks an enjoyable experience.</p>
      </div>

      <div className="design-process">
        <h2>Design Process</h2>

        <h3>Conceptualization</h3>
        <div style={{display: 'flex', alignItems: 'center', padding:'4vw'}}>
          <img src={forest} alt="Forest Image" style={{width: '10vw', height: 'auto', marginRight: '20px'}}></img>
          <p style={{flexGrow: 1}}>Inspired by the mobile app Forest, which helps users minimize smartphone distractions to focus on tasks, I aimed to explore similar creative solutions for desktop and laptop users.</p>
        </div>
        <div style={{display: 'flex', alignItems: 'center', padding:'4vw'}}>
          <p style={{flexGrow: 1}}>To realize this vision, I brainstormed some potential ideas through sketches. Finally, I decided on visualizing fish tanks, and how each fish would symbolize a specific task, turning the ordinary act of task management into an interactive and captivating experience.</p>
          <img src={bs} alt="Brain Storm" style={{width: '36vw', height: 'auto', marginRight: '20px'}}/>
        </div>
        <h3>Prototyping</h3>
        <div style={{alignItems: 'center'}}>
        <p>Three iterations were made to fine-tune the user interface and each iteration brought me closer to the final design.</p>
          <img src={prototypes} alt="prototypes" style={{width: '80vw', height: 'auto'}}/>
          <div style={{display: 'flex', alignItems: 'center', padding:'4vw'}}>
            <div>
              <img src={fishs} alt="fishs" style={{width: '40vw', marginRight:'4vw'}}/>
              <p>Image source: https://brysiaa.itch.io/pixel-fish-tank-set</p>
            </div>
            <p style={{width: '50vw'}}>I utilized pixelated graphics to create a gamified underwater environment and employed CSS to make the fish have lifelike swimming animations for a better visual.</p>
          </div>
        </div>
      </div>

      <div className="final-product">
        <h2>Final Design</h2>
        <p>The ultimate design offers functionalities for adding, searching, marking, and removing tasks. Moreover, users have the flexibility to personalize their fish tanks by altering the color scheme. As an added feature, users can expand the fish tank to fill the entire screen, transforming it into a dynamic wallpaper. This immersive experience is further enhanced with swimming fish and ambient background music, providing a relaxing atmosphere.</p>
        <a href="https://cindysu123.github.io/Aquarium/" target="_blank">
          <button class="custom-button">Visit the Application</button>
        </a>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={image1}
            alt="Image 1"
            className='small-image'
            style={{ width: '26%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => openModal(0)}
          />
          <img
            src={image2}
            alt="Image 2"
            className='small-image'
            style={{ width: '32%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => openModal(1)}
          />
          <img
            src={demo}
            alt="Image 3"
            className='small-image'
            style={{ width: '32%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => openModal(2)}
          />
        </div>
      </div>
      <div className="results-impact">
        <h2>Advancing Towards a Sustainable Future</h2>
        <p>An enhancement to the existing design would be integrating educational content focused on ocean conservation. This feature would empower users to accomplish tasks while simultaneously enriching their understanding of marine ecosystems and the species that inhabit them.</p>
      </div>
      {currentImageIndex !== null && (
        <div
          id="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onClick={handleOutsideClick}
        >
          <img
            className="navigation-arrow"
            src={left}
            alt="Left"
            onClick={(e) =>
              handleButtonClick(e, (currentImageIndex - 1 + images.length) % images.length)
            }
          />
          <div style={{ maxWidth: '90%', maxHeight: '90%', overflow: 'auto' }}>
            <img
              src={images[currentImageIndex]}
              alt="Enlarged Image"
              style={{ width: '80vw', objectFit: 'contain' }}
            />
          </div>
          <img
            className="navigation-arrow"
            src={right}
            alt="Right"
            onClick={(e) =>
              handleButtonClick(e, (currentImageIndex + 1) % images.length)
            }
          />
        </div>
      )}

      <div className='padding'></div>
      <div className={`navigate-pre-project ${showNextProjectLink ? 'show' : 'hide'} ${blockNextProjectLink ? 'showBlock' : 'hideBlock'}`} style={{ backgroundImage: `url(${pre})`, backgroundSize: 'cover', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link to="/ui-design/3" style={{ color: 'black', textDecoration: 'none', textAlign: 'center', fontSize: '1.4vw' }}>
          <div className='text'>
            <h3 className='link-h3'>Previous Project: Sky's the Limit</h3>
            <p className='link-p'>Explore the previous project, where I focus on empowering users to embrace sustainable practices.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Project4;