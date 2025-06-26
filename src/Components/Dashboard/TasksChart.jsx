// import React, { useEffect, useState } from "react";
// import { getTaskStats } from "../../services/taskService";
// import "./TaskChart.css"
// const TasksChart = () => {
//   const [stats, setStats] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getTaskStats();
//       setStats(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="card">
//       <h3>Tasks in Last 7 Days</h3>
//       <ul>
//         {stats.map((day) => (
//           <li key={day._id}>{day._id}: {day.completed} completed</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TasksChart;
