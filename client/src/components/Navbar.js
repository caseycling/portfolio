import React from 'react';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import Github from '../images/githubLogo.png'
import Linkedin from '../images/linkeInLogo.png'
import Profile from '../images/profilePic.jpg';
import Background from '../images/navbackground.jpg';


const Navbar = () => {
  render()
  return (
    <div style={{ background: Background }}>
      <ul style={listStyle}>
        <li style={nameStyle}>Casey Clingaman</li>
        <li><img src={Profile} alt="project" style={pictureStyle} /></li>
        <li><Link to='/' className="navLink" style={{ marginTop: "205" }}>Home</Link></li>
        <li><Link to='/projects' className="navLink">Projects</Link></li>
        <li><Link to='/contact' className="navLink">Contact</Link></li>
        <li>
          <a href="https://github.com/caseycling" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="gitHub" style={logoStyle} /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/casey-clingaman-b670b5177/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="linkedIn" style={logoStyle} /></a>
        </li>
      </ul>
      <div>

      </div>
    </div>
  )
}

//Styling objects
let listStyle = { 
  fontFamily: 'Arial Black', 
  borderRight: "2px groove black", 
  boxShadow: "0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
  backgroundImage: Background 
}

let nameStyle = { 
  fontFamily: 'Arial Black', 
  fontSize: "30px", 
  marginTop: "30%", 
  fontStyle: "bolder", 
  textShadow: "1px 1px #000000" 
}

let pictureStyle = {
  height: "120px", 
  width: "100px",
  marginTop: "25px", 
  border: "3px solid black", 
  borderRadius: "20px" 
}

let logoStyle = { 
  height: "50px", 
  width: "50px", 
  marginTop: "25px" 
}

export default Navbar;