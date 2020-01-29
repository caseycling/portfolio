import React from 'react';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import Github from '../images/githubLogo.png'
import Linkedin from '../images/linkeInLogo.png'
import Profile from '../images/profilePic.jpg';
import Background from '../images/navbackground.jpg';
import MtBaker from '../images/mtBaker.jpg'



const Navbar = () => {
  render()
  return (
    <div style={{ background: Background }}>
      <ul style={listStyle}>
        <li style={nameStyle}>Casey Clingaman</li>
        <li><img src={Profile} alt="project" style={pictureStyle} /></li>
        <li><Link to='/' className="navLink" style={linkStyle }>Home</Link></li>
        <li><Link to='/projects' className="navLink" style={linkStyle}>Projects</Link></li>
        <li><Link to='/contact' className="navLink" style={linkStyle}>Contact</Link></li>
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
  fontFamily: 'Sans Serif',
  listStyleType: "none",
  textAlign: "center",
  fontSize: "26px",
  marginTop: "0px",
  padding: "0",
  width: "200px",
  backgroundImage: `url(${Background})`,
  position: "fixed",
  height: "100%",
  borderRight: "2px groove black",
  boxShadow: "0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

let nameStyle = {
  fontFamily: 'Sans Serif',
  fontSize: "36px",
  marginTop: "30%",
  fontWeight: "bold",
  textShadow: "1px 1px #000000"
}

let pictureStyle = {
  height: "130px",
  width: "110px",
  marginTop: "25px",
  border: "6px solid black",
  // borderImage: `url(${MtBaker}) 30 round`,
  borderRadius: "20px",
  boxShadow: "0 10px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

}

let linkStyle = {
  marginTop: "10px",
  display: "block",
  color: "#000",
  padding: "15px 16px",
  textDecoration: "none",
  textShadow: "1px 1px 2px #000000",
  
}

let logoStyle = {
  height: "50px",
  width: "50px",
  marginTop: "25px"
}

export default Navbar;