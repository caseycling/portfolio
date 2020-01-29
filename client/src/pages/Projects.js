import React from 'react';
import { render } from '@testing-library/react';
import weather from '../images/weather.jpg';
import barter from '../images/barter.png';
import gravel from '../images/gravel.png';
import shopping from '../images/shopping.png';
import recipe from '../images/recipe.jpg';

const Projects = () => {
    render()
    return (
        <div className="projectsContainer" style={pageStyle}>
            <div className="individualContainer" id="weatherApp" style={projectStyle}>
                <a href={'https://caseycling.github.io/weather-app/'} target={"_blank"}><img src={weather} alt="Project" style={imageStyle} /> </a>
                <div >
                    <h3 style={titleStyle}>Weather App</h3>
                </div>
                <div>
                    <a href={"https://github.com/caseycling/weather-app/"} target={"_blank"} style={linkStyle}>Check out the code</a>
                </div>
            </div>
            <div className="individualContainer" id="barterBud" style={projectStyle}>
                <a href={"https://secure-headland-57611.herokuapp.com/"} target={"_blank"}><img src={barter} alt="Project" style={imageStyle} /> </a>
                <div >
                    <h3 style={titleStyle}>Barter Bud</h3>
                </div>
                <div>
                    <a href={"https://github.com/caseycling/Project2"} target={"_blank"} style={linkStyle}>Check out the code</a>
                </div>
            </div>
            <div className="individualContainer" id="gravel" style={projectStyle}>
                <a href={"https://gravel-app.herokuapp.com/"} target={"_blank"}><img src={gravel} alt="Project" style={imageStyle} /> </a>
                <div >
                    <h3 style={titleStyle}>Gravel</h3>
                </div>
                <div>
                    <a href={"https://github.com/mrgmacandog/gravel"} target={"_blank"} style={linkStyle}>Check out the code</a>
                </div>
            </div>
            <div className="individualContainer" id="shopping" style={projectStyle}>
                <a href={"https://aqueous-forest-77948.herokuapp.com/"} target={"_blank"}><img src={shopping} alt="Project" style={imageStyle} /> </a>
                <div >
                    <h3 style={titleStyle}>Shopping-list App</h3>
                </div>
                <div>
                    <a href={"https://github.com/caseycling/MERN-stack"} target={"_blank"} style={linkStyle}>Check out the code</a>
                </div>
            </div>
            <div className="individualContainer" id="recipe" style={projectStyle}>
                <a href={"https://caseycling.github.io/recipeApp/"} target={"_blank"}><img src={recipe} alt="Project" style={imageStyle} /> </a>
                <div >
                    <h3 style={titleStyle}>Recipe Generator</h3>
                </div>
                <div>
                    <a href={"https://github.com/caseycling/recipeApp/"} target={"_blank"} style={linkStyle}>Check out the code</a>
                </div>
            </div>
        </div>
    )
}

//Objects for styling
let pageStyle = {
    marginLeft: "15%",
    paddingTop: "50px",
    overflow: "hidden"
}

let projectStyle = {
    justifyContent: "center",
    float: "left",
    width: "28%",
    padding: "15px",

    border: "solid 1px black",
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    margin: "10px",
}

let imageStyle = {
    height: "250px",
    width: "100%",
    border: "solid 2px black"
}

let titleStyle = {
    textAlign: "center", 
    margin: 'auto' 
}

let linkStyle = {
    textDecoration: "none",
    justifyContent: "left"
}


export default Projects;