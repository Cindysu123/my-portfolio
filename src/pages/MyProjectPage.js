import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import project1 from '../assets/DesignImg/Project1/Desktop.png';
import project2 from '../assets/DesignImg/Project2/Desktop.png';
import project3 from '../assets/DesignImg/Project3/Desktop.png';
import project4 from '../assets/DesignImg/Project4/Desktop.png';
import project5 from '../assets/DesignImg/Project5/Desktop.png';

function ProjectsPage() {
  const projects = [
    { id: 1, image: project1, title: 'Website Design for Online Pet Adoption', description: 'A UI concept for a Pet finding website, which aims to streamline pet adoption to better match pets with the right adopters.' },
    { id: 2, image: project2, title: 'Website Design for Online Task Management', description: 'A task management application designed to enhance productivity with a touch of creativity to the daily routine.' },
    { id: 3, image: project3, title: 'Website Design for Weather Dashboard', description: 'A weather forecast dashboard that changes its look based on the time of day and the weather.' },
    { id: 4, image: project4, title: 'Water Tracking App', description: 'An app that connects to a weight sensor device for personalized water intake reminders' },
    { id: 5, image: project5, title: 'Student-Employer Connecting Platform Design', description: 'A platform that connects stdents with employers, making the job search and recruitment process more efficient' }
  ];

  return (
    <div className="projects-flex-container" style={{ padding: '2vw', margin:"4vw"}}>
      {projects.map((project, index) => (
        <div key={project.id} className="project-flex-item" style={{
          animation: `fadeIn 0.6s ease ${index * 0.3}s forwards`,
          opacity: 0
        }}>
          <Link to={`/project${project.id}`} style={{ textDecoration: 'none', color: '#333' }}>
            <div className="project-card" style={{ border: '2px solid black', borderRadius: '1vw', padding: '2vw' }}>
              <img src={project.image} alt={`Project ${project.id}`} style={{ width: '100%', borderRadius: '1vw' }} />
              <div style={{ marginTop: '1vw' }}>
                <div className="medium2Text">{project.title}</div>
                <div className="smallText" style={{ marginTop: '1vw' }}>{project.description}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectsPage;