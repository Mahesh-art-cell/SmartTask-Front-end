// Dashboard.jsx
import React, { useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import TaskForm from "../Tasks/TaskForm";
import TaskList from "../Tasks/TaskList";
import { useTaskContext } from "../../Context/TaskContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logout } = useAuthContext();
  const { removeTask, completeTask } = useTaskContext();

  const [editingTask, setEditingTask] = useState(null); // For editing state

  const handleEdit = (task) => {
    setEditingTask(task); // Pass to form
  };

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <h2>Hello, {user?.fullName || "User"} 👋</h2>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      {/* Form receives editingTask and setEditingTask */}
      <TaskForm editingTask={editingTask} setEditingTask={setEditingTask} />

      {/* Pass control functions to list */}
      <TaskList
        onEdit={handleEdit}
        onDelete={removeTask}
        onComplete={completeTask}
      />
    </div>
  );
};

export default Dashboard;
