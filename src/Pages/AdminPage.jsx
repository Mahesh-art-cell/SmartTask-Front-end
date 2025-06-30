import React from "react";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import UserManagement from "../Components/Admin/UserManagement";
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1 className="admin-heading">Admin Panel</h1>

      <AdminDashboard />

    </div>
  );
};

export default AdminPage;
