import React, {Component} from 'react';
import './Note.css'

// const Note = ({note, onDelete, props}) => {
    
export class Note extends Component  {
        constructor(props) {
            super(props);
        }
        render() {
    console.log(this.props.id);
    console.log(this.props._id)
    console.log(this.props.color)

    // deleteContact(e, index){
    //     e.preventDefault();
    //     this.props.deleteContact(index);
    //   }

    return(
    <div className = "Note" id={this.props.id}>  
    <div style={{backgroundColor:this.props.color}}>
    <div className="Note__pin"><img src="pin.png" /> </div>
    <span className="Note__delete-icon" onClick={() => this.props.deleteNote(this.props.id)}>x</span>
    {
        this.props.title 
        ?
        <h2 className="Note__title">Title: {this.props.title}</h2>
        :
        null
    }
    <p className="Note__text">Text: {this.props.text}</p>
    <p className="Note__auth">by {this.props.name}</p>
    </div>
    </div>
    )
}
}

export default Note;