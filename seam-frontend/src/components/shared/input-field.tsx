import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  margin-top: 8px;
  margin-left: 12px;

  font-size: 14px;
`;

const StyledInput = styled.input`
  margin: 5px 12px;
  font-size: 22px;

  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &:focus + ${StyledLabel} {
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const StyledInputField = styled.div`
  display: flex;
  width: 100%;

  background-color: ${(props) => props.theme.colors.secondary + '80'};
  border-radius: 10px 10px 5px 5px;

  & * {
    transition: .4s;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;

  font-family: 'Roboto Regular';
  color: ${(props) => props.theme.colors.onSecondary};

  border-radius: 2px;
  border-bottom: 2px solid ${(props) => props.theme.colors.onSecondary};

  &:focus-within {
    border-bottom: 2px solid ${(props) => props.theme.colors.accent};
  }
`;

export interface InputFieldProps {
  label: string;
  type: string;
  onChange?: any;
  onSubmit?: any;
  value?: any;
}

function InputField(props: InputFieldProps): JSX.Element {
  return (
    <StyledInputField>
      <StyledContainer>
        <StyledInput onSubmit={props.onSubmit} onChange={props.onChange} value={props.value} id={props.type} type={props.type}></StyledInput>
        <StyledLabel htmlFor={props.type}>{props.label}</StyledLabel>
      </StyledContainer>
    </StyledInputField>
  );
}

export default InputField;