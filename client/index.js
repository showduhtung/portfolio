import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import SkillsResume from './components/SkillsResume';
import AboutMe from './components/AboutMeContact';
import NavBar from './components/Navbar';
// import 'roboto-npm-webfont';

ReactDOM.render(
  <div>
    <div className="home-page">
      <HomePage />
    </div>
    {/* <NavBar /> */}
    <div className="project-page">
      <ProjectPage />
    </div>
    <div>
      <SkillsResume />
    </div>
    <div>
      <AboutMe />
    </div>
  </div>,
  document.getElementById('app')
);
