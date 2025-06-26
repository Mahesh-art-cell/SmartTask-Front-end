import React from "react";
import "./TaskSort.css"
const TaskSort = ({ onSort }) => {
  return (
    <div className="task-sort">
      <label>
        Sort by:
        <select onChange={(e) => onSort(e.target.value)}>
          <option value="dueDate">Due Date</option>
          <option value="title">Title</option>
        </select>
      </label>
    </div>
  );
};

export default TaskSort;
