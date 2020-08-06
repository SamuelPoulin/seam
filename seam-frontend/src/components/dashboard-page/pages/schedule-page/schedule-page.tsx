import React, { useState } from 'react';
import styled from 'styled-components';
import MonthPicker from './month-picker';
import DayPicker from './day-picker';
import AppointmentPicker from './appointment-picker';
import SelectedDateContext from '../../../shared/selected-date-context';

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

function SchedulePage(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const value = { selectedDate, setSelectedDate };

  return (
    <SelectedDateContext.Provider value={value}>
      <StyledMainWrapper>
        <MonthPicker />
        <DayPicker />
        <AppointmentPicker />
      </StyledMainWrapper>
    </SelectedDateContext.Provider>
  );
}

export default SchedulePage;
