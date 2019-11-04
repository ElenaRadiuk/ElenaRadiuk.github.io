import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';

import configureStore from './store';

const store = configureStore();

// store.dispatch({
//     type: "SET_STATE",
//     state: {
//         notes: {
//             notesList: [],
//             newNote: {
//                 id: '7',
//                 title: '7',
//                 text: '7',
//                 name: '7'
//             },
//             searchText: 'a'
//         },
//         ui: {
//             isAddNotesFormHidden: true
//         }
//     }
//   });


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));