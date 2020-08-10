import React, { createContext, useContext } from 'react';
import axios from 'axios';

const APIContext = createContext({
  logIn: (email: string, password: string): Promise<string> => { return Promise.resolve('') },
  signUp: (): Promise<string> => { return Promise.resolve('') }
})

export function APIProvider(props: any) {
  const value = {
    logIn: props.logIn || logIn,
    signUp: props.signUp || signUp
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