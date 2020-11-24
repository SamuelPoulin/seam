import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { RouteContext } from '../../../../Router';
import styled from 'styled-components';
import { animated } from 'react-spring';
import AppointmentType from './appointment-type';

const StyledAppointmentsPage = styled(animated.div)`
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 540px;
`;

const StyledTopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  height: 100px;
  width: 100%;

  border-radius: 15px 15px 0px 0px;
  background-color: #060D1C;
`;

const StyledMainText = styled.div`
  color: white;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 32px;

  margin-left: 28px;
`;

const StyledSubText = styled.div`
  color: white;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 16px;

  margin-left: 28px;
  margin-top: 7px;
`;

const StyledBottomSection = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  height: 440px;
  width: 100%;
  overflow-y: scroll;
`;

interface AppointmentsPageProps {
  style: any;
}

const AppointmentsPage = (props: AppointmentsPageProps) => {
  const { setRoute } = useContext(RouteContext);

  return (
    <StyledAppointmentsPage style={props.style}>
      <StyledTopSection>
        <StyledMainText>Hello there,</StyledMainText>
        <StyledSubText>What are we scheduling?</StyledSubText>
      </StyledTopSection>
      <StyledBottomSection>
        <AppointmentType title="Job interview" description="Schedule a job interview with me if you think I'm a good fit!" />
        <AppointmentType title="Tutoring" description="Have me as a tutor while you learn a couple of nice skills!" />
        <AppointmentType title="Just talk" description="Talk with me! Wether you have a few question or a business proposal." />
        <AppointmentType title="Contract" description="Meet me about a contract you want me to get done!" />
      </StyledBottomSection>
    </StyledAppointmentsPage>
  );
}

export default AppointmentsPage;