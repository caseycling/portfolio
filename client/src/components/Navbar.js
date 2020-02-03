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
    <div className="navContainer">
      <div style={{ background: Background }}>
        <ul className="navList">
          <li className="navName">Casey Cunningh</li>
          <li><img src={Profile} alt="project" className="navImage" /></li>
          <li><Link to='/' className="navLink">Home</Link></li>
          <li><Link to='/projects' className="navLink">Projects</Link></li>
          <li><Link to='/contact' className="navLink">Contact</Link></li>
          <div className="logoContainer">
            <li>
              <a href="https://github.com/caseycling" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="gitHub" id="navLogo" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/casey-clingaman-b670b5177/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="linkedIn" id="navLogo" /></a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;