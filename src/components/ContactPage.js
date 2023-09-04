// Import required modules and assets
import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/contactPage.css';

// Import images and icons
import photo from '../assets/others/photo.png';
import emailIcon from '../assets/icon/Calling.png';
import phoneIcon from '../assets/icon/Message.png';
import ai from '../assets/icon/ai.png';
import ps from '../assets/icon/ps.png';
import c4d from '../assets/icon/c4d.png';
import blender from '../assets/icon/blender.png';
import figma from '../assets/icon/figma.png';
import html from '../assets/icon/html.png';
import js from '../assets/icon/js.png';
import python from '../assets/icon/python.png';
import sql from '../assets/icon/sql.png';
import java from '../assets/icon/java.png';
import mongo from '../assets/icon/mongodb.png';
import cpp from '../assets/icon/c++.png';

import pdfLink from '../assets/others/Cindy_Resume.pdf';

const ContactPage = () => {
  const [activeSection, setActiveSection] = useState('design');
  const [activeSubSection, setActiveSubSection] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);
  const [showSubSkills, setShowSubSkills] = useState(false);
  const [dropdownSection, setDropdownSection] = useState(null);

  // Initialize refs for buttons
  const designRef = useRef(null);
  const modelingRef = useRef(null);
  const codingRef = useRef(null);

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
  
    const button = document.querySelector('.downloadButton');

    button.addEventListener('mouseenter', handleHover);
    button.addEventListener('mouseleave', handleUnhover);

    return () => {

      button.addEventListener('mouseenter', handleHover);
      button.addEventListener('mouseleave', handleUnhover);
    };
  }, []);

  // Execute once on component mount
  useEffect(() => {
    setClickedButton(designRef.current);
  }, []);

  // Handle button clicks to switch active section and styles
  const handleButtonClick = (section, ref) => {
    setActiveSection(section);
    setActiveSubSection(prevState => prevState === section ? null : section);  // Toggle the active sub-section
    setClickedButton(ref.current);
  };

  // Determine line style based on clicked button
  const lineStyle = clickedButton
    ? {
        width: clickedButton.offsetWidth,
        left: clickedButton.offsetLeft,
      }
    : {};

  // Render the component
  return (
    <div className='about'>
      <h1>About Me</h1>
      {/* Introduction section */}
      <div className='introduction'>
        <img className='my-picture' src={photo} alt='my picture'/>
        <div className='text'>
          {/* Introduction text */}
          <p>Hello and welcome!✨</p> 
          <p>I'm Cindy, a designer who thrives on turning abstract concepts into concrete, functional works of art. Utilizing the latest technology, I specialize in crafting designs that captivate the eye while prioritizing user experience.  Let's embark on a creative journey together and build something amazing!</p>
          <div className="downloadContainer">
            <div className="downloadItem">
              <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="downloadButton">View My Resume</a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills section with CSSTransition */}
      <div className="homepage__skills">
        <h3>My Skills</h3>
        <div className="buttons">
            <button
              ref={designRef}
              onClick={() => handleButtonClick('design', designRef)}
              className={activeSection === 'design' ? 'new-class' : ''}
            >
              UI/UX Design
            </button>
            {activeSubSection === 'design' && (
              <ul className='skill_list'>
                <li><img src={figma} alt="Figma" /> Figma</li>
                <li><img src={ps} alt="Adobe Photoshop" /> Adobe Photoshop</li>
                <li><img src={ai} alt="Adobe Illustrator" /> Adobe Illustrator</li>
              </ul>
            )}
            <button
              ref={modelingRef}
              onClick={() => handleButtonClick('modeling', modelingRef)}
              className={activeSection === 'modeling' ? 'new-class' : ''}
            >
              3D Modeling
            </button>
            {/* Design subskills */}
            {activeSubSection === 'modeling' && (
              <ul className='skill_list'>
                <li><img src={blender} alt="Blender" /> Blender</li>
                <li><img src={c4d} alt="C4D" /> C4D</li>
              </ul>
            )}
            <button
              ref={codingRef}
              onClick={() => handleButtonClick('coding', codingRef)}
              className={activeSection === 'coding' ? 'new-class' : ''}
            >
              Coding
            </button>
            {activeSubSection === 'coding' && (
            <ul className='skill_list'>
              <li><img className="skill-icon" src={js} alt="JavaScript" /> JavaScript</li>
              <li><img className="skill-icon" src={html} alt="HTML/CSS" /> HTML/CSS</li>
              <li><img className="skill-icon" src={sql} alt="MySQL" /> MySQL</li>
              <li><img className="skill-icon" src={mongo} alt="MongoDB" /> MongoDB</li>
              <li><img className="skill-icon" src={python} alt="Python" /> Python</li>
              <li><img className="skill-icon" src={java} alt="Java" /> Java</li>
              <li><img className="skill-icon" src={cpp} alt="C++" /> C++</li>
            </ul>
          )}
        </div>
          {/* Highlighted line under active button */}
          <div className="line" style={lineStyle}></div>

          {/* Design subskills */}
          {activeSection === 'design' && (
            <ul className={`homepage__subskills ${showSubSkills ? 'active' : ''}`}>
              <li><img src={figma} alt="Figma" /> Figma</li>
              <li><img src={ps} alt="Adobe Photoshop" /> Adobe Photoshop</li>
              <li><img src={ai} alt="Adobe Illustrator" /> Adobe Illustrator</li>
            </ul>
          )}
          {/* Modeling subskills */}
          {activeSection === 'modeling' && (
            <ul className={`homepage__subskills ${showSubSkills ? 'active' : ''}`}>
              <li><img src={blender} alt="Blender" /> Blender</li>
              <li><img src={c4d} alt="C4D" /> C4D</li>
            </ul>
          )}
          {/* Coding subskills */}
          {activeSection === 'coding' && (
            <ul className={`homepage__subskills ${showSubSkills ? 'active' : ''}`}>
              <li><img className="skill-icon" src={js} alt="JavaScript" /> JavaScript</li>
              <li><img className="skill-icon" src={html} alt="HTML/CSS" /> HTML/CSS</li>
              <li><img className="skill-icon" src={sql} alt="MySQL" /> MySQL</li>
              <li><img className="skill-icon" src={mongo} alt="MongoDB" /> MongoDB</li>
              <li><img className="skill-icon" src={python} alt="Python" /> Python</li>
              <li><img className="skill-icon" src={java} alt="Java" /> Java</li>
              <li><img className="skill-icon" src={cpp} alt="C++" /> C++</li>
            </ul>
          )}
        </div>
      {/* Contact information */}
        <div className="contactContainer">
          <div>Contact Info:</div>
          <div className="contactItem">
            <img src={phoneIcon} alt="Email" className="icon" />
            <a href="mailto:cindy_su_123@outlook.com" className="contactText">cindy_su_123@outlook.com</a>
          </div>
        </div>
      {/* Padding for layout */}
      <div className='padding'></div>
    </div>
  );
};

// Export the ContactPage component
export default ContactPage;
