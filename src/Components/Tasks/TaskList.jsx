
// TaskList.jsx
import React, { useEffect } from "react";
import useTasks from "../../Hooks/UseTasks";
import TaskCard from "./TaskCard";
import Loading from "../Common/Loading";
import "./TaskList.css";

const TaskList = ({ onEdit, onDelete, onComplete }) => {
  const { tasks, loading, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={() => onDelete(task._id)}
            onComplete={() => onComplete(task._id)}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
