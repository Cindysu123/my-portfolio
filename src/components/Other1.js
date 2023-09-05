import React, { useState, useEffect } from 'react';
import '../assets/css/Other1.css';
import bg1 from '../assets/images/project3img/bg1.png';
import bg2 from '../assets/images/project3img/bg2.png';
import bg3 from '../assets/images/project3img/bg3.png';
import productImage from '../assets/images/project3img/image1.png';
import c1 from '../assets/images/project3img/component1.png';
import c2 from '../assets/images/project3img/component2.png';
import c3 from '../assets/images/project3img/component3.png';
import c4 from '../assets/images/project3img/component4.png';
import c5 from '../assets/images/project3img/component5.png';
import f1 from '../assets/images/project3img/f1.jpg';
import f2 from '../assets/images/project3img/f2.jpg';
import f3 from '../assets/images/project3img/f3.jpg';
import s1 from '../assets/images/project3img/s1.jpg';
import s2 from '../assets/images/project3img/s2.jpg';
import s3 from '../assets/images/project3img/s3.jpg';

import Sketch from '../assets/images/project3img/sketch.png';
import lofi from '../assets/images/project3img/lowfedelity.png';
import hifi from '../assets/images/project3img/highfedelity.png';

import sb1 from '../assets/images/project3img/sb1.png';
import sb2 from '../assets/images/project3img/sb2.png';
import sb3 from '../assets/images/project3img/sb3.png';
import sb4 from '../assets/images/project3img/sb4.png';
import sb5 from '../assets/images/project3img/sb5.png';
import sb6 from '../assets/images/project3img/sb6.png';

import slide1 from '../assets/images/project3img/slide1.png'
import slide2 from '../assets/images/project3img/slide2.png'
import slide3 from '../assets/images/project3img/slide3.png'
import slide4 from '../assets/images/project3img/slide4.png'
import slide5 from '../assets/images/project3img/slide5.png'
import slide6 from '../assets/images/project3img/slide6.png'
import slide7 from '../assets/images/project3img/slide7.png'
import slide8 from '../assets/images/project3img/slide8.png'
import slide9 from '../assets/images/project3img/slide9.png'

