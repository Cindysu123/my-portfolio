import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import body1 from '../assets/character/body.png';
import face1 from '../assets/character/face.png';
import left1 from '../assets/character/leftHand.png';

import body2 from '../assets/character/body2.png';
import face2 from '../assets/character/face2.png';
import left2 from '../assets/character/leftHand2.png';

import body3 from '../assets/character/body3.png';
import face3 from '../assets/character/face3.png';
import left3 from '../assets/character/leftHand3.png';

import body4 from '../assets/character/body4.png';
import face4 from '../assets/character/face4.png';
import left4 from '../assets/character/leftHand4.png';

import speechBubble from '../assets/speechBubble.png';
import speechBubble2 from '../assets/speechBubble2.png';

import project1 from '../assets/DesignImg/Project1/Desktop.png';
import project2 from '../assets/DesignImg/Project2/Desktop.png';
import project3 from '../assets/DesignImg/Project3/Desktop.png';
import project4 from '../assets/DesignImg/Project4/Desktop.png';
import project5 from '../assets/DesignImg/Project5/Desktop.png';

import bg from '../assets/bg.png'
import bg2 from '../assets/bg2.png'

import layout from '../assets/icon/layout.png';
import code from '../assets/icon/Code.png';

import figma from '../assets/icon/Figma.png';
import adobeXD from '../assets/icon/xd.png';
import illustrator from '../assets/icon/Ai.png';
import ps from '../assets/icon/ps.png'

import js from '../assets/icon/JavaScript.png';
import python from '../assets/icon/Python.png';
import html from '../assets/icon/html.png';
import mysql from '../assets/icon/mysql.png';
import postgre from '../assets/icon/postgre.png';

import work from '../assets/character/WholeImage/Work.png';
import email from '../assets/icon/email.png';

import Footer from '../components/Footer';

import pdfLink from '../assets/Cindy_Resume.pdf';

