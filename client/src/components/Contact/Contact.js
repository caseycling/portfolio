import React from 'react';
import './Contact.css';
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
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.emailApi();
  }

  emailApi = () => {
    let mailgunObj = {
      to: 'caseyclinga@gmail.com',
      from: this.state.from,
      subject: this.state.subject,
      text: this.state.text,
    };
    this.resetState();
    axios
      .post('/contact', mailgunObj)
      .then((res) => console.log(`CONTACT.JS RESPONSE: ${res}`))
      .catch((err) => console.log(`CONTACT.JS ERROR: ${err}`));
  };

  //Clear form after submitting
  resetState = () => {
    this.setState({
      from: '',
      subject: '',
      text: '',
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: 'rgb(232, 234, 246)',
          paddingTop: '.5%',
          paddingBottom: '3%',
        }}
      >
        <div className='contactContainer' id='contact'>
          <h3
            style={{
              fontSize: '35px',
              fontFamily: 'Roboto, sans-serif',
              paddingTop: '3%',
            }}
          >
            Lets chat
          </h3>
          <form action='action_page.php'>
            <div>
              <label className='contactLabel' htmlFor='email'>
                Email
              </label>
              <input
                className='contactInput'
                type='text'
                value={this.state.from}
                id='email'
                name='from'
                onChange={this.handleChange}
                placeholder='Your email..'
              />

              <label className='contactLabel' htmlFor='subject'>
                Subject
              </label>
              <input
                className='contactInput'
                type='text'
                value={this.state.subject}
                id='subject'
                name='subject'
                onChange={this.handleChange}
                placeholder='Subject..'
              />

              <label className='contactLabel' htmlFor='comment'>
                Comment
              </label>
              <textarea
                className='contactComment'
                value={this.state.text}
                id='text'
                name='text'
                onChange={this.handleChange}
                placeholder='Write something..'
              ></textarea>
            </div>

            <input type='submit' value='Submit' onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

//Styling objects
// let contactStyle = {
//   marginLeft: "16%",
//   marginRight: "5%",
//   padding: "50px",
//   paddingTop: "0px",
//   alignContent: "center",
//   border: "solid 2px black",
// }

// let inputStyle = {
//   border: "solid 2px  gray"
// }

// let commentStyle = {

// }

export default Contact;
