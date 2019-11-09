import axios from 'axios';
import store from '../store/index';
import {connect} from 'react-redux';
import {deleteNote, addNote, getListNotes} from '../actions/index'

// import {apiPrefix} from 'raw-loader!../../etc/config.json';
// const apiPrefix = require('../../etc/config.json');

export function loadNotes() {
    // return axios.get(`http://localhost:8080/notes`)
    //  .then(function (response) {
    //     store.dispatch(getListNotes(response.data));
    //      console.log(response);
    //  })

     return function (dispatch) { 
        axios.get(`http://localhost:8080/notes`)
          .then((response) => dispatch({
            type: 'GET_LIST_NOTES',
            notes: {notesList: [posts]}
          }).catch((response) => console.log(response) )
    )}

}

export function createNote(data) {
    return axios.post(`http://localhost:8080/notes`, data)
    // .then(() => loadNotes())
    .then(function (response) {
        console.log(response);
    })
    .catch(err =>
        console.error(err)
    );
}

export function deleteNoteApi(noteId) {
    return axios.delete(`http://localhost:8080/notes/${noteId}`)
        .then(response => {
            // store.dispatch(deleteNote(noteId));
            console.log(response.data);
            return response;
           
        })
        .catch(err => {
            console.log('error'),
            console.error(err)
        }
        );
}
