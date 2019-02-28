import React from 'react';

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

class ProjectPage extends React.Component {
  render() {
    return (
      <div className="project-page">
        <h1 className="project-Title"> Projects</h1>
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
        </div>
      </div>
    );
  }
}

export default ProjectPage;
