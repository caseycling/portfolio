import React from 'react';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import Github from '../images/githubLogo.png'
import Linkedin from '../images/linkeInLogo.png'
import Profile from '../images/profilePic.jpg';


const Navbar = () => {
  render()
  return (
    <div>
    <ul >
      <li style={{fontSize: "30px", marginTop: "30%", fontWeight: "bold"}}>Casey Clingaman</li>
    <li><img src={Profile} alt="linkedIn" style={{height: "120px", width: "120px", marginTop: "25px", border: "3px solid black", borderRadius: "20px" }}/></li>
      <li><Link to='/' className="navLink" style={{marginTop: "205"}}>Home</Link></li>
      <li><Link to='/projects' className="navLink">Projects</Link></li>
      <li><Link to='/contact' className="navLink">Contact</Link></li>
      <li><a href="https://github.com/caseycling" target="_blank"> 
        <img src={Github} alt="gitHub" style={{height: "50px", width: "50px", marginTop: "25px"}} /></a>
      </li>
      <li><a href="https://www.linkedin.com/in/casey-clingaman-b670b5177/" target="_blank">
        <img src={Linkedin} alt="linkedIn" style={{height: "50px", width: "50px", marginTop: "25px" }}/></a>
      </li>
    </ul>
    <div>
    
    </div>
    </div>
  )
}

// let navStyle = () => {
//   return ({
//     listStyleType: "none",

//     margin: "0",
//     padding: "0"
//   })
// }

// let linkStyle = {
//     display: "block",
//     width: "60px",
//     marginLeft: "0px",
//     :hover {
//       color: "purple"
//     }
// }
export default Navbar;