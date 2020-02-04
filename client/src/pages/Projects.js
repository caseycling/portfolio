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
        <div className="projectsContainer">
            <div className="individualContainer" id="weatherApp" >
                <a href={'https://caseycling.github.io/weather-app/'} target={"_blank"}>
                    <img id="projectImage" src={weather}  alt="Project"  />
                </a>
                <div >
                    <h3 id="projectTitle">Weather App</h3>
                    <p>Single-page application built with React for searching the weather. After searching for a city, a request is sent to OpenWeatherMap and the resulting date and weather is displayed with background dynamically changing dependent on the temperature.</p>
                </div>
                <div>
                    <a id="projectLink" href={"https://github.com/caseycling/weather-app/"} target={"_blank"} >Check out the code</a>
                </div>
            </div>
            <div className="individualContainer" id="barterBud" >
                <a href={"https://secure-headland-57611.herokuapp.com/"} target={"_blank"}>
                    <img id="projectImage" src={barter}  alt="Project"  />
                </a>
                <div >
                    <h3 id="projectTitle">Barter Bud</h3>
                    <p>Barter Bud is a trading app. After creating and logging into an account using local authentication, users are able to post items they would like to barter with as well as browse items posted for-trade by other users. </p>
                </div>
                <div>
                    <a id="projectLink" href={"https://github.com/caseycling/Project2"} target={"_blank"} >Check out the code</a>
                </div>
            </div>
            <div className="individualContainer" id="gravel" >
                <a href={"https://gravel-app.herokuapp.com/"} target={"_blank"}><img id="projectImage" src={gravel}  alt="Project"  /></a>
                <div >
                    <h3 id="projectTitle">Gravel</h3>
                    <p>Car-pooling app which connects drivers and passengers. After creating and logging into an account using local authentication, users are able to make posts requesting or offering rides and see posts from other users. Lorem ipsum filler-mc-griller la la lorem fatompoin kroijls </p>
                </div>
                <div>
                    <a id="projectLink" href={"https://github.com/mrgmacandog/gravel"} target={"_blank"} >Check out the code</a>
                </div>
            </div>
            <div className="individualContainer" id="shopping" >
                <a href={"https://aqueous-forest-77948.herokuapp.com/"} target={"_blank"}><img id="projectImage" src={shopping}  alt="Project"  /></a>
                <div >
                    <h3 id="projectTitle">Shopping-list App</h3>
                </div>
                <div>
                    <a id="projectLink" href={"https://github.com/caseycling/MERN-stack"} target={"_blank"} >Check out the code</a>
                </div>
            </div>
            <div className="individualContainer" id="recipe" >
                <a href={"https://caseycling.github.io/recipeApp/"} target={"_blank"}>
                    <img id="projectImage" src={recipe}  alt="Project"  />
                </a>
                <div >
                    <h3 id="projectTitle">Recipe Generator</h3>
                </div>
                <div>
                    <a id="projectLink" href={"https://github.com/caseycling/recipeApp/"} target={"_blank"} > Check out the code</a>
                </div>
            </div>
        </div>
    )
}


export default Projects;