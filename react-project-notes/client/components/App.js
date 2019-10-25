import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NoteEditor from './NoteEditor';
// import './components/NoteEditor.js';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       NOTES
      </header>


      <NoteEditor />
      <ul>
    <li>
      <a href="#">
        <h2>Title #1</h2>
        <p>Text Content #1</p>
      </a>
    </li>
    <li>
      <a href="#">
        <h2>Title #2</h2>
        <p>Text Content #2</p>
      </a>
    </li>
    <li>
      <a href="#">
        <h2>Title #3</h2>
        <p>Text Content #3</p>
      </a>
    </li>
    </ul>
    </div>
  );
}

export default App;
