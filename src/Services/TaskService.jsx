import api from "./api";

// Get all tasks
export const getAllTasks = async () => {
  const res = await api.get("/tasks");
  return res.data;
};

// Create a new task
export const createTask = async (task) => {
  const res = await api.post("/tasks", task);
  return res.data;
};

// Update a task by ID
export const updateTask = async (id, updates) => {
  const res = await api.put(`/tasks/${id}`, updates);
  return res.data;
};

// Delete a task by ID
export const deleteTask = async (id) => {
  const res = await api.delete(`/tasks/${id}`);
  return res.data;
};

// Mark a task as completed
export const markTaskDone = async (id) => {
  const res = await api.patch(`/tasks/${id}/complete`);
  return res.data;
};

// Task statistics (completed vs pending, etc.)
export const getTaskStats = async () => {
  const res = await api.get("/tasks/stats");
  return res.data;
};

