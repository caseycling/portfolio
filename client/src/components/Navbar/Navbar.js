
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { Link } from 'react-scroll';
import Github from '../../images/githubLogo.png'
import Linkedin from '../../images/linkeInLogo.png'
import Profile from '../../images/profilePic.jpg';
import Background from '../../images/navbackground.jpg';

class Navbar extends Component {
  render() {
    return (
        <div style={{ background: Background }}>
          <ul className="navList">
            <li className="navName" >Casey Clingaman </li>
            <li><img src={Profile} alt="project" className="navImage" /></li>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navLink">
                Home
            </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="technologies"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navLink">
                Technologies
            </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navLink">
                Projects
            </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navLink">
                Contact
            </Link>
            </li>
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
    )
  }
}

export default Navbar;
