import React, {Component} from 'react';
import './Note.css'

// const Note = ({note, onDelete, props}) => {
    
export class Note extends Component  {
        constructor(props) {
            super(props);
        }
        render() {
    console.log(this.props.id)

    // deleteContact(e, index){
    //     e.preventDefault();
    //     this.props.deleteContact(index);
    //   }

    return(
    <div className = "Note" id={this.props.id}>
    <div>
    <span className="Note__delete-icon" onClick={() => this.props.deleteNote(this.props.id)}>x</span>
    {
        this.props.title 
        ?
        <h2 className="Note__title">Title: {this.props.title}</h2>
        :
        null
    }
    <p className="Note__text">Text: {this.props.text}</p>
    </div>
    </div>
    )
}
}

export default Note;