import React, { Component } from 'react';
import './Technologies.css'

class Technologies extends Component {
    render() {
        return (
            <div className="techContainer" id="technologies">
                <h2 style={HeaderStyle}>Technologies</h2>
                <p>A Collapsible:</p>
                <button type="button" class="collapsible">Open Collapsible</button>
                <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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