import React, {Component} from 'react';
import './NotesList.css'
import Note from './Note';

const notes = {
    "note": [
        {
          "id": 1,
          "title": "Note One",
          "text": "Text"
        },
        {
          "id": 2,
          "title": "Note 2",
          "text": "Text2"
        },
        {
            "id": 3,
            "title": "Note 3",
            "text": "Text3"
        }
      ]
}
console.log(notes.note.map(note => console.log(note.id)))
// console.log(notesList)
const NotesList = (props) => {
    // console.log(props.notesList.map(note => console.log(note)))
    return(<div className = "NotesList" >
        ewerwer
        {
            props.notesList.map(note => 
                <Note 
                    key={note.id}
                    note={note}
                > {note.text} </Note>
               
        )}
    </div>
    )
}

export default NotesList;