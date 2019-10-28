import initialState from './initialState';
// import { stat } from 'fs';

export default function notesReducer(state=initialState.notes, action) {
    switch(action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                notesList: [...state.notesList, state.newNote]
            }
    
        case "DELETE_NOTE":
        return {
             ...state,
             notesList: state.notesList.filter(id => id !== action.id)
            }

        case "HANDLE_INPUT_CHANGE":
            return {
                ...state,
                newNote: {...state.newNote, ...action.payload}
            }

        case "REQUEST_CONTACTS": 
            return {
                ...state,
                isFetching: true
            }   
            
        case "RECEIVE_CONTACTS": 
            return {
                ...state,
                isFetching: false,
                notesList: action.payload
            }    

        default: return state;    
    }
}