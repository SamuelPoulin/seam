import React from "react";
import styled from "styled-components";
import { StyledButton, ButtonProps } from "./button";
import NotificationIndicator from "./notification-indicator";
import { useSelectedDate } from "../../services/selected-date.service";
import { useMonthAppointments } from "../../services/month-appointments.service";
import { useSelectedAppointment } from "../../services/selected-appointment.service";
import { Appointment } from "../../models/appointment";

const StyledNotificationCounter = styled.div`
  font-family: "Roboto Regular";
  font-size: 12px;

  margin-left: 2px;
`;

const StyledNotificationContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;

const StyledDayText = styled.div`
  font-family: "Roboto Regular";
  font-size: 18px;
`;

const StyledDayButton = styled(StyledButton)`
  display: flex;
  flex-direction: column;

  width: 40px;
  height: 48px;

  ${(props: CustomProps) =>
    !props.isSelected && "background-color: transparent"};
`;

interface CustomProps {
  isSelected: boolean;
}

export interface DayButtonProps extends ButtonProps {
  date: Date;
  notificationCount: number;
}

function DayButton({ date, notificationCount }: DayButtonProps): JSX.Element {
  const { selectedDate, setSelectedDate } = useSelectedDate();
  const monthAppointments = useMonthAppointments().monthAppointments;
  const setSelectedAppointment = useSelectedAppointment().setSelectedAppointment;

  function isSelected() {
    const firstDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    const secondDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );
    return firstDate.getTime() === secondDate.getTime();
  }

  function handleButtonClick() {
    setSelectedDate(new Date(date));
    const firstAppointment: Appointment = monthAppointments
      .filter((appointment) => appointment.startTime.getDate() === date.getDate())
      .sort((a, b) => a.startTime.valueOf() - b.startTime.valueOf())[0];
    setSelectedAppointment(firstAppointment);
  }

  return (
    <StyledDayButton
      onClick={() => handleButtonClick()}
      isSelected={isSelected()}
    >
      <StyledDayText>
        {date.toLocaleString("default", { day: "numeric" })}
      </StyledDayText>
      {notificationCount !== 0 ? (
        <StyledNotificationContainer>
          <NotificationIndicator />
          <StyledNotificationCounter>
            {notificationCount}
          </StyledNotificationCounter>
        </StyledNotificationContainer>
      ) : undefined}
    </StyledDayButton>
  );
}

export default DayButton;
