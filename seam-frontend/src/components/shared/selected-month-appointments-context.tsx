import { createContext } from 'react';
import { Appointment } from '../../models/appointment';

const SelectedMonthAppointmentContext = createContext({
  selectedMonthAppointments: [],
  setSelectedMonthAppointments: (appointments: Appointment[]) => { }
});

export default SelectedMonthAppointmentContext;