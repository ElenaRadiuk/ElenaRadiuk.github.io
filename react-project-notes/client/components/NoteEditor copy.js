import React, {Component} from 'react';
import './NoteEditor.css';

class NoteEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: '',
            color: '#FFFFFF'
        }
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeNoteAdd = this.onChangeNoteAdd.bind(this);
    }   

    onChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    onChangeText(event) {
         this.setState({
             text: event.target.value
         });
     }

    onChangeNoteAdd(event) {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
        }
        this.props.onNoteAdd(newNote);
        this.setState({
            title: '',
            text: '',
            color: '#green'
        });
    }

    render() {
        return (
            <div className="NoteEditor">
                <input  type="text"
                        className='NoteEditor__title'
                        placeholder='Enter title'
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        />
                <textarea   placeholder="Enter text"
                            rows={5}
                            className="NoteEditor__text"
                            value = {this.state.text}
                            onChange = {this.onChangeText}
                            />
                <div className="NoteEditor__footer">
                    <button className="NoteEditor__button"
                            disabled={!this.state.text}
                            onClick={this.onChangeNoteAdd}>
                            Add
                    </button>
                </div>
            </div>
        );
    }
}

export default NoteEditor;