import * as React from 'react';
import DashboardTopBar from './dashboard-top-bar';
import DashboardNavBar from './dashboard-nav-bar';

function DashboardPage() {
    document.title = 'Seam Dashboard';

    return (
        <>
            <DashboardTopBar />
            <DashboardNavBar />
        </>
    );
}

export default DashboardPage;