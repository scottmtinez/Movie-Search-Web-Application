import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
	return (
            <div>
                <input type='text' 
                    placeholder='Search...'
                    className = 'searchBar-container' 
                    value = {props.value}
                    onChange = {(event) => props.setSearchValue(event.target.value)}
                ></input>
            </div>

    );
};

export default SearchBox;