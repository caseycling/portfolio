import React, { Component } from 'react';
import Headshot from '../../images/profilePic.jpg';
import './Technologies.css'

class Technologies extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#e8eaf6", paddingTop: "5%", paddingBottom: "3%", marginBottom: "60px"}}>
                <div className="techContainer" style={{
                    display: "block", height: "100%", paddingBottom: "50px", 
                }} id="technologies">
                    <img src={Headshot} style={{ width: "150px", height: "200px", margin: "20px", marginBottom: "30px", float: "left" }}></img>
                    <h3 style={{ marginTop: "20px" }}>About Me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="techContainer" id="technologies">
                    <h2 style={HeaderStyle}>Technologies</h2>
                    <p>A Collapsible:</p>
                    <button type="button" class="collapsible">Open Collapsible</button>
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        )
    }
}

//Styling Objects
let HeaderStyle = {
    fontSize: "30px",
    fontFamily: "MontSerrat,Tahoma,Arial,sans-serif",
    paddingTop: "0px",
    marginLeft: "30px",
    textAlign: "justify"
}

export default Technologies;