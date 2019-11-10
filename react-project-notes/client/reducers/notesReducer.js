import initialState from './initialState';
// import { stat } from 'fs';
// import { stat } from 'fs';

export default function notesReducer(state=initialState.notes, action) {
    switch(action.type) {
        case "ADD_NOTE":
                console.log(state)
            return {
                ...state,
                notesList: [...state.notesList, state.newNote]
            }
    
        case "DELETE_NOTE":
            // let filter = [state.notesList];
            // console.log(...state);
            console.log(state);
            const filterNote = state.notesList.filter((item) => item._id !== action.id);
            console.log(filterNote);
        return Object.assign({}, {notesList: filterNote});


        case "SEARCH_NOTES":
            // let filter = [state.notesList];
            // console.log(...state);
            console.log(action.searchText);
            const searchNote = state.notesList.filter((item) => item.name == action.searchText);
            console.log('SEARCH_NOTES');
        return Object.assign({}, {notesList: searchNote});
             
            //  notesList: state.notesList.filter(id => id !== action.id)
            // notesList: state.notesList.filter(id => id !== action.id)
            
            
            

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

        case "HANDLE_INPUT_CHANGE_SEARCH":
            return {
                ...state,
                searchText: action.value
            }    

        case "REQUEST_NOTES": 
            return {
                ...state,
                isFetching: true
            }   
            
        case "RECEIVE_NOTES": 
        console.log(state);
        console.log(action.notesList);
            return {
                ...state,
                isFetching: false,
                notesList: action.notesList
            }    
           
        default: return state;    
    }
}