import React from 'react';
import { render } from '@testing-library/react';

const Home = () => {
    render()
    return (
        <div style={{paddingTop: "90px", marginLeft: "16%", paddingBottom: "0%"}}>
            <h1>Hi! Im Casey</h1>
            <h5 style={{ fontSize: "15px", marginTop:"0%"}}>FRONT END DEVELOPER</h5>
            <p style={{marginRight:"10%"}}>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.</p>
        </div>
    )
}

export default Home;