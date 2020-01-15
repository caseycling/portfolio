import React from 'react';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import Projects from '../pages/Projects'
import { BrowserRouter as Router, Route } from 'react-router-dom';



const Navbar = () => {
  render()
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/projects'>Projects</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  )
}

// function navStyle() {
//     return( {
//         color: "blue";
//         backgroundImage: url('/background.jpg')
//     })
// }

export default Navbar;