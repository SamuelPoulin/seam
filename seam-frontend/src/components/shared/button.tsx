import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
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
  children: JSX.Element;
}

function Button({ children }: ButtonProps): JSX.Element {
    return <StyledButton>{children}</StyledButton>;
}

export default Button;
