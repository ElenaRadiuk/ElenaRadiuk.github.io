import React, {Component} from 'react';
// import './NoteEditor.css';

export default React.createClass({
   

    getQuery: function () {
        return this.refs.search.value;
    },

    render: function () {
        return(
            <form onSubmit={this.props.search} className="SearchForm">          
            <input  type="text"
                    className='SearchForm__input'
                    ref="search"
                    placeholder='search...'
                    // name="search"
                    // onChange={onInputChange}
                    />
            <div className="SearchForm__footer">
                <button className="SearchForm__button"
                        onClick={}>
                        Search
                </button>
            </div>
            </form>
        )
    }
});


