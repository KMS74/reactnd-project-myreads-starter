import React from "react";
import BookShelfController from "./BookShelfController";

function BookCard(props) {
    const {book, shelf, onMove} = props;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks &&
                            book.imageLinks.thumbnail})`,
                        }}
                    />
                    <BookShelfController book={book} shelf={shelf} onMove={onMove}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors && book.authors.join(", ")}
                </div>
            </div>
        </li>
    );
}

export default BookCard;
