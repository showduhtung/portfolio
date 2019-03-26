import React from 'react';
function PID2className(pid) {
  //if (pid%2 ===1)
  return pid % 2 === 1 ? 'leftColumn' : 'rightColumn';
}
const tileData = [
  {
    path: '/resources/img/graceShopper.png',
    title: 'Grace Shopper',
    author: 'Flying Irons',
    href: 'https://github.com/Flying-Irons/Grace-Shopper',
    h2: 'Grace Shopper',
    span: 'A graceful shopping experience',
    p:
      'Grace Shopper is a simply designed e-commerce website with the powerful ability to store information on the client-side.',
    projectId: 1,
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
    projectId: 2,
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
    projectId: 3,
  },
];

class ProjectPage extends React.Component {
  render() {
    return (
      <div className="project-page">
        <h1 className="project-Title ">
          <span>Projects</span>
        </h1>
        <h2 className="project-h2">
          Take a look at some of the things I've done!
        </h2>

        <div className="project-container">
          {tileData.map(tile => (
            <div className="single-project" key={tile.projectId}>
              <div className="leftColumn">
                <h2 className="titleOfProject">
                  <span>{tile.title}</span>
                </h2>
                <div className="bodyofProject">
                  <p>{tile.p}</p>
                  <p className="tech">
                    <b>Tech used:</b> Fabric.js, Angular, JavaScript, HTML5,
                    CSS3, Node, Express, jQuery, AJAX, MySQL, Sequelize
                  </p>
                </div>
              </div>
              <div className="rightColumn">
                <a href={tile.href} target="_blank" rel="noopener noreferrer">
                  <img className="project2" src={tileData[0].path} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/*
        <div className="container">
          {tileData.map(tile => (
            <div className="grid-tiles" key={tile.path}>
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
        </div> */}
      </div>
    );
  }
}

export default ProjectPage;
