import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import { FaSmileWink } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

const NavBar = props => {
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const handleClose = () => {
          updateAnchorEl(null);
        };
        return (
          <React.Fragment>
            <Button
              style={{
                fontSize: '0.20em',
                fontFamily: 'Anonymous Pro',
                color: '#e8c14a',
                // textTransform: 'lowercase',
              }}
            >
              <Link
                activeClass="active"
                to="homePage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Home
              </Link>
            </Button>
            <Button
              style={{
                fontSize: '0.20em',
                fontFamily: 'Anonymous Pro',
                color: '#e8c14a',
                // textTransform: 'lowercase',
              }}
            >
              <Link
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                About Me
              </Link>
            </Button>
            <Button
              style={{
                fontSize: '0.20em',
                fontFamily: 'Anonymous Pro',
                color: '#e8c14a',
                // textTransform: 'lowercase',
              }}
            >
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Projects
              </Link>
            </Button>
            <Button
              style={{
                fontSize: '0.20em',
                fontFamily: 'Anonymous Pro',
                color: '#e8c14a',
                // textTransform: 'lowercase',
              }}
            >
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Skills
              </Link>
            </Button>
            <Button
              style={{
                fontSize: '0.20em',
                fontFamily: 'Anonymous Pro',
                color: '#e8c14a',
                // textTransform: 'lowercase',
              }}
            >
              <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Blogs
              </Link>
            </Button>
            <Button
              style={{
                fontSize: '0.20em',
                fontFamily: 'Anonymous Pro',
                color: '#e8c14a',
                // textTransform: 'lowercase',
              }}
            >
              <Link
                activeClass="active"
                to="contactMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleClose}
              >
                Contact Me
              </Link>
            </Button>
          </React.Fragment>
        );
      }}
    </WithState>
  );
};

export default NavBar;
