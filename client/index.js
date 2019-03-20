import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import SkillsResume from './components/SkillsResume';
import ContactMe from './components/ContactMe';
import NavBar from './components/Navbar';
import BlogJS from './components/Blog';
import AboutMe from './components/AboutMe';
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
              <div className="navbar" style={style}>
                <NavBar />
              </div>
            );
          }}
        </Sticky>
        <div id="aboutMe">
          <AboutMe />
        </div>
        <div id="projects">
          <ProjectPage />
        </div>
        <div id="blog">
          <BlogJS />
        </div>
        <div className="skills-resume" id="skills">
          <SkillsResume />
        </div>
        <div className="contact-me" id="contactMe">
          <ContactMe />
        </div>
      </StickyContainer>
    </div>
  </div>,
  document.getElementById('app')
);
