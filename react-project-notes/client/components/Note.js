import React, {Component} from 'react';
import './Note.css'

const Note = ({note, props}) => {
    console.log(note)
    return(
    <div className = "Note" id={note._id}>
    <a href="#">
    {/* <span className="Note__delete-icon" onClick={props.deleteNote.bind(null, note._id)}>x</span> */}
    {
        note.title 
        ?
        <h2 className="Note__title">Title: {note.title}</h2>
        :
        null
    }
    <p className="Note__text">Text: {note.text}</p>
    </a>
    </div>
    )
}

export default Note;