import React from 'react';

//on submit, popup window thingy to thank for submitting
//on submit, will email me personally

//information about myself, icons and such

class ContactMe extends React.Component {
  render() {
    return (
      <div className="contactContainer">
        <div className="contactBlurb">
          <h1>
            <span>Get in Touch!</span>
          </h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="yourName">Your name (required)</label>
          <input
            type="text"
            name="yourName"
            // value={this.state.taskName}
            // onChange={this.handleChange}
          />
          <label htmlFor="yourEmail">Your Email (required)</label>
          <input
            type="text"
            name="yourEmail"
            // value={this.state.assignee}
            // onChange={this.handleChange}
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            // value={this.state.taskName}
            // onChange={this.handleChange}
          />
          <label htmlFor="yourMessage">Your Message</label>
          <input
            type="text"
            name="yourMessage"
            // value={this.state.assignee}
            // onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactMe;
