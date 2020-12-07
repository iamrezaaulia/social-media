import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as ROUTES from './constants/route';
import { Home, LogIn, SignUp } from './pages';
import { AuthProvider } from './context/auth';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.LOGIN} component={LogIn} />
          <Route exact path={ROUTES.SIGNUP} component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};