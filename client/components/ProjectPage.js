import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

const tileData = [
  {
    img: '/resources/img/IMG_3104.jpg',
    title: 'Grace Shopper',
    author: 'jill111',
    featured: true,
  },
  {
    img: '/resources/img/IMG_3399.jpg',
    title: 'Wolfram Beta',
    author: 'director90',
  },

  {
    img: '/resources/img/IMG_3301.jpg',
    title: 'City Snapper',
    author: 'Danson67',
  },
];
const styles = theme => ({
  root: {
    display: 'flex',
    objectFit: 'cover',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
    objectFit: 'cover',
  },

  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullHeight: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'relative',
    left: '100%',
    // objectFit: 'cover',
  },
  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullWidth: {
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '100%',
    // objectFit: 'cover',
  },
});

const ProjectPage = props => {
  console.log('project page props: ', props);
  const { classes } = props;
  return (
    <div>
      This is the ProjectPage
      <div>
        <GridList
          cellHeight={600}
          cols={3}
          imgFullHeight={classes.imgFullHeight}
          imgFullWidth={classes.imgFullWidth}
        >
          {tileData.map(tile => (
            <GridListTile
              // className={classes.gridList}
              key={tile.img}
              imgFullHeight={classes.imgFullHeight}
              imgFullWidth={classes.imgFullWidth}
            >
              <img src={tile.img} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default withStyles(styles)(ProjectPage);
