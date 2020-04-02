import React from 'react';
import { render } from '@testing-library/react';
import CarouselTest from '../Carousel/Carousel';
import './Projects.css'

const Projects = () => {

    render()
    return (
            <div className="projectsContainer" id="projects" >
                <h3 style={HeaderStyle}>Stuff I've Built</h3>
                <div className="individualContainer" style={CarouselStyle}>
                    <CarouselTest/>
                </div>
            </div>
    )
}

//Styling objects

let HeaderStyle = {
    fontSize: "35px",
    fontFamily: "Roboto, sans-serif",
    paddingTop: "15px",
    marginLeft: "30px",
    textAlign: "center"
}

let CarouselStyle = {
    width: "100%",
    marginLeft: "10px",
    padding: "20px 20px 20px 20px",
    marginTop: "0px",
    border: "none",
    boxShadow: "none"
}

export default Projects;