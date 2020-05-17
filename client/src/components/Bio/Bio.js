import React from 'react';
import Headshot from '../../images/profilePic.jpg';

function Bio() {
  return (
    <div>
      <div
        className='techContainer'
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 6fr 1fr',
          gridTemplateRows: '4em 1em 4em 4em 4em',
          height: '100%',
          paddingBottom: '50px',
          backgroundColor: 'white',
          marginBottom: '60px',
        }}
        id='technologies'
      >
        <img src={Headshot} style={Image}></img>
        <h3 style={{ marginTop: '20px', gridColumn: '2' }}>About Me</h3>
        <p style={{ gridColumn: '2/4', gridRowStart: '2/4' }}>
          I am a full-stack web developer, passionate about turning ideas into
          reality. Experienced with front-end and back-end development, I enjoy
          the logical puzzles that come with software engineering and take pride
          in writting elegant, dry code. I am excited to apply the skills I've
          built as a developer in a challenging environment where I can grow as
          a professional and be a positive impact as a tea member. <br></br>
          <br></br> Outside of coding, I am a very driven home-chef and
          constantly am working on some sort of cooking or baking project. If
          I'm not in the kitchen, you can catch me at yoga (working off my
          latest culinary masterpiece), the comedy club or hanging with my cat.
        </p>
      </div>
    </div>
  );
}

let Image = {
  width: '170px',
  height: '250px',
  margin: '20px',
  marginBottom: '30px',
  float: 'left',
  borderRadius: '70px',
};

export default Bio;
