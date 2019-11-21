import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { Provider } from 'react-redux';
// import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authentication';
// import store from '../store'

// import store from '../store/index';

import configureStore from '../store/index';

const store = configureStore();

// import NoteEditor from './NoteEditor';
// import NotesList from './NotesList';
import Notes from '../container/Notes'

import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import Home from './Home';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  console.log(store)
  console.log(decoded)
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}
// onChangeNoteAdd(data) {
//   console.log(data)
// };
class App extends Component {
  render() {
  return (
    <div className="App">
      {/* <header className="App-header">
       NOTES
      </header>
      <Notes /> */}
       <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
                <Route exact path="/" component={ Home } />
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                </div>
            </div>
          </Router>
        </Provider>


      {/* <NoteEditor onNoteAdd={this.onChangeNoteAdd}/> */}
      {/* <NoteEditor />
      <NotesList /> */}
    </div>
  );
}
}
export default App;
// export default connect(null, mapDispatchToProps)(App)