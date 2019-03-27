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
            <span>who am i?</span>
          </h1>
          <div className="projectparagraph">
            <p>
              I am a full-stack developer aspiring to participate in progressive
              projects that truly pushes at the constraints of everyday
              normality. Technology is progressive in nature, and I aim to
              master as many as I can to better the lives of others. I live by
              Muhammad Ali’s famous quote:
              {/* Hello, I am Shaun Tung. I am a full-stack developer. I love creating and participating in progressive projects that push the constraints of conventionality.

"Float like a butterfly, sting like a bee." - Muhammad Ali (put the quote in italics rather than bold)

I adapt and always evolve, like a butterfly, to stay ahead with advances in technology. In my work, I am effective and productive like a bee. */}
            </p>
          </div>
          <p className="MAliQuote">
            “Float like a butterfly, sting like a bee.”
          </p>
          <p>
            I adapt to the situation and evolve like a butterfly, and am
            effective and productive like a bee.
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
