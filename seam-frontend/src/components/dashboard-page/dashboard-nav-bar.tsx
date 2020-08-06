import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import LinkButton from '../shared/link-button';
import Icon from '../shared/icon';

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

enum Pages {
    Schedule = 'schedule',
    Statistics = 'statistics',
    Widget = 'widget',
    Extensions = 'extensions',
    Settings = 'settings',
}

function DashboardNavBar(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(Pages.Schedule);
    const theme = useContext(ThemeContext);

    function determineColor(page: string): string { return currentPage === page ? theme.colors.accent : theme.colors.onSecondary };

    return (
        <StyledMainWrapper>
            <StyledWrapper>
                <LinkButton to="/" onClick={() => setCurrentPage(Pages.Schedule)}>
                    <Icon size={theme.iconSize} color={determineColor(Pages.Schedule)}>calendar</Icon>
                </LinkButton>
                <StyledDivider />
                <LinkButton to="/statistics" onClick={() => setCurrentPage(Pages.Statistics)}>
                    <Icon size={theme.iconSize} color={determineColor(Pages.Statistics)}>statistics</Icon>
                </LinkButton>
                <LinkButton to="/widget" onClick={() => setCurrentPage(Pages.Widget)}>
                    <Icon size={theme.iconSize} color={determineColor(Pages.Widget)}>widget</Icon>
                </LinkButton>
                <LinkButton to="/extensions" onClick={() => setCurrentPage(Pages.Extensions)}>
                    <Icon size={theme.iconSize} color={determineColor(Pages.Extensions)}>extensions</Icon>
                </LinkButton>
            </StyledWrapper>
            <StyledWrapper>
                <LinkButton to="/settings" onClick={() => setCurrentPage(Pages.Settings)}>
                    <Icon size={theme.iconSize} color={determineColor(Pages.Settings)}>settings</Icon>
                </LinkButton>
            </StyledWrapper>
        </StyledMainWrapper>
    );
}

export default DashboardNavBar;
