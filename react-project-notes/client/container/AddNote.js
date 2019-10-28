import React, {Component} from 'react';
import {connect} from 'react-redux';
import NoteEditor from '../components/NoteEditor';
import {addNote, handleInputChange, toggleNotesForm} from '../actions';
import * as userApi from '../api/api';
import './AddNote.css'

class AddNote extends Component {
    constructor(props) {
        super(props);

        this.showAddNoteBox = this.showAddNoteBox.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showAddNoteBox() {
        const { onToggle } = this.props;
        onToggle();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name);

        const { onInputChange } = this.props;
        onInputChange(name, value);
    }

    handleSubmit(e, data) {
        e.preventDefault();
        this.props.onToggle();
        this.props.onFormSubmit();

        userApi.createNote(data);
    }

    renderForm() {
        return(
            <NoteEditor onFormSubmit={this.handleSubmit} onInputChange={this.handleInputChange} />
        )
    }

    render() {
        return(
            <div className="AddNote__wrapper"> 
                {this.props.isHidden === false ? this.renderForm() : <button className="addNote__btn" style= {{ "marginLeft": "15px"}} type="submit" onClick={this.showAddNoteBox}><span>ADD NOTE</span></button>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isHidden: state.ui.isAddNotesFormHidden,
        newNote: state.notes.newNote
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFormSubmit: (newNote) => {
            dispatch(addNote(newNote));
        },
        onInputChange: (name, value) => {
            dispatch(handleInputChange(name, value))
        },
        onToggle: () => {
            dispatch(toggleNotesForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote)