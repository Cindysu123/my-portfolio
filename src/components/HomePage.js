// Import required modules and assets
import React from 'react';
import '../assets/css/Home.css';

// Define HomePage component
const HomePage = () => {

  // Render HomePage component
  return (
    <div className="homepage">
        <div className='intro'>
          <p className='hello'>👋HELLO, </p>
          <h1 className="homepage__intro">
            I'm Cindy! I'm a designer passionate about integrating design with technology to craft impactful solutions to real-world challenges.
          </h1>
        </div>
    </div>
  );
};

// Export HomePage component
export default HomePage;