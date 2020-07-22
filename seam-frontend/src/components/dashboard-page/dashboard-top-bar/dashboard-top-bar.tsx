import React from 'react';

import './dashboard-top-bar.css';

import logo from '../../../assets/images/logo.png';
import typeface from '../../../assets/images/typeface.png'

function DashboardTopBar() {
    return (
        <div className="dashboard-top-bar">
            <img className="dashboard-top-bar-logo noselect" src={logo} alt="" />
            <img className="dashboard-top-bar-typeface noselect" src={typeface} alt="" />
            <div className="dashboard-top-bar-text noselect">Dashboard</div>
        </div>
    );
}

export default DashboardTopBar;