import React, { useState, useEffect } from 'react';
import '../assets/css/Project3.css';
import bg0 from '../assets/images/project3img/bg0.png';
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

const Project3 = () => {
  const [showImages, setShowImages] = useState(false);
  const [imagePosition, setImagePosition] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        console.log(scrollPosition)
      if (scrollPosition < 200) {
        setImagePosition('top');
      } else if (scrollPosition >= 200 && scrollPosition < 800) {
        setImagePosition('center');
      } else if (scrollPosition >= 800) {
        setImagePosition('bottom');
      }

      setShowImages(scrollPosition <= 200);
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
    <div>
        <div className="project3">
            <div className= {`image-container ${showImages ? 'fade-in' : 'fade-out'}`}>
                <h1 className='text header1'>EcoMate</h1>
                <h2 className='text header2'>A Haptic Learning Tool for Teaching Children Recycling Practices</h2>
                <img className="bg-image1" src={bg1} alt="Background" />
                <img className="bg-image2" src={bg2} alt="Image" />
                <img className="bg-image0" src={bg0} alt="Image" />
            </div>
        </div>
        <img
                className={`content-image ${imagePosition}`}
                src={productImage}
                alt="Image"
                style={{ position: 'absolute' }}
        />
        <div className="feature">
            <h1 className={`text header4`}>Features</h1>
            <img class="f1" src={f1} alt="feature1" />
            <img class="f2" src={f2} alt="feature2" />
            <img class="f3" src={f3} alt="feature3" />
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
            <h1 className="text header5">How To Play</h1>
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
  );
};

export default Project3;
