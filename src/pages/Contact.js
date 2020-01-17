import React from 'react';
import { render } from '@testing-library/react';
import '../../src/index.css'

const Contact = () => {
  render()
  return (
    <div class="contactContainer" style={{ marginLeft: "15%", marginRight: "5%", paddingTop: "50px"}}>
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

        <input type="submit" value="Submit" />

      </form>
    </div>
  )
}

export default Contact;