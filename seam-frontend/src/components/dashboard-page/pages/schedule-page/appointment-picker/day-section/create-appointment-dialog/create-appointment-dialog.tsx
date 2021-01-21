import React from 'react';
import { Dialog } from "@material-ui/core";
import { useDialogOpen } from '../../../../../../../services/dialog-open-service';
import styled, { useTheme } from 'styled-components';
import Button from '../../../../../../shared/button';
import Icon from '../../../../../../shared/icon';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import StyledH1 from "../../../../../../shared/h1";
import { useAPI } from '../../../../../../../services/api.service';
import { useUser } from '../../../../../../../services/user.service';
import { useSelectedDate } from '../../../../../../../services/selected-date.service';

const StyledPickingSection = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 0px;
`;

const StyledPickingTitle = styled.div`
  font-family: "Roboto Bold";
  font-size: 24px;

  margin-bottom: 5px;
`;

const StyledTitleText = styled.div`
  font-family: "Roboto Bold";
  font-size: 24px;
`;

const StyledButtonText = styled(StyledH1)`
  font-size: 18px;
`;

const StyledSpace = styled.div`
  width: 40px;
  height: 40px;
`;

const StyledDialogBottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 20px 0px;

  Button {
    padding: 0px 10px;
    height: 40px;
  }
`;

const StyledDialogTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0px;

  Button {
    padding: 0px 8px;
    height: 40px;
  }
`;

const StyledDialogContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px 20px;
  width: 500px;
`;

function CreateAppointmentDialog(): JSX.Element {
    const { dialogOpen, setDialogOpen } = useDialogOpen();
    const theme = useTheme();
    const api = useAPI();
    const user = useUser();
    const {selectedDate} = useSelectedDate();

    function handleCreate() {
        api.createAppointment(
            user.token,
            3,
            'Hangout with Louis',
            'Probably play DS3',
            'Sams Place',
            new Date(),
            new Date(new Date().getTime() + 60 * 1 * 1000),
            1
        ).then((appointmentid) => {
            setDialogOpen(false);
        });
    }

    return (
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} PaperProps={{ style: { borderRadius: 25 } }}>
            <StyledDialogContent>
                <StyledDialogTitle>
                    <StyledSpace />
                    <StyledTitleText>Create an appointment</StyledTitleText>
                    <Button onClick={() => setDialogOpen(false)}>
                        <Icon size={theme.iconSize} color={theme.colors.onSecondary}>close</Icon>
                    </Button>
                </StyledDialogTitle>
                <StyledPickingSection>
                    <StyledPickingTitle>
                        Appointment type
            </StyledPickingTitle>
                </StyledPickingSection>
                <StyledPickingSection>
                    <StyledPickingTitle>
                        Title
            </StyledPickingTitle>
                </StyledPickingSection>
                <StyledPickingSection>
                    <StyledPickingTitle>
                        Description
            </StyledPickingTitle>
                </StyledPickingSection>
                <StyledPickingSection>
                    <StyledPickingTitle>
                        Location
            </StyledPickingTitle>
                </StyledPickingSection>
                <StyledPickingSection>
                    <StyledPickingTitle>
                        Start time
            </StyledPickingTitle>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateTimePicker style={{ backgroundColor: theme.colors.secondary, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} value={selectedDate} InputProps={{ style: { paddingLeft: 5, paddingRight: 5, fontSize: 20, fontFamily: 'Roboto Regular' } }} onChange={(date) => console.log(date)} showTodayButton />
                    </MuiPickersUtilsProvider>
                </StyledPickingSection>
                <StyledPickingSection>
                    <StyledPickingTitle>
                        End time
            </StyledPickingTitle>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateTimePicker style={{ backgroundColor: theme.colors.secondary, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} value={selectedDate} InputProps={{ style: { paddingLeft: 5, paddingRight: 5, fontSize: 20, fontFamily: 'Roboto Regular' } }} onChange={(date) => console.log(date)} showTodayButton />
                    </MuiPickersUtilsProvider>
                </StyledPickingSection>
                <StyledDialogBottomSection>
                    <Button onClick={() => handleCreate()}>
                        <StyledButtonText>Create</StyledButtonText>
                    </Button>
                </StyledDialogBottomSection>
            </StyledDialogContent>
        </Dialog>
    );
}

export default CreateAppointmentDialog;