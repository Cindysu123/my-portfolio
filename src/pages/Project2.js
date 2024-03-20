import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Project2.css';

import brandkit from '../assets/DesignImg/Project2/brandkit.png';
import layout from '../assets/DesignImg/Project2/layout.png';
import layout2 from '../assets/DesignImg/Project2/layout2.png';
import home from '../assets/DesignImg/Project2/home.png';
import homeScreen from '../assets/DesignImg/Project2/home screen.png';
import task from '../assets/DesignImg/Project2/task detail.png';
import setting from '../assets/DesignImg/Project2/setting.png';

import gif1 from '../assets/DesignImg/Project2/Synfig Animation 1.gif';
import gif2 from '../assets/DesignImg/Project2/Synfig Animation 2.gif';
import gif3 from '../assets/DesignImg/Project2/Synfig Animation 3.gif';
import gif4 from '../assets/DesignImg/Project2/Synfig Animation 4.gif';
import gif5 from '../assets/DesignImg/Project2/Synfig Animation 5.gif';
import gif6 from '../assets/DesignImg/Project2/Synfig Animation 6.gif';
import gif8 from '../assets/DesignImg/Project2/Synfig Animation 8.gif';
import gif9 from '../assets/DesignImg/Project2/Synfig Animation 9.gif';
import gif10 from '../assets/DesignImg/Project2/Synfig Animation 10.gif';
import gif11 from '../assets/DesignImg/Project2/Synfig Animation 11.gif';
import gif12 from '../assets/DesignImg/Project2/Synfig Animation 12.gif';
import gif13 from '../assets/DesignImg/Project2/Synfig Animation 13.gif';


import forest from '../assets/icon/forest.png';

const Project2 = () => {
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
    <div style={{background:"#EAFCFA"}}>
      <Link to="/">
        <div className='smallText button' style={{position:"fixed", top:"3vw", left:"3vw"}}>Go Back</div>
      </Link>
      <div className='medium2Text' style={{background:"#527c87", padding:"3vw 14vw", fontWeight:"normal", color:"white"}}>
        <div style={{margin:'2vw'}}>For this design project I created a task management application designed to enhance productivity and add a touch of creativity to your daily routine.</div>
        <div style={{margin:'2vw'}}>This application allows users to organize tasks in a fun and visually appealing way, utilizing a virtual fish tank as the task management interface.</div>
      </div>
      <div style={{padding:"3vw 14vw"}}>
      <div>
          <div class='mediumText'>Conceptualization</div>
          <div style={{display:"flex", alignItems:"center"}}>
            <div>
              <div class='smallText' style={{margin:"2vw 0",width:"46vw", marginRight:"8vw"}}>
                Inspired by the mobile app Forest, which helps users minimize smartphone distractions to focus on tasks, I aimed to explore similar creative solutions for desktop and laptop users.
              </div>
              <div class='smallText' style={{margin:"2vw 0",width:"46vw", marginRight:"8vw"}}>  
                I brainstormed some potential ideas and finally decided on visualizing fish tanks, and how each fish would symbolize a specific task, turning the ordinary act of task management into an interactive and captivating experience.
              </div>
            </div>
            <img src={forest} style={{width:"10vw"}}/>
          </div>
          <div class='mediumText' style={{margin:"2vw 0"}}>Design Process</div>
          <div class='medium2Text' style={{margin:"2vw 0"}}>Design the Layout</div>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <img src={layout} style={{width:"22vw"}}/>
            <img src={layout2} style={{width:"22vw"}}/>
            <img src={home} style={{width:"22vw"}}/>
          </div>
          <div class='medium2Text' style={{margin:"2vw 0"}}>Create the Brand Kit</div>
          <div class='smallText' style={{margin:"2vw 0"}}>For this project, I picked a pale green color palette to closely resemble the hue of fish tanks. This choice of a subdued color aiming to ensure that it does not overly dominate the visual space, thereby allowing users to maintain focus on their tasks.</div>
          <img src={brandkit} style={{width:'50vw', margin:"0 auto", display: 'block'}}/>
          <div class='smallText' style={{margin:"2vw 0"}}>
            To make the fish and plants inside the fishtank more lively, I used synfig studio to create animated illustrations and incorporated them into the design.
          </div>
          <div style={{display:"flex"}}>
            <img src={gif1} style={{width:"11vw"}}></img>
            <img src={gif2} style={{width:"11vw"}}></img>
            <img src={gif3} style={{width:"11vw"}}></img>
            <img src={gif4} style={{width:"11vw"}}></img>
            <img src={gif5} style={{width:"11vw"}}></img>
            <img src={gif6} style={{width:"11vw"}}></img>
          </div>
          <div style={{display:"flex"}}>
            <img src={gif8} style={{width:"11vw"}}></img>
            <img src={gif9} style={{width:"11vw"}}></img>
            <img src={gif10} style={{width:"11vw"}}></img>
            <img src={gif11} style={{width:"11vw"}}></img>
            <img src={gif12} style={{width:"11vw"}}></img>
            <img src={gif13} style={{width:"11vw"}}></img>
          </div>
        </div>
      </div>
    <div style={{padding: "1vw 10vw"}}>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div className='mediumText' style={{margin:"2vw 0"}}>Final Design</div>
        <a href="https://cindysu123.github.io/Aquarium/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
          <div className='button3 smallText' style={{margin:"2vw 0", width:"10vw", display: 'inline-block', textAlign: 'center'}}>
            Visit the Demo
          </div>
        </a>
      </div>
      <div style={{margin: "1vw 0", display: "flex", justifyContent: "space-between", alignContent: "flex-start"}}>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(home)}>
          <img className='design_img' src={home} style={{width: "100%", height: "auto"}} alt="Home"></img>
        </div>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(task)}>
          <img className='design_img' src={task} style={{width: "100%", height: "auto"}} alt="Search"></img>
        </div>
        <div style={{width: "24vw", cursor:"pointer"}} onClick={() => setSelectedImage(setting)}>
          <img className='design_img' src={setting} style={{width: "100%", height: "auto"}} alt="Detail"></img>
        </div>
      </div>
      <div style={{margin: "1vw 0", display: "flex", justifyContent: "space-between", alignContent: "flex-start"}}>
        <div style={{width: "50vw", cursor:"pointer"}} onClick={() => setSelectedImage(homeScreen)}>
          <img className='design_img' src={homeScreen} style={{width: "100%", height: "auto"}} alt="Resources"></img>
        </div>
      </div>
      {selectedImage && renderEnlargedOverlay(selectedImage)}
    </div>
    </div>
  );
};

export default Project2;