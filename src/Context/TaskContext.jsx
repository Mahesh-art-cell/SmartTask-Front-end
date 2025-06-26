

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  markTaskDone,
} from "../services/taskService";


export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    const data = await getAllTasks();
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (task) => {
    const newTask = await createTask(task);
    setTasks((prev) => [...prev, newTask]);
  };

  const editTask = async (id, updates) => {
    const updated = await updateTask(id, updates);
    setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  const completeTask = async (id) => {
    const updated = await markTaskDone(id);
    setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        loadTasks,
        addTask,
        editTask,
        removeTask,
        completeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
