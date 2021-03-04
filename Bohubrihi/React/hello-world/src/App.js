import React, { Component } from 'react';
import './App.css';
import Book from "./components/Book";


//functional component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <Person />
//     </div>
//  
// }

//class component

class App extends Component {

  state = {
    books: [{ bookName: '1984', writer: 'jani na' },
    { bookName: '1984', writer: 'jani na' },
    { bookName: '1984', writer: 'jani na' }
    ],
    otherProp: "I am some other props"
  };

  changeBookStage = (newBookName) => {
    // console.log("Button clicked");
    this.setState({
      books: [{ bookName: newBookName, writer: 'jani na' },
      { bookName: 'The da vinci code', writer: 'Dan Brown' },
      { bookName: 'The alchemist', writer: 'jani na' }
      ]
    });
  }

  changeWithInputState = (e) => {
    this.setState({
      books: [{ bookName: e.target.value, writer: 'jani na' },
      { bookName: 'The da vinci code', writer: 'Dan Brown' },
      { bookName: 'The alchemist', writer: 'jani na' }
      ]
    });
  }

  render() {

    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
    }

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={() => this.changeBookStage('Nineteen ninty four')}>Change State</button>
        {/* <input type="text" onChange={this.changeWithInputState} /> */}
        <Book name={this.state.books[0].bookName} author={this.state.books[0].writer} inputName={this.changeWithInputState} />
        <Book name={this.state.books[1].bookName} author={this.state.books[1].writer} inputName={this.changeWithInputState} />
        <Book name={this.state.books[2].bookName} author={this.state.books[2].writer} change={() => this.changeBookStage('1984')} />
      </div>
    );
  }
}


export default App;
