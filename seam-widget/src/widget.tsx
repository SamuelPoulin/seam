import { h } from 'preact';

import styled from 'styled-components';
import Icon from './components/shared/icon';

const StyledWidgetButton = styled.button`
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

  animation: 1s ease-in-out 0s 1 slideInFromBottom;

  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 40px;
  right: 60px;

  background-color: ${(props) => props.theme.colors.onBackground};
  height: 60px;
  width: 150px;
  border-radius: 15px;
  
  border: none;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  
  &:focus {
    outline: none;
  }

  transition: transform 0.5s;
  &:hover {
    transform: translatey(-3px);
  }

  color: ${(props) => props.theme.colors.primary};
  font-family: 'Jaldi';
  font-size: 20px;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);

  svg {
    margin-bottom: 3px;
  }
`;

const Widget = () => {
  return <StyledWidgetButton><Icon size={35} color={'#C14A4A'}>widget-calendar</Icon><div>Book time</div></StyledWidgetButton>;
};

export default Widget;
