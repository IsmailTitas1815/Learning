import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Main from './Components/Main';
import myStore from './redux/store';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Provider store={myStore} >
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
