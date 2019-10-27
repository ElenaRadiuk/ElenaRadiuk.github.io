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

class NotesList extends React.Component {
    constructor(props) {
        super(props)
       
    }

    render() {
        notes.note.map(note => console.log(note));
        return ( 
            <div className = "NotesList" >
                {
                    notes.note.map(note => 
                        <Note 
                            key={note.id}
                            title={note.title}
                        >
                        {note.text}
                        </Note>
                        )
                }
            </div>
        );
    }
}

export default NotesList;