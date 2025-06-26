import React from "react";
import Login from "../Components/Auth/Login";
import "./LoginPage.css"
const LoginPage = () => {
  return (
    <div className="auth-page">
      <h2>Login</h2>
      <Login />
    </div>
  );
};

export default LoginPage;
