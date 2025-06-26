import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <header className="header">
      <h1>Smart Task Manager</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Logout</Link>
      </nav>
    </header>
  );
};

export default Header;
