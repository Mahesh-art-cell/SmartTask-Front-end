
import { createContext, useState, useEffect } from 'react';
import taskService from '../services/taskService';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await taskService.getTasks();
    setTasks(data);
  };

  const addTask = async (task) => {
    const newTask = await taskService.createTask(task);
    setTasks([...tasks, newTask]);
  };

  const updateTask = async (id, updates) => {
    const updated = await taskService.updateTask(id, updates);
    setTasks(tasks.map((task) => (task._id === id ? updated : task)));
  };

  const deleteTask = async (id) => {
    await taskService.deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
