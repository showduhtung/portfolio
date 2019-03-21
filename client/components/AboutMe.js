import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="topAboutMeDiv">
        <div className="personalPicture">
          <img src="myPortfolio.jpg" className="aboutMePicture" />
        </div>
        <div className="aboutMeBlurb">
          <p>
            I am a full-stack developer aspiring to participate in progressive
            projects that truly pushes at the constraints of everyday normality.
            Technology is progressive in nature, and I aim to master as much as
            I can to better the lives of others. I live by Muhammad Ali’s famous
            quote:
          </p>
          <p className="MAliQuote">
            “Float like a butterfly, sting like a bee.”
          </p>
          <p>
            I am adaptable and capable like a butterfly, but observant and
            effective like a bee.
          </p>
          <ul>
            <a
              href="https://github.com/showduhtung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-3x" />
            </a>
            <a
              href="https://www.linkedin.com/in/shaun-tung-b2b59912/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-3x" />
            </a>
            <a
              href="https://www.facebook.com/shaun.tung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-3x" />
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default AboutMe;
