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

    handleSubmit(e, state) {
        e.preventDefault();
        this.props.onToggle();
        this.props.onFormSubmit();

        userApi.createNote({...this.props.newNote});
        console.log({...this.props.newNote})
    }

    renderForm() {
        return(
            <NoteEditor {...this.props.newNote} onFormSubmit={this.handleSubmit} onInputChange={this.handleInputChange} />
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

// приклеиваем данные из store
function mapStateToProps(state) {
    return {
        isHidden: state.ui.isAddNotesFormHidden,
        newNote: state.notes.newNote
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFormSubmit: (newNote) => {
            console.log('dispatch add');
            dispatch(addNote(newNote));
        },
        onInputChange: (name, value) => {
            dispatch(handleInputChange(name, value))
        },
        onToggle: () => {
            console.log('dispatch toggle');
            dispatch(toggleNotesForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote)