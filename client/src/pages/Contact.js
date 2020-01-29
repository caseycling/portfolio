import React from 'react';
import '../../src/index.css';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to: 'caseyclinga@gmail.com',
      from: '',
      subject: '',
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.emailApi();
  };

  emailApi = () => {
    let sendgridObj = {
      to: 'caseyclinga@gmail.com',
      from: this.state.from,
      subject: this.state.subject,
      text: this.state.text
    }
    this.resetState();
    axios.post('/contact', sendgridObj)
      .then(res => console.log(`CONTACT.JS RESPONSE: ${res}`))
      .catch(err => console.log(`CONTACT.JS ERROR: ${err}`));
  }

  //Clear form after submitting
  resetState = () => {
    this.setState({
      from: '',
      subject: '',
      text: ''
    })
  }

  render() {
    return (
      <div className="contactContainer" style={contactStyle}>
        <h3 style={{ fontSize: "30px" }}>Lets chat</h3>
        <form action="action_page.php">

          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={this.state.from}
            id="email"
            name="from"
            onChange={this.handleChange}
            placeholder="Your email.."
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            value={this.state.subject}
            id="subject" name="subject"
            onChange={this.handleChange}
            placeholder="Subject.."
          />

          <label htmlFor="comment">Comment</label>
          <textarea
            value={this.state.text}
            id="text" name="text"
            onChange={this.handleChange}
            placeholder="Write something.."
            style={{ height: "200px", margin: "auto" }}>
          </textarea>

          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

  //Styling objects
  let contactStyle = {
    marginLeft: "16%",
    marginRight: "5%", 
    padding: "50px", 
    paddingTop: "20px", 
    alignContent: "center", 
    border: "solid 2px black "
}

export default Contact;