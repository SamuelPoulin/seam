import React from "react";
import styled from "styled-components";
import { StyledButton, ButtonProps } from "../../../../../shared/button";
import { Appointment } from "../../../../../../models/appointment";
import { useSelectedAppointment } from "../../../../../../services/selected-appointment.service";

const StyledAppointmentButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  height: 60px;
  width: 136px;

  margin-right: 25px;
`;

const StyledAppointmentTimeButton = styled(StyledButton) <TimeButtonProps>`
  display: flex;
  z-index: 1;
  height: 40px;
  width: 136px;

  font-family: "Roboto Regular";
  font-size: 18px;

  ${(props: TimeButtonProps) =>
    !props.isSelected && `background-color: ${props.theme.colors.secondary + '80'}`};
`;

const StyledDayProgressBar = styled.div<ProgressBarProps>`
  position: absolute;
  left: ${(props: ProgressBarProps) => props.progress * 136}px;
  display: flex;

  width: 4px;
  height: 60px;
  border-radius: 100px;

  background-color: ${(props) => props.theme.colors.accent};
`;

interface TimeButtonProps {
  isSelected: boolean;
  theme: any;
}

interface ProgressBarProps {
  progress: number;
}

export interface AppointmentButtonProps extends ButtonProps {
  appointment: Appointment;
}

function AppointmentButton(props: AppointmentButtonProps): JSX.Element {
  const { selectedAppointment, setSelectedAppointment } = useSelectedAppointment();

  const startTimeText = props.appointment.startTime
    .toLocaleString("default", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace("AM", "")
    .replace("PM", "");
  const endTimeText = props.appointment.endTime
    .toLocaleString("default", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace("AM", "")
    .replace("PM", "");

  function getAppointmentProgress(): number {
    const totalTime: number =
      props.appointment.endTime.valueOf() - props.appointment.startTime.valueOf();
    const timeElapsed: number =
      Date.now().valueOf() - props.appointment.startTime.valueOf();

    return timeElapsed / totalTime;
  }

  const progress = getAppointmentProgress();

  function isSelected() {
    return selectedAppointment?.id === props.appointment.id;
  }

  return (
    <StyledAppointmentButton>
      <StyledAppointmentTimeButton onClick={() => setSelectedAppointment(props.appointment)} isSelected={isSelected()}>
        {startTimeText + " - " + endTimeText}
      </StyledAppointmentTimeButton>
      {progress >= 0 && progress <= 1 ? (
        <StyledDayProgressBar progress={getAppointmentProgress()} />
      ) : undefined}
    </StyledAppointmentButton>
  );
}
export default AppointmentButton;
