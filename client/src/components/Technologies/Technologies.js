import React, { Component } from 'react';
import Headshot from '../../images/profilePic.jpg';
import './Technologies.css'

const Technologies = () => {
    return (
        <div style={Container}>
            <div className="techContainer" style={{
                display: "block", height: "100%", paddingBottom: "50px", backgroundColor: "white", marginBottom: "60px"
            }} id="technologies">
                <img src={Headshot} style={Image}></img>
                <h3 style={{ marginTop: "20px" }}>About Me</h3>
                <p>I am a full-stack web developer, passionate about turning ideas into reality. Experienced with front-end and back-end development, I enjoy the logical puzzles that come with software engineering and take pride in writting elegant, dry code. I am excited to apply the skills I've built as a developer in a challenging environment where I can grow as a professional and be a positive impact as a tea member. </p>
                <p> Outside of coding, I am a very driven home-chef and constantly am working on some sort of cooking or baking project. If I'm not in the kitchen, you can catch me at yoga (working off my latest culinary masterpiece), the comedy club or hanging with my cat.</p>
            </div>
            <div className="techContainer" id="technologies" style={{ backgroundColor: "white" }}>
                <h2 style={HeaderStyle}>Technologies</h2>
                <div class="content">
                    <div className="individualContainer" style={{ border: "none" }}>
                        <h3 style={{ color: "black" }}>Languages/Frameworks </h3>
                        <ul>
                            <li className="tech-list">Javascript</li>
                            <li className="tech-list">React.js</li>
                            <li className="tech-list">jQuery</li>
                            <li className="tech-list">CSS</li>
                            <li className="tech-list">HTML</li>
                        </ul>
                    </div>
                    <div className="individualContainer" style={{ border: "none" }}>
                        <h3 style={{ color: "black" }}>Database Management </h3>
                        <ul>
                            <li className="tech-list">MongoDB</li>
                            <li className="tech-list">MERN-Stack</li>
                            <li className="tech-list">MySQL</li>
                            <li className="tech-list">NoSQL</li>
                            <li className="tech-list">AWS</li>
                        </ul>
                    </div>
                    <div className="individualContainer" style={{ border: "none" }}>
                        <h3 style={{ color: "black" }}>Other Technologies</h3>
                        <ul>
                            <li className="tech-list">Node.js</li>
                            <li className="tech-list">Passport</li>
                            <li className="tech-list">NPM</li>
                            <li className="tech-list">Axios</li>
                            <li className="tech-list">MVC Structure</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
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