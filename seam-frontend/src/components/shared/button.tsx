import * as React from "react";
import styled from "styled-components";

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

function Button(props: any) {
  return <StyledButton>{props.children}</StyledButton>;
}

export default Button;
