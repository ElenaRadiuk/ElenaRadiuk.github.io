import React, {Component} from 'react';
// import Gallery from "react-photo-gallery";
import logo from './logo.svg';

import './App.css';

// import { photos } from "./data-gallery";

import Header from "./component/Header";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import MyGallery from "./component/MyGallery";
import AboutUs from "./component/AboutUs";



const headerItems = [
  {
    id: 1,
    title: "Home",
    href: "#home",
    className: "menu-item"
  },
  {
    id: 2,
    title: "Portfolio",
    href: "#portfolio",
    className: "menu-item"
  },
  {
    id: 3,
    title: "About",
    href: "#about",
    className: "menu-item"
  },
  {
    id: 4,
    title: "Contact",
    href: "#contact",
    className: "menu-item"
  }
]

const headerItems2 = ["a", "b", "c"]

function App() {
  // const BasicRows = () => <Gallery photos={photos} />;

    return (

    <div className="App">
        <Header /> 

        <Slider />
        
        <MyGallery />

        <AboutUs />

        <Footer>
            <li>example</li>
        </Footer>


    </div>
    );
}

export default App;
