import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.onBackground};
  font-family: 'Roboto Regular';
  font-size: 18px;
`;

const StyledInput = styled.input`
  appearance: none;
	background-color: ${(props) => props.theme.colors.secondary + '80'};
  border-radius: 5px;
  width: 25px;
  height: 25px;
  margin-right: 10px;

  &:checked, &:checked:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  &:checked:after {
    content: '\2714';
	  font-size: 14px;
	  color: white;
  }
`;

export interface CheckboxProps {
  label: string;
}

function Checkbox(props: CheckboxProps) {
  return (
    <StyledCheckbox>
      <StyledInput type="checkbox" />
      <StyledLabel>{props.label}</StyledLabel>
    </StyledCheckbox>
  )
}

export default Checkbox;