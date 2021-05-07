import './App.css';
import Main from './Components/Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
