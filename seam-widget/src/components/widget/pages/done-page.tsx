import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { animated } from 'react-spring';
import styled from 'styled-components';
import { RouteContext } from '../../../Router';

const StyledDonePage = styled(animated.div)`
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 400px;
`;

interface DonePageProps {
  style: any;
}

const DonePage = (props: DonePageProps) => {
  const { setRoute } = useContext(RouteContext);

  return (
    <StyledDonePage style={props.style}>
      <button onClick={() => setRoute('/appointments')}>AppointmentsPage</button>
    </StyledDonePage>
  )
}

export default DonePage;