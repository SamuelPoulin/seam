import React from 'react';
import styled from 'styled-components';

import DashboardTopBar from './dashboard-top-bar';
import DashboardNavBar from './dashboard-nav-bar';
import Divider from '../shared/divider';
import SchedulePage from './pages/schedule-page';
import StatisticsPage from './pages/statistics-page';
import WidgetPage from './pages/widget-page';
import ExtensionsPage from './pages/extensions-page';
import SettingsPage from './pages/settings-page';
import { Route } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 100px);
`;

function DashboardPage({ match }: any): JSX.Element {
    document.title = 'Seam Dashboard';

    return (
        <>
            <DashboardTopBar />
            <StyledContainer>
                <DashboardNavBar />
                <Divider />
                <Route exact path={match.path} component={SchedulePage} />
                <Route path={`${match.path}/statistics`} component={StatisticsPage} />
                <Route path={`${match.path}/widget`} component={WidgetPage} />
                <Route path={`${match.path}/extensions`} component={ExtensionsPage} />
                <Route path={`${match.path}/settings`} component={SettingsPage} />
            </StyledContainer>
        </>
    );
}

export default DashboardPage;