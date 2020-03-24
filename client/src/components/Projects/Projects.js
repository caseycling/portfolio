import React from 'react';
import { render } from '@testing-library/react';
import CarouselTest from '../Carousel/Carousel';
import './Projects.css'

const Projects = () => {

    render()
    return (
            <div className="projectsContainer" id="projects" style={{ paddingBottom: "20px" }}>
                <h3 style={HeaderStyle}>Stuff I've Built</h3>
                <div className="individualContainer" style={CarouselStyle}>
                    <CarouselTest
                        autoplay={true}
                    />
                </div>
            </div>
    )
}

//Styling objects

let HeaderStyle = {
    fontSize: "30px",
    fontFamily: "MontSerrat,Tahoma,Arial,sans-serif",
    paddingTop: "0px",
    marginLeft: "30px",
    textAlign: "justify"
}

let CarouselStyle = {
    width: "100%",
    marginLeft: "10px",
    padding: "35px 20px 20px 20px",
    marginTop: "0px",
    border: "none"
}

export default Projects;