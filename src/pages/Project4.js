import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Project4.css';

import wireframe from '../assets/DesignImg/Project4/wireframe.png'
import blog from '../assets/DesignImg/Project1/Blog Page.png'
import search from '../assets/DesignImg/Project1/Pet Search.png'
import detail from '../assets/DesignImg/Project1/Pet Details Page.png'
import Resources from '../assets/DesignImg/Project1/Educational Resources Page.png'
import find from '../assets/DesignImg/Project1/Find Your Perfect Pet.png'

import flowchart from '../assets/DesignImg/Project4/flowchart.png'
import home from '../assets/DesignImg/Project4/Home Page.png'
import notification from '../assets/DesignImg/Project4/Home Page (Notification).png'
import add from '../assets/DesignImg/Project4/Home PageAdd.png'
import trend from '../assets/DesignImg/Project4/Trend.png'
import loation from '../assets/DesignImg/Project4/Location.png'
import setting from '../assets/DesignImg/Project4/Setting.png'
import edit from '../assets/DesignImg/Project4/Setting(Edit Profile).png'

const Project4 = () => {
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
    <div style={{background:"#ebf2f9"}}>
      <Link to="/">
        <div className='smallText button' style={{position:"fixed", top:"3vw", left:"3vw"}}>Go Back</div>
      </Link>
      <div className='medium2Text' style={{background:"#7ab3d4", padding:"3vw 14vw", fontWeight:"normal"}}>
        <div style={{margin:'2vw'}}>Staying hydrated is tough with a busy schedule, and daily water requirements vary by individual factors like height, weight, and activity level. While apps and marked bottles exist, they often fall short of ensuring proper hydration.</div>
        <div style={{margin:'2vw'}}>To solve this problem we decided to design an app that connected to a weight sensor device for personalized reminders. User can input personal details in the app to set goals or manually adjust them. The devices uses sensors to verify consumption and updates your progress in the app.</div>
      </div>
      <div style={{padding:"3vw 14vw"}}>
      <div>
        <div class='mediumText' style={{margin:"2vw 0"}}>Design Process</div>
          <div class='medium2Text' style={{margin:"2vw 0"}}>Develop Wireframes and Design Notification Function</div>
          <div class='smallText' style={{margin:"2vw 0"}}>
            My objective is to ensure that users can effortlessly access information regarding their daily water input. So I believe the most straightfprward way is to show a water cup in the center of the homescreen with the water left in the cap to indicate the amount of water left to take on that date. With addition to a statistic page to record the water intake trend and location.
          </div>
          <div class='smallText' style={{margin:"2vw 0"}}>Here's a rough wireframe of the app:</div>
          <img src={wireframe} style={{width:'36vw', margin:"0 auto", display: 'block'}}/>
        </div>
      </div>
    <div style={{padding: "1vw 10vw"}}>
      <div className='mediumText' style={{margin:"2vw 0"}}>Final Design</div>
      <div style={{margin: "1vw 0", display: "flex", justifyContent: "space-between", alignContent: "flex-start"}}>
        <div style={{width: "18vw", cursor:"pointer"}} onClick={() => setSelectedImage(home)}>
          <img className='design_img' src={home} style={{width: "100%", height: "auto"}} alt="Home"></img>
        </div>
        <div style={{width: "18vw", cursor:"pointer"}} onClick={() => setSelectedImage(notification)}>
          <img className='design_img' src={notification} style={{width: "100%", height: "auto"}} alt="Search"></img>
        </div>
        <div style={{width: "18vw", cursor:"pointer"}} onClick={() => setSelectedImage(add)}>
          <img className='design_img' src={add} style={{width: "100%", height: "auto"}} alt="Detail"></img>
        </div>
        <div style={{width: "18vw", cursor:"pointer"}} onClick={() => setSelectedImage(trend)}>
          <img className='design_img' src={trend} style={{width: "100%", height: "auto"}} alt="Resources"></img>
        </div>
      </div>
      <div style={{margin: "1vw 0", display: "flex", justifyContent: "space-between", alignContent: "flex-start", width:"60vw"}}>
        <div style={{width: "18vw", cursor:"pointer"}} onClick={() => setSelectedImage(loation)}>
          <img className='design_img' src={loation} style={{width: "100%", height: "auto"}} alt="Blog"></img>
        </div>
        <div style={{width: "18vw", cursor:"pointer"}} onClick={() => setSelectedImage(setting)}>
          <img className='design_img' src={setting} style={{width: "100%", height: "auto"}} alt="Find"></img>
        </div>
        <div style={{width: "18vw", cursor:"pointer"}} onClick={() => setSelectedImage(edit)}>
          <img className='design_img' src={edit} style={{width: "100%", height: "auto"}} alt="Find"></img>
        </div>
      </div>
      {selectedImage && renderEnlargedOverlay(selectedImage)}
    </div>
    </div>
  );
};

export default Project4;