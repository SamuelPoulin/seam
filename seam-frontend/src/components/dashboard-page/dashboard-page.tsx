import React from 'react';
import DashboardTopBar from './dashboard-top-bar/dashboard-top-bar';
import DashboardNavBar from './dashboard-nav-bar/dashboard-nav-bar';

import './dashboard-page.css';

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