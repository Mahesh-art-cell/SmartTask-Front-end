
// // TaskList.jsx
// import React, { useEffect } from "react";
// import useTasks from "../../Hooks/UseTasks";
// import TaskCard from "./TaskCard";
// import Loading from "../Common/Loading";
// import "./TaskList.css";

// const TaskList = ({ onEdit, onDelete, onComplete }) => {
//   const { tasks, loading, loadTasks } = useTasks();

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   if (loading) return <Loading />;

//   return (
//     <div className="task-list">
//       {tasks.length === 0 ? (
//         <p>No tasks found.</p>
//       ) : (
//         tasks.reverse().map((task) => (
//           <TaskCard
//             key={task._id}
//             task={task}
//             onEdit={onEdit}
//             onDelete={() => onDelete(task._id)}
//             onComplete={() => onComplete(task._id)}
//           />
//         ))


//       )}
//     </div>
//   );
// };

// export default TaskList;



import React, { useEffect, useState } from "react";
import {
  getAllTasks,
  deleteTask,
  markTaskDone,
} from "../../Services/taskService"; // ✅ use your service
import TaskCard from "./TaskCard";
import Loading from "../Common/Loading";
import "./TaskList.css";

const TaskList = ({ onEdit, onDelete, onComplete, refreshTrigger }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const res = await getAllTasks();
      setTasks(res.tasks || res); // depends on your API format
    } catch (err) {
      console.error("Failed to load tasks", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleComplete = async (id) => {
    await markTaskDone(id);
    loadTasks();
  };

 useEffect(() => {
  loadTasks();
}, [refreshTrigger]);

  if (loading) return <Loading />;

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        [...tasks].reverse().map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={() => handleDelete(task._id)}
            onComplete={() => handleComplete(task._id)}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
