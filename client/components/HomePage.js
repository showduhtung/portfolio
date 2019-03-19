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
      </div>
    );
  }
}
