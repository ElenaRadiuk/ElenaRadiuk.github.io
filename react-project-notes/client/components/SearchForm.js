import React, {Component} from 'react';
import './SearchForm.css'
// import './NoteEditor.css';

// class SearchForm extends Component {
//     constructor(props) {
//         super(props);
//     }

//     getQuery() {
//         return this..search.value;
//     }

    const SearchForm = ({onInputChange, onFormSubmit}) => (

            <form className="SearchForm">          
            <input  type="text"
                    className='SearchForm__input'
                    // ref="search"
                    placeholder='search...'
                    // name="search"
                    // onChange={onInputChange}
                    name="searchText"
                    onChange={onInputChange}
                    />
                    
            <div className="SearchForm__footer">
                <button className="SearchForm__button"
                        onClick={onFormSubmit}>
                        Search
                </button>
            </div>
            </form> 
        );

export default SearchForm;

