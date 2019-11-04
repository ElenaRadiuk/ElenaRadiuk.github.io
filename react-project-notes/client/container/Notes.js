import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import AddNote from './AddNote';
import NotesList from '../components/NotesList';
// import NoteEditor from '../components/NoteEditor';
import {fetchNotes} from '../actions';
// import { stat } from 'fs';
import * as notesApi from '../api/api';

import store from '../store/index'

import { bindActionCreators } from 'redux';
import * as notesAction from '../actions/index';


import axios from 'axios';
import { deleteNote } from '../../server/utils/DButils';


class Notes extends Component {
    
    constructor(props) {
        super(props);
        this.returnNoteList = this.returnNoteList.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        

        //  this.state = {
        //      notes: {notesList: []}
        //  };
    }

   
    componentDidMount() {
        console.log('this.props.fetchData')
        this.props.fetchData(`http://localhost:8080/notes`);
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
        notesApi.loadNotes();
        // console.log(userApi.loadNotes())
        // axios.get(`http://localhost:8080/notes`)
        //     .then(response => {
        //         console.log(response.data);
        //         const posts = response.data.map(obj => obj);
        //         console.log({posts});
                // this.setState({ notes: {
                //         notesList: posts
                //     }
                //  })

                //  store.dispatch({
                //     type: 'GET_LIST_NOTES',
                //     notes: {notesList: [posts]}
                //   });
                //  console.log(this.state.notes.notesList)
                //  console.log(this.props.notesList) 
        //         // .notes.notesList(posts)
        //         //  this.setState({
        //         //      notes: {
        //         //          notesList: response.data
        //         //      }
                //  })
            // })
    }

    handleNoteDelete(note) {
        console.log(note);
        notesApi.deleteNoteA(note._id);
        return this.props.notesList;
    }

    returnNoteList() {
        return this.props.notesList;
    }
    
    render() {
        // const { notesList: { notesList }, dispatch } = this.props;
        // const actions = bindActionCreators(notesAction, dispatch);
        return(
            <div className="app-wrapper">
                <AddNote />
                <h3 className="App-sub_header"> LIST NOTES </h3>
                {/* <NotesList notesList={this.returnNoteList()} {...this.props} onNoteDelete={this.handleNoteDelete}/> 
                <NotesList {...this.props} notesList={this.state.notes.notesList} onNoteDelete={this.handleNoteDelete}/> */}
                <NotesList notesList={this.props.notesList}/>

            </div>
        );
    }
}

// приклеиваем данные из store
function mapStateToProps(state) {
    console.log(state);
    console.log(state.notes.notesList);
    return {
        // notesList: state.notes.notesList,
        notesList: state.notes.notesList
        // searchText: state.notes.searchText
    }
    
}


function mapDispatchToProps(dispatch) {
    return {
        onNoteDelete: (notesList) => {
            console.log('del disp');
        dispatch(deleteNote(notesList));
        },
      fetchData: (url) => {
        console.dir(fetchNotes(url));
          dispatch(fetchNotes(url))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (Notes);
//   export default connect(mapStateToProps)(Notes)