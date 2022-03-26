import React from "react";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";

function BookSearch(props) {
    const {books, searchBooks, onMove, onSearch, onReset} = props;
    return (
        <div className="search-books">
            <SearchBox onSearch={onSearch} onReset={onReset}/>
            <SearchResults
                books={books}
                searchBooks={searchBooks}
                onMove={onMove}
            />
        </div>
    );
}

export default BookSearch;
