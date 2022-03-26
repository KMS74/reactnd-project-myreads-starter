import React, { Component } from "react";
import CloseSearchButton from "./CloseSearchButton";
import SearchBooksInput from "./SearchBooksInput";

class SearchBar extends Component {
  render() {
    const { onSearch, onReset } = this.props;

    return (
      <div className="search-books-bar">
        <CloseSearchButton onReset={onReset} />
        <SearchBooksInput onSearch={onSearch} />
      </div>
    );
  }
}

export default SearchBar;
