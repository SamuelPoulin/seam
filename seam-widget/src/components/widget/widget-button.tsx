import { h } from 'preact';
import styled, { ThemeContext } from 'styled-components';
import { animated } from 'react-spring';
import Icon from '../shared/icon';
import { useContext } from 'preact/hooks';
import { GlobalsContext } from '../../AppContext';

interface WidgetButtonProps {
  width: string;
}

const StyledWidgetButton = styled(animated.button)<WidgetButtonProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 60px;
  width: ${(props) => props.width};

  background-color: transparent;

  border-radius: 15px;
  border: none;
  cursor: pointer;
  margin: 0px;
  padding: 0px;

  color: ${(props) => props.theme.colors.primary};
  font-family: 'Jaldi';
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledCloseButtonContent = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBookButtonContent = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 150px;
  
  svg {
    margin-bottom: 3px;
  } 
`;

const CloseButtonContent = () => {
  const theme = useContext(ThemeContext);

  return (
    <StyledCloseButtonContent>
      <Icon size={35} color={theme.colors.primary}>close</Icon>
    </StyledCloseButtonContent>
  );
}

const BookButtonContent = () => {
  return (
    <StyledBookButtonContent>
      <Icon size={35} color={'#C14A4A'}>widget-calendar</Icon>
      <div>Book time</div>
    </StyledBookButtonContent>
  );
}

const WidgetButton = () => {
  const { widgetOpen, setWidgetOpen } = useContext(GlobalsContext);

  return (
    <StyledButtonContainer>
      <StyledWidgetButton onClick={() => setWidgetOpen(!widgetOpen)} width={widgetOpen ? '60px' : '150px'}>
        {widgetOpen ? <CloseButtonContent /> : <BookButtonContent />}
      </StyledWidgetButton>
    </StyledButtonContainer>
  )
}

export default WidgetButton;