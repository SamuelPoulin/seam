import React, { useContext, useState, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";

import Button from "../../../../shared/button";
import Icon from "../../../../shared/icon";
import StyledH1 from "../../../../shared/h1";
import { useSelectedAppointment } from "../../../../../services/selected-appointment.service";
import { useAPI } from "../../../../../services/api.service";
import { useUser } from "../../../../../services/user.service";
import { Customer } from "../../../../../models/customer";

const StyledActionButtonText = styled(StyledH1)`
  font-size: 18px;
  margin-left: 5px;
`;

const StyledTitleSectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 40px;

  Button {
    padding: 0px 10px;
    margin-left: 25px;
    height: 40px;
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

  font-family: "Roboto Regular";
  font-size: 18px;
  color: ${(props) => props.theme.colors.onBackground};

  @media (max-width: 1700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  svg {
    margin-right: 5px;
  }

  @media (max-width: 1200px) {
    margin: 5px 0px;
  }
`;

const StyledAppointMent = styled.div`
  grid-area: appointment;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

const StyledDescriptionTitle = styled.div`
  display: flex;
  margin-bottom: 5px;

  font-family: "Roboto Regular";
  font-size: 24px;

  color: ${(props) => props.theme.colors.onBackground};
`;

const StyledDescriptionTitleWith = styled(StyledDescriptionTitle)`
  color: ${(props) => props.theme.colors.secondary};
`;

const StyledDescription = styled.div`
  font-family: "Roboto Regular";
  font-size: 18px;
`;

function AppointmentSection(): JSX.Element {
  const theme = useContext(ThemeContext);
  const selectedAppointment = useSelectedAppointment().selectedAppointment;

  const defaultCustomer: Customer = { id: -1, firstName: '', lastName: '', email: '', phoneNo: '' };
  const [customer, setCustomer] = useState(defaultCustomer);

  const api = useAPI();
  const user = useUser();

  useEffect(() => {
    if (selectedAppointment?.customerid) {
      api.getCustomerById(user.token, selectedAppointment.customerid).then((customer) => {
        setCustomer(customer);
      }).catch((err) => {
        console.log(err);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAppointment])

  return (
    <StyledAppointMent>
      <StyledTitleSectionContainer>
        <StyledH1>Appointment</StyledH1>
        <Button>
          <Icon size={theme.iconSize} color={theme.colors.onSecondary}>
            edit
          </Icon>
          <StyledActionButtonText>Edit</StyledActionButtonText>
        </Button>
      </StyledTitleSectionContainer>
      <StyledDescriptionSectionContainer>
        <StyledDescriptionTitle>
          {selectedAppointment?.title}
          <StyledDescriptionTitleWith>
            &nbsp;with&nbsp;
          </StyledDescriptionTitleWith>
          {customer.firstName + ' ' + customer.lastName}
        </StyledDescriptionTitle>
        <StyledDescription>
          {selectedAppointment?.description}
        </StyledDescription>
      </StyledDescriptionSectionContainer>
      <StyledContactSectionContainer>
        <StyledContactInfoContainer>
          <Icon size={theme.iconSize} color={theme.colors.onBackground}>
            location
          </Icon>
          {selectedAppointment?.location}
        </StyledContactInfoContainer>
        <StyledContactInfoContainer>
          <Icon size={theme.iconSize} color={theme.colors.onBackground}>
            phone
          </Icon>
          {customer.phoneNo}
        </StyledContactInfoContainer>
        <StyledContactInfoContainer>
          <Icon size={theme.iconSize} color={theme.colors.onBackground}>
            email
          </Icon>
          {customer.email}
        </StyledContactInfoContainer>
      </StyledContactSectionContainer>
    </StyledAppointMent>
  );
}

export default AppointmentSection;
