import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddNote from './AddNote';
import NotesList from '../components/NotesList';
// import NoteEditor from '../components/NoteEditor';
import {fetchNotes} from '../actions';
// import { stat } from 'fs';

class Notes extends Component {

    constructor(props) {
        super(props);
        this.returnNoteList = this.returnNoteList.bind(this);
    }

    returnNoteList() {
        return this.props.notesList;
    }
    
    render() {

        return(
            <div>
                <AddNote />
                <NotesList notesList={this.returnNoteList()} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        notesList: state.notes.notesList,
        searchText: state.notes.searchText
    }
}

function mapDispatchToProps(dispatch) {
    return {
      fetchAllNotes: () => dispatch(fetchNotes())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (Notes);