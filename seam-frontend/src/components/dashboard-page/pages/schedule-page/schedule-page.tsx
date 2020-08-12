import React from 'react';
import styled from 'styled-components';
import MonthPicker from './month-picker';
import DayPicker from './day-picker';
import AppointmentPicker from './appointment-picker/appointment-picker';
import { MonthAppointmentsProvider } from '../../../../services/month-appointments.service';
import { SelectedDateProvider } from '../../../../services/selected-date.service';
import { SelectedAppointmentProvider } from '../../../../services/selected-appointment.service';

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

function SchedulePage(): JSX.Element {
  return (
    <MonthAppointmentsProvider>
      <SelectedAppointmentProvider>
        <SelectedDateProvider>
          <StyledMainWrapper>
            <MonthPicker />
            <DayPicker />
            <AppointmentPicker />
          </StyledMainWrapper>
        </SelectedDateProvider>
      </SelectedAppointmentProvider>
    </ MonthAppointmentsProvider >
  );
}

export default SchedulePage;
