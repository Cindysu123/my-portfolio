// Import required modules and assets
import React from 'react';
import { useTrail, animated } from 'react-spring';
import '../assets/css/Home.css';

// Define HomePage component
const HomePage = () => {

  const helloText = "HELLO,";
  const items = helloText.split('');

  // Configure trail animations
  const trail = useTrail(items.length, {
    to: { opacity: 1, transform: 'translate3d(0, 0, 0) rotate(0deg)' },
    from: { opacity: 0, transform: 'translate3d(0, -40px, 0) rotate(180deg)' },
    delay: 200,
    config: { tension: 210, friction: 20 },
  });

  // Render HomePage component
  return (
    <div className="homepage">
      <div className='intro'>
        <div className='hello'>
          {trail.map((style, index) => (
            <animated.span style={style} key={index}>
              {items[index]}
            </animated.span>
          ))}
        </div>
        <h1 className="homepage__intro">
          I'm Cindy! I'm a designer passionate about integrating design with technology to craft impactful solutions to real-world challenges.
        </h1>
      </div>
    </div>
  );
};

// Export HomePage component
export default HomePage;
