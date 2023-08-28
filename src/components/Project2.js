// Import dependencies and assets
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Project2.css';
import icon from '../assets/images/project5img/icon.png';
import image1 from '../assets/images/project5img/1.png';
import image2 from '../assets/images/project5img/2.png';
import image3 from '../assets/images/project5img/3.png';
import a1 from '../assets/images/project5img/analysis1.png';
import a2 from '../assets/images/project5img/analysis2.png';
import a3 from '../assets/images/project5img/analysis3.png';
import video from '../assets/video/ProjectDemo.mp4';
import left from '../assets/icon/left.png';
import right from '../assets/icon/right.png';
import pre from '../assets/others/img1.1.png';
import next from '../assets/others/img3.2.png';
import wireframe from '../assets/images/project5img/wireframe.png';

// Main Project2 Component
const Project2 = () => {
  // State for image modal and navigation
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [showNextProjectLink, setShowNextProjectLink] = useState(false);
  const [blockNextProjectLink, setBlockNextProjectLink] = useState(false);

  // Function to open image modal
  const openModal = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to close image modal
  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  // Function to close modal when clicked outside
  const handleOutsideClick = (event) => {
    if (event.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  // Function to navigate between images in the modal
  const handleButtonClick = (event, newIndex) => {
    event.stopPropagation();
    setCurrentImageIndex(newIndex);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll event to toggle next project link
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > window.innerHeight * 4.7) {
        setShowNextProjectLink(true);
      } else {
        setShowNextProjectLink(false);
      }

      if (currentScrollPosition > window.innerHeight * 4.6) {
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

  // Add event listeners for closing modal
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

  // Main render
  return (
    <div className='p2'>
      <div className='bg'></div>
      <div className="introduction">
        <h1>Connecting Students with Employers</h1>
        <p>Embarking on a career journey can be both exciting and daunting for college students who are just starting out. With an array of choices and opportunities, the hiring process may seem complex and challenging.</p>
        <h2>Goal for This Application</h2>
        <p>Facilitate better career decisions for students and help connecting them with employees.</p>
        <h4>My Role in This Project: UI/UX Design and Front-End Development</h4>
      </div>

      <div className="design-process">
        <h2>Design Process</h2>
        <h3>Research on Current Job Applications</h3>
        <p>I conducted an analysis of both students' and employers' needs throughout the job search and recruitment process. By reviewing existing platforms, we assessed their strengths and limitations to pinpoint opportunities for innovation and improvement.</p>
        <ul className='image-list'>
          <li><img src={a1} alt="Overview of design"/></li>
          <li><img src={a2} alt="Detailed view of feature"/></li>
          <li><img src={a3} alt="User interaction example"/></li>
        </ul>
        <h3>Ideation: Define Functionality</h3>
        <p>Following the analysis of existing job search platforms, we have conceptualized innovative features such as salary analytics and focused search capabilities. Our aim is to significantly boost user efficiency while delivering insightful data to aid in the job search process.</p>
        <ul>
          <li>Salary Analysis: Comparing industry standards and personalizing recommendations.</li>
          <li>Targeted Search: Customized search criteria based on user profiles.</li>
          <li>Interactive Dashboard: Real-time tracking of application status and feedback.</li>
        </ul>
        <h3>Prototyping</h3>
        <div className='text-and-image'>
          <img className='wf' style={{width:'40vw'}} src={wireframe} alt="Fidelity Prototype" />
          <div className='text'>
            <h4>Low Fidelity Prototype</h4>
            <p>I have created a wireframe for the page, as shown on the left. Users can easily navigate to the Account Dashboard, Student Search, Job Search, and Salary Report from the homepage. The Employer Dashboard provides tools for analyzing student employment and managing job postings, while the Student Dashboard offers features for analyzing jobs, salaries, and specializations.</p>
          </div>
        </div>
      </div>
      <div className="final-product">
        <h2>Final Design</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image1} alt="Image 1" style={{ width: '32%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }} onClick={() => openModal(0)} />
          <img src={image2} alt="Image 2" style={{ width: '32%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }} onClick={() => openModal(1)} />
          <img src={image3} alt="Image 3" style={{ width: '32%', padding: '10px', objectFit: 'contain', cursor: 'pointer' }} onClick={() => openModal(2)} />
        </div>
        <div style={{alignItems: 'center', padding: '10px' }}>
          <h3>Video Demo</h3>
          <video width="100%" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {currentImageIndex !== null && (
        <div id="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleOutsideClick}>
          <img className="navigation-arrow" src={left} alt="Left" onClick={(e) => handleButtonClick(e, (currentImageIndex - 1 + images.length) % images.length)} />
          <div style={{ maxWidth: '90%', maxHeight: '90%', overflow: 'auto' }}>
            <img src={images[currentImageIndex]} alt="Enlarged Image" style={{ width: '100%', objectFit: 'contain' }} />
          </div>
          <img className="navigation-arrow" src={right} alt="Right" onClick={(e) => handleButtonClick(e, (currentImageIndex + 1) % images.length)} />
        </div>
      )}

      <div className="results-impact">
      <h2>Conclusion</h2>
      <p>While our platform has successfully met many initial objectives, there are areas for improvement to enhance user experience. The introduction of a private messaging functionality and a networking feature would foster more personalized interactions and community-building, thereby making our platform even more robust and user-friendly.</p>
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
            to="/ui-design/1" 
            style={{ 
              color: 'black', 
              textDecoration: 'none', 
              textAlign: 'center', 
              fontSize: '1.4vw' 
            }}
          >
            <div className='text'>
              <h3 className='link-h3'>Previous Project: PawfectMatch</h3>
              <p className='link-p'>Explore the previous project, where the process more efficient and compassionate.</p>
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
            to="/ui-design/3" 
            style={{ 
              color: 'black', 
              textDecoration: 'none', 
              textAlign: 'center', 
              fontSize: '1.4vw' 
            }}
          >
            <div className='text'>
              <h3 className='link-h3'>Next Project: Sky's the Limit</h3>
              <p className='link-p'>Explore the next project, where we focus on empowering users to embrace sustainable practices.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project2;