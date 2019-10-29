import axios from 'axios';
import store from '../store/index';
import {deleteNote, addNote, getListNotes} from '../actions/index'

// import {apiPrefix} from 'raw-loader!../../etc/config.json';
// const apiPrefix = require('../../etc/config.json');

export function loadNotes(notesId) {
    return axios.get(`http://localhost:8080/notes`)
     .then(function (response) {
         console.log(response);
     })
}

export function createNote(data) {
    return axios.post(`http://localhost:8080/notes`, data)
    .then(() => loadNotes())
    .then(function (response) {
        console.log(response);
    })
    .catch(err =>
        console.error(err)
    );
}

export function deleteNoteA(noteId) {
    return axios.delete(`http://localhost:8080/notes/${noteId}`)
        .then(response => {
            store.dispatch(deleteNote(noteId));
            console.log(response.data);
            return response;
           
        })
        .catch(err => {
            console.log('error'),
            console.error(err)
        }
        );
}
