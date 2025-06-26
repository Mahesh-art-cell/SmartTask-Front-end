// import React, { useEffect, useState } from "react";
// import { getTasksDueToday } from "../../services/taskService";

// import "./TaskDueToday.css";

// const TasksDueToday = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getTasksDueToday();
//       setTasks(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="card">
//       <h3>Tasks Due Today</h3>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task._id}>{task.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TasksDueToday;
