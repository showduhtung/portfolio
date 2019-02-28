import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import SkillsResume from './components/SkillsResume';
import AboutMe from './components/AboutMeContact';
import NavBar from './components/Navbar';
import BlogJS from './components/Blog';
import { StickyContainer, Sticky } from 'react-sticky';

ReactDOM.render(
  <div>
    <div className="home-page" id="homePage">
      <HomePage />
    </div>
    <div>
      <StickyContainer className="stickycontainer">
        <Sticky>
          {({ style }) => {
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
        <div id="blog">
          <BlogJS />
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
