import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar'

const Home = () => {
	render()
	return (
		<div>
			<div style={containerStyle}>
				<h1 style={headerStyle}>Hi! Im Casey</h1>
				<h5 style={titleStyle}>FRONT END DEVELOPER</h5>
				<p style={{ marginRight: "10%" }}>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.</p>
			</div>
		</div>
	)
}

//Styling objects
let containerStyle = {
	marginLeft: "16%",
	marginRight: "10%",
	padding: "40px",

	border: "3px solid black"
}

let headerStyle = {
	fontFamily: "Lucida Sans Unicode",
	letterSpacing: "normal"
}

let titleStyle = {
	fontSize: "15px",
	marginTop: "0%"
}

export default Home;