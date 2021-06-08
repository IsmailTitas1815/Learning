import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'


import Home from './components/pages/Home';
import Staff from './components/pages/Staff';

function App() {
  return (
    <BrowserRouter>
      <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri}
      >
        <div>
          <Navbar />
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/staff" exact component={Staff} />
          </div>
        </div>
      </Security>
    </BrowserRouter>
  );
}

export default App;
