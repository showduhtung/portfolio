import React from 'react';

//on submit, popup window thingy to thank for submitting
//on submit, will email me personally

//information about myself, icons and such

class ContactMe extends React.Component {
  render() {
    return (
      <div className="contactContainer">
        <h1 id="form">get in touch!</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="yourName">your name (required)</label>
          <input
            type="text"
            name="yourName"
            // value={this.state.taskName}
            // onChange={this.handleChange}
          />
          <label htmlFor="yourEmail">your email (required)</label>
          <input
            type="text"
            name="yourEmail"
            // value={this.state.assignee}
            // onChange={this.handleChange}
          />
          <label htmlFor="subject">subject</label>
          <input
            type="text"
            name="subject"
            // value={this.state.taskName}
            // onChange={this.handleChange}
          />
          <label htmlFor="yourMessage">your message</label>
          <input
            type="text"
            name="yourMessage"
            // value={this.state.assignee}
            // onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default ContactMe;
