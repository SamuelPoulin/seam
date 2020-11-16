import React from 'react';
import styled from 'styled-components';
import Icon from '../shared/icon';

const StyledWidgetButton = styled.button`
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

  color: ${(props) => props.theme.colors.primary};
  font-family: 'Jaldi Bold';
  font-size: 20px;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);

  svg {
    margin-bottom: 3px;
  }
`;

function Widget(): JSX.Element {
  return <StyledWidgetButton><Icon size={35} color={'#C14A4A'}>widget-calendar</Icon><div>Book time</div></StyledWidgetButton>;
}

export default Widget;