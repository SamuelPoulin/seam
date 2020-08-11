import React from 'react';
import styled from 'styled-components';
import DaySection from './day-section/day-section';
import AppointmentSection from './appointment-section';
import { useSelectedAppointment } from '../../../../../services/selected-appointment.service';

const StyledAppointmentPicker = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  'appointment day';
  
  width: 95%;
  height: 100%;

  padding-bottom: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'day'
    'appointment';
  }
`;

function AppointmentPicker(): JSX.Element {
  const selectedAppointment = useSelectedAppointment().selectedAppointment;

  return (
    <StyledAppointmentPicker>
      {selectedAppointment ? <AppointmentSection /> : undefined}
      <DaySection />
    </StyledAppointmentPicker>
  );
}

export default AppointmentPicker;