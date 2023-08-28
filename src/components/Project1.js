// Importing required libraries and assets
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Project1.css';
import icon from '../assets/images/project4img/icon.png';
import image1 from '../assets/images/project4img/1.png';
import image2 from '../assets/images/project4img/4.png';
import image3 from '../assets/images/project4img/2.png';
import image4 from '../assets/images/project4img/3.png';
import image5 from '../assets/images/project4img/5.png';
import analysis1 from '../assets/images/project4img/Desktop - 13.png';
import analysis2 from '../assets/images/project4img/Desktop - 14.png';
import analysis3 from '../assets/images/project4img/Desktop - 15.png';
import users from '../assets/images/project4img/users.png';
import wireframes from '../assets/images/project4img/wireframe.png';
import next from '../assets/others/img2.1.png';
import left from '../assets/icon/left.png';
import right from '../assets/icon/right.png';

// Main Project1 Component
const Project1 = () => {
  // State variables to manage images and navigation
  const images = [image1, image2, image5, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [showNextProjectLink, setShowNextProjectLink] = useState(false);
  const [blockNextProjectLink, setBlockNextProjectLink] = useState(false);

  // Scroll to top when the component is first loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Event listener for scroll position to show/hide the 'Next Project' link
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > window.innerHeight * 6) {
        setShowNextProjectLink(true);
      } else {
        setShowNextProjectLink(false);
      }
      if (currentScrollPosition > window.innerHeight * 5.9) {
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

  // Function to open image modal
  const openModal = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to close image modal
  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  // Function to handle clicking outside modal to close it
  const handleOutsideClick = (event) => {
    if (event.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  // Function to handle button clicks for image navigation in the modal
  const handleButtonClick = (event, newIndex) => {
    event.stopPropagation();
    setCurrentImageIndex(newIndex);
  };

  // Event listeners for closing modal using Escape key and clicking outside
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

  // Main render function
  return (
    <div className='p1'>
      <div className='bg'></div>
      <div className="introduction">
        <h3>The process of pet adoption presents a challenge for both adopters and providers. Many individuals find that the pets they adopt do not align with their lifestyles, leading to a tragic second abandonment.</h3>
        <h4>How can we streamline pet adoption to better match pets with the right adopters, making the process more efficient and compassionate?</h4>
      </div>

      <div className="problem-definition">
        <h2>Defining the Problem</h2>
        <ul>
          <li><strong>Mismatch of Expectations:</strong> Adopters may have unrealistic expectations about the pet's behavior, needs, or compatibility with their lifestyle.</li>
          <li><strong>Lack of Information:</strong> Inadequate knowledge about the pet's history, health, or temperament can lead to surprises and difficulties after adoption.</li>
          <li><strong>Financial Considerations:</strong> The cost of caring for a pet may be underestimated, leading to financial strain on the adopter.</li>
          <li><strong>Time Commitment:</strong> Pets require significant time and attention, and potential adopters may not fully grasp the commitment required.</li>
        </ul>
      </div>

      <div className="design-process">
        <h2>Design Process</h2>
        <h3>Main Objective</h3>
        <p>The main objective is to create a seamless and efficient pet adoption system that ensures compatibility between pets and adopters. This involves understanding the needs, lifestyles, and preferences of both parties and connecting them through a thoughtful and user-friendly platform.</p>
        <h3>Research and Ideation</h3>
        <p>At this stage, comprehensive research is conducted to understand the existing challenges and opportunities in pet adoption. This includes analysis of current adoption practices, which helps identify areas of improvement and best practices in user experience and functionality:</p>
        <ul class="image-list">
          <li><img src={analysis1} alt="PetFinder"/></li>
          <li><img src={analysis2} alt="Adopt a Pet"/></li>
          <li><img src={analysis3} alt="Rescue Me"/></li>
        </ul>
        <p>A user case study was conducted following the analysis of existing pet adoption websites. Through online research and article reviews, it became evident that factors such as age, income, and marital status play a significant role in both pet adoption and abandonment rates. As a result, I have developed four distinct user profiles to better understand the needs and challenges faced by different demographics in the pet adoption process.</p>
        <img className='users' src={users} alt="users"/>
        <h3>Prototyping</h3>
        <p>Low fidelity wireframes are developed to quickly iterate design ideas. These basic visual representations allow for rapid feedback and adjustments, ensuring that the design aligns with user needs and expectations.</p>
        <img className='wireframe' src={wireframes} alt="wireframe"/>
      </div>

      <div className="final-product">
        <h2>Final Design</h2>
        <p>The completed design offers a comprehensive platform that showcases pets available for adoption and provides essential documents related to pet care. Additionally, it features an intuitive dashboard that helps potential adopters find the ideal pet to match their lifestyle. This is accomplished by leveraging data from PetFinder.com and guiding users through a series of questions to determine their best fit.</p>
        <a href="https://cindysu123.github.io/PawfectMatch" target="_blank">
          <button class="custom-button">Visit the Application</button>
        </a>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={image1}
            alt="Image 1"
            style={{ width: '34%', padding: '18px', objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => openModal(0)}
          />
          <div style={{ display: 'flex', padding: '18px', flexDirection: 'column', alignItems: 'center', width: '32%'}}>
            <img
              src={image2}
              alt="Image 2"
              style={{ width: '100%', paddingBottom: '5px', objectFit: 'contain', cursor: 'pointer' }}
              onClick={() => openModal(1)}
            />
            <img
              src={image5}
              alt="Image 5"
              style={{ width: '100%', objectFit: 'contain', cursor: 'pointer' }}
              onClick={() => openModal(2)}
            />
          </div>
          <div style={{ display: 'flex', padding: '18px', flexDirection: 'column', alignItems: 'center', width: '32%'}}>
            <div>
              <img
                src={image3}
                alt="Image 3"
                style={{ width: '100%', paddingBottom: '5px', objectFit: 'contain', cursor: 'pointer' }}
                onClick={() => openModal(3)}
              />
            </div>
            <div>
              <img
                src={image4}
                alt="Image 4"
                style={{ width: '100%', objectFit: 'contain', cursor: 'pointer' }}
                onClick={() => openModal(4)}
              />
            </div>
          </div>
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
            onClick={(e) =>
              handleButtonClick(e, (currentImageIndex - 1 + images.length) % images.length)
            }
          />
          <div style={{ maxWidth: '90%', maxHeight: '90%', overflow: 'auto' }}>
            <img
              src={images[currentImageIndex]}
              alt="Enlarged Image"
              style={{ width: '100%', objectFit: 'contain' }}
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
      <div className="results-impact">
        <h2>Next Steps</h2>
        <p>The next phase will focus on enhancing user experience by implementing a dedicated account system, enrich the platform with more comprehensive details about the adoption process, and integrate the interactive dashboard into the website, eliminating the need for navigating to a separate web page.</p>
      </div>
      <div className='padding'></div>
      <div className={`navigate-next-project ${showNextProjectLink ? 'show' : 'hide'} ${blockNextProjectLink ? 'showBlock' : 'hideBlock'}`} style={{ backgroundImage: `url(${next})`, backgroundSize: 'cover', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link to="/ui-design/2" style={{ color: 'black', textDecoration: 'none', textAlign: 'center', fontSize: '1.4vw' }}>
          <div className='text'>
            <h3 className='link-h3'>Next Project: CampusMatch</h3>
            <p className='link-p'>Explore the next project, where we explored ideas for making the hiring process for student more efficient.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Project1;
