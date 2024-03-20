import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Project5.css';

import wireframe from '../assets/DesignImg/Project5/wireframe.png'
import blog from '../assets/DesignImg/Project1/Blog Page.png'
import home from '../assets/DesignImg/Project1/Homepage.png'
import search from '../assets/DesignImg/Project1/Pet Search.png'
import detail from '../assets/DesignImg/Project1/Pet Details Page.png'
import Resources from '../assets/DesignImg/Project1/Educational Resources Page.png'
import find from '../assets/DesignImg/Project1/Find Your Perfect Pet.png'

import page1 from '../assets/DesignImg/Project5/home.png'
import page2 from '../assets/DesignImg/Project5/page2.png'
import page3 from '../assets/DesignImg/Project5/page3.png'

import video from '../assets/DesignImg/Project5/ProjectDemo.mp4'

const Project5 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const renderEnlargedOverlay = (imageSrc) => (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        paddingTop: '5vh',
        overflowY: 'auto',
        zIndex: 2,
      }}
      onClick={() => setSelectedImage(null)}
    >
      <img src={imageSrc} style={{width: '60vw', height: 'auto', maxWidth: '90%'}} alt="Enlarged" />
    </div>
  );

  return (
    <div>
      <Link to="/">
        <div className='smallText button' style={{position:"fixed", top:"3vw", left:"3vw"}}>Go Back</div>
      </Link>
      <div className='medium2Text' style={{background:"#cadbff", padding:"3vw 14vw", fontWeight:"normal"}}>
        <div style={{margin:'2vw'}}>Embarking on a career journey can be both exciting and daunting for college students who are just starting out. With an array of choices and opportunities, the hiring process may seem complex and challenging.</div>
        <div style={{margin:'2vw'}}>The goal of this design is to facilitate better career decisions for students and help connecting them with employees.</div>
      </div>
      <div style={{padding:"3vw 14vw"}}>
      <div>
        <div class='mediumText' style={{margin:"2vw 0"}}>Design Process</div>
          <div class='medium2Text' style={{margin:"2vw 0"}}>Ideation: Define Functionality</div>
          <div class='smallText' style={{margin:"2vw 0"}}>
            Following the analysis of existing job search platforms, we have conceptualized innovative features such as salary analytics and focused search capabilities. Our aim is to significantly boost user efficiency while delivering insightful data to aid in the job search process.
          </div>
          <ul class='smallText'>
            <li>Salary Analysis: Comparing industry standards and personalizing recommendations.</li>
            <li>Targeted Search: Customized search criteria based on user profiles.</li>
            <li>Interactive Dashboard: Real-time tracking of application status and feedback.</li>
          </ul>
          <div class='medium2Text' style={{margin:"2vw 0"}}>Develop Wireframes</div>
          <img src={wireframe} style={{width:'64vw', margin:"0 auto", display: 'block'}}/>
          <div class='smallText' style={{margin:"2vw 0"}}>Users can easily navigate to the Account Dashboard, Student Search, Job Search, and Salary Report from the homepage. The Employer Dashboard provides tools for analyzing student employment and managing job postings, while the Student Dashboard offers features for analyzing jobs, salaries, and specializations.</div>
        </div>
      </div>
    <div style={{padding: "1vw 10vw"}}>
      <div className='mediumText' style={{margin:"2vw 0"}}>Final Design</div>
      <div style={{margin: "1vw 0", display: "flex", justifyContent: "space-between", alignContent: "flex-start"}}>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(page1)}>
          <img className='design_img' src={page1} style={{width: "100%", height: "auto"}} alt="Home"></img>
        </div>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(page2)}>
          <img className='design_img' src={page2} style={{width: "100%", height: "auto"}} alt="Search"></img>
        </div>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(page3)}>
          <img className='design_img' src={page3} style={{width: "100%", height: "auto"}} alt="Detail"></img>
        </div>
      </div>
      <div style={{margin: "1vw 0", display: "flex", justifyContent: "space-between", alignContent: "flex-start"}}>
        <video src={video} controls style={{ maxWidth: '100%', height: 'auto' }}>
          Your browser does not support the video tag.
        </video>
      </div>
      {selectedImage && renderEnlargedOverlay(selectedImage)}
    </div>
    </div>
  );
};

export default Project5;