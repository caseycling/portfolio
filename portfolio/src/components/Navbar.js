import React from 'react';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    render()
    return(
        <div className="container">
            <nav>
                <div className="navText">
                    <Link to="/" id="text">Home</Link> | 
                    <Link to="/contact" id="text">Contact </Link> |
                    <Link to="/projects"id="text">Projects </Link>
                </div>
            </nav>
        </div>
    )
}

// function navStyle() {
//     return( {
//         color: "blue";
//         backgroundImage: url('/background.jpg')
//     })
// }

export default Navbar;