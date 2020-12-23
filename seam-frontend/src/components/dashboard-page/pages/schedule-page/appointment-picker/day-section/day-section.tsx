import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";

import StyledH1 from "../../../../../shared/h1";
import AppointmentButton from "./appointment-button";
import { useMonthAppointments } from "../../../../../../services/month-appointments.service";
import { useSelectedDate } from "../../../../../../services/selected-date.service";
import Button from "../../../../../shared/button";
import Icon from "../../../../../shared/icon";

const StyledActionButtonText = styled(StyledH1)`
  font-size: 18px;
  margin-left: 5px;
`;

const StyledDay = styled.div`
  grid-area: day;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  overflow-x: hidden;

  @media (max-width: 1200px) {
    margin: 25px 0px;
  }
`;

const StyledDayTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 40px;

  Button {
    padding: 0px 10px;
    margin-left: 25px;
    height: 40px;
  }
`;

const StyledAppointmentList = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  overflow-x: auto;
`;

const StyledNoAppointmentsMessage = styled.div`
  color: ${(props) => props.theme.colors.onBackground};
  font-size: 18px;
  font-family: 'Roboto Regular';
  margin: 20px 0px;
`;

function DaySection(): JSX.Element {
  const monthAppointments = useMonthAppointments().monthAppointments;
  const selectedDate = useSelectedDate().selectedDate;
  const theme = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars 
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const appointmentButtonComponents: JSX.Element[] = [];

  for (let appointment of monthAppointments) {
    if (appointment.startTime.getDate() === selectedDate.getDate()) {
      appointmentButtonComponents.push(
        <AppointmentButton appointment={appointment} key={appointment.id} />
      );
    }
  }

  return (
    <StyledDay>
      <StyledDayTitleContainer>
        <StyledH1>Your Day</StyledH1>
        <Button>
          <Icon size={theme.iconSize} color={theme.colors.onSecondary}>
            add
          </Icon>
          <StyledActionButtonText>Create</StyledActionButtonText>
        </Button>
      </StyledDayTitleContainer>
      <StyledAppointmentList>
        {
          appointmentButtonComponents.length === 0
            ? <StyledNoAppointmentsMessage>You have no appointments.</StyledNoAppointmentsMessage>
            : appointmentButtonComponents
        }
      </StyledAppointmentList>
    </StyledDay>
  );
}

export default DaySection;
