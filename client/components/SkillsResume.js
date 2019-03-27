import React from 'react';

export default class Skills extends React.Component {
  componentDidMount() {
    require('./d3SkillTree.js');
  }

  render() {
    return (
      <div className="skills">
        <svg width="100vw" height="1300" id="skill-chart" />
      </div>
    );
  }
}
