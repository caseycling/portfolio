import React from 'react';
import { render } from '@testing-library/react';

const Home = () => {
	render()
	return (

		<div id="homeContainer">
			<h1 id="homeHeader">Hi! Im Casey</h1>
			<h5 id="homeTitle">FULL-STACK DEVELOPER</h5>
			<p style={{ marginRight: "10%", fontSize: "20px", fontFamily: "fantasy" }}>Full-stack web developer with complete proficiency in fron-end and backend. Experienced with browser-based technologies as well as databases and server-side development. <br/> <br/>
		
			I am passionate about thoughtfully designed web-based applications with superior user experience in mind, turning ideas into reality.</p>
		</div>

	)
}

export default Home;