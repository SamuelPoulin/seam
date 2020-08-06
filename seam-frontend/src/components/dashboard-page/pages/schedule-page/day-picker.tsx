import React, { useContext } from 'react';
import styled from 'styled-components';
import DayButton from '../../../shared/day-button';
import SelectedDateContext from '../../../shared/selected-date-context';

const StyledDayPicker = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    grid-gap: 25px 0px;
    justify-items: center;
    align-items: center;
    margin: 25px 0px;

    width: 100%;
    height: 100%;

    font-size: 24px;
    font-family: 'Roboto Regular';

    .item {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;

enum Weekdays {
    Sunday = 'SUN',
    Monday = 'MON',
    Tuesday = 'TUE',
    Wednesday = 'WED',
    Thursday = 'THU',
    Friday = 'FRI',
    Saturday = 'SAT'
}

function DayPicker(): JSX.Element {
    const selectedDate = useContext(SelectedDateContext).selectedDate;

    const dayButtonComponents = [];
    const weekdays = Object.values(Weekdays).map((weekday) => <div>{weekday}</div>);
    const firstWeekday = getFirstWeekdayOfMonth(selectedDate);

    for (let i = 1; i <= firstWeekday; ++i) {
        dayButtonComponents.push(<div />);
    }

    for (let i = 1; i <= getNumberOfDaysInMonth(selectedDate); ++i) {
        dayButtonComponents.push(
            <DayButton date={new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)} notificationCount={Math.round(Math.random())} />
        )
    }

    return (
        <>
            <StyledDayPicker>
                {weekdays}
                {dayButtonComponents}
            </StyledDayPicker>
        </>
    );
}

function getFirstWeekdayOfMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

function getNumberOfDaysInMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export default DayPicker;