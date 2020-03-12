
import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { render } from '@testing-library/react';
import { Link } from 'react-scroll';
import Github from '../../images/githubLogo.png'
import Linkedin from '../../images/linkeInLogo.png'
import Profile from '../../images/profilePic.jpg';
import Background from '../../images/navbackground.jpg';
import './Navbar.css'

class NavagationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" className="navBar">
            <Navbar.Brand  style={{marginLeft: "120px", fontSize: "30px"}}>C C</Navbar.Brand>
            <Nav >
                <Link 
                    className="link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ marginLeft: "900px"}}
                    href="#home"
                     >Home
                </Link>
              <Link 
                    className="link" 
                    activeClass="active"
                    to="technologies"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    href="#features">Technologies
                </Link>
              <Link 
                    className="link" 
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    href="#features">Projects
                </Link>
              <Link 
                    className="link" 
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    href="#features">Contact
                </Link>

            </Nav>
          </Navbar>
    )
    }
}
    //         <div style={{ background: Background }}>
    //           <ul className="navList">
    //             <li className="navName" >Casey Clingaman </li>
    //             <li><img src={Profile} alt="project" className="navImage" /></li>
    //             <li>
    //               <Link
    //                 activeClass="active"
    //                 to="home"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-70}
    //                 duration={500}
    //                 className="navLink">
    //                 Home
    //             </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 activeClass="active"
    //                 to="technologies"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-70}
    //                 duration={500}
    //                 className="navLink">
    //                 Technologies
    //             </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 activeClass="active"
    //                 to="projects"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-70}
    //                 duration={500}
    //                 className="navLink">
    //                 Projects
    //             </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 activeClass="active"
    //                 to="contact"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-70}
    //                 duration={500}
    //                 className="navLink">
    //                 Contact
    //             </Link>
    //             </li>
    //             <div className="logoContainer">
    //               <li>
    //                 <a href="https://github.com/caseycling" target="_blank" rel="noopener noreferrer">
    //                   <img src={Github} alt="gitHub" id="navLogo" /></a>
    //               </li>
    //               <li>
    //                 <a href="https://www.linkedin.com/in/casey-clingaman-b670b5177/" target="_blank" rel="noopener noreferrer">
    //                   <img src={Linkedin} alt="linkedIn" id="navLogo" /></a>
    //               </li>
    //             </div>
    //           </ul>
    //         </div>
    //     )
    //   }
    // }

    export default NavagationBar;
