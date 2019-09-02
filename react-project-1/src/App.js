import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import AppHeader from "./component/AppHeader";
import Footer from "./component/Footer";

function App() {
    return (

    <div className="App">
        <AppHeader></AppHeader>

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

        <Footer></Footer>


    </div>
    );
}

export default App;
