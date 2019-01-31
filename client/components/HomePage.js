import React from 'react';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography';
// import Sidebar from './Sidebar'

export default class HomePage extends React.Component {
  render() {
    console.log('hello', this);
    return (
      <div>
        <div className="front-page-text">
          <h1 className="quote-part-1">"QUALITY IS NOT AN ACT</h1>
          <h3 className="quote-part-2">IT IS A HABIT" - ARISTOTLE</h3>
          <h3 className="my-name">SHAUN TUNG</h3>
        </div>
      </div>
    );
  }
}
