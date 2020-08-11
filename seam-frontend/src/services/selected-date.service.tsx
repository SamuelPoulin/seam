import React, { createContext, useContext, useState, useEffect } from 'react';
import { useMonthAppointments } from './month-appointments.service';
import { useAPI } from './api.service';
import { useUser } from './user.service';

interface SelectedDateContextProps {
  selectedDate: Date;
  setSelectedDate: Function;
}

const SelectedDateContext = createContext<SelectedDateContextProps>({
  selectedDate: new Date(),
  setSelectedDate: (date: Date): void => { }
});

export function SelectedDateProvider(props: any) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const setMonthAppointments = useMonthAppointments().setMonthAppointments;

  const api = useAPI();
  const user = useUser();

  const selectedMonth = selectedDate.getMonth();

  useEffect(() => {
    api.getMonthAppointments(user.token, selectedDate.getFullYear(), selectedDate.getMonth() + 1)
      .then((appointments) => {
        setMonthAppointments(appointments);
      }).catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth]);


  const value = {
    selectedDate: props.selectedDate || selectedDate,
    setSelectedDate: props.setSelectedDate || setSelectedDate,
  }

  return (
    <SelectedDateContext.Provider value={value}>
      {props.children}
    </SelectedDateContext.Provider>
  )
}

export function useSelectedDate() {
  return useContext(SelectedDateContext);
}