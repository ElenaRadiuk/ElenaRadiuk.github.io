import axios from 'axios';
import store from '../store/index';
import {deleteNote, addNote, getListNotes} from '../actions/index'

// import {apiPrefix} from 'raw-loader!../../etc/config.json';
// const apiPrefix = require('../../etc/config.json');

export function loadNotes(notesId) {
    return axios.get(`http://localhost:8080/notes`);
}

export function createNote(data) {
    return axios.post(`http://localhost:8080/notes`, data)
    .then(response => {
       store.dispatch(addNote(data));
       return response;
    }).then(() => loadNotes())
    .catch(err =>
        console.error(err)
    );
}

export function deleteNoteA(notesId) {
    return axios.delete(`http://localhost:8080/notes/${notesId}`)
        .then(response => {
            store.dispatch(deleteNote(notesId));
            return response;
        })
        .catch(err =>
            console.error(err)
        );
}
