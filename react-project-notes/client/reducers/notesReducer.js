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
            //  ...state,
            //  notesList: state.notesList.filter(id => id !== action.id)
            notesList: [...state.notesList].filter((data, i) => i !== action.id)
            }

        case "GET_LIST_NOTES":
        return {
                ...state,
                notesList: [...state.notesList]
            }    

        case "HANDLE_INPUT_CHANGE":
            return {
                ...state,
                newNote: {...state.newNote, ...action.payload}
            }

        case "REQUEST_NOTES": 
            return {
                ...state,
                isFetching: true
            }   
            
        case "RECEIVE_NOTES": 
            return {
                ...state,
                isFetching: false,
                notesList: action.notesList
            }    
           
        default: return state;    
    }
}