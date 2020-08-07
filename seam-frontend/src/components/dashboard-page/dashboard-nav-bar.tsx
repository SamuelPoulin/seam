import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import LinkButton from "../shared/link-button";
import Icon from "../shared/icon";
import Divider from "../shared/divider";

const StyledMainWrapper = styled.div`
  position: fixed;

  display: flex;
  flex-direction: row;

  height: calc(100vh - 75px);
  width: 104px;
`;

const StyledNavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 25px;

  Button {
    width: 40px;
    height: 40px;
    margin: 10px 0px;
  }
`;

const StyledDivider = styled.div`
  margin: 15px 0px;
`;

const StyledDividerContainer = styled.div`
  display: flex;

  height: 100%;
  width: 4px;
`;

enum Pages {
  Schedule = "schedule",
  Statistics = "statistics",
  Widget = "widget",
  Extensions = "extensions",
  Settings = "settings",
}

function DashboardNavBar(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(Pages.Schedule);
  const theme = useContext(ThemeContext);

  function determineColor(page: string): string {
    return currentPage === page
      ? theme.colors.accent
      : theme.colors.onSecondary;
  }

  return (
    <StyledMainWrapper>
      <StyledNavBarContainer>
        <StyledWrapper>
          <LinkButton to="/" onClick={() => setCurrentPage(Pages.Schedule)}>
            <Icon size={theme.iconSize} color={determineColor(Pages.Schedule)}>
              calendar
            </Icon>
          </LinkButton>
          <StyledDivider />
          <LinkButton
            to="/statistics"
            onClick={() => setCurrentPage(Pages.Statistics)}
          >
            <Icon
              size={theme.iconSize}
              color={determineColor(Pages.Statistics)}
            >
              statistics
            </Icon>
          </LinkButton>
          <LinkButton to="/widget" onClick={() => setCurrentPage(Pages.Widget)}>
            <Icon size={theme.iconSize} color={determineColor(Pages.Widget)}>
              widget
            </Icon>
          </LinkButton>
          <LinkButton
            to="/extensions"
            onClick={() => setCurrentPage(Pages.Extensions)}
          >
            <Icon
              size={theme.iconSize}
              color={determineColor(Pages.Extensions)}
            >
              extensions
            </Icon>
          </LinkButton>
        </StyledWrapper>
        <StyledWrapper>
          <LinkButton
            to="/settings"
            onClick={() => setCurrentPage(Pages.Settings)}
          >
            <Icon size={theme.iconSize} color={determineColor(Pages.Settings)}>
              settings
            </Icon>
          </LinkButton>
        </StyledWrapper>
      </StyledNavBarContainer>
      <StyledDividerContainer>
        <Divider />
      </StyledDividerContainer>
    </StyledMainWrapper>
  );
}

export default DashboardNavBar;
