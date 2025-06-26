import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <div className={`task-card ${task.status}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>

      <div className="task-actions">
        {task.status !== "completed" && (
          <button className="complete-btn" onClick={onComplete}>
            ✅ Mark Complete
          </button>
        )}
        <button className="edit-btn" onClick={() => onEdit(task)}>
          ✏️ Edit
        </button>
        <button className="delete-btn" onClick={onDelete}>
          ❌ Delete
        </button>
      </div>
    </div>
  );
};


export default TaskCard;



