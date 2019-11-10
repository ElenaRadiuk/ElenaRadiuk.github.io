import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchForm from '../components/SearchForm';
import {fetchNotes, addNote, handleInputChangeSearch, toggleNotesForm, searchNotesByName} from '../actions';
import * as userApi from '../api/api';


class SearchContainer extends Component {
    constructor(props) {
        super(props);

        // this.search = this.search.bind(this);

        this.handleInputChangeSearch = this.handleInputChangeSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   

    handleInputChangeSearch(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name);
        console.log(value);

        const { onInputChange } = this.props;
        console.log(onInputChange);
        onInputChange(name, value);
        console.log(name);

        if(value == 0) {
            this.props.fetchData(`http://localhost:8080/notes`);
        }
    }

 

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.searchText)
        // let query = this.props.searchText;

        // this.props.onToggle();
        // this.props.onFormSubmit();

        userApi.searchNoteApi(this.props.searchText);

        this.props.onFormSubmit(this.props.searchText);
        // this.props.fetchData(`http://localhost:8080/notes`);
        // console.log({...this.props.searchText})
    }


    render() {
        return(
            // <div></div>
           <SearchForm {...this.props.searchText} onFormSubmit={this.handleSubmit} onInputChange={this.handleInputChangeSearch} />
        )
    }
}


function mapStateToProps(state) {
    console.log(state);
    console.log('snn '+ state.notes);
    console.log('state.notes.searchText' + state.notes.searchText);
    return {
        // notesList: state.notes.notesList,
        // notesList: state.notes.notesList,
        searchText: state.notes.searchText
        // searchText: state.notes.searchText
    }
    
}


function mapDispatchToProps(dispatch) {
    return {
        onFormSubmit: (query) => {
            console.log(query);
            console.log('query disp');
        dispatch(searchNotesByName(query));
        },
        onInputChange: (name, value) => {
            dispatch(handleInputChangeSearch(name, value))
        },
        fetchData: (url) => {
            console.dir(fetchNotes(url));
              dispatch(fetchNotes(url))
          }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps) (SearchContainer);
