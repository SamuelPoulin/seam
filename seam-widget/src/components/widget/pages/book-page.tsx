import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { animated } from 'react-spring';
import styled from 'styled-components';
import { RouteContext } from '../../../Router';
import Datepicker from 'react-datepicker';

const StyledBookPage = styled(animated.div)`
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 600px;
`;

const StyledNextButton = styled.button`
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

interface BookPageProps {
  style: any;
}

const BookPage = (props: BookPageProps) => {
  const { setRoute } = useContext(RouteContext);

  return (
    <StyledBookPage style={props.style}>
      <StyledNextButton onClick={() => setRoute('/done')}>Next step</StyledNextButton>
    </StyledBookPage>
  )
}

export default BookPage;