import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-scroll';
import './Navbar.css';

const NavagationBar = () => {
  return (
    <Navbar bg='dark' variant='dark' className='navBar'>
      <Navbar.Brand style={{ marginLeft: '120px', fontSize: '30px' }}>
        C C
      </Navbar.Brand>
      <Nav>
        <Link
          className='link'
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ marginLeft: '1000px' }}
          href='#home'
        >
          Home
        </Link>
        <Link
          className='link'
          activeClass='active'
          to='technologies'
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          href='#features'
        >
          Technologies
        </Link>
        <Link
          className='link'
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          href='#features'
        >
          Projects
        </Link>
        <Link
          className='link'
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          href='#features'
        >
          Contact
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavagationBar;
