import React from "react";
import BookCard from "./BookCard";

function SearchResults(props) {
  const { books, searchBooks, onMove } = props;
  const searchResult = searchBooks.map((book) => {
    books.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchResult.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : "none"}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