const Other1 = () => {
  const [showImages, setShowImages] = useState(false);
  const [imagePosition, setImagePosition] = useState('top');
  const slideImages = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        console.log(scrollPosition)
      if (scrollPosition < window.innerHeight * 0.8) {
        setImagePosition('top');
      } else if (scrollPosition >= window.innerHeight * 0.8 && scrollPosition < window.innerHeight * 1.8) {
        setImagePosition('center');
      } else if (scrollPosition >= window.innerHeight * 1.8) {
        setImagePosition('bottom');
      }

      setShowImages(scrollPosition <= window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowImages(true);
  }, []);

  return (
    <div className='Other1'>
        <div className="project3">
            <div className= {`image-container ${showImages ? 'fade-in' : 'fade-out'}`}>
                <h1 className='text header1'>EcoMate</h1>
                <h2 className='text header2'>A Haptic Learning Tool for Teaching Children Recycling Practices</h2>
                <img className="bg-image1" src={bg1} alt="Background" />
                <img className="bg-image2" src={bg2} alt="Image" />
            </div>
        </div>
        <img
                className={`content-image ${imagePosition}`}
                src={productImage}
                alt="Image"
                style={{ position: 'absolute', width: '30vw'}}
        />
        <div className="feature">
            <h1 className={`text header4`}>Features</h1>
            <img style={{ height: '10vh', width:'auto'}} class="f1" src={f1} alt="feature1" />
            <img style={{ height: '10vh', width:'auto'}} class="f2" src={f2} alt="feature2" />
            <img style={{ height: '10vh', width:'auto'}} class="f3" src={f3} alt="feature3" />
        </div>
        <div class="part3">
            <h1 className="text header3">Components</h1>
            <div class="image-container2">
                <img class="c1" src={c1} alt="component1" />
                <div class="image-text t1">LED Matrix</div>
            </div>
            <div class="image-container2">
                <img class="c2" src={c2} alt="component2" />
                <div class="image-text t2">IR Sensor</div>
            </div>
            <div class="image-container2">
                <img class="c3" src={c3} alt="component3" />
                <div class="image-text t3">Piezzo Buzzer</div>
            </div>
            <div class="image-container2">
                <img class="c4" src={c4} alt="component4" />
                <div class="image-text t4">LED Display</div>
            </div>
            <div class="image-container2">
                <img class="c5" src={c5} alt="component5" />
                <div class="image-text t5">Magnet Sensor</div>
            </div>
            <img class="bg-image3" src={bg3} alt="Background" />
        </div>
        <div className="part4">
            <h1 className="header5">How To Play</h1>
            <div className='steps'>
              <div className="step1">
                  <img className='s1' src={s1} alt="step 1" />
                  <div className='step-text st1'>Start the game by turning on the switch.</div>
              </div>
              <div className="step2">
                  <img className='s2' src={s2} alt="step 2" />
                  <div className='step-text st2'>Earn points by inputting disk that represent recyclable object.</div>
              </div>
              <div className="step3">
                  <img className='s3' src={s3} alt="step 3" />
                  <div className='step-text st3'>Lose points by inputting disk that represent unrecyclable object.</div>
              </div>
            </div>
        </div>
        <div className="mobile-slides">
          {slideImages.map((slide, index) => (
            <img key={index} className="slide-image" src={slide} alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <div className='designProcess'>
          <h1>Design Process</h1>
          {/* Research Section */}
          <div className="research">
              <h2>Research</h2>
              <p>In recent years, the need for environmental protection has gained increasing attention. 
                We recognized the dire need for actionable steps in environmental education for children. 
                We wanted to go beyond conventional methods and develop an interactive experience that not only educates but also 
                entertains.</p>
          </div>

          {/* Understanding the Target Group */}
          <div className="target-group">
              <h2>Understanding The Target Group</h2>
              <p>We conducted one-on-one interviews with early childhood education professionals to understand 
                the needs and preferences of our target audience. The feedback was consistent with our paper's findings, 
                emphasizing the need for the toy to be user-friendly, visually appealing, and safe for children.</p>
          </div>

          {/* Early Design */}
          <div className="early-design">
            <h2>Early Design and Sketches</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={Sketch} alt="Early Sketches" style={{ width: '30vw'}} />
              <p>In the early phase of the design. 
                We crafted scenarios and initial designs focusing on user interaction and engagement. 
                These early designs were instrumental in shaping the user interaction and engagement level of the toy. 
                We focused on ensuring that the toy was not only educational but also engaging to sustain a child's interest.</p>
            </div>
          </div>

          {/* Story Board */}
          <div className="storyBoard">
            <h2>Story Board</h2>
            <div className="story-board">
              <div className='board1' style={{ width: '30vw'}}>
                <img style={{ width: '20vw'}} src={sb1} alt="sb1" />
                <p>Sam is in his living room playing with his toys. He turns on the toy, and the toy responds by making sounds and light.</p>
              </div>
              <div className='board2' style={{ width: '30vw'}}>
                <img style={{ width: '20vw'}} src={sb2} alt="sb2" />
                <p>Sam puts the recyclable object into the toy, and the toy responds by lighting up green and making a success noise.</p>
              </div>
              <div className='board3' style={{ width: '30vw'}}>
                <img style={{ width: '20vw'}} src={sb3} alt="sb3" />
                <p>Sam puts the unrecyclable object into the toy, and the toy responds by making sad noises and lighting up red.</p>
              </div>
              <div className='board4' style={{ width: '30vw'}}>
                <img style={{ width: '20vw'}} src={sb4} alt="sb4" />
                <p>With every correct object Sam puts in the toy, there is a LED counting the amount of times he got the object right.</p>
              </div>
              <div className='board5' style={{ width: '30vw'}}>
                <img style={{ width: '20vw'}} src={sb5} alt="sb5" />
                <p>In the end Sam gets about 5/8 objects correct and he feels very proud. He goes to show his mom how good he did on the toy.</p>
              </div>
              <div className='board6' style={{ width: '30vw'}}>
                <img style={{ width: '20vw'}} src={sb6} alt="sb6" />
                <p>The mother congratulates Sam on doing well and encourages him to keep trying until he gets all of them correct. She may sit down and begin playing with him.</p>
              </div>
            </div>
          </div>


          {/* Low Fidelity Prototype */}
          <div className="low-fidelity">
              <h2>Low-Fidelity Prototype</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <p>Our first prototype was constructed from pink foam and included basic Arduino components. This prototype was essential for initial user testing and feedback.</p>
                <img style={{ width: '40vw'}} src={lofi} alt="Low-Fidelity Prototype" />
              </div>
          </div>

          {/* High Fidelity Prototype */}
          <div className="high-fidelity">
              <h2>High-Fidelity Prototype</h2>
              <img style={{ width: '76vw'}} src={hifi} alt="High-Fidelity Prototype" />
              <p>Based on the feedback and the results of our paper, we developed a more advanced prototype. 
                This version included all the functionalities that were envisioned during the ideation phase.</p>
          </div>

          {/* Evaluation */}
          <div className="evaluation">
              <h2>Limitations and Future Work</h2>
              <p>As highlighted in our paper, we faced hardware limitations, particularly with the Arduino components. 
                Future work will focus on overcoming these limitations and incorporating more interactive elements, like distinct sounds for various actions.</p>
          </div>

          {/* Conclusion */}
          <div className="conclusion">
              <h2>Conclusion</h2>
              <p>Our design process was a comprehensive journey, involving multidisciplinary teams from environmental science to child psychology and hardware design. 
                With this toy, we aim to nurture eco-consciousness in children from a young age.</p>
          </div>
        </div>
    </div>
  );
};

export default Other1;
