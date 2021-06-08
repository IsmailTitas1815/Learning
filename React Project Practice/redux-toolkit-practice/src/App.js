import React from 'react';
import { useSelector } from 'react-redux';
import AuthPage from './component/AuthPage';
import BasePage from './component/BasePage';

const App = () => {
  const auth = useSelector(state => state.auth);
  let authPage = null;

  if (auth.isAuth) {
    authPage = (
      <div>
        <BasePage />
      </div>
    )
  }
  else {
    authPage = (
      <div>
        <AuthPage />
      </div>
    )
  }

  return (
    <div>
      { authPage}
    </div>
  )
}

export default App;
