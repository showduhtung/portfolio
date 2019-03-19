import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
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

export default AboutMe;
