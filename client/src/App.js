import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects}/>        
        <Route path="/contact" component={Contact}/>
      </Router>
    </div >
  );
}

export default App;
