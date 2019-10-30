import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddNote from './AddNote';
import NotesList from '../components/NotesList';
// import NoteEditor from '../components/NoteEditor';
import {fetchNotes} from '../actions';
// import { stat } from 'fs';
import * as notesApi from '../api/api';

import axios from 'axios';
import { deleteNote } from '../../server/utils/DButils';

class Notes extends Component {
    
    constructor(props) {
        super(props);
        this.returnNoteList = this.returnNoteList.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        

         this.state = {
             notes: {notesList: []}
         };
    }
    componentWillMount() {
    //    async function wait() {
    //        let response = await userApi.loadNotes();
    //        if (response.status == 200) {
    //             this.setState({
    //                 notes: {
    //                     notesList: response
    //                 }
    //             });
    //             console.log(response)
    //        }
    //     }
    //     wait()
        // userApi.loadNotes().then(result => {
        //     console.log(result)
        //     this.setState({
        //         notes: {
        //             notesList: result
        //         }
        //     })
        //     }
        //     )
        // )
            // console.log(result));
        
        // .then(console.log(userApi.loadNotes()))
        // userApi.loadNotes();
        // console.log(userApi.loadNotes())
        axios.get(`http://localhost:8080/notes`)
            .then(response => {
                console.log(response.data);
                const posts = response.data.map(obj => obj);
                console.log({posts});
                this.setState({ notes: {
                        notesList: posts
                    }
                 })
                 console.log(this.state.notes.notesList)
        //         // .notes.notesList(posts)
        //         //  this.setState({
        //         //      notes: {
        //         //          notesList: response.data
        //         //      }
                //  })
            })
    }

    handleNoteDelete(note) {
        console.log(note);
        notesApi.deleteNoteA(note._id);
    }

    returnNoteList() {
        return this.props.notesList;
    }
    
    render() {

        return(
            <div className="app-wrapper">
                <AddNote />
                <h3 className="App-sub_header"> LIST NOTES </h3>
                <NotesList notesList={this.returnNoteList()} onNoteDelete={this.handleNoteDelete}/>
                <NotesList notesList={this.state.notes.notesList} onNoteDelete={this.handleNoteDelete}/>
            </div>
        );
    }
}

// приклеиваем данные из store
function mapStateToProps(state) {
    console.log(state)
    return {
        notesList: state.notes.notesList,
        searchText: state.notes.searchText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteNote: (id) => {
        dispatch(deleteNote(id));
    },
      fetchAllNotes: () => dispatch(fetchNotes())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (Notes);