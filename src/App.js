import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksList from "./views/BooksList";
import { Routes, Route } from "react-router-dom";
import BookSearch from "./views/BookSearch";

class BooksApp extends React.Component {
  shelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Have Read" },
  ];

  state = {
    books: [],
    searchResults: [],
  };

  // moving a book from one bookshelf to another and updates the books in the server and then update the state
  putBookOnShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      console.log(books);
    })

    let updatedBooks = [];
    updatedBooks = this.state.books.filter((b) => b.id !== book.id);

    if (shelf !== "none") {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }

    this.setState(() => ({
      books: updatedBooks,
    }));
  };

  searchForBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.resetSearch();
        } else {
          this.setState(() => ({
            searchResults: books,
          }));
        }
      });
    } else {
      this.resetSearch();
    }
  };

  resetSearch = () => {
    this.setState(() => ({
      searchResults: [],
    }));
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  render() {
    const { books, searchResults } = this.state; // es6 object destructring
    return (
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <BooksList
                bookshelves={this.shelves}
                books={books}
                onMove={this.putBookOnShelf}
              />
            }
          />
          <Route
            path="/search"
            element={
              <BookSearch
                books={searchResults}
                searchBooks={searchResults}
                onMove={this.putBookOnShelf}
                onSearch={this.searchForBooks}
                onReset={this.resetSearch}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
