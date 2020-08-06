import * as React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: none;
  cursor: pointer;
  margin: 0px;
  padding: 0px;

  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverSecondary};
  }
`;

export interface ButtonProps {
  children?: JSX.Element;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps): JSX.Element {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
