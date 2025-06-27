import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"
const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Smart Task Manager</h1>
      <p>Organize your work and personal tasks easily.</p>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
    </div>
  );
};

export default HomePage;





