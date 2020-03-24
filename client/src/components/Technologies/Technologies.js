import React, { Component } from 'react';
import Headshot from '../../images/profilePic.jpg';
import './Technologies.css'

class Technologies extends Component {
    render() {
        return (
            <div style={Container}>
                <div className="techContainer" style={{
                    display: "block", height: "100%", paddingBottom: "50px", backgroundColor: "white", marginBottom: "60px"
                }} id="technologies">
                    <img src={Headshot} style={Image}></img>
                    <h3 style={{ marginTop: "20px" }}>About Me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="techContainer" id="technologies" style={{ backgroundColor: "white" }}>
                    <h2 style={HeaderStyle}>Technologies</h2>
                    <div class="content">
                        <div className="individualContainer" style={{ border: "none" }}>
                            <h3 style={{color: "black"}}>Languages/Frameworks </h3>
                            <ul style={{ listStyleType: "none", paddingTop: "5px", display: "inline-block" }}>
                                <li style={{color: "white", backgroundColor: "silver", width: "300px"}}>Javascript</li>
                                <li>React.js</li>
                                <li style={{color: "white", backgroundColor: "silver", width: "300px"}}>jQuery</li>
                                <li>CSS</li>
                                <li style={{color: "white", backgroundColor: "silver", width: "300px"}}>HTML</li>
                            </ul>
                        </div>
                        <div className="individualContainer" style={{ border: "none" }}>
                            <h3 style={{color: "black"}}>Database Management </h3>
                            <ul style={{ listStyleType: "none", paddingTop: "5px"  }}>
                                <li style={{color: "white", backgroundColor: "silver", width: "300px"}}>MongoDB</li>
                                <li>MERN-Stack</li>
                                <li style={{color: "white", backgroundColor: "silver", width: "300px"}}>MySQL</li>
                                <li>NoSQL</li>
                                <li style={{color: "white", backgroundColor: "silver", width: "300px"}}>AWS</li>
                            </ul>
                        </div>
                        <div className="individualContainer" style={{ border: "none" }}>
                            <h3 style={{color: "black"}}>Other Technologies</h3>
                            <ul style={{ listStyleType: "none", paddingTop: "5px" }}>
                                <li style={{color: "white", backgroundColor: "silver", width: "300px"}}>Node.js</li>
                                <li>Passport</li>
                                <li style={{color: "white", backgroundColor: "silver", width: "300px"}}>NPM</li>
                                <li>Axios</li>
                                <li style={{color: "white", backgroundColor: "silver", width: "300px"}}>MVC Structure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//Styling Objects
let Container = {
    backgroundColor: "#e8eaf6",
    paddingTop: "5%",
    paddingBottom: "3%",
    marginBottom: "60px"
}

let Image = {
    width: "150px",
    height: "200px",
    margin: "20px",
    marginBottom: "30px",
    float: "left",
    borderRadius: "70px"
}

let HeaderStyle = {
    fontSize: "35px",
    fontFamily: "'Roboto', sans-serif",
    paddingTop: "20px",
    paddingBottom: "10px",
    marginLeft: "30px",
    textAlign: "center"
}

export default Technologies;