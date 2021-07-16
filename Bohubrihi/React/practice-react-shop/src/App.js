import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path='/productdetails/:id' exact component={ProductDetails} />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
