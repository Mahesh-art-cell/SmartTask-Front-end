

import React, { useEffect, useState } from "react";
import {
  activateUser,
  getAllUsers,
  deactivateUser,
  getUserTasks,
} from "../../Services/api";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUserTasks, setSelectedUserTasks] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // ✅ Fetch users from backend
  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Activate user
  const handleActivate = async (id) => {
    try {
      await activateUser(id);
      fetchUsers();
    } catch (err) {
      console.error("Failed to activate user", err);
    }
  };

  // ✅ Deactivate user
  const handleDeactivate = async (id) => {
    try {
      await deactivateUser(id);
      fetchUsers();
    } catch (err) {
      console.error("Failed to deactivate user", err);
    }
  };

  // ✅ View tasks for a specific user
  const handleViewTasks = async (user) => {
    try {
      const tasks = await getUserTasks(user._id);
      setSelectedUser(user);
      setSelectedUserTasks(tasks);
    } catch (err) {
      console.error("Failed to fetch user tasks", err);
    }
  };

  const taskStats = selectedUserTasks.reduce(
    (acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    },
    { pending: 0, completed: 0 }
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-management">
      <h3>User Management</h3>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <table className="user-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((u) => u.role === "user")
                .map((u) => (
                  <tr key={u._id}>
                    <td>{u.fullName}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td className={u.isActive ? "active" : "inactive"}>
                      {u.isActive ? "Active" : "Inactive"}
                    </td>
                    <td>
                      {u.isActive ? (
                        <button
                          onClick={() => handleDeactivate(u._id)}
                          className="deactivate-btn"
                        >
                          Deactivate
                        </button>
                      ) : (
                        <button
                          onClick={() => handleActivate(u._id)}
                          className="activate-btn"
                        >
                          Activate
                        </button>
                      )}
                      <button
                        onClick={() => handleViewTasks(u)}
                        className="view-tasks-btn"
                      >
                        View Tasks
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {selectedUser && (
            <div className="task-section">
              <h4>Tasks for {selectedUser.fullName}</h4>
              <p>
                <strong>Pending:</strong> {taskStats.pending} |{" "}
                <strong>Completed:</strong> {taskStats.completed}
              </p>

              {selectedUserTasks.length > 0 ? (
                <div className="task-grid">
                  {selectedUserTasks.map((task) => (
                    <div key={task._id} className={`task-card ${task.status}`}>
                      <h5>{task.title}</h5>
                      <p>{task.description}</p>
                      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                      <p>
                        Status: <strong>{task.status}</strong>
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No tasks found.</p>
              )}

              <button onClick={() => setSelectedUser(null)}>Close</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserManagement;



// import React, { useEffect, useState } from "react";
// import {
//   activateUser,
//   getAllUsers,
//   deactivateUser,
//   getUserTasks,
// } from "../../Services/api";
// import "./UserManagement.css";

// const UserManagement = ({ refreshStats }) => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedUserTasks, setSelectedUserTasks] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   const fetchUsers = async () => {
//     try {
//       const data = await getAllUsers();
//       setUsers(data);
//     } catch (err) {
//       console.error("Failed to fetch users", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleActivate = async (id) => {
//     try {
//       await activateUser(id);
//       fetchUsers();
//       refreshStats?.(); // 🔁 update dashboard stats too
//     } catch (err) {
//       console.error("Failed to activate user", err);
//     }
//   };

//   const handleDeactivate = async (id) => {
//     try {
//       await deactivateUser(id);
//       fetchUsers();
//       refreshStats?.(); // 🔁 update dashboard stats too
//     } catch (err) {
//       console.error("Failed to deactivate user", err);
//     }
//   };

//   const handleViewTasks = async (user) => {
//     try {
//       const tasks = await getUserTasks(user._id);
//       setSelectedUser(user);
//       setSelectedUserTasks(tasks);
//     } catch (err) {
//       console.error("Failed to fetch user tasks", err);
//     }
//   };

//   const taskStats = selectedUserTasks.reduce(
//     (acc, task) => {
//       acc[task.status] = (acc[task.status] || 0) + 1;
//       return acc;
//     },
//     { pending: 0, completed: 0 }
//   );

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="user-management">
//       <h3>User Management</h3>

//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <>
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>Full Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users
//                 .filter((u) => u.role === "user")
//                 .map((u) => (
//                   <tr key={u._id}>
//                     <td>{u.fullName}</td>
//                     <td>{u.email}</td>
//                     <td>{u.role}</td>
//                     <td className={u.isActive ? "active" : "inactive"}>
//                       {u.isActive ? "Active" : "Inactive"}
//                     </td>
//                     <td>
//                       {u.isActive ? (
//                         <button
//                           onClick={() => handleDeactivate(u._id)}
//                           className="deactivate-btn"
//                         >
//                           Deactivate
//                         </button>
//                       ) : (
//                         <button
//                           onClick={() => handleActivate(u._id)}
//                           className="activate-btn"
//                         >
//                           Activate
//                         </button>
//                       )}
//                       <button
//                         onClick={() => handleViewTasks(u)}
//                         className="view-tasks-btn"
//                       >
//                         View Tasks
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>

//           {selectedUser && (
//             <div className="task-section">
//               <h4>Tasks for {selectedUser.fullName}</h4>
//               <p>
//                 <strong>Pending:</strong> {taskStats.pending} |{" "}
//                 <strong>Completed:</strong> {taskStats.completed}
//               </p>

//               {selectedUserTasks.length > 0 ? (
//                 <div className="task-grid">
//                   {selectedUserTasks.map((task) => (
//                     <div key={task._id} className={`task-card ${task.status}`}>
//                       <h5>{task.title}</h5>
//                       <p>{task.description}</p>
//                       <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
//                       <p>
//                         Status: <strong>{task.status}</strong>
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>No tasks found.</p>
//               )}

//               <button onClick={() => setSelectedUser(null)}>Close</button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default UserManagement;
