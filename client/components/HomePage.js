import React from 'react';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="front-page-text">
          <h1 className="quote-part-1">"FLOAT LIKE A BUTTERFLY</h1>
          <h3 className="quote-part-2">STING LIKE A BEE" - M. ALI</h3>
          {/* <h3 className="my-name">SHAUN TUNG</h3> */}
        </div>
        <div className="front-page-blurb">
          <h2>My dad told me this quote when I was young.</h2>
          <h2>To float like a butterfly, but to be like a</h2>
          <h2>bee was to be adapable and effective.</h2>
        </div>
      </div>
    );
  }
}
