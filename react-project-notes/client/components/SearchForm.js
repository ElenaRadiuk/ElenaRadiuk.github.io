import React, {Component} from 'react';
// import './NoteEditor.css';

// class SearchForm extends Component {
//     constructor(props) {
//         super(props);
//     }

//     getQuery() {
//         return this..search.value;
//     }

    const SearchForm = ({onInputChange2, onFormSubmit2}) => (

            <form className="SearchForm">          
            <input  type="text"
                    className='SearchForm__input'
                    // ref="search"
                    placeholder='search...'
                    // name="search"
                    // onChange={onInputChange}
                    name="searchText"
                    onChange2={onInputChange2}
                    />
                    
            <div className="SearchForm__footer">
                <button className="SearchForm__button"
                        onClick={onFormSubmit2}>
                        Search
                </button>
            </div>
            </form> 
        );

export default SearchForm;

