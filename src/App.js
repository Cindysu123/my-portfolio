import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyProjectPage from './pages/MyProjectPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-projects" element={<MyProjectPage />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;