import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NoteEditor from './NoteEditor';
import NotesList from './NotesList';
import Notes from '../container/Notes'
// import './components/NoteEditor.js';
// import logo from './logo.svg';
// import './App.css';

// onChangeNoteAdd(data) {
//   console.log(data)
// };
function App() {
  return (
    <div className="App">
      <header className="App-header">
       NOTES
      </header>
      <Notes />


      {/* <NoteEditor onNoteAdd={this.onChangeNoteAdd}/> */}
      {/* <NoteEditor />
      <NotesList /> */}
    </div>
  );
}

export default App;
