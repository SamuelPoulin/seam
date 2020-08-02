import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';

import LinkButton from '../shared/linkbutton';
import {
    CalendarIcon,
    StatisticsIcon,
    ExtensionsIcon,
    SettingsIcon,
    WidgetsIcon,
} from '../shared/icons';

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100px;
  height: 100%;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;

  Button {
    width: 50px;
    height: 50px;
    margin: 10px 0px;
  }
`;

const StyledDivider = styled.div`
  margin: 15px 0px;
`;

const ICON_SIZE = 30;

function DashboardNavBar({ theme }: any): JSX.Element {
    const [currentPage, setCurrentPage] = useState('SchedulePage');

    return (
        <StyledMainWrapper>
            <StyledWrapper>
                <LinkButton to="/" onClick={() => setCurrentPage('SchedulePage')}>
                    <CalendarIcon size={ICON_SIZE} color={currentPage === 'SchedulePage' ? theme.colors.accent : theme.colors.onSecondary} />
                </LinkButton>
                <StyledDivider />
                <LinkButton to="/statistics" onClick={() => setCurrentPage('StatisticsPage')}>
                    <StatisticsIcon size={ICON_SIZE} color={currentPage === 'StatisticsPage' ? theme.colors.accent : theme.colors.onSecondary} />
                </LinkButton>
                <LinkButton to="/widget" onClick={() => setCurrentPage('WidgetPage')}>
                    <WidgetsIcon size={ICON_SIZE} color={currentPage === 'WidgetPage' ? theme.colors.accent : theme.colors.onSecondary} />
                </LinkButton>
                <LinkButton to="/extensions" onClick={() => setCurrentPage('ExtensionsPage')}>
                    <ExtensionsIcon size={ICON_SIZE} color={currentPage === 'ExtensionsPage' ? theme.colors.accent : theme.colors.onSecondary} />
                </LinkButton>
            </StyledWrapper>
            <StyledWrapper>
                <LinkButton to="/settings" onClick={() => setCurrentPage('SettingsPage')}>
                    <SettingsIcon size={ICON_SIZE} color={currentPage === 'SettingsPage' ? theme.colors.accent : theme.colors.onSecondary} />
                </LinkButton>
            </StyledWrapper>
        </StyledMainWrapper>
    );
}

export default withTheme(DashboardNavBar);
