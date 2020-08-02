import * as React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.png';
import typeface from '../../assets/images/typeface.png';

const StyledLogo = styled.img`
  height: 60px;
  margin-left: 33px;
`;

const StyledTypeface = styled.img`
  height: 15px;
  margin-left: 15px;
`;

const StyledTitle = styled.h1`
  margin-left: 30px;

  font-family: "Roboto Light";
  font-size: 28px;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100px;
`;

function DashboardTopBar(): JSX.Element {
    return (
        <StyledWrapper>
            <StyledLogo className="noselect" src={logo} alt="" />
            <StyledTypeface className="noselect" src={typeface} alt="" />
            <StyledTitle className="noselect">Dashboard</StyledTitle>
        </StyledWrapper>
    );
}

export default DashboardTopBar;
