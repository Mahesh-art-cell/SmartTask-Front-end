
import { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    if (data?.token) {
      setUser(data.user);
    }
  };

  const register = async (info) => {
    const data = await authService.register(info);
    if (data?.token) {
      setUser(data.user);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};