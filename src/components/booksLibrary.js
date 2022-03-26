import React from "react";
import BooksShelf from "./BooksShelf";

function BooksLibrary(props) {
    const {bookshelves, books, onMove} = props;
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

export default BooksLibrary;
