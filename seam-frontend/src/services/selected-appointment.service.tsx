import React, { createContext, useContext, useState } from 'react';
import { Appointment } from '../models/appointment';

interface SelectedAppointmentContextProps {
  selectedAppointment?: Appointment;
  setSelectedAppointment: Function;
}

const SelectedAppointmentContext = createContext<SelectedAppointmentContextProps>({
  selectedAppointment: undefined,
  setSelectedAppointment: (): void => { }
});

export function SelectedAppointmentProvider(props: any) {
  const [selectedAppointment, setSelectedAppointment] = useState(undefined);

  const value = {
    selectedAppointment: props.selectedAppointment || selectedAppointment,
    setSelectedAppointment: props.setSelectedAppointment || setSelectedAppointment,
  }

  return (
    <SelectedAppointmentContext.Provider value={value}>
      {props.children}
    </SelectedAppointmentContext.Provider>
  )
}

export function useSelectedAppointment() {
  return useContext(SelectedAppointmentContext);
}