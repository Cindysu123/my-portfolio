import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Project1.css';

import brandkit from '../assets/DesignImg/Project1/BrandKit.png'
import wireframe from '../assets/DesignImg/Project1/wireframe.png'
import blog from '../assets/DesignImg/Project1/Blog Page.png'
import home from '../assets/DesignImg/Project1/Homepage.png'
import search from '../assets/DesignImg/Project1/Pet Search.png'
import detail from '../assets/DesignImg/Project1/Pet Details Page.png'
import Resources from '../assets/DesignImg/Project1/Educational Resources Page.png'
import find from '../assets/DesignImg/Project1/Find Your Perfect Pet.png'

import gif1 from '../assets/DesignImg/Project1/gif.gif'


const Project1 = () => {
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
    <div style={{background:"#FFFBF2"}}>
      <Link to="/">
        <div className='smallText button' style={{position:"fixed", top:"3vw", left:"3vw"}}>Go Back</div>
      </Link>
      <div className='medium2Text' style={{background:"#fcf2dc", padding:"3vw 14vw", fontWeight:"normal"}}>
        <div style={{margin:'2vw'}}>The process of pet adoption presents a challenge for both adopters and providers. Many individuals find that the pets they adopt do not align with their lifestyles, leading to a tragic second abandonment.</div>
        <div style={{margin:'2vw'}}>This design tries to streamline pet adoption to better match pets with the right adopters, making the process more efficient and compassionate</div>
      </div>
      <div style={{padding:"3vw 14vw"}}>
      <div>
        <div class='mediumText' style={{margin:"2vw 0"}}>Design Process</div>
          <div class='medium2Text' style={{margin:"2vw 0"}}>Develop Wireframes</div>
          <div class='smallText' style={{margin:"2vw 0"}}>
            My objective is to ensure that users can effortlessly access information regarding adoptable pets. In addition, I aim to provide comprehensive resources on pet care and a feature that assists users in identifying the pet most compatible with their lifestyle by responding to a series of targeted questions.
          </div>
          <div class='smallText' style={{margin:"2vw 0"}}>To accomplish this task, I have organized the website into several key sections.</div>
          <img src={wireframe} style={{width:'64vw', margin:"0 auto", display: 'block'}}/>
          
          <div class='medium2Text' style={{margin:"2vw 0"}}>Create the Brand Kit</div>
          <div class='smallText' style={{margin:"2vw 0"}}>
            After created the framework, I proceed to created a logo, selected a typeface, and choosed a color scheme.
          </div>
          <div class='smallText' style={{margin:"2vw 0"}}>For this project, I opted for a warm color palette and a playful font to reflect the pet-centric theme of the brand.</div>
          <img src={brandkit} style={{width:'50vw', margin:"0 auto", display: 'block'}}/>
        </div>
      </div>
    <div style={{padding: "1vw 10vw"}}>
      <div className='mediumText' style={{margin:"2vw 0"}}>Final Design</div>
      <div class='smallText' style={{margin:"2vw 0"}}>The completed design offers a comprehensive platform that showcases pets available for adoption and provides essential documents related to pet care. Additionally, it features an intuitive dashboard that helps potential adopters find the ideal pet to match their lifestyle. This is accomplished by leveraging data from PetFinder.com and guiding users through a series of questions to determine their best fit.</div>
      <a href="https://cindysu123.github.io/PawfectMatch/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
        <div className='button2 smallText' style={{margin:"2vw 0", width:"10vw", display: 'inline-block', textAlign: 'center'}}>
          Visit the Demo
        </div>
      </a>
      <div style={{margin: "1vw 0", display: "flex", justifyContent: "space-between", alignContent: "flex-start"}}>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(home)}>
          <img className='design_img' src={home} style={{width: "100%", height: "auto"}} alt="Home"></img>
        </div>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(search)}>
          <img className='design_img' src={search} style={{width: "100%", height: "auto"}} alt="Search"></img>
        </div>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(detail)}>
          <img className='design_img' src={detail} style={{width: "100%", height: "auto"}} alt="Detail"></img>
        </div>
      </div>
      <div style={{margin: "1vw 0", display: "flex", justifyContent: "space-between", alignContent: "flex-start"}}>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(Resources)}>
          <img className='design_img' src={Resources} style={{width: "100%", height: "auto"}} alt="Resources"></img>
        </div>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(blog)}>
          <img className='design_img' src={blog} style={{width: "100%", height: "auto"}} alt="Blog"></img>
        </div>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(find)}>
          <img className='design_img' src={find} style={{width: "100%", height: "auto"}} alt="Find"></img>
        </div>
      </div>
      {selectedImage && renderEnlargedOverlay(selectedImage)}
    </div>
    </div>
  );
};

export default Project1;