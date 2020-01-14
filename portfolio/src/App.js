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
        <Route exact path="/">
          <React.Fragment>
          <Home />
          </React.Fragment>
        </Route>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Contact" component={Contact}/>
      </Router>
    </div >
  );
}

export default App;
