import React from "react";
import TaskList from "../Components/Tasks/TaskList";
import "./TaskPage.css"
const TasksPage = () => {
  return (
    <div className="tasks-page">
      <TaskList />
    </div>
  );
};

export default TasksPage;
