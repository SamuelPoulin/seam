import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Button from "../../../shared/button";
import Icon from "../../../shared/icon";
import { useSelectedDate } from "../../../../services/selected-date.service";

const StyledMonthPicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 50px;
  width: 300px;
  margin: 10px 0px;

  font-family: "Roboto Bold";
  font-size: 24px;
  color: ${(props) => props.theme.colors.onBackground};

  Button {
    width: 40px;
    height: 40px;
  }
`;

function MonthPicker(): JSX.Element {
  const { selectedDate, setSelectedDate } = useSelectedDate();
  const theme = useContext(ThemeContext);

  function decrementMonth() {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  }
  function incrementMonth() {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  }

  return (
    <StyledMonthPicker>
      <Button onClick={() => decrementMonth()}>
        <Icon size={theme.iconSize} color={theme.colors.onSecondary}>
          previous
        </Icon>
      </Button>
      {selectedDate.toLocaleString("defaut", {
        month: "long",
        year: "numeric",
      })}
      <Button onClick={() => incrementMonth()}>
        <Icon size={theme.iconSize} color={theme.colors.onSecondary}>
          next
        </Icon>
      </Button>
    </StyledMonthPicker>
  );
}

export default MonthPicker;
