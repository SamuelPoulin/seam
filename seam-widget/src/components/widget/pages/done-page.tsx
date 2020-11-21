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

const StyledPreviousButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 60px;
  width: 150px;

  background-color: ${(props) => props.theme.colors.accent};

  border-radius: 15px;
  border: none;
  cursor: pointer;
  margin: 0px;
  padding: 0px;

  color: ${(props) => props.theme.colors.secondary};
  font-family: 'Jaldi';
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

interface DonePageProps {
  style: any;
}

const DonePage = (props: DonePageProps) => {
  const { setRoute } = useContext(RouteContext);

  return (
    <StyledDonePage style={props.style}>
      <StyledPreviousButton onClick={() => setRoute('/book')}>Previous step</StyledPreviousButton>
    </StyledDonePage>
  )
}

export default DonePage;