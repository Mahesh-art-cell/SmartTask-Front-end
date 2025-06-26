import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuthContext(); // ✅ from AuthContext

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(form); // ✅ AuthContext handles user/token/navigation
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back!</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {error && <p className="error-text">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <span className="link" onClick={() => navigate("/register")}>
          Register Here
        </span>
      </p>
    </div>
  );
};

export default Login;
