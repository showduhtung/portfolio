import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="topAboutMeDiv">
        <div className="personalPicture">
          <img src="myPortfolio.jpg" className="aboutMePicture" />
        </div>
        <div className="aboutMeBlurb">
          <h1>
            <span>Who am I?</span>
          </h1>
          <div className="projectparagraph">
            <p>
              Hello, I am Shaun Tung. I am a full-stack developer. I love
              creating and participating in innovative projects that challenge
              the constraints of everyday normality. Technology is progressive,
              and I aim to master as many as I can to better the lives of
              others.
            </p>
          </div>
          {/* <p className="MAliQuote">
            “Float like a butterfly, sting like a bee.”
          </p> */}
          <p>
            You know the quote
            <i> "Float like a butterfly, sting like a bee" </i>
            by Muhammad Ali? I live by it. I adapt and always evolve, like a
            butterfly, to stay ahead with technological advances. In my work, I
            am effective and productive like a bee.
          </p>
        </div>
        <ul className="aboutMeIconList">
          <a
            href="https://github.com/showduhtung"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-5x" />
          </a>
          <a
            href="https://www.linkedin.com/in/shaun-tung-b2b59912/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-5x" />
          </a>
          <a
            href="https://www.facebook.com/shaun.tung"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-5x" />
          </a>
        </ul>
      </div>
    );
  }
}

export default AboutMe;
