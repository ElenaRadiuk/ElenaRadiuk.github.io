import React, {Component} from 'react';
import {connect} from 'react-redux';
import NoteEditor from '../components/NoteEditor';
import {addNote, handleInputChange, toggleNotesForm} from '../actions';

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

    handleSubmit(e) {
        e.preventDefault();
        this.props.onToggle();
        this.props.onFormSubmit();
    }

    renderForm() {
        return(
            <NoteEditor onFormSubmit={this.handleSubmit} onInputChange={this.handleInputChange} />
        )
    }

    render() {
        return(
            <div>
                {this.props.isHidden === false ? this.renderForm() : <button className="btn btn-secondary" style= {{ "marginLeft": "15px"}} type="submit" onClick={this.showAddNoteBox}>ADD NOTE</button>}
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