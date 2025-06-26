import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem("user");
    return localUser ? JSON.parse(localUser) : null;
  });

  const navigate = useNavigate();

  // ✅ Login: Save token, user, and navigate based on role
  const login = async (credentials) => {
    const data = await loginUser(credentials);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    setUser(data.user);
    navigate(data.user.role === "admin" ? "/admin" : "/dashboard");
  };

  // ✅ Register: Allow selecting role during registration
  const register = async (credentials) => {
    const data = await registerUser(credentials);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    setUser(data.user);
    navigate(data.user.role === "admin" ? "/admin" : "/dashboard");
  };

  // ✅ Logout: Clear storage, reset user, redirect
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom Hook
export const useAuthContext = () => useContext(AuthContext);
