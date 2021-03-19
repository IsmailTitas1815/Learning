import React, { Component } from 'react';
import Book from '../represtational/Book'
import { withRouter } from 'react-router-dom';

class BookList extends Component {
    render() {
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book name={book.bookName}
                        writer = {book.writer}
                        delete={() => this.props.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) => this.props.changeWithInputState(event, index)} />
                )
            })
        )
    }
}


export default withRouter(BookList);