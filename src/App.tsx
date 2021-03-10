import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './app/view/login/login';
import Register from './app/view/register/register';
import Panel from './app/view/panel/panel'

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/panel" component={Panel} />
        <Route path="/register" component={Register} />
        <Redirect from="/" to="/login" />
      </Switch>
    </>

  );
}

export default App;
