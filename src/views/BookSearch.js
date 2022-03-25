import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

class BookSearch extends Component {
  render() {
    const { books, searchBooks, onMove, onSearch, onReset } = this.props;
    return (
      <div className="search-books">
        <SearchBar onSearch={onSearch} onReset={onReset} />
        <SearchResults
          books={books}
          searchBooks={searchBooks}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default BookSearch;
