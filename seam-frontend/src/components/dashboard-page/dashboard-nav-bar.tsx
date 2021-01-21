import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import LinkButton from "../shared/link-button";
import Icon from "../shared/icon";
import Divider from "../shared/divider";
import { useLocation } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

const StyledMainWrapper = styled.div`
  position: fixed;

  display: flex;
  flex-direction: row;

  height: calc(100vh - 75px);
  width: 104px;

  @media only screen and (max-width: 475px){
    visibility: hidden;
  }
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
  Schedule = "dashboard",
  Statistics = "dashboardstatistics",
  Widget = "dashboardwidget",
  Extensions = "dashboardextensions",
  Settings = "dashboardsettings",
}

function DashboardNavBar(): JSX.Element {
  const location = useLocation();
  const theme = useContext(ThemeContext);

  function determineColor(page: string): string {
    return location.pathname.replaceAll('/', '') === page
      ? theme.colors.accent
      : theme.colors.onSecondary;
  }

  return (
    <StyledMainWrapper>
      <StyledNavBarContainer>
        <StyledWrapper>
          <Tooltip title="Schedule" placement="right" arrow>
            <div>
              <LinkButton to="">
                <Icon size={theme.iconSize} color={determineColor(Pages.Schedule)}>
                  calendar
            </Icon>
              </LinkButton>
            </div>
          </Tooltip>
          <StyledDivider />
          <Tooltip title="Statistics" placement="right" arrow>
            <div>
              <LinkButton to="/statistics">
                <Icon
                  size={theme.iconSize}
                  color={determineColor(Pages.Statistics)}
                >
                  statistics
            </Icon>
              </LinkButton>
            </div>
          </Tooltip>
          <Tooltip title="Widget" placement="right" arrow>
            <div>
              <LinkButton to="/widget">
                <Icon size={theme.iconSize} color={determineColor(Pages.Widget)}>
                  widget
            </Icon>
              </LinkButton>
            </div>
          </Tooltip>
          <Tooltip title="Extensions" placement="right" arrow>
            <div>
              <LinkButton
                to="/extensions"
              >
                <Icon
                  size={theme.iconSize}
                  color={determineColor(Pages.Extensions)}
                >
                  extensions
            </Icon>
              </LinkButton>
            </div>
          </Tooltip>
        </StyledWrapper>
        <StyledWrapper>
          <Tooltip title="Settings" placement="right" arrow>
            <div>
              <LinkButton
                to="/settings"
              >
                <Icon size={theme.iconSize} color={determineColor(Pages.Settings)}>
                  settings
            </Icon>
              </LinkButton>
            </div>
          </Tooltip>
        </StyledWrapper>
      </StyledNavBarContainer>
      <StyledDividerContainer>
        <Divider />
      </StyledDividerContainer>
    </StyledMainWrapper>
  );
}

export default DashboardNavBar;
