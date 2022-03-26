import React from "react";
import ArrowBack from "./ArrowBack";
import SearchInput from "./SearchInput";

function SearchBox(props) {
    const {onSearch, onReset} = props;

    return (
        <div className="search-books-bar">
            <ArrowBack onReset={onReset}/>
            <SearchInput onSearch={onSearch}/>
        </div>
    );
}

export default SearchBox;
