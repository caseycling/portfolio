import React from 'react';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import '../../src/index.css'

const Navbar = () => {
  render()
  return (
    <ul >
      <li><Link to='/' className="navLink">Home</Link></li>
      <li><Link to='/projects' className="navLink">Projects</Link></li>
      <li><Link to='/contact' className="navLink">Contact</Link></li>
    </ul>
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