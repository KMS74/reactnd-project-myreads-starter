import React from "react";
import BooksLibrary from "../components/booksLibrary";
import FAB from "../components/FAB";
import TheHeader from "../components/TheHeader";

function BooksList(props) {
    const {bookshelves, books, onMove} = props;
    return (
        <div className="list-books">
            <TheHeader/>
            <BooksLibrary bookshelves={bookshelves} books={books} onMove={onMove}/>
            <FAB/>
        </div>
    );
}

export default BooksList;
