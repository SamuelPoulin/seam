import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import DashboardPage from './components/dashboard-page/dashboard-page';
import LoginPage from './components/login-page/login-page';
import NotFoundPage from './components/not-found-page/not-found-page';

function App(): JSX.Element {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" render={LoginPage} />
                    <Route path="/dashboard" render={DashboardPage} />
                    <Route render={NotFoundPage} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
