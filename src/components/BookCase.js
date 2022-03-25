import React, { Component } from "react";
import BooksShelf from "./BooksShelf";

class BookCase extends Component {
  render() {
    const { bookshelves, books, onMove } = this.props;
    return (
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf) => (
            <BooksShelf
              key={shelf.key}
              shelf={shelf}
              books={books}
              onMove={onMove}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BookCase;
