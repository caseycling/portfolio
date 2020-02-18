import React from 'react';
import { render } from '@testing-library/react';

// import barter from '../images/barter.png';
// import gravel from '../images/gravel.png';

import CarouselTest from '../components/Carousel';

const Projects = () => {

    render()
    return (
        <div className="projectsContainer" id="projects" style={{paddingBottom: "40px" }}>
            <h3 style={{ fontSize: "30px", fontFamily: "MontSerrat,Tahoma,Arial,sans-serif", paddingTop: "0px", marginLeft: "30px", textAlign: "justify"  }}>Stuff I've Built</h3>
            <div className="individualContainer" style={{ width: "90%", marginLeft: "10px", padding: "35px 20px 20px 20px", marginTop: "0px", border: "2px solid silver" }}>
                <CarouselTest 
                    autoplay={true}
                />
            </div>
        </div>
    )
}


export default Projects;