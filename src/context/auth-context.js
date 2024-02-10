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
  const [user, setUser] = useState(null);
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
