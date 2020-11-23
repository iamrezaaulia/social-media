import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/route';
import { Home, SignIn, SignUp } from './pages';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.SIGNIN} component={SignIn} />
        <Route exact path={ROUTES.SIGNUP} component={SignUp} />
      </Switch>
    </Router>
  );
};