import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./component/Header";
import Footer from "./component/Footer";


const headerItem = [
  {
    id: 1,
    item: "Home",
    href: "#home",
    className: "menu-item"
  },
  {
    id: 2,
    item: "Portfolio",
    href: "#portfolio",
    className: "menu-item"
  },
  {
    id: 3,
    item: "About",
    href: "#about",
    className: "menu-item"
  },
  {
    id: 4,
    item: "Contact",
    href: "#contact",
    className: "menu-item"
  }
]

function App() {
    return (

    <div className="App">
        <Header
            menu="MENU sample"
        />

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
