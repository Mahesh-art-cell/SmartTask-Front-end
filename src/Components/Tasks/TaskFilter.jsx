import React from "react";
import "./TaskFilter.css"
const TaskFilter = ({ onFilter }) => {
  return (
    <div className="task-filter">
      <label>
        Status:
        <select onChange={(e) => onFilter(e.target.value)}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </label>
    </div>
  );
};

export default TaskFilter;
