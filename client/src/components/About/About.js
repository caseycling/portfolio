import React from 'react';
import { Link } from 'react-scroll';
import { render } from '@testing-library/react';
import './About.css';

const Home = () => {
  return (
    <div className='home-container' id='home'>
      <div className='content-container'>
        <h1 id='home-header'>CASEY CLINGAMAN</h1>
        <p className='home-content'>
          I'm a Seattle based web designer & front-end developer focused on
          clean, efficient and robust code.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className='about-btn'>
          <Link
            className='about'
            activeClass='active'
            to='technologies'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {' '}
            Learn more
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
