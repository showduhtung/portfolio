import React from 'react';
import { Transform } from 'stream';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="front-page-headline">
          <div>
            <h1 style={{ fontWeight: 100 }}>
              <u>S</u>HAUN <u>TUNG</u>
            </h1>
          </div>
          <div>
            <h1 style={{ fontWeight: 100 }}>Welcome to My Portfolio</h1>
          </div>
        </div>

        <div className="front-page-text">
          <h1
            className="quote-part-1"
            style={{ fontWeight: 100, backgroundColor: 'yellow' }}
          >
            "FLOAT LIKE A BUTTERFLY
          </h1>
          <h3
            className="quote-part-2"
            style={{ fontWeight: 100, backgroundColor: 'yellow' }}
          >
            STING LIKE A BEE" - M. ALI
          </h3>
        </div>
        <div className="front-page-blurb">
          <h2 style={{ backgroundColor: 'orange' }}>
            My dad told me this quote when I was young.
          </h2>
          <h2 style={{ backgroundColor: 'orange' }}>
            To float like a butterfly, and to be like a
          </h2>
          <h2 style={{ backgroundColor: 'orange' }}>
            bee was to be adaptable and effective.
          </h2>
        </div>
        <div className="front-page-moreblurb">
          <h2 style={{ backgroundColor: 'red' }}>You got problems?</h2>
          <h2 style={{ backgroundColor: 'red' }}>I got solutions</h2>
        </div>
      </div>
    );
  }
}
