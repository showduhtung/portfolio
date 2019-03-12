import React from 'react';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="front-page-name">
          <div className="front-page-name-name">
            <h1 style={{ fontWeight: 100 }}>
              <u>S</u>HAUN <u>TUNG</u>
              {/* <div>Welcome to My Portfolio</div> */}
            </h1>
          </div>
          <div className="front-page-name-welcome">
            <h1 style={{ fontWeight: 100 }}>Welcome to My Portfolio</h1>
          </div>
        </div>

        <div className="front-page-text">
          <h1 className="quote-part-1">"FLOAT LIKE A BUTTERFLY</h1>
          <h3 className="quote-part-2">STING LIKE A BEE" - M. ALI</h3>
        </div>
        <div className="front-page-blurb">
          <h2>My dad told me this quote when I was young.</h2>
          <h2>To float like a butterfly, and to be like a</h2>
          <h2>bee was to be adapable and effective.</h2>
        </div>
        <div className="front-page-moreblurb">
          <h2>You got problems?</h2>
          <h2>I got solutions</h2>
        </div>
      </div>
    );
  }
}
