import React, { useContext, createContext, useState } from 'react';
import * as jwt from 'jsonwebtoken';
import { UserToken } from '../models/user-token';

const UserContext = createContext({
  token: '',
  setToken: (token: string): void => { },
  getUserId: (): number => { return -1 }
});

export function UserProvider(props: any) {
  const [token, setToken] = useState('');

  function getUserId(): number {
    const user = jwt.decode(token) as UserToken;

    return user ? user.userid : -1;
  }

  const value = {
    token: props.token || token,
    setToken: props.setToken || setToken,
    getUserId: props.getUserId || getUserId
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

