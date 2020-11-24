import { h } from 'preact';
import { useContext } from 'preact/hooks';
import styled from 'styled-components';
import { RouteContext } from '../../../../Router';

const StyledAppointmentType = styled.div`
  display: flex;
  flex-direction: column;

  width: 240px;
  margin-top: 10px;
  padding: 12px 12px;

  border-radius: 15px;

  background-color: #060D1C;
`;

const StyledTitle = styled.div`
  color: white;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`;

const StyledDescription = styled.div`
  color: white;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 300;

  margin-top: 5px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: flex-end;
`;

const StyledScheduleButton = styled.button`
  width: 110px;
  height: 30px;

  background-color: #4877D5;
  border-radius: 5px;

  color: white;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;

  border: none;
  cursor: pointer;
  margin: 0px;
  padding: 0px;

  &:focus {
    outline: none;
  } 
`;

interface AppointmentTypeProps {
  title: string;
  description: string;
}

const AppointmentType = (props: AppointmentTypeProps) => {
  const { setRoute } = useContext(RouteContext);

  return (
    <StyledAppointmentType>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledDescription>{props.description}</StyledDescription>
      <StyledButtonContainer>
        <StyledScheduleButton onClick={() => setRoute('/book')}>Schedule</StyledScheduleButton>
      </StyledButtonContainer>
    </StyledAppointmentType >
  );
}

export default AppointmentType;