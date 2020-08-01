import * as React from "react";
import styled from "styled-components";

import Button from "../shared/button";
import {
  CalendarIcon,
  StatisticsIcon,
  ExtensionsIcon,
  SettingsIcon,
  WidgetsIcon,
} from "../shared/icons";

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

const ICON_SIZE: number = 30;

function DashboardNavBar() {
  return (
    <StyledMainWrapper>
      <StyledWrapper>
        <Button>
          <CalendarIcon size={ICON_SIZE} />
        </Button>
        <StyledDivider />
        <Button>
          <StatisticsIcon size={ICON_SIZE} />
        </Button>
        <Button>
          <WidgetsIcon size={ICON_SIZE} />
        </Button>
        <Button>
          <ExtensionsIcon size={ICON_SIZE} />
        </Button>
      </StyledWrapper>
      <StyledWrapper>
        <Button>
          <SettingsIcon size={ICON_SIZE} />
        </Button>
      </StyledWrapper>
    </StyledMainWrapper>
  );
}

export default DashboardNavBar;
