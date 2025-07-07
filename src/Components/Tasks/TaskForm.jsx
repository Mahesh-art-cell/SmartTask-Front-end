
// import React, { useEffect, useState } from "react";
// import useTasks from "../../Hooks/UseTasks";
// import "./TaskForm.css";

// const TaskForm = ({ editingTask, setEditingTask }) => {
//   const { addTask, editTask } = useTasks();

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//     category:""
//   });

 
//   useEffect(() => {
//     if (editingTask) {
//       setForm({
//         title: editingTask.title,
//         description: editingTask.description,
//         dueDate: editingTask.dueDate.slice(0, 10),
//         category: editingTask.category
//       });
//     }
//   }, [editingTask]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (editingTask) {
//       await editTask(editingTask._id, form);
//       setEditingTask(null);
//     } else {
//       await addTask(form);
//     }
//     setForm({ title: "", description: "", dueDate: "" ,category: ""});
//   };

//   return (
//     <form className="task-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="title"
//         placeholder="Title"
//         value={form.title}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         name="description"
//         placeholder="Description"
//         value={form.description}
//         onChange={handleChange}
//       />
//       <input
//         type="date"
//         name="dueDate"
//         value={form.dueDate}
//         onChange={handleChange}
//         required
//       />
//     <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="category" />
//       <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
//     </form>
//   );
// };

// export default TaskForm;


import React, { useEffect, useState } from "react";
import { createTask, updateTask } from "../../Services/taskService"; // ✅ use your service
import "./TaskForm.css";

const TaskForm = ({ editingTask, setEditingTask, reloadTasks }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    category: "",
  });

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title,
        description: editingTask.description,
        dueDate: editingTask.dueDate.slice(0, 10),
        category: editingTask.category,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingTask) {
      await updateTask(editingTask._id, form);
      setEditingTask(null);
    } else {
      await createTask(form);
    }
    setForm({ title: "", description: "", dueDate: "", category: "" });
    reloadTasks(); // 👈 refresh list after saving
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;




{/*      
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select> */}
     

      
