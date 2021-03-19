import React, { Component, createRef } from 'react';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.bookName = createRef();
        this.writer = createRef();
        this.description = createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (event) => {
        console.log(this.bookName.current.value, this.writer.current.value, this.description.current.value);
        event.preventDefault();
    }


    render() {

        return (
            <div>
                <h1>Hello newbook</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Name: </label>
                    <br />
                    <input type="text" name="bookName" ref={this.bookName} />
                    <br />
                    <label>Writer: </label>
                    <br />
                    <input type="text" name="writer" ref={this.writer} />
                    <br />
                    <label>Description: </label>
                    <br />
                    <textarea type="text" name="description" ref={this.description} />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default NewBook;