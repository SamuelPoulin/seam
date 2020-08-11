import React, { useContext, createContext } from 'react';
import { useLocalStorage } from './storage.service';

const UserContext = createContext({
  token: '',
  setToken: (token: string): void => { },
});

export function UserProvider(props: any) {
  const [token, setToken] = useLocalStorage('token', '');

  const value = {
    token: props.token || token,
    setToken: props.setToken || setToken,
  };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext);
}

