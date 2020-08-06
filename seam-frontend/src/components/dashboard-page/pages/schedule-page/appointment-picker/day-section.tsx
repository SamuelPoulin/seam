import React from 'react';
import styled from 'styled-components';

import StyledH1 from '../../../../shared//h1';

const StyledDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  @media (max-width: 1200px) {
    margin-top: 25px;
  }
`;

const StyledDayTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

const StyledAppointmentList = styled.div`
  display: flex;

  height: 200px;
  width: 100%
`;

function DaySection(): JSX.Element {
  return (
    <StyledDay>
      <StyledDayTitleContainer>
        <StyledH1>Your Day</StyledH1>
      </StyledDayTitleContainer>
      <StyledAppointmentList />
    </StyledDay>
  );
}

export default DaySection;