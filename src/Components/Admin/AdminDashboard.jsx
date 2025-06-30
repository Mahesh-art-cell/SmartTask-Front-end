
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../Services/api";
import { useAuthContext } from "../../Context/AuthContext";
import "./AdminDashboard.css";
import UserManagement from "./UserManagement";

const AdminDashboard = () => {
  const { user, logout } = useAuthContext();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onlyUsers = users.filter((u) => u.role === "user");
  const total = onlyUsers.length;
  const active = onlyUsers.filter((u) => u.isActive).length;
  const inactive = total - active;

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Welcome, {user?.fullName || "Admin"}</h2>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      {loading ? (
        <p>Loading user stats...</p>
      ) : (
        <div className="stats-grid">
          <div className="stat-card total">
            <h3>Total Users</h3>
            <p>{total}</p>
          </div>
          <div className="stat-card active">
            <h3>Active Users</h3>
            <p>{active}</p>
          </div>
          <div className="stat-card inactive">
            <h3>Deactivated Users</h3>
            <p>{inactive}</p>
          </div>
        </div>
      )}
      <UserManagement refreshStats={fetchUsers} />
    </div>
  );
};

export default AdminDashboard;
