import React, { Component } from 'react';
import bookList from '../assets/books';
import BookList from './lists/BookList';
import NewBook from './represtational/NewBook';
import { Route } from 'react-router-dom';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList
        }
    }


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


    render() {

        const books = <BookList
            books={this.state.books}
            deleteBookState={this.deleteBookState} changeWithInputState={this.changeWithInputState} />


        return (
            <div className="App">
                <div className="nav-bar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/new-book">New Book</a></li>
                    </ul>
                </div>
                <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/new-book" exact render={() => <NewBook />} />
                {/* { books}
                <NewBook /> */}
            </div>
        );
    }
}



export default MainComponent