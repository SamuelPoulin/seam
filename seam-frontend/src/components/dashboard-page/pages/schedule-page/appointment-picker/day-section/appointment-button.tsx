import React from 'react';
import styled from 'styled-components';
import { StyledButton, ButtonProps } from '../../../../../shared/button';
import { Appointment } from '../../../../../../models/appointment';

const StyledAppointmentButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  height: 75px;
  width: 170px;

  margin-right: 25px;
`;

const StyledAppointmentTimeButton = styled(StyledButton)`
  display: flex;
  z-index: 1;
  height: 50px;
  width: 170px;

  font-family: 'Roboto Regular';
  font-size: 24px;
`;

const StyledDayProgressBar = styled.div<CustomProps>`
  position: absolute;
  left: ${(props: CustomProps) => props.progress * 170}px;
  display: flex;

  width: 4px;
  height: 75px;
  border-radius: 100px;

  background-color: ${(props) => props.theme.colors.accent};
`;

interface CustomProps {
  progress: number;
}

export interface AppointmentButtonProps extends ButtonProps {
  appointment: Appointment;
}

function AppointmentButton({ appointment }: AppointmentButtonProps): JSX.Element {
  const startTimeText = appointment.startTime.toLocaleString('default', { hour: '2-digit', minute: '2-digit', hour12: false }).replace('AM', '').replace('PM', '');
  const endTimeText = appointment.endTime.toLocaleString('default', { hour: '2-digit', minute: '2-digit', hour12: false }).replace('AM', '').replace('PM', '');

  function getAppointmentProgress(): number {
    const totalTime: number = appointment.endTime.valueOf() - appointment.startTime.valueOf();
    const timeElapsed: number = Date.now().valueOf() - appointment.startTime.valueOf();

    return timeElapsed / totalTime;
  }

  const progress = getAppointmentProgress();

  return (
    <StyledAppointmentButton>
      <StyledAppointmentTimeButton>{startTimeText + ' - ' + endTimeText}</StyledAppointmentTimeButton>
      {
        progress >= 0 && progress <= 1 ?
          <StyledDayProgressBar progress={getAppointmentProgress()} />
          : undefined
      }
    </StyledAppointmentButton>
  );
}
export default AppointmentButton;