import React, {Component} from 'react';
import './Note.css'

class Note extends React.Component {
    constructor(props) {
        super(props)
       
    }

    render() {
        const style = {backgroundColor: this.props.color};
        return ( 
            <div className = "Note" >
                <a href="#">
                <span className="Note__delete-icon">x</span>
                {
                    this.props.title 
                    ?
                    <h2 className="Note__title">Title {this.props.title}</h2>
                    :
                    null
                }
                <p className="Note__text">{this.props.children}Text Content #1</p>
                </a>
            </div>
        );
    }
}

export default Note;