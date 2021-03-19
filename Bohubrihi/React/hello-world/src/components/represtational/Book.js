import React from 'react';
import "../../Stylesheets/Book.css";
import { withRouter } from 'react-router-dom';

const Book = (props) => {
    return (
        <div className="Book">
            <h3 onClick={props.delete}>Book name: {props.name} </h3>
            <h4>Book author: {props.writer}</h4>
            <input type="text" onChange={props.inputName} value={props.name} />
        </div>
    );
}

export default withRouter(Book); 