import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Projects />
        <Contact />
       
    </div >
  );
}

export default App;