function HomePage() {
  const [characterPosition, setCharacterPosition] = useState({
    left: '62vw',
    top: '20vw',
    zIndex: 1,
  });
  const [facePosition, setFacePosition] = useState({
    left: '3vw',
    top: '-10vw',
    width: '17vw'
  });
  const [bodyPosition, setBodyPosition] = useState({
    left: '0vw',
    top: '-5vw',
    width: '20vw'
  });
  const [handPosition, setHandPosition] = useState({
    left: '-2.8vw',
    top: '0vw',
    width: '8.6vw'
  });
  const [useSecondImageSet, setUseSecondImageSet] = useState(false);
  const [useThirdImageSet, setUseThirdImageSet] = useState(false);
  const [useForthImageSet, setUseForthImageSet] = useState(false);

  const [showProject1, setShowProject1] = useState(false);
  const [showProject2, setShowProject2] = useState(false);
  const [showProject3, setShowProject3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position >= window.innerHeight * 0.7 && position < window.innerHeight * 2) {
        setShowProject1(true);
      } else {
        setShowProject1(false);
      }
  
      if (position >= window.innerHeight * 1.6 && position < window.innerHeight * 3) {
        setShowProject2(true);
      } else {
        setShowProject2(false);
      }
  
      if (position >= window.innerHeight * 2.8 && position < window.innerHeight * 4) {
        setShowProject3(true);
      } else {
        setShowProject3(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      //first project
      if (position >= window.innerHeight * 0.6 && position <= window.innerHeight * 2) {
        setCharacterPosition({
          left: '8vw',
          top: '70vw',
          zIndex: 3,
        });
        setFacePosition({
          left: '0vw',
          top: '-4vw',
          width: '14vw'
        });
        setBodyPosition({
          left: '0vw',
          top: '0vw',
          width: '17vw'
        });
        setHandPosition({
          left: '9vw',
          top: '3vw',
          width: '8.6vw'
        });
        setUseSecondImageSet(true);
        setUseThirdImageSet(false);
        setUseForthImageSet(false);
      } 
      //second project
      else if (position >= window.innerHeight * 2 && position <= window.innerHeight * 3) {
        setCharacterPosition({
          left: '8vw',
          top: '120vw',
          zIndex: 3,
        });
        setFacePosition({
          left: '1vw',
          top: '-3.5vw',
          width: '14vw'
        });
        setBodyPosition({
          left: '0vw',
          top: '0vw',
          width: '17vw'
        });
        setHandPosition({
          left: '9.5vw',
          top: '6vw',
          width: '11vw'
        });
        setUseSecondImageSet(false);
        setUseThirdImageSet(false);
        setUseForthImageSet(true);
      } 
      // third project
      else if (position >= window.innerHeight * 3 && position <= window.innerHeight * 4) {
        setCharacterPosition({
          left: '8vw',
          top: '170vw',
          zIndex: 3,
        });
        setFacePosition({
          left: '0vw',
          top: '-4vw',
          width: '14vw'
        });
        setBodyPosition({
          left: '0vw',
          top: '0vw',
          width: '17vw'
        });
        setHandPosition({
          left: '9vw',
          top: '3vw',
          width: '8.6vw'
        });
        setUseSecondImageSet(true);
        setUseThirdImageSet(false);
        setUseForthImageSet(false);
      }
      // about me
      else if (position >= window.innerHeight * 5.3) {
        setCharacterPosition({
          left: '70vw',
          top: '260vw',
          zIndex: 3,
        });
        setFacePosition({
          left: '2vw',
          top: '-1vw',
          width: '10vw'
        });
        setBodyPosition({
          left: '3vw',
          top: '2vw',
          height: '80vh'
        });
        setHandPosition({
          left: '-1.5vw',
          top: '7vw',
          width: '7vw',
          zIndex: -1
        });
        setUseSecondImageSet(false);
        setUseThirdImageSet(true);
        setUseForthImageSet(false);
      }
      // hello
      else if (position <= window.innerHeight * 0.6){
        setCharacterPosition({
          left: '62vw',
          top: '20vw',
          zIndex: 1,
        });
        setFacePosition({
          left: '3vw',
          top: '-10vw',
          width: '17vw'
        });
        setBodyPosition({
          left: '0vw',
          top: '-5vw',
          width: '20vw'
        });
        setHandPosition({
          left: '-2.8vw',
          top: '0vw',
          width: '8.6vw'
        });
        setUseSecondImageSet(false);
        setUseThirdImageSet(false);
        setUseForthImageSet(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let bodyImg, faceImg, leftImg;

  if (useThirdImageSet) {
    bodyImg = body3;
    faceImg = face3;
    leftImg = left3;
  } else if (useSecondImageSet) {
    bodyImg = body2;
    faceImg = face2;
    leftImg = left2;
  } else if (useForthImageSet) {
    bodyImg = body4;
    faceImg = face4;
    leftImg = left4;
  } else {
    bodyImg = body1;
    faceImg = face1;
    leftImg = left1;
  }

  return (
    <div>
      <div className='home_container'>
        <div className='character' style={{position: 'absolute', ...characterPosition, transition: 'all 0.4s ease-in-out'}}>
          <img src={bodyImg} style={{position: 'absolute', ...bodyPosition}}/>
          <img src={faceImg} style={{position: 'absolute', ...facePosition}}/>
          <img src={leftImg} style={{position: 'absolute', ...handPosition}}/>
        </div>
        <div className='section1 fade_in'>
          <div className='left'>
            <div className='text popup'>
              <div style={{display: 'flex'}}>
                <div className='largeText gradient_text'>Hello!</div>
                <div className='largeText black_text' style={{marginLeft: '2vw'}}>I'm Cindy</div>
              </div>
              <div className='mediumText'>A UI/UX Engineer</div>
            </div>
            <img className='speech_bubble popup' src={speechBubble}/>
            <div className='button medium2Text' style={{position: 'absolute', top: '29vw', marginLeft: '7vw'}}>
              <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="downloadButton" style={{textDecoration:"none", color:"inherit"}}>View My Resume</a>
            </div>
          </div>
          <img src={bg} style={{width:"70vw", position:"absolute", top:"5vh", left:"16vw", zIndex:"-2"}}/>
        </div>
        <div className='section2' style={{height: '80vw'}}>
          <div className='mediumText' style={{position: 'absolute', left: '10vw', top:'46vw'}}>What I've been working on </div>
          <div className={`project1 ${showProject1 ? 'visible' : 'hidden'} fade_in`}>
            <div>
              <div className='speech_bubble popup' style={{position: 'absolute', left: '10vw', top:'52vw', zIndex:'2'}}>
                <div className='medium2Text' style={{position: 'absolute', left: '2vw', top:'2vw', zIndex:'2'}}>Website Design for Online Pet Adoption</div>
                <div className='smallText' style={{position: 'absolute', left: '2vw', top:'8vw', zIndex:'2', width:"28vw"}}>This is a UI concept for a Pet finding website, which aims to streamline pet adoption to better match pets with the right adopters.</div>
                <img src={speechBubble2} style={{width:"34vw"}}/>
              </div>
            </div>
            <div className='project move_left'>
              <div style={{fontWeight:"normal", textAlign:"right"}} className='medium2Text'>Jul 23 - Aug 23</div>
              <Link to="/project1">
                <img src={project1} style={{position:"absolute", width:"56vw", right:'0'}}/>
                <p className='smallText'>Learn More</p>
              </Link>
            </div>
          </div>
          <div className={`project2 ${showProject2 ? 'visible' : 'hidden'} fade_in`} style={{position:"absolute", top:"50vw", left:"0"}}>
            <div>
              <div className='speech_bubble popup' style={{position: 'absolute', left: '10vw', top:'52vw', zIndex:'2'}}>
                <div className='medium2Text' style={{position: 'absolute', left: '2vw', top:'2vw', zIndex:'2'}}>Website Design for Online Task Management</div>
                <div className='smallText' style={{position: 'absolute', left: '2vw', top:'8vw', zIndex:'2', width:"32vw"}}>For this design project I created a task management application designed to enhance productivity with a touch of creativity to the daily routine.</div>
                <img src={speechBubble2} style={{width:"36vw"}}/>
              </div>
            </div>
            <div className='project move_left'>
              <div style={{fontWeight:"normal", textAlign:"right"}} className='medium2Text'>May 23 - Jun 23</div>
              <Link to="/project2">
                <img src={project2} style={{width:"60vw"}}/>
                <p className='smallText'>Learn More</p>
              </Link>
            </div>
          </div>
          <div className={`project3 ${showProject3 ? 'visible' : 'hidden'} fade_in`} style={{position:"absolute", top:"100vw", left:"0"}}>
            <div>
              <div className='speech_bubble popup' style={{position: 'absolute', left: '10vw', top:'52vw', zIndex:'2'}}>
                <div className='medium2Text' style={{position: 'absolute', left: '2vw', top:'2vw', zIndex:'2'}}>Website Design for Weather Dashboard</div>
                <div className='smallText' style={{position: 'absolute', left: '2vw', top:'8vw', zIndex:'2', width:"28vw"}}>For this project I've developed a weather forecast dashboard that changes its look based on the time of day and the weather.</div>
                <img src={speechBubble2} style={{width:"33vw"}}/>
              </div>
            </div>
            <div className='project move_left'>
              <div style={{fontWeight:"normal", textAlign:"right"}} className='medium2Text'>Jan 24 - Feb 24</div>
              <Link to="/project3">
                <img src={project3} style={{width:"60vw"}}/>
                <p className='smallText'>Learn More</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='section3' style={{marginTop:"110vw"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"2vw"}}>
          <div className='mediumText' style={{margin: '0'}}>There's More!</div>
          <Link to="/my-projects" style={{color:"#333333"}}>
            <div className='medium2Text' style={{textDecoration:"underline", cursor:"pointer"}}>View All Project</div>
          </Link>
        </div>
          <div style={{display:"flex"}}>
            <Link to="/project4" style={{ textDecoration: 'none', color:"#333333"}}>
              <div className='prject4' style={{ padding: "2vw", border: "2px solid black", borderRadius: "1vw", width: "28vw", height:"36vw", display: "flex", flexDirection: "column", alignItems: "center", marginRight: "2vw" }}>
                  <img src={project4} style={{ height: "24vw", maxWidth: "100%" }}/>
                  <div style={{ textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", margin: "1vw" }}>
                      <div className='medium2Text'>Water Tracking App</div>
                      <div className='smallText'>Feb 24 - Now</div>
                  </div>
                  <div className='smallText'>An app that connects to a weight sensor device for personalized water intake reminders.</div>
              </div>
            </Link>
            <div style={{display:"flex"}}>
              <Link to="/project5" style={{ textDecoration: 'none', color:"#333333"}}>
              <div className='project5' style={{padding:"2vw", border:"2px solid black", borderRadius:"1vw", width:"36vw", display: "flex", flexDirection: "column", alignItems: "center", marginRight:"2vw"}}>
                <img src={project5} style={{height:"24vw", maxWidth: "100%"}}/>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-end", width: "100%", margin:"1vw"}}>
                  <div className='medium2Text' style={{width:"26vw"}}>Student-Employer Connection Platform Design</div>
                  <div className='smallText'>Jun 23 - Aug 23</div>
                </div>
                <div className='smallText'>A platform that connects students with employers, making the job search and recruitment process more efficient</div>
              </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='section4' style={{marginTop:"14vw", padding:"0 6vw"}}>
          <div style={{width:"50vw"}}>
            <div className='mediumText'>About Me</div>
            <div className='medium2Text'>Hello and welcome!😊</div>
            <div className='medium2Text' style={{fontWeight:"normal"}}>I'm Cindy, a UI/UX Engineer focused on design and transforming high-level ideas into practical, visually engaging applications. My goal is to build projects that not only looks great but also delivers an great user experience. Let's collaborate and create something extraordinary!</div>
          </div>
          <img src={bg2} style={{position:"absolute", top:"570vh", width:"60vw"}}/>
        </div>
        <div className='section5' style={{marginTop:"14vw"}}>
          <div className='mediumText'>I am Specialized in</div>
          <div style={{display:"flex"}}>
            <div>
              <div style={{border:"2px solid black", width:"30vw", padding:"2vw 4vw", margin:"2vw", borderRadius:"1vw"}}>
                <img src={layout} style={{margin:"1vw", width:"6vw"}}/>
                <div className='medium2Text'>UI UX Design</div>
                <div className='medium2Text' style={{margin:"1vw 0", fontWeight:"normal"}}>Website Design</div>
                <div className='medium2Text' style={{margin:"1vw 0", fontWeight:"normal"}}>Mobile App Design</div>
                <div className='medium2Text' style={{margin:"1vw 0", fontWeight:"normal"}}>Data Visualization</div>
                <div style={{display:"flex"}}>
                  <div style={{display:"flex", alignItems:"center", border:"2px solid #EB5757", width:"8vw", padding:"0.3vw 1vw", borderRadius:"4vw", margin:"0.5vw"}}>
                    <img src={figma} style={{width:"2vw"}}/>
                    <div className='smallText'>Figma</div>
                  </div>
                  <div style={{display:"flex", alignItems:"center", border:"2px solid #BB6BD9", width:"10vw", padding:"0.3vw 1vw", borderRadius:"4vw", margin:"0.5vw"}}>
                    <img src={adobeXD} style={{width:"2vw"}}/>
                    <div className='smallText'>Adobe XD</div>
                  </div>
                </div>
                <div style={{display:"flex"}}>
                  <div style={{display:"flex", alignItems:"center", border:"2px solid #F2994A", width:"10vw", padding:"0.3vw 1vw", borderRadius:"4vw", margin:"0.5vw"}}>
                    <img src={illustrator} style={{width:"2vw"}}/>
                    <div className='smallText'>Illustrator</div>
                  </div>
                  <div style={{display:"flex", alignItems:"center", border:"2px solid #56CCF2", width:"10vw", padding:"0.3vw 1vw", borderRadius:"4vw", margin:"0.5vw"}}>
                    <img src={ps} style={{width:"2vw"}}/>
                    <div className='smallText'>Photoshop</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div style={{border:"2px solid black", width:"30vw", padding:"2vw 4vw", margin:"2vw", borderRadius:"1vw"}}>
                <img src={code} style={{margin:"1vw", width:"6vw"}}/>
                <div className='medium2Text'>Development</div>
                <div className='medium2Text' style={{margin:"1vw 0", fontWeight:"normal"}}>Front-end</div>
                <div className='medium2Text' style={{margin:"1vw 0", fontWeight:"normal"}}>Back-end</div>
                <div style={{display:"flex"}}>
                  <div style={{display:"flex", alignItems:"center", border:"2px solid #F2C94C", width:"10vw", padding:"0.3vw 1vw", borderRadius:"4vw", margin:"0.5vw"}}>
                    <img src={js} style={{width:"2vw"}}/>
                    <div className='smallText'>JavaScript</div>
                  </div>
                  <div style={{display:"flex", alignItems:"center", border:"2px solid #56CCF2", width:"8vw", padding:"0.3vw 1vw", borderRadius:"4vw", margin:"0.5vw"}}>
                    <img src={python} style={{width:"2vw"}}/>
                    <div className='smallText'>Python</div>
                  </div>
                </div>
                <div style={{display:"flex"}}>
                  <div style={{display:"flex", alignItems:"center", border:"2px solid #F2994A", width:"10vw", padding:"0.3vw 1vw", borderRadius:"4vw", margin:"0.5vw"}}>
                    <img src={html} style={{width:"2vw"}}/>
                    <div className='smallText'>HTML/CSS</div>
                  </div>
                  <div style={{display:"flex", alignItems:"center", border:"2px solid #F2C94C", width:"8vw", padding:"0.3vw 1vw", borderRadius:"4vw", margin:"0.5vw"}}>
                    <img src={mysql} style={{width:"2vw"}}/>
                    <div className='smallText'>MySQL</div>
                  </div>
                </div>
                <div style={{display:"flex", alignItems:"center", border:"2px solid #56CCF2", width:"10vw", padding:"0.3vw 1vw", borderRadius:"4vw", margin:"0.5vw"}}>
                  <img src={postgre} style={{width:"2vw"}}/>
                  <div className='smallText'>PostgreSQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section6' style={{marginTop:"6vw"}}>
          <div style={{width:"60vw", margin:"0 auto"}}>
            <div className='medium2Text' style={{fontWeight:"normal", textAlign:"center", margin:"1vw"}}>
              If you have any general questions or project inquiries,feel free to to email me or make contact directly.
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
              <img src={email} style={{width:"2vw"}}/>
              <div className='medium2Text'>Email: cindy_su_123@outlook.com</div>
            </div>
          </div>
          <div style={{ margin: "2vw auto", display: "flex", alignItems: "center", width: "80vw", justifyContent: "center" }}>
            <img src={work} style={{ maxWidth: "100%", maxHeight: "24vw", width: "auto", height: "auto", margin: "2vw" }} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>);
}

export default HomePage;