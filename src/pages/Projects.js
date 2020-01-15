import React from 'react';
import { render } from '@testing-library/react';
import '../images/mtBaker.jpg'
const Projects = () => {
    render()
    return (
        <div className="projectContainer>">
                <h1 className="project" style={style}>Project</h1>
        </div>
    )
}

let style = {
    backgroundImage: URL()
}
export default Projects;