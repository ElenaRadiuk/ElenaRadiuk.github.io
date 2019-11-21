import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const inititalState = {};

// create func for config Stor

const loggerMiddleware = createLogger();

export default function configureStore() {
    return createStore(
        rootReducer,
        inititalState,
        applyMiddleware(thunk, loggerMiddleware)
        );
}