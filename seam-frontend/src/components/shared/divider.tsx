import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2px;
`;

const StyledDivider = styled.div`
  display: flex;
  width: 100%;
  height: 85%;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
`;

function Divider(): JSX.Element {
  return (
    <StyledWrapper>
      <StyledDivider />
    </StyledWrapper>
  );
}

export default Divider;
