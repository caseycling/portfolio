import React from 'react';
import { render } from '@testing-library/react';
import Image from '../images/mtBaker.jpg'
const Projects = () => {
    render()
    return (
        <div className="projectsContainer" style={pageStyle}>
            <div className="individualContainer" style={projectStyle}>
                <a href={'https://www.facebook.com'} target={"_blank"}><img src={Image} alt="Project" style={{ height: "250px", width: "100%" }} /> </a>
                <div >
                    <h3 style={{ textAlign: "center", margin: 'auto' }}>Weather App</h3>
                </div>
            </div>
            <div className="projectContainer" style={projectStyle}>
                <a href={'https://www.facebook.com'} target={"_blank"}><img src={Image} alt="Project" style={{ height: "250px", width: "100%" }} /> </a>
                <div >
                    <h3 style={{ textAlign: "center", margin: 'auto' }}>Weather App</h3>
                </div>
            </div>
            <div className="projectContainer" style={projectStyle}>
                <a href={'https://www.facebook.com'} target={"_blank"}><img src={Image} alt="Project" style={{ height: "250px", width: "100%" }} /> </a>
                <div >
                    <h3 style={{ textAlign: "center", margin: 'auto' }}>Weather App</h3>
                </div>
            </div>
            <div className="projectContainer" style={projectStyle}>
                <a href={'https://www.facebook.com'} target={"_blank"}><img src={Image} alt="Project" style={{ height: "250px", width: "100%" }} /> </a>
                <div >
                    <h3 style={{ textAlign: "center", margin: 'auto' }}>Weather App</h3>
                </div>
            </div>
            <div className="projectContainer" style={projectStyle}>
                <a href={'https://www.facebook.com'} target={"_blank"}><img src={Image} alt="Project" style={{ height: "250px", width: "100%" }} /> </a>
                <div >
                    <h3 style={{ textAlign: "center", margin: 'auto' }}>Weather App</h3>
                </div>
            </div>
            <div className="projectContainer" style={projectStyle}>
                <a href={'https://www.facebook.com'} target={"_blank"}><img src={Image} alt="Project" style={{ height: "250px", width: "100%" }} /> </a>
                <div >
                    <h3 style={{ textAlign: "center", margin: 'auto' }}>Weather App</h3>
                </div>
            </div>
        </div>
    )
}

let pageStyle = {
    marginLeft: "15%",
    paddingTop: "30px",
}

let projectStyle = {
    justifyContent: "center",
    float: "left",
    width: "28%",
    padding: "15px",

    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    margin: "10px",

}


export default Projects;