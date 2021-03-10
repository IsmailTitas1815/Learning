import React, { Component } from 'react';
import Book from '../represtational/Book'
class BookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book name={book.bookName}
                        writer={book.writer}
                        delete={() => this.props.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) => this.props.changeWithInputState(event, index)} />
                )
            })
        )
    }
}


export default BookList;