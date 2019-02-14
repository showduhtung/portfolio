import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import SkillsResume from './components/SkillsResume';
import AboutMe from './components/AboutMeContact';
import NavBar from './components/Navbar';

import { StickyContainer, Sticky } from 'react-sticky';

ReactDOM.render(
  <div>
    <div className="home-page" id="homePage">
      <HomePage />
    </div>
    <div>
      <StickyContainer className="container">
        <Sticky>
          {({ style }) => {
            console.log('helloooo', style);
            return (
              <div className="menu" style={style}>
                <NavBar />
              </div>
            );
          }}
        </Sticky>

        <div className="project-page" id="projects">
          <ProjectPage />
        </div>

        <div className="skills-resume" id="skills">
          <SkillsResume />
        </div>
        <div className="about-me" id="aboutMe">
          <AboutMe />
        </div>
      </StickyContainer>
    </div>
  </div>,
  document.getElementById('app')
);
