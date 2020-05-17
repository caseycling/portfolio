import React, { Component } from 'react';
import Bio from '../Bio/Bio';
import './Technologies.css';

const Technologies = () => {
  return (
    <div style={Container}>
      <Bio />
      <div
        className='techContainer'
        id='technologies'
        style={{ backgroundColor: 'white' }}
      >
        <h2 style={HeaderStyle}>Technologies</h2>
        <div class='content'>
          <div className='individualContainer' style={{ border: 'none' }}>
            <h3 style={{ color: 'black' }}>Languages/Frameworks </h3>
            <ul>
              <li className='tech-list'>Javascript</li>
              <li className='tech-list'>React.js</li>
              <li className='tech-list'>jQuery</li>
              <li className='tech-list'>CSS</li>
              <li className='tech-list'>HTML</li>
            </ul>
          </div>
          <div className='individualContainer' style={{ border: 'none' }}>
            <h3 style={{ color: 'black' }}>Database Management </h3>
            <ul>
              <li className='tech-list'>MongoDB</li>
              <li className='tech-list'>MERN-Stack</li>
              <li className='tech-list'>MySQL</li>
              <li className='tech-list'>NoSQL</li>
              <li className='tech-list'>AWS</li>
            </ul>
          </div>
          <div className='individualContainer' style={{ border: 'none' }}>
            <h3 style={{ color: 'black' }}>Other Technologies</h3>
            <ul>
              <li className='tech-list'>Node.js</li>
              <li className='tech-list'>Passport</li>
              <li className='tech-list'>NPM</li>
              <li className='tech-list'>Axios</li>
              <li className='tech-list'>MVC Structure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

//Styling Objects
let Container = {
  backgroundColor: '#e8eaf6',
  paddingTop: '5%',
  paddingBottom: '3%',
  marginBottom: '60px',
};

let HeaderStyle = {
  fontSize: '35px',
  fontFamily: "'Roboto', sans-serif",
  paddingTop: '20px',
  paddingBottom: '10px',
  marginLeft: '30px',
  textAlign: 'center',
};

export default Technologies;
