import React from 'react';
import '../../App.css';
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact.js';
import Projects from '../../components/Projects/Projects';
import Technologies from '../../components/Technologies/Technologies.js'

function Home() {
  return (
    <div className="home">
        <Navbar />
        <About />
        <Technologies />
        <Projects />
        <Contact />
       
    </div >
  );
}

export default Home;



