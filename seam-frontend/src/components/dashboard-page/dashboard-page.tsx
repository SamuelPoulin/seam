import React, { useState } from 'react';
import styled from 'styled-components';

import DashboardTopBar from './dashboard-top-bar';
import DashboardNavBar from './dashboard-nav-bar';
import Divider from '../shared/divider';
import SchedulePage from './pages/schedule-page';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 100px);
`;

function DashboardPage(): JSX.Element {
    document.title = 'Seam Dashboard';

    const [currentPage, setCurrentPage] = useState(SchedulePage);

    return (
        <>
            <DashboardTopBar />
            <StyledContainer>
                <DashboardNavBar />
                <Divider />
                {currentPage}
            </StyledContainer>
        </>
    );
}

export default DashboardPage;
