import React, { useContext } from 'react';
import styled, { withTheme } from 'styled-components';
import Button from '../../../shared/button';
import Icon from '../../../shared/icon';
import SelectedDateContext from '../../../shared/selected-date-context';

const StyledMonthPicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 50px;
  width: 400px;
  margin: 10px 0px;

  font-family: "Roboto Bold";
  font-size: 32px;
  color: ${(props) => props.theme.colors.onBackground};

  Button {
    width: 50px;
    height: 50px;
  }
`;

const ICON_SIZE = 30;

function MonthPicker({ theme }: any): JSX.Element {
    const { selectedDate, setSelectedDate } = useContext(SelectedDateContext);

    function decrementMonth() { setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)) }
    function incrementMonth() { setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)) }

    return (
        <StyledMonthPicker>
            <Button onClick={() => decrementMonth()}>
                <Icon size={ICON_SIZE} color={theme.colors.onSecondary}>previous</Icon>
            </Button>
            {selectedDate.toLocaleString('defaut', { month: 'long', year: 'numeric' })}
            <Button onClick={() => incrementMonth()}>
                <Icon size={ICON_SIZE} color={theme.colors.onSecondary}>next</Icon>
            </Button>
        </StyledMonthPicker>
    );
}

export default withTheme(MonthPicker);