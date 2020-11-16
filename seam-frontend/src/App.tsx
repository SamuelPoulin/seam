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

import { APIProvider } from './services/api.service';
import { UserProvider } from './services/user.service';
import Widget from './components/widget/widget';

function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <APIProvider>
                    <UserProvider>
                        <Route exact path="/" component={LoginPage} />
                        <Route path="/dashboard" component={DashboardPage} />
                        <Route path="/signup" component={SignUpPage} />
                        <Route path="/forgot" render={ForgotPage} />
                        <Route path="/widget" render={Widget} />
                    </UserProvider>
                </APIProvider>
                <Route render={NotFoundPage} />
            </Switch>
        </Router>
    );
}

export default App;
