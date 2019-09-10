import React, {Component} from 'react';

import './App.css';

import Header from "./component/Header";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import MyGallery from "./component/MyGallery";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";


function App() {
    return (
    <div className="App">
        <Header /> 

        <Slider />
        
        <MyGallery />

        <AboutUs />

        <Contact />

        <Footer />
    </div>
    );
}

export default App;
