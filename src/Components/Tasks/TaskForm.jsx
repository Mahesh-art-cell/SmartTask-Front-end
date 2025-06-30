
import React, { useEffect, useState } from "react";
import useTasks from "../../Hooks/UseTasks";
import "./TaskForm.css";

const TaskForm = ({ editingTask, setEditingTask }) => {
  const { addTask, editTask } = useTasks();

  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

 
  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title,
        description: editingTask.description,
        dueDate: editingTask.dueDate.slice(0, 10), // YYYY-MM-DD
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingTask) {
      await editTask(editingTask._id, form);
      setEditingTask(null);
    } else {
      await addTask(form);
    }
    setForm({ title: "", description: "", dueDate: "" });
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
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
