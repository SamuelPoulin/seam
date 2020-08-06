import React from 'react';
import styled from 'styled-components';

const StyledAppointmentPicker = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  background-color: blue;
`;

function AppointmentPicker(): JSX.Element {
    return (<StyledAppointmentPicker />);
}

export default AppointmentPicker;