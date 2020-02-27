import React from 'react';
import { render } from '@testing-library/react';
import './About.css'

const Home = () => {
	render()
	return (

		<div className="homeContainer" id="home">
			<h1 id="homeHeader">Hi! Im Casey</h1>
			<h5 id="homeTitle">FULL-STACK DEVELOPER</h5>
			<p style={{ marginRight: "10%", fontSize: "20px", fontFamily: "fantasy" }}> Dynamic web developer, proficient with front-end and-backend technologies, database management as well as server-side development. <br/> <br/>
		
			I am passionate about thoughtfully designed web-based applications with superior user experience in mind, turning ideas into reality.</p>
		</div>

	)
}

export default Home;