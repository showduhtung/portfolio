import React from 'react';
import ProjectPage from './ProjectPage';
import SkillsResume from './SkillsResume';
import AboutMeContact from './AboutMeContact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = props => {
  return (
    <div>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <div id="container">
            <div id="navbar">
              <Button to="/projectPage">Projects</Button>
              <Button to="/skillsResume"> Go to Skills and Resume Page</Button>
              <Button to="/aboutMeContact">
                Go to About Me and Contact Page
              </Button>
            </div>

            {/* <div id="main-section">
              <Route path="/projectPage" component={ProjectPage} />
              <Route path="/skillsResume" component={SkillsResume} />
              <Route path="/aboutMeContact" component={AboutMeContact} />
            </div> */}
          </div>
        </Toolbar>
      </AppBar>
      {/* <Router>
        <div id="container">
          <div id="navbar">
            <Link to="/projectPage"> Go to Project Page</Link>
            <Link to="/skillsResume"> Go to Skills and Resume Page</Link>
            <Link to="/aboutMeContact"> Go to About Me and Contact Page</Link>
          </div>

          <div id="main-section">
            <Route path="/projectPage" component={ProjectPage} />
            <Route path="/skillsResume" component={SkillsResume} />
            <Route path="/aboutMeContact" component={AboutMeContact} />
          </div>
        </div>
      </Router> */}
    </div>
  );
};

export default NavBar;
