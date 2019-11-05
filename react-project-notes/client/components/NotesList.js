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
export class NotesList extends Component {
  constructor(props) {
    super(props);
}
// const NotesList = (props) => {
    // props.notesList.map(note => console.log(note.text))
    render() {
      console.log(this.props.notesList);
    return(
      <div className = "NotesList" >
       
        {
            this.props.notesList.map(note => 
                <Note 
                key={note.title + Math.random()} 
                id={note._id}
                name={note.name}
                title={note.title}
                text={note.text}
                note={note}
                deleteNote={this.props.deleteNote} 
                // {...this.props}
                 />
                
                )
        }
    </div>
    )
      }
// }
}

export default NotesList;