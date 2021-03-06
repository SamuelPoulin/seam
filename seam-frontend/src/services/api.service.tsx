import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { Appointment } from '../models/appointment';
import { Customer } from '../models/customer';

const API_URL = `http://${window.location.hostname}:5001`;

const APIContext = createContext({
  logIn: (email: string, password: string): Promise<string> => Promise.resolve(''),
  tokenLogIn: (token: string): Promise<string> => Promise.resolve(''),
  signUp: (email: string, username: string, password: string): Promise<string> => Promise.resolve(''),
  getMonthAppointments: (token: string, year: number, month: number): Promise<Appointment[]> => Promise.resolve([]),
  getCustomers: (token: string): Promise<Customer[]> => Promise.resolve([]),
  getCustomerById: (token: string, customerid: number): Promise<Customer> => Promise.resolve({ id: -1, firstName: '', lastName: '', email: '', phoneNo: '' }),
  createAppointment: (token: string, providerid: number, title: string, description: string, location: string, startTime: Date, endTime: Date, customerid: number): Promise<number> => Promise.resolve(-1)
})

export function APIProvider(props: any) {
  const value = {
    logIn: props.logIn || logIn,
    tokenLogIn: props.tokenLogIn || tokenLogIn,
    signUp: props.signUp || signUp,
    getMonthAppointments: props.getMonthAppointments || getMonthAppointments,
    getCustomers: props.getCustomers || getCustomers,
    getCustomerById: props.getCustomerById || getCustomerById,
    createAppointment: props.createAppointment || createAppointment
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
    const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');

    axios.post(`${API_URL}/api/login`, {}, {
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

function tokenLogIn(token: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    axios.get(`${API_URL}/api/login/token?access_token=${token}`).then((response) => {
      resolve(response.data);
    }).catch((err) => {
      reject(err);
    })
  });
}

function signUp(email: string, username: string, password: string) {
  return new Promise<string>((resolve, reject) => {
    const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');

    axios.post(`${API_URL}/api/signup`,
      {
        user: {
          username: username
        }
      },
      {
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

function getMonthAppointments(token: string, year: number, month: number): Promise<Appointment[]> {
  return new Promise<Appointment[]>((resolve, reject) => {
    axios.get(`${API_URL}/api/appointments/${year}/${month}?access_token=${token}`)
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
          });
        }

        resolve(appointments);
      }).catch((err) => {
        reject(err);
      });
  });
}

function getCustomers(token: string, year: number, month: number): Promise<Customer[]> {
  return new Promise<Customer[]>((resolve, reject) => {
    axios.get(`${API_URL}/api/customers?access_token=${token}`)
      .then((response) => {
        const customers: Customer[] = [];

        for (const customer of response.data) {
          customers.push({
            id: customer.id,
            firstName: customer.first_name,
            lastName: customer.last_name,
            email: customer.email,
            phoneNo: customer.phone_no
          });
        }

        resolve(customers);
      }).catch((err) => {
        reject(err);
      });
  });
}

function getCustomerById(token: string, customerid: number): Promise<Customer> {
  return new Promise<Customer>((resolve, reject) => {
    axios.get(`${API_URL}/api/customers/${customerid}?access_token=${token}`)
      .then((response) => {
        resolve({
          id: response.data.id,
          firstName: response.data.first_name,
          lastName: response.data.last_name,
          email: response.data.email,
          phoneNo: response.data.phone_no
        });
      }).catch((err) => {
        reject(err);
      })
  });
}

function createAppointment(
  token: string,
  providerid: number,
  title: string,
  description: string,
  location: string,
  startTime: Date,
  endTime: Date,
  customerid: number
): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    axios.post(`${API_URL}/api/appointments?access_token=${token}`,
      {
        appointment: {
          providerid: providerid,
          title: title,
          description: description,
          location: location,
          startTime: startTime.getFullYear() + '-' + (startTime.getMonth() + 1) + '-' + startTime.getDate() + ' ' + startTime.getHours() + ':' + startTime.getMinutes() + ':00',
          endTime: endTime.getFullYear() + '-' + (endTime.getMonth() + 1) + '-' + endTime.getDate() + ' ' + endTime.getHours() + ':' + endTime.getMinutes() + ':00',
          customerid: customerid
        }
      }).then((response) => {
        resolve(response.data);
      }).catch((err) => {
        reject(err);
      });
  });
} 