import React, {Component} from 'react';
import './Note.css'

const Note = ({note, onDelete}) => {
    console.log(note.id)
    return(
    <div className = "Note" id={note.id}>
    <div>
    <span className="Note__delete-icon" onClick={onDelete}>x</span>
    {
        note.title 
        ?
        <h2 className="Note__title">Title: {note.title}</h2>
        :
        null
    }
    <p className="Note__text">Text: {note.text}</p>
    </div>
    </div>
    )
}

export default Note;