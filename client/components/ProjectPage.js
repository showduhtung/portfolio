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
    stack:
      'JavaScript, HTML5, CSS3, Node, Express, AJAX, PostgreSQL, Sequelize, OAuth, Material-UI',
  },
  {
    path: '/resources/img/IMG_3399.jpg',
    title: 'Wolfram Beta',
    author: 'showduhtung',
    href: 'https://github.com/showduhtung/wolframBeta',
    h2: 'Wolfram Beta',
    span: 'An interactive problem solver',
    p:
      'Wolfram Beta is an incredibly powerfully built website capable of solving any mathematical equation. ',
    projectId: 2,
    stack:
      'JavaScript, React, HTML5, CSS3, Node, Express, AJAX, PostgreSQL, Sequelize, OAuth, Material-UI',
  },

  {
    path: '/resources/img/IMG_3301.jpg',
    title: 'City Snapper',
    author: 'Spied-Limes',
    href: 'https://github.com/spied-limes/CitySnapper',
    h2: 'City Snapper',
    span: 'An interactive tourist adventure',
    p:
      'An interactive scavenger hunt app for tourists to learn, discover and explore the city as they go along. Built as a serverless mobile app with a cloud-based backend component, this project exemplifies an ideal progressively modern app.',
    projectId: 3,
    stack:
      'JavaScript, React, React Native, HTML5, CSS3, Node, Firebase, Expo, Sequelize, OAuth, Material-UI',
  },
];

class ProjectPage extends React.Component {
  render() {
    return (
      <div className="project-page">
        <h1 className="project-Title ">
          <span> Take a look at some of my work（^_^）</span>
        </h1>
        <div className="project-container">
          {tileData.map(tile => (
            <div className="single-project" key={tile.projectId}>
              <div className="leftColumn">
                <h2 className="titleOfProject">
                  <span>
                    {tile.projectId}. {tile.title}
                  </span>
                </h2>
                <div className="bodyofProject">
                  <p className="projectDescripto">
                    <b>Descrption:</b> {tile.p}
                  </p>
                  <p className="tech">
                    <b>Tech used:</b> {tile.stack}
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
      </div>
    );
  }
}

export default ProjectPage;
