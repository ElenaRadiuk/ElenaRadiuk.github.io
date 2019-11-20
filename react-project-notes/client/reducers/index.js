import {combineReducers} from 'redux';
import notesReducer from './notesReducer';
import uiReducer from './uiReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    ui: uiReducer,
    errors: errorReducer,
    auth: authReducer
})

export default rootReducer;