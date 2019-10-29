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
    props.notesList.map(note => console.log(note.text))
    return(<div className = "NotesList" >
        
        {
            props.notesList.map(note => 
              <div>
              <span className="Note__delete-icon" onClick={props.deleteNote.bind(null, note._id)}>x</span>
                <Note 
                key={note._id} 
                note={note}
                onClick={props.deleteNote.bind(null, note._id)} />
                </div>
                )
        }
    </div>
    )
}

export default NotesList;