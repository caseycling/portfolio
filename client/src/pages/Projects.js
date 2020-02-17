import React from 'react';
import { render } from '@testing-library/react';
import weather from '../images/weather.jpg';
import barter from '../images/barter.png';
import gravel from '../images/gravel.png';
import shopping from '../images/shopping.png';
import recipe from '../images/recipe.jpg';
import CarouselTest from '../components/Carousel';

const Projects = () => {

    render()
    return (
        <div className="projectsContainer" id="projects">
            <div className="individualContainer">
                <CarouselTest 
                    autoplay={true}
                />
            </div>


            {/* <h3 style={{ fontSize: "30px", fontFamily: "fantasy", textAlign: "left", margin: "15px", padding: "15px"}}>Stuff I've Built</h3>

            <div className="individualContainer" id="barterBud">
                <a href={"https://secure-headland-57611.herokuapp.com/"} target={"_blank"}>
                    <img id="projectImage" src={barter} alt="Project" />
                </a>
                <div >
                    <h3 id="projectTitle">Barter Bud</h3>
                    <p>Barter Bud is a trading app. Users are able to sign up and log in with a unique account where they can upload items for trade and browse other user's items. MongoDB saves pictures and descriptions posted to the site through a RESTfulAPI and the user can post, update or delete them.  </p>
                </div>
                <div>
                    <a id="projectLink" href={"https://github.com/caseycling/Project2"} target={"_blank"} >Check out the code</a>
                </div>
            </div>
            <div className="individualContainer" id="gravel" >
                <a href={"https://gravel-app.herokuapp.com/"} target={"_blank"}><img id="projectImage" src={gravel} alt="Project" /></a>
                <div >
                    <h3 id="projectTitle">Gravel</h3>
                    <p>Car-pooling app which connects drivers and passengers. After creating and logging into an account using local-auth, users are able to make posts requesting or offering rides and see rides from other users. Once a ride is selected, contact information is displayed for communication. </p>
                </div>
                <div>
                    <a id="projectLink" href={"https://github.com/mrgmacandog/gravel"} target={"_blank"} >Check out the code</a>
                </div>
            </div>
            <div className="individualContainer" id="shopping" >
                <a href={"https://caseyclingaman.herokuapp.com/"} target={"_blank"}><img id="projectImage" src={shopping} alt="Project" /></a>
                <div >
                    <h3 id="projectTitle">Shopping-list App</h3>
                    <p>A simple shopping list application using the MERN stack. Implemented react-strap for styling the app along with Redux for state managment. Using a RESTful API and MongoDB, list items can be added for display, updated with a line-through or deleted for removal</p>
                </div>
                <div>
                    <a id="projectLink" href={"https://github.com/caseycling/MERN-stack"} target={"_blank"} >Check out the code</a>
                </div>
            </div>
            <div className="individualContainer" id="recipe" >
                <a href={"https://caseycling.github.io/recipeApp/"} target={"_blank"}>
                    <img id="projectImage" src={recipe} alt="Project" />
                </a>        
                    <h3 id="projectTitle">Recipe Generator</h3>
                    <p> App for finding recipes. Upon entering an ingredient in the search bar, the Edmam API is queried for recipes relative to the search term. The resulting JSON response object is then passed in as props to the recipe component which then displays  the top ten resulting recipes </p>
                <div>
                    <a id="projectLink" href={"https://github.com/caseycling/recipeApp/"} target={"_blank"} > Check out the code</a>
                </div>
            </div>
            
            <div className="individualContainer" id="weatherApp" >
                <a href={'https://caseycling.github.io/weather-app/'} target={"_blank"}>
                    <img id="projectImage" src={weather} alt="Project" />
                </a>
                <div >
                    <h3 id="projectTitle">Weather App</h3>
                    <p>Single-page application built with React for searching the weather. After searching for a city, a request is sent to OpenWeatherMap and the resulting date and weather is displayed with background dynamically changing dependent on the temperature.</p>
                </div>
                <div>
                    <a id="projectLink" href={"https://github.com/caseycling/weather-app/"} target={"_blank"} >Check out the code</a>
                </div>
            </div> */}
        </div>
    )
}


export default Projects;