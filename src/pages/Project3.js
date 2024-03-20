import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Project3.css';

import sky1 from '../assets/DesignImg/Project3/sky1.png';
import sky2 from '../assets/DesignImg/Project3/sky2.png';
import sky3 from '../assets/DesignImg/Project3/sky3.png';
import sky4 from '../assets/DesignImg/Project3/sky4.png';
import sky5 from '../assets/DesignImg/Project3/sky5.png';

import sun from '../assets/DesignImg/Project3/sun.png';
import moon from '../assets/DesignImg/Project3/moon.png';

import weather1 from '../assets/DesignImg/Project3/weather1.gif';
import weather2 from '../assets/DesignImg/Project3/weather2.gif';
import weather3 from '../assets/DesignImg/Project3/weather3.gif';

import day from '../assets/DesignImg/Project3/day.png';
import night from '../assets/DesignImg/Project3/night.png';
import home from '../assets/DesignImg/Project3/home.png';

import gif from '../assets/DesignImg/Project3/ezgif-2-72fc6c0079.gif';

const Project3 = () => {
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
    <div style={{background:"#ffff"}}>
      <Link to="/">
        <div className='smallText button' style={{position:"fixed", top:"3vw", left:"3vw"}}>Go Back</div>
      </Link>
      <div className='medium2Text' style={{background:"#1b174c", padding:"3vw 14vw", fontWeight:"normal"}}>
        <div style={{margin:'2vw', color:"white"}}>This is a weather forecasting dashboard I have created, featuring dynamic visual adjustments that respond to changes in both the time of day and weather conditions. The interface is enhanced with live animations to provide users with an immersive and interactive experience.</div>
      </div>
      <div style={{padding:"3vw 14vw"}}>
      <div>
        <div class='mediumText' style={{margin:"2vw 0"}}>Design Process</div>
          <div class='medium2Text' style={{margin:"2vw 0"}}>Decide the Possible Background</div>
          <div class='smallText' style={{margin:"2vw 0"}}>
            To reflect the actual color of the sky, I have decided to seperate the day into 5 time period.
          </div>
          <div class='smallText' style={{margin:"2vw 0"}}>Here's the gradient color I decided for the sky:</div>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <img src={sky1} style={{width:"22vw",  margin:"1vw"}}/>
            <img src={sky2} style={{width:"22vw",  margin:"1vw"}}/>
            <img src={sky3} style={{width:"22vw",  margin:"1vw"}}/>
          </div>
          <div style={{display:"flex"}}>
            <img src={sky4} style={{width:"22vw",  margin:"1vw"}}/>
            <img src={sky5} style={{width:"22vw",  margin:"1vw"}}/>
          </div>
          <div class='medium2Text' style={{margin:"2vw 0"}}>Create the Sun and Moon</div>
          <div class='smallText' style={{margin:"2vw 0"}}>
            After selecting the background sky color, I moved on to designing the illustrations for the sun and moon. I isolated the eye element in my code, enabling it to follow the user's mouse cursor for a more interactive experience.
          </div>
          <div style={{display:"flex"}}>
            <img src={sun} style={{width:'30vw', margin:"0 auto", display: 'block'}}/>
            <img src={moon} style={{width:'30vw', margin:"0 auto", display: 'block'}}/>
          </div>
          <div class='medium2Text' style={{margin:"2vw 0"}}>Create the Weather Animation</div>
          <div class='smallText' style={{margin:"2vw 0"}}>
            To make the weather look more real and lively, I used JavaScript to add moving rain, snow, and clouds to the background, enhancing the overall visual experience.
          </div>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <img src={weather1} style={{width:"22vw", display: 'block'}}/>
            <img src={weather2} style={{width:"22vw", display: 'block'}}/>
            <img src={weather3} style={{width:"22vw", display: 'block'}}/>
          </div>
        </div>
      </div>
    <div style={{padding: "1vw 10vw"}}>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div className='mediumText' style={{margin:"2vw 0"}}>Final Design</div>
        <a href="https://cindysu123.github.io/Weather-App/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
          <div className='button3 smallText' style={{margin:"2vw 0", width:"10vw", display: 'inline-block', textAlign: 'center'}}>
            Visit the Demo
          </div>
        </a>
      </div>
      <div style={{margin: "1vw 0", display: "flex", justifyContent: "space-between", alignContent: "flex-start"}}>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(home)}>
          <img className='design_img' src={home} style={{width: "100%", height: "auto"}} alt="Home"></img>
        </div>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(day)}>
          <img className='design_img' src={day} style={{width: "100%", height: "auto"}} alt="Search"></img>
        </div>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(night)}>
          <img className='design_img' src={night} style={{width: "100%", height: "auto"}} alt="Detail"></img>
        </div>
      </div>
      <div style={{margin: "1vw 0", display: "flex", justifyContent: "space-between", alignContent: "flex-start"}}>
        <div style={{width: "40vw", cursor:"pointer"}} onClick={() => setSelectedImage(gif)}>
          <img className='design_img' src={gif} style={{width: "100%", height: "auto"}} alt="Resources"></img>
        </div>
      </div>
      {selectedImage && renderEnlargedOverlay(selectedImage)}
    </div>
    </div>
  );
};

export default Project3;