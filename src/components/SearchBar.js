import React from 'react';
import './SearchBar.css';

export const SearchBar = (props) => {
    return (
        <form>
            <div className="form-control">
                <label htmlFor="text"></label>
                <input 
                    className="search"
                    type="text" 
                    onChange={props.handleChange} 
                    placeholder={props.placeholder} />
            </div>
        </form>
    )
}
