import React from 'react';

export default class Skills extends React.Component {
  componentDidMount() {
    require('./d3SkillTree.js');
  }

  render() {
    return (
      <div className="skills">
        <h3 id="skills">Skills</h3>
        <svg
          width="1200"
          height="1200"
          id="skill-chart"
          // style="width: 100%; height: auto;"
        />
      </div>
    );
  }
}
