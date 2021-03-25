import React, { Component } from 'react';
import './App.css';
// import fetch from 'cross-fetch';
import axios from 'axios';

class App extends Component {
  state = {
    dishes: null,
    erroMess: null
  }

  componentDidMount() {
    // console.log("Componentdidmount: ", this.state);
    // axios.get('http://localhost:3001/posts')
    //   .then(response => response.data)
    //   .then(data => {
    //     this.setState({
    //       dishes: data
    //     })
    //   })
    //   .catch(error => {
    //     this.setState({
    //       errorMess: error.message
    //     })
    //   });
    // axios.post("http://localhost:3001/posts", { title: 'ok fine', author: "nijei" })
    //   .then(response => console.log(response))
    //   axios.put('http://localhost:3001/posts/4', { title: "ami", author: "lol" })
    //     .then(response => console.log(response))
    // }
    axios.delete('http://localhost:3001/posts/4')
      .then(response => console.log(response))
      .catch(error => {
        this.setState({
          errorMess: error.message
        })
      });
  }

  componentDidUpdate() {
    console.log("Update: ", this.state);
  }


  render() {
    return (
      <div>

      </div>
    )
  }
}

export default App;
