import React from 'react';
import '../../App.css';
import NavagationBar from '../../components/Navbar/Navbar'
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact.js';
import Projects from '../../components/Projects/Projects';
import Technologies from '../../components/Technologies/Technologies.js';
import Footer from '../../components/Footer/Footer.js'

function Home() {
  return (
    <div className="home">
        <NavagationBar />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
       
    </div >
  );
}

export default Home;



