import React, { useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import TaskForm from "../Tasks/TaskForm";
import TaskList from "../Tasks/TaskList";
import { useTaskContext } from "../../Context/TaskContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logout } = useAuthContext();
  const { removeTask, completeTask } = useTaskContext();

  const [editingTask, setEditingTask] = useState(null); 
  const [refreshFlag, setRefreshFlag] = useState(false); // 👈 state to trigger reload

  const handleEdit = (task) => {
    setEditingTask(task); 
  };

  const reloadTasks = () => {
    setRefreshFlag((prev) => !prev); // 👈 toggle flag to notify TaskList
  };

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <h2>Hello, {user?.fullName || "User"} 👋</h2>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      <TaskForm
        editingTask={editingTask}
        setEditingTask={setEditingTask}
        reloadTasks={reloadTasks} // ✅ pass reloadTasks to TaskForm
      />

      <TaskList
        onEdit={handleEdit}
        onDelete={removeTask}
        onComplete={completeTask}
        refreshTrigger={refreshFlag} // ✅ pass flag to trigger reload
      />
    </div>
  );
};

export default Dashboard;
