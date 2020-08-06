import React from 'react';
import styled from 'styled-components';
import DaySection from './day-section';
import AppointmentSection from './appointment-section';

const StyledAppointmentPicker = styled.div`
  display: flex;

  width: 95%;
  height: 100%;

  padding-bottom: 25px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

function AppointmentPicker(): JSX.Element {
  return (
    <StyledAppointmentPicker>
      <AppointmentSection />
      <DaySection />
    </StyledAppointmentPicker>
  );
}

export default AppointmentPicker;