import React, { createContext, useState } from 'react';
import { signin } from '../api/users-api';

export const AuthContext = createContext({
  user: null,
  error: null,
  isLoading: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username, password) => {
    try {
      setIsLoading(true);

      const response = await signin(username, password);

      setUser(response);
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
