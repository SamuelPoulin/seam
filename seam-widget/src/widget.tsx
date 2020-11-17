import { Fragment, h } from 'preact';
import { useContext, useState } from 'preact/hooks';

import styled, { ThemeContext } from 'styled-components';
import { GlobalsContext } from './AppContext';
import Icon from './components/shared/icon';

interface WidgetContainerProps {
  animation: string;
}

interface WidgetButtonProps {
  open: boolean;
}

const StyledWidgetContainer = styled.div<WidgetContainerProps>`
  @keyframes slideInFromBottom {
    0% {
        transform: translateY(50%);
        opacity: 0;
    }
    50% {
        transform: translateY(50%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 100;
    }
  }

  @keyframes maximise {
    0% {
      height: 60px;
      width: 150px;
    }
    50% {
      height: 60px;
      width: 300px;
    }
    100% {
      height: 600px;
      width: 300px;
    }
  }

  @keyframes minimize {
    0% {
      height: 600px;
      width: 300px;
    }
    50% {
      height: 60px;
      width: 300px;
    }
    100% {
      height: 60px;
      width: 150px;
    }
  }

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  background-color: ${(props) => props.theme.colors.onBackground};
  border-radius: 15px;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);

  animation: ${(props) => props.animation};
  animation-fill-mode: forwards;  

  position: fixed;
  bottom: 40px;
  right: 60px;
`;

const StyledWidgetButton = styled.button<WidgetButtonProps>`
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 60px;
  width: ${(props) => props.open ? '60px' : '150px'};

  background-color: transparent;
  border-radius: 15px;

  border: none;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  
  &:focus {
    outline: none;
  }

  color: ${(props) => props.theme.colors.primary};
  font-family: 'Jaldi';
  font-size: 20px;

  svg {
    margin-bottom: 3px;
  }
`;

const Widget = () => {
  const { widgetOpen, setWidgetOpen } = useContext(GlobalsContext);
  const  theme  = useContext(ThemeContext);
  const [firstOpen, setFirstOpen] = useState(true);

  if (widgetOpen) {
    setFirstOpen(false);
  }

  return (
    <StyledWidgetContainer animation={`1s ease-in-out 0s 1 ${widgetOpen ? 'maximise' : firstOpen ? 'slideInFromBottom' : 'minimize'};`}>
      <StyledWidgetButton onClick={() => setWidgetOpen(!widgetOpen)} open={widgetOpen}>
        {
          widgetOpen ?
            <Icon size={35} color={theme.colors.primary}>close</Icon> :
            <Fragment>
              <Icon size={35} color={'#C14A4A'}>widget-calendar</Icon>
              <div>Book time</div>
            </Fragment>
        }

      </StyledWidgetButton>
    </StyledWidgetContainer>
  );
};

export default Widget;
