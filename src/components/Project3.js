import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/images/project1img/1.png';
import image1 from '../assets/images/project1img/1.jpg';
import image3 from '../assets/images/project1img/3.jpg';
import image4 from '../assets/images/project1img/4.jpg';
import image5 from '../assets/images/project1img/5.jpg';
import image6 from '../assets/images/project1img/6.jpg';
import image7 from '../assets/images/project1img/7.jpg';
import lowf from '../assets/images/project1img/lowf.jpg';

import left from '../assets/icon/left.png';
import right from '../assets/icon/right.png';

import video2 from '../assets/video/demo2.mp4';

import '../assets/css/Project3.3.css'

import pre from '../assets/others/img2.1.png';
import next from '../assets/others/img4.1.png';

const Project3 = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [showNextProjectLink, setShowNextProjectLink] = useState(false);
  const [blockNextProjectLink, setBlockNextProjectLink] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  
  const images = [image1, image3, image6, image5, image4, image7];

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
  
    const images = document.querySelectorAll('.small-image');
  
    images.forEach((image) => {
      image.addEventListener('mouseenter', handleHover);
      image.addEventListener('mouseleave', handleUnhover);
    });
  
    return () => {
      images.forEach((image) => {
        image.removeEventListener('mouseenter', handleHover);
        image.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []); 

  const openModal = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
  };

  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  const handleButtonClick = (event, newIndex) => {
    event.stopPropagation();
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > window.innerHeight * 4.1) {
        setShowNextProjectLink(true);
      } else {
        setShowNextProjectLink(false);
      }

      if (currentScrollPosition > window.innerHeight * 4) {
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

    const handleOutsideClick = (event) => {
      if (event.target.id === 'modal-overlay') {
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
    <div className="fade-in p3">
      <div className='bg'></div>
      <div className="introduction">
        <h1>Sky's The Limit</h1>
        <p>Sky's The Limit is an innovative design challenge in which we participated as part of a hackathon competition. The initiative aims to tackle the pressing issue of climate change by empowering individuals to adopt sustainable habits. Our platform not only inspires users to engage in eco-conscious activities but also offers a marketplace for sourcing plant-based produce.</p>
        <h4>My Role in This Project: UI/UX Design and Front-End Development</h4>
      </div>

      <div className="design-process">
        <h2>Design Process</h2>
        <p>Due to the tight timeline of this design challenge, we only produce a basic user flow as a preliminary step before diving into the actual design.</p>
        <img className='wf' src={lowf} alt="Fidelity Prototype" />
      </div>

      <div className="final-product">
        <h2>Final Design</h2>
        <p>In addition to display information about carbon footprint, we have developed a distinctive star points system that rewards users with discounts in our marketplace. Companies 
           can advertise their environmentally conscious services, products, and discounts, motivating users to make 
           environmentally aware choices.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={image1}
            alt="Image 1"
            className='small-image'
            style={{ width: '26%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => openModal(0)}
          />
          <img
            src={image3}
            alt="Image 3"
            className='small-image'
            style={{ width: '26%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => openModal(1)}
          />
          <img
            src={image6}
            alt="Image 4"
            className='small-image'
            style={{ width: '26%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => openModal(2)}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={image5}
            alt="Image 5"
            className='small-image'
            style={{ width: '26%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => openModal(3)}
          />
          <img
            src={image4}
            alt="Image 6"
            className='small-image'
            style={{ width: '26%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => openModal(4)}
          />
          <img
            src={image7}
            alt="Image 7"
            className='small-image'
            style={{ width: '26%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => openModal(5)}
          />
        </div>
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
            onClick={(e) => handleButtonClick(e, (currentImageIndex - 1 + images.length) % images.length)} 
          />
          <div style={{ maxWidth: '90%', maxHeight: '90%', overflow: 'auto' }}>
            <img src={images[currentImageIndex]} alt="Enlarged Image" style={{ width: '80vw', objectFit: 'contain' }} />
          </div>
          <img 
            className="navigation-arrow" 
            src={right} 
            alt="Right" 
            onClick={(e) => handleButtonClick(e, (currentImageIndex + 1) % images.length)} 
          />
        </div>
      )}

      <div style={{width:'50vw', textAlign: 'center', padding: '10px', marginLeft:'21vw'}}>
        <h3>Video Demonstration</h3>
        <video width="100%" controls>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='padding'></div>
      <div className={`link-container ${showNextProjectLink ? 'show' : 'hide'} ${blockNextProjectLink ? 'showBlock' : 'hideBlock'}` } style={{ display: 'flex' }}>
        <div 
          className={`navigate-previous-project ${showNextProjectLink ? 'show' : 'hide'} ${blockNextProjectLink ? 'showBlock' : 'hideBlock'}`} 
          style={{ 
            backgroundImage: `url(${pre})`, 
            backgroundSize: 'cover', 
            padding: '20px',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
          }}
        >
          <Link 
            to="/ui-design/2" 
            style={{ 
              color: 'black', 
              textDecoration: 'none', 
              textAlign: 'center', 
              fontSize: '1.4vw' 
            }}
          >
            <div className='text'>
              <h3 className='link-h3'>Previous Project: CampusMatch</h3>
              <p className='link-p'>Explore the next project, where we explored ideas for making the hiring process for student more efficient.</p>
            </div>
          </Link>
        </div>
        <div 
          className={`navigate-next-project ${showNextProjectLink ? 'show' : 'hide'} ${blockNextProjectLink ? 'showBlock' : 'hideBlock'}`} 
          style={{ 
            backgroundImage: `url(${next})`, 
            backgroundSize: 'cover', 
            padding: '20px',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
          }}
        >
          <Link 
            to="/ui-design/4" 
            style={{ 
              color: 'black', 
              textDecoration: 'none', 
              textAlign: 'center', 
              fontSize: '1.4vw' 
            }}
          >
            <div className='text'>
              <h3 className='link-h3'>Next Project: Aqua Task</h3>
              <p className='link-p'>Explore the next project, a management application that add a touch of creativity to your daily routine.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project3;
