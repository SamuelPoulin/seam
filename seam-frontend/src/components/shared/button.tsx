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

  transition: background-color 0.1s ease;

  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverSecondary};
  }

  &:focus {
    outline: none;
  }
`;

export interface ButtonProps {
  children?: JSX.Element | JSX.Element[];
  onClick?: () => void;
  type?: any;
}

function Button({ children, onClick, type }: ButtonProps): JSX.Element {
  return <StyledButton type={type} onClick={onClick}>{children}</StyledButton>;
}

export default Button;
