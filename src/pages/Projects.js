import React from 'react';
import { render } from '@testing-library/react';
import Image from '../images/mtBaker.jpg'
const Projects = () => {
    render()
    return (
        <div className="projectImage" style={containerStyle} >
            <img src={Image} alt="Project" style={style} />
            <div >
                <h3 style={{ textAlign: "center", padding: "10px 20px"}}>Project</h3>
            </div>
        </div>
    )
}

let containerStyle = {
    width: "25%",
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginBottom: "25px"
}

let style = {
    backgroundImage: `url(${Image})`,
    width: "80%",
    height: "250px",
    margin: "10px 0px -20px"
}
export default Projects;