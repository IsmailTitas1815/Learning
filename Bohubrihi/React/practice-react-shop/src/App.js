import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Routing from './routing'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <Nav />
          <Routing />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
