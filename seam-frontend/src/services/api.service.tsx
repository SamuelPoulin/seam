import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { Appointment } from '../models/appointment';
import { Customer } from '../models/customer';

const API_URL = `http://${window.location.hostname}`;

const APIContext = createContext({
  logIn: (email: string, password: string): Promise<string> => Promise.resolve(''),
  signUp: (): Promise<string> => Promise.resolve(''),
  getMonthAppointments: (token: string, year: number, month: number): Promise<Appointment[]> => Promise.resolve([]),
  getCustomers: (token: string): Promise<Customer[]> => Promise.resolve([]),
  getCustomerById: (token: string, customerid: number): Promise<Customer> => Promise.resolve({ id: -1, firstName: '', lastName: '', email: '', phoneNo: '' })
})

export function APIProvider(props: any) {
  const value = {
    logIn: props.logIn || logIn,
    signUp: props.signUp || signUp,
    getMonthAppointments: props.getMonthAppointments || getMonthAppointments,
    getCustomers: props.getCustomers || getCustomers,
    getCustomerById: props.getCustomerById || getCustomerById
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

    axios.post(`http://${API_URL}/api/login`, {}, {
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