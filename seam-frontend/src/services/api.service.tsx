import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { Appointment } from '../models/appointment';

const APIContext = createContext({
  logIn: (email: string, password: string): Promise<string> => { return Promise.resolve('') },
  signUp: (): Promise<string> => { return Promise.resolve('') },
  getMonthAppointments: (token: string, year: number, month: number): Promise<Appointment[]> => { return Promise.resolve([]) }
})

export function APIProvider(props: any) {
  const value = {
    logIn: props.logIn || logIn,
    signUp: props.signUp || signUp,
    getMonthAppointments: props.getMonthAppointments || getMonthAppointments
  };

  return (
    <APIContext.Provider value={value}>
      {props.children}
    </APIContext.Provider>
  )
}

export function useAPI() {
  return useContext(APIContext);
}

function logIn(email: string, password: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64')

    axios.post('http://localhost/api/login', {}, {
      headers: {
        'Authorization': `Basic ${token}`
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((err) => {
      reject(err);
    });
  });
}

function signUp() {
  console.log('Signing up!');
}

function getMonthAppointments(token: string, year: number, month: number): Promise<Appointment[]> {
  return new Promise<Appointment[]>((resolve, reject) => {
    axios.get(`http://localhost/api/appointments/${year}/${month}?access_token=${token}`)
      .then((response) => {
        const appointments: Appointment[] = [];

        for (const appointment of response.data) {
          appointments.push({
            id: appointment.id,
            providerid: appointment.providerid,
            title: appointment.title,
            description: appointment.description,
            location: appointment.location,
            startTime: new Date(appointment.startTime),
            endTime: new Date(appointment.endTime),
            customerid: appointment.customerid,
          })
        }

        resolve(appointments);
      }).catch((err) => {
        reject(err);
      })
  })
}