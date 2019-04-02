import React from 'react';

export default class Skills extends React.Component {
  componentDidMount() {
    require('./d3SkillTree.js');
  }

  render() {
    return (
      <div className="skills">
        <h1 className="these-skills">
          <span>What I can do</span>
        </h1>
        <h3 className="hover">(Hover over skills)</h3>
        <h5 className="hover2">
          (please refresh until entire table is in view)
        </h5>

        <div>
          <svg width="100vw" height="200vh" id="skill-chart" />
        </div>
      </div>
    );
  }
}
