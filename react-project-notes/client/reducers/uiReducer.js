import initialState from './initialState';

export default function uiReducer(state=initialState.ui, action) {
    switch(action.type) {
        case "TOGGLE_NOTES_FORM": {
            return {
                ...state, isAddNotesFormHidden: !state.isAddNotesFormHidden
            }
        }
        default: return state;
    }
}