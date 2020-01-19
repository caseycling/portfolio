import React from 'react';
import { render } from '@testing-library/react';
import '../../src/index.css';
import SgMail from '@sendgrid/mail';

const Contact = () => {
  render()
  
  let emailAPI = (e) => {
    e.preventDefault()
    
    SgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'caseyclinga@gmail.com',
      from: 'test@example.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    SgMail.send(msg)
    .then(res => console.log(res))
  };

  return (
    <div className="contactContainer" style={{ marginLeft: "16%", marginRight: "5%", paddingTop: "50px" }}>
      <form action="action_page.php">

        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

        <input type="submit" value="Submit" onClick={emailAPI} />

      </form>
    </div>
  )
}

export default Contact;