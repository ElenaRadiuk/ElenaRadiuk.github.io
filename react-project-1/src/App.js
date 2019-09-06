import React, {Component} from 'react';
import logo from './logo.svg';

import './App.css';

import Header from "./component/Header";
import Footer from "./component/Footer";



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

    return (

    <div className="App">
        <Header>list={headerItems}</Header> 

        

        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>

        <Footer>
            <li>example</li>
        </Footer>


    </div>
    );
}

export default App;
