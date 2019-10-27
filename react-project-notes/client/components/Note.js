import React, {Component} from 'react';
import './Note.css'

const Note = ({note}) => {
    return(
    <div className = "Note" >
    <a href="#">
    <span className="Note__delete-icon">x</span>
    dtetststsdg
    {
        note.title 
        ?
        <h2 className="Note__title">Title {note.title}</h2>
        :
        null
    }
    <p className="Note__text">{note.text}Text Content #1</p>
    </a>
    </div>
    )
}

export default Note;