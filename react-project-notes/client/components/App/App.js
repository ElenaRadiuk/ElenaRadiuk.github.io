import React, {Component} from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import NoteEditor from '../NoteEditor';
import NotesList from '../NotesList';
// import Notes from '../../container/Notes'
// import './components/NoteEditor.js';
// import logo from './logo.svg';
// import './App.css';

import { history } from '../../_helpers';
import { alertActions } from '../../actions/alertActions';
import { PrivateRoute } from '../../components/PrivateRoute';
import { HomePage } from '../../HomePage';
import { LoginPage } from '../../LoginPage';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        NOTES
//       </header>
//       <Notes />
//     </div>
//   );
// }
// export default App;

class App extends React.Component {
  constructor(props) {
      super(props);

      const { dispatch } = this.props;
      history.listen((location, action) => {
          // clear alert on location change
          dispatch(alertActions.clear());
      });
  }


  render() {
      const { alert } = this.props;
      return (
          <div className="jumbotron">
              <div className="container">
                  <div className="col-sm-8 col-sm-offset-2">
                      {/* {alert.message &&
                          <div className={`alert ${alert.type}`}>{alert.message}</div>
                      } */}
                      <Router history={history}>
                          <div>
                              hhhhhhhhhhhhhhhhhhhhhhhhh
                              <PrivateRoute exact path="/" component={HomePage} />
                              <Route path="/login" component={LoginPage} />
                          </div>
                      </Router>
                  </div>
              </div>
          </div>
      );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

// const connectedApp = connect(mapStateToProps)(App);
// export { connectedApp as App }; 

export default connect(mapStateToProps) (App);