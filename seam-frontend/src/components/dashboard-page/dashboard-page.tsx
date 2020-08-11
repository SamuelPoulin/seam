import React, { useEffect } from 'react';
import styled from 'styled-components';

import DashboardTopBar from './dashboard-top-bar';
import DashboardNavBar from './dashboard-nav-bar';
import SchedulePage from './pages/schedule-page/schedule-page';
import StatisticsPage from './pages/statistics-page';
import WidgetPage from './pages/widget-page';
import ExtensionsPage from './pages/extensions-page';
import SettingsPage from './pages/settings-page';
import { Route, useHistory } from 'react-router-dom';
import { useUser } from '../../services/user.service';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledActivePage = styled.div`
  margin-left: 104px;
  width: 100%;
`;

function DashboardPage({ match }: any): JSX.Element {
    useEffect(() => {
        document.title = 'Seam Dashboard';
    }, [])

    const user = useUser();
    const history = useHistory();

    if (!user.token) {
        history.push('/');
    }

    return (
        <>
            <DashboardTopBar />
            <StyledContainer>
                <DashboardNavBar />
                <StyledActivePage>
                    <Route exact path={match.path} component={SchedulePage} />
                    <Route path={`${match.path}/statistics`} component={StatisticsPage} />
                    <Route path={`${match.path}/widget`} component={WidgetPage} />
                    <Route path={`${match.path}/extensions`} component={ExtensionsPage} />
                    <Route path={`${match.path}/settings`} component={SettingsPage} />
                </StyledActivePage>
            </StyledContainer>
        </>
    );
}

export default DashboardPage;