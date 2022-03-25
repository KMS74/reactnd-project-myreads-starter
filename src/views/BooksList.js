import React, { Component } from "react";
import BookCase from "../components/BookCase";
import FAB from "../components/FAB";
import TheHeader from "../components/TheHeader";

class BooksList extends Component {
  render() {
    const { bookshelves, books, onMove } = this.props;
    return (
      <div className="list-books">
        <TheHeader />
        <BookCase bookshelves={bookshelves} books={books} onMove={onMove} />
        <FAB />
      </div>
    );
  }
}

export default BooksList;
