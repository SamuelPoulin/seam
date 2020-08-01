import React from "react";
import styled from "styled-components";

import DashboardTopBar from "./dashboard-top-bar";
import DashboardNavBar from "./dashboard-nav-bar";
import Divider from "../shared/divider";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 100px);
`;

function DashboardPage() {
  document.title = "Seam Dashboard";

  return (
    <>
      <DashboardTopBar />
      <StyledContainer>
        <DashboardNavBar />
        <Divider />
      </StyledContainer>
    </>
  );
}

export default DashboardPage;
