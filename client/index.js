import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import SkillsResume from './components/SkillsResume';
import AboutMe from './components/AboutMeContact';
import NavBar from './components/Navbar';
import { Controller, Scene } from 'react-scrollmagic';
import { StickyContainer, Sticky } from 'react-sticky';
import AOS from 'aos';

// AOS.init({ offset: 500, duration: 600, easing: 'ease-in-sine', delay: 200 });
ReactDOM.render(
  <div>
    <div className="home-page" id="homePage">
      <HomePage />
    </div>
    <div>
      <StickyContainer className="stickycontainer">
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

        <div id="projects">
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
