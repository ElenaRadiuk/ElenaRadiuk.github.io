import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchForm from '../components/SearchForm';
import {fetchNotes, addNote, handleInputChange, toggleNotesForm, searchNotesByName} from '../actions';
import * as userApi from '../api/api';


class SearchContainer extends Component {
    constructor(props) {
        super(props);

        // this.search = this.search.bind(this);

        this.handleInputChange2 = this.handleInputChange2.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

   

    handleInputChange2(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name);

        const { onInputChange } = this.props;
        onInputChange2(name, value);
    }

 

    handleSubmit2(event) {
        event.preventDefault();
        let query = this.props.searchText;

        // this.props.onToggle();
        // this.props.onFormSubmit();

        userApi.searchNoteApi(query);

        this.props.onFormSubmit2(query);
        // this.props.fetchData(`http://localhost:8080/notes`);
        console.log(query)
    }


    render() {
        return(
            // <div></div>
           <SearchForm {...this.props.searchText} onFormSubmit2={this.handleSubmit2} onInputChange2={this.handleInputChange2} />
        )
    }
}


function mapStateToProps(state) {
    console.log(state);
    // console.log('snn '+ state.notes.notesList);
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
        onFormSubmit2: (query) => {
            console.log(query);
            console.log('query disp');
        dispatch(searchNotesByName(query));
        }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps) (SearchContainer);
