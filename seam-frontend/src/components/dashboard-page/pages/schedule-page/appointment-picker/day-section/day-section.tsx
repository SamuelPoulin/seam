import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import StyledH1 from '../../../../../shared/h1';
import SelectedMonthAppointmentContext from '../../../../../shared/selected-month-appointments-context';
import { Appointment } from '../../../../../../models/appointment';
import AppointmentButton from './appointment-button';
import { Provider } from '../../../../../../models/provider';

const StyledDay = styled.div`
  grid-area: day;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  overflow-x: hidden;

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

  width: 100%;
  overflow-x: scroll;

  margin: 20px 0px;
`;

function DaySection(): JSX.Element {
  const [currentTime, setCurrentTime] = useState(new Date());
  const selectedMonthAppointments = useContext(SelectedMonthAppointmentContext).selectedMonthAppointments;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const testProvider: Provider = { id: 1, name: 'Sam', pictureid: 1, description: '' };
  const testAppointment: Appointment = {
    provider: testProvider,
    startTime: new Date('2020-08-06 03:29:00'),
    endTime: new Date('2020-08-06 03:29:15')
  };

  const testAppointment2: Appointment = {
    provider: testProvider,
    startTime: new Date('2020-08-06 03:29:25'),
    endTime: new Date('2020-08-06 03:29:35')
  };

  const testAppointment3: Appointment = {
    provider: testProvider,
    startTime: new Date('2020-08-06 03:30:00'),
    endTime: new Date('2020-08-06 03:45:00')
  };

  const testAppointment4: Appointment = {
    provider: testProvider,
    startTime: new Date('2020-08-06 04:00:00'),
    endTime: new Date('2020-08-06 04:30:00')
  };

  const testAppointment5: Appointment = {
    provider: testProvider,
    startTime: new Date('2020-08-06 05:00:00'),
    endTime: new Date('2020-08-06 04:40:00')
  };

  const appointmentButtonComponents: JSX.Element[] = [];
  appointmentButtonComponents.push(<AppointmentButton appointment={testAppointment} />);
  appointmentButtonComponents.push(<AppointmentButton appointment={testAppointment2} />);
  appointmentButtonComponents.push(<AppointmentButton appointment={testAppointment3} />);
  appointmentButtonComponents.push(<AppointmentButton appointment={testAppointment4} />);
  appointmentButtonComponents.push(<AppointmentButton appointment={testAppointment5} />);

  for (let appointment of selectedMonthAppointments) {
    appointmentButtonComponents.push(<AppointmentButton appointment={testAppointment} />)
  }

  return (
    <StyledDay>
      <StyledDayTitleContainer>
        <StyledH1>Your Day</StyledH1>
      </StyledDayTitleContainer>
      <StyledAppointmentList>
        {appointmentButtonComponents}
      </StyledAppointmentList>
    </StyledDay>
  );
}

export default DaySection;