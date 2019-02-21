import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import Link from '@material-ui/core/Link';
// import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import tileData from './tileData';

const tileData = [
  {
    path: '/resources/img/IMG_3104.jpg',
    title: 'Grace Shopper',
    author: 'Flying Irons',
    href: 'https://github.com/Flying-Irons/Grace-Shopper',
    h2: 'Grace Shopper',
    span: 'A graceful shopping experience',
    p:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus quam at orci commodo, quis fringilla enim suscipit. Quisque sed ante ac arcu rutrum condimentum sed sed mauris. Suspendisse sodales dignissim nulla, et auctor sapien. Nunc sed sem sit amet sapien pellentesque hendrerit.',
  },
  {
    path: '/resources/img/IMG_3399.jpg',
    title: 'Wolfram Beta',
    author: 'showduhtung',
    href: 'https://github.com/showduhtung/wolframBeta',
    h2: 'Wolfram Beta',
    span: 'An interactive problem solver',
    p:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus quam at orci commodo, quis fringilla enim suscipit. Quisque sed ante ac arcu rutrum condimentum sed sed mauris. Suspendisse sodales dignissim nulla, et auctor sapien. Nunc sed sem sit amet sapien pellentesque hendrerit.',
  },

  {
    path: '/resources/img/IMG_3301.jpg',
    title: 'City Snapper',
    author: 'Spied-Limes',
    href: 'https://github.com/spied-limes/CitySnapper',
    h2: 'City Snapper',
    span: 'An interactive tourist adventure',
    p:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus quam at orci commodo, quis fringilla enim suscipit. Quisque sed ante ac arcu rutrum condimentum sed sed mauris. Suspendisse sodales dignissim nulla, et auctor sapien. Nunc sed sem sit amet sapien pellentesque hendrerit.',
  },
];
const styles = theme => ({
  root: {
    display: 'block',
    objectFit: 'cover',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
    objectFit: 'cover',
    height: '604px',
  },

  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class ProjectPage extends React.Component {
  render() {
    console.log('project page this: ', this);
    console.log('this.props: ', this.props);
    console.log(tileData);

    return (
      <div className="project-page">
        this is the project page
        <div className="container">
          {tileData.map(tile => (
            <div className="grid-tiles" key={tile.path} data-aos="fade-up">
              >
              <a href={tile.href} target="_blank" rel="noopener noreferrer">
                <img src={tile.path} className="img-box" />
              </a>
              <div className="content">
                <h2>{tile.h2}</h2>
                <span>{tile.span}</span>
                <p>{tile.p}</p>
                <a href={tile.href} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github fa-3x" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectPage);
