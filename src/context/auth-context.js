import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({
  user: null,
  error: null,
  isLoading: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: 2,
    username: 'user1',
    role: '1',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…TM1fQ.Voec3bRledmItd8mDceu98d7wqIsqiVAgIeIH8q1vg4',
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username, password) => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        'http://localhost:3030/api/users/login',
        { username, password }
      );

      setUser(response.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, error, setError, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
