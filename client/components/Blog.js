import React from 'react';

const blogTiles = [
  {
    path: '/resources/img/gvisionAPI.jpg',
    title: 'Getting started with Google Vision API on NodeJS (Text Detection)',
    author: 'Shaun Tung',
    href: 'https://medium.com/p/f8fadfcefd3e/edit',
    h2: 'Getting started with Google Vision API on NodeJS (Text Detection)',
    span: 'Getting started with Google Vision API on NodeJS (Text Detection)',
    p:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus quam at orci commodo, quis fringilla enim suscipit. Quisque sed ante ac arcu rutrum condimentum sed sed mauris. Suspendisse sodales dignissim nulla, et auctor sapien. Nunc sed sem sit amet sapien pellentesque hendrerit.',
  },
  {
    path: '/resources/img/gvisionAPI.jpg',
    title: 'Getting started with Google Vision API on NodeJS (Text Detection)',
    author: 'Shaun Tung',
    href: 'https://medium.com/p/f8fadfcefd3e/edit',
    h2: 'Getting started with Google Vision API on NodeJS (Text Detection)',
    span: 'Getting started with Google Vision API on NodeJS (Text Detection)',
    p:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus quam at orci commodo, quis fringilla enim suscipit. Quisque sed ante ac arcu rutrum condimentum sed sed mauris. Suspendisse sodales dignissim nulla, et auctor sapien. Nunc sed sem sit amet sapien pellentesque hendrerit.',
  },
];

class BlogJS extends React.Component {
  render() {
    return (
      <div className="blog-page">
        <h1 className="blog-Title"> Blogs</h1>

        <div className="container">
          {blogTiles.map(tile => (
            <div className="card-tiles" key={tile.path}>
              <a href={tile.href} target="_blank" rel="noopener noreferrer">
                <img src={tile.path} className="img-box" />
              </a>
              <div className="content">
                <h2>{tile.h2}</h2>
                <span>{tile.span}</span>
                <p>{tile.p}</p>
                <a href={tile.href} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-medium fa-3x" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogJS;
