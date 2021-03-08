import React, { Component } from 'react';
import bookList from '../assets/books';
import BookList from './lists/BookList';

class MainComponent extends Component {
    state = {
        books: bookList,
        showBooks: true
    };

    changeWithInputState = (event, index) => {
        const books = [...this.state.books];
        const book = {
            ...this.state.books[index]
        }
        book.bookName = event.target.value;
        books[index] = book;
        this.setState({
            books: books
        })
    }

    deleteBookState = (index) => {
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        })
    };

    toggleBooks = () => {
        this.setState({ showBooks: !this.state.showBooks })
    }

    render() {

        const style = {
            border: "1px solid red",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
        }

        let books = null;
        if (this.state.showBooks) {
            books = <BookList 
            books={this.state.books} 
            deleteBookState={this.deleteBookState} changeWithInputState={this.changeWithInputState}  />

        }

        return (
            <div className="App">
                <h1 style={style}>Book List</h1>
                <button onClick={this.toggleBooks}>Toogle Books</button>
                { books}
            </div>
        );
    }
}



export default MainComponent