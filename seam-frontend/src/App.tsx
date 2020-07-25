import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import DashboardPage from './components/dashboard-page/dashboard-page';
import LoginPage from './components/login-page/login-page';
import NotFoundPage from './components/not-found-page/not-found-page';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
