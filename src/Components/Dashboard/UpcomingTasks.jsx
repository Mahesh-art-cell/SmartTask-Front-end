// import React, { useEffect, useState } from "react";
// import { getUpcomingTasks } from "../../services/taskService";
// import "./UpcomingTasks.css"
// const UpcomingTasks = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getUpcomingTasks();
//       setTasks(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="card">
//       <h3>Upcoming Tasks (Next 7 Days)</h3>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task._id}>{task.title} - {new Date(task.dueDate).toLocaleDateString()}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UpcomingTasks;
