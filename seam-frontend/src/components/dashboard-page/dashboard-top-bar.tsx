import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import logo from "../../assets/images/logo.png";
import typeface from "../../assets/images/typeface.png";
import Button from "../shared/button";
import Icon from "../shared/icon";
import { useUser } from "../../services/user.service";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";

const StyledLogo = styled.img`
  height: 40px;
`;

const StyledTypeface = styled.img`
  height: 12px;
  margin-left: 15px;
`;

const StyledTitle = styled.h1`
  padding: 0px;
  margin: 0px;
  margin-left: 30px;

  font-family: "Roboto Light";
  font-size: 24px;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 75px;
`;

const StyledLeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 15px;
  height: 100%;

  Button {
    width: 40px;
    height: 40px;
  }
`;

const StyledRightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 33px;
  height: 100%;

  Button {
    width: 40px;
    height: 40px;
  }
`;

const StyledCenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 0px 33px;
  height: 100%;

  Button {
    width: 40px;
    height: 40px;
  }
`;

function DashboardTopBar(): JSX.Element {
  const theme = useContext(ThemeContext);
  const user = useUser();
  const history = useHistory();
  const smallScreen = useMediaQuery('(min-width: 475px)');

  function handleLogout() {
    user.setToken('');
    history.push('/');
  }

  return (
    <StyledWrapper>
      {smallScreen ?
        null : <StyledLeftSection>
          <Button>
            <Icon size={theme.iconSize} color={theme.colors.onSecondary}>menu</Icon>
          </Button>
        </StyledLeftSection>
      }
      <StyledCenterSection>
        <StyledLogo className="noselect" src={logo} alt="" />
        <StyledTypeface className="noselect" src={typeface} alt="" />
        <StyledTitle className="noselect">Dashboard</StyledTitle>
      </StyledCenterSection>
      {smallScreen ?
        <StyledRightSection>
          <Button onClick={handleLogout}>
            <Icon size={theme.iconSize} color={theme.colors.onBackground}>exit</Icon>
          </Button>
        </StyledRightSection> : null
      }
    </StyledWrapper>
  );
}

export default DashboardTopBar;
