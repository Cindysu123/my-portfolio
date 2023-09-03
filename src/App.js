import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import UIDesignPage from './components/UIDesignPage';
import ProductDesignPage from './components/ProductDesignPage';
import DrawingsPage from './components/DrawingsPage';
import ContactPage from './components/ContactPage';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';

import './App.css';

const projectComponents = [Project1, Project2, Project3, Project4];

const RouteHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const route = urlParams.get('route');

    if (route) {
      navigate(route);
    }
  }, [navigate]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const mouseDown = () => {
      setIsClicked(true);
    };

    const mouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <div className="App">
      <div className={`cursor cursor-default ${isClicked ? 'cursor-clicked' : ''}`} style={{ left: mousePosition.x, top: mousePosition.y }}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {projectComponents.map((Project, index) => (
          <Route path={`/ui-design/${index + 1}`} element={<Project />} key={index} />
        ))}
        <Route path="/ui-design" element={<UIDesignPage />} />
        <Route path="/product-design" element={<ProductDesignPage />} />
        <Route path="/drawings" element={<DrawingsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ width: '90vw', height: '90vh', padding: '4vh 4vw' }}>
      <Router>
        <Navigation />
        <RouteHandler />
      </Router>
    </div>
  );
};

export default App;