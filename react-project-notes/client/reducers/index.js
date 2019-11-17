import {combineReducers} from 'redux';
import notesReducer from './notesReducer';
import uiReducer from './uiReducer';

import { authentication } from './authenticationReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    ui: uiReducer,
    authentication,
    users,
    alert
})

export default rootReducer;