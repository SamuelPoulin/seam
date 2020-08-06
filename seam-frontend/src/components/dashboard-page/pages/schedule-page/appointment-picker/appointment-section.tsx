import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Button from '../../../../shared/button';
import Icon from '../../../../shared/icon';
import StyledH1 from '../../../../shared/h1';

const StyledActionButtonText = styled(StyledH1)`
  font-size: 24px;
  margin-left: 5px;
`;

const StyledTitleSectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 50px;
  
  Button {
    padding: 0px 10px;
    margin-left: 25px;
    height: 50px;
  }
`;

const StyledDescriptionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 0px;
  width: 100%;
`;

const StyledContactSectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  font-family: 'Roboto Regular';
  font-size: 24px;
  color: ${(props) => props.theme.colors.onBackground};
`;

const StyledContactInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    svg {
        margin-right: 5px;
    }
`;

const StyledAppointMent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

const StyledDescriptionTitle = styled.div`
    display: flex;
    margin-bottom: 5px;

    font-family: 'Roboto Regular';
    font-size: 32px;

    color: ${(props) => props.theme.colors.onBackground};
`;

const StyledDescriptionTitleWith = styled(StyledDescriptionTitle)`
    color: ${(props) => props.theme.colors.secondary};
`;

const StyledDescription = styled.div`
    font-family: 'Roboto Regular';
    font-size: 24px;
`;

function AppointmentSection(): JSX.Element {
    const theme = useContext(ThemeContext);

    const appointmentName = 'Haircut';
    const appointmentLocation = '1337 Seam Boul.';
    const clientName = 'John Smith';
    const clientPhone = '438-989-1099';
    const clientEmail = 'johnsmith@domain.com';

    return (
        <StyledAppointMent>
            <StyledTitleSectionContainer>
                <StyledH1>Appointment</StyledH1>
                <Button>
                    <Icon size={theme.iconSize} color={theme.colors.onSecondary}>edit</Icon>
                    <StyledActionButtonText>Edit</StyledActionButtonText>
                </Button>
            </StyledTitleSectionContainer>
            <StyledDescriptionSectionContainer>
                <StyledDescriptionTitle>
                    {appointmentName}<StyledDescriptionTitleWith>&nbsp;with&nbsp;</StyledDescriptionTitleWith>{clientName}
                </StyledDescriptionTitle>
                <StyledDescription>Meet with me in my fancy new office and let me give you a fresh new look that fits you perfectly! If you ever need touch-ups just let me know and I’ll do them for free.</StyledDescription>
            </StyledDescriptionSectionContainer>
            <StyledContactSectionContainer>
                <StyledContactInfoContainer>
                    <Icon size={theme.iconSize} color={theme.colors.onBackground}>location</Icon>
                    {appointmentLocation}
                </StyledContactInfoContainer>
                <StyledContactInfoContainer>
                    <Icon size={theme.iconSize} color={theme.colors.onBackground}>phone</Icon>
                    {clientPhone}
                </StyledContactInfoContainer>
                <StyledContactInfoContainer>
                    <Icon size={theme.iconSize} color={theme.colors.onBackground}>email</Icon>
                    {clientEmail}
                </StyledContactInfoContainer>
            </StyledContactSectionContainer>
        </StyledAppointMent>
    );
}

export default AppointmentSection;