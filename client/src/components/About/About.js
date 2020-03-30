import React from 'react';
import { render } from '@testing-library/react';
import './About.css'

const Home = () => {
	render()
	return (
		<div className="homeContainer" id="home">
			<div className="contentContainer">
				<h1 id="homeHeader">CASEY CLINGAMAN</h1>
				<p style={{ margin: "30px 5%", fontSize: "40px",  fontFamily: '"Maison Neue", Helvetica Neue, Helvetica, Arial, sans-serif', textAlign: "center", lineHeight: "1.30769em" }}> I'm a Seattle based web designer & front-end developer focused on clean, efficient and robust code.</p>
			</div>
			<div style={{display: "flex", justifyContent: "center"}}>
				<button className="about-btn">Learn more</button>
			</div>
			
		</div>
	)
}

export default Home;