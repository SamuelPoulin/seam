import React, { createContext, useContext, useState } from 'react';
import { Appointment } from '../models/appointment';

interface MonthAppointmentsContextProps {
  monthAppointments: Appointment[];
  setMonthAppointments: Function;
}

const MonthAppointmentsContext = createContext<MonthAppointmentsContextProps>({
  monthAppointments: [],
  setMonthAppointments: (appointments: Appointment[]): void => { }
});

export function MonthAppointmentsProvider(props: any) {
  const [monthAppointments, setMonthAppointments] = useState([]);

  const value = {
    monthAppointments: props.monthAppointments || monthAppointments,
    setMonthAppointments: props.setMonthAppointments || setMonthAppointments,
  }

  return (
    <MonthAppointmentsContext.Provider value={value}>
      {props.children}
    </MonthAppointmentsContext.Provider>
  )
}

export function useMonthAppointments() {
  return useContext(MonthAppointmentsContext);
}