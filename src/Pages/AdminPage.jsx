import React from "react";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import UserManagement from "../Components/Admin/UserManagement";
// import AdminReports from "../Components/Admin/AdminReports"; // Optional
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1 className="admin-heading">Admin Panel</h1>

      {/* Overview cards */}
      <AdminDashboard />

      {/* Manage users */}
      {/* <UserManagement /> */}

      {/* Optional: Reports */}
      {/* <AdminReports /> */}
    </div>
  );
};

export default AdminPage;
