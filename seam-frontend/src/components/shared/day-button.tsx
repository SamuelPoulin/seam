import React, { useContext } from 'react';
import styled from 'styled-components';
import { StyledButton, ButtonProps } from './button';
import NotificationIndicator from './notification-indicator';
import SelectedDateContext from './selected-date-context';

const StyledNotificationCounter = styled.div`
    font-family: "Roboto Regular";
    font-size: 16px;

    margin-left: 2px;
`;

const StyledNotificationContainer = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
`;

const StyledDayText = styled.div`
    font-family: "Roboto Regular";
    font-size: 24px;
`;

const StyledDayButton = styled(StyledButton)`
    display: flex;
    flex-direction: column;
    
    width: 50px;
    height: 60px;

    ${(props: CustomProps) => !props.isSelected && 'background-color: transparent'};
`;

interface CustomProps {
    isSelected: boolean;
}

export interface DayButtonProps extends ButtonProps {
    date: Date;
    notificationCount: number;
}

function DayButton({ date, notificationCount }: DayButtonProps): JSX.Element {
    const { selectedDate, setSelectedDate } = useContext(SelectedDateContext);

    function isSelected() {
        const firstDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const secondDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
        return firstDate.getTime() === secondDate.getTime();
    }

    return (
        <StyledDayButton onClick={() => setSelectedDate(new Date(date))} isSelected={isSelected()}>
            <StyledDayText>{date.toLocaleString('default', { day: 'numeric' })}</StyledDayText>
            {
                notificationCount !== 0
                    ? <StyledNotificationContainer>
                        <NotificationIndicator />
                        <StyledNotificationCounter>{notificationCount}</StyledNotificationCounter>
                    </StyledNotificationContainer>
                    : undefined
            }

        </StyledDayButton>
    );
}

export default DayButton;