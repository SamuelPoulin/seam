import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import DashboardPage from './components/dashboard-page/dashboard-page';
import LoginPage from './components/login-page/login-page';
import NotFoundPage from './components/not-found-page/not-found-page';
import SignUpPage from './components/signup-page/signup-page';
import ForgotPage from './components/forgot-page/forgot-page';

function App(): JSX.Element {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/dashboard" render={DashboardPage} />
                    <Route path="/signup" render={SignUpPage} />
                    <Route path="/forgot" render={ForgotPage} />
                    <Route render={NotFoundPage} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
