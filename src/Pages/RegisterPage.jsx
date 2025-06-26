import React from "react";
import Register from "../components/Auth/Register";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Your Account</h2>
        <p>Please fill the details to get started</p>
        <Register />
      </div>
    </div>
  );
};

export default RegisterPage;
