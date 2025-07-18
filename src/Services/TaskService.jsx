import api from "./api";


export const getAllTasks = async () => {
  const res = await api.get("/tasks");
  return res.data;
};


export const createTask = async (task) => {
  const res = await api.post("/tasks", task);
  return res.data;
};

export const updateTask = async (id, updates) => {
  const res = await api.put(`/tasks/${id}`, updates);
  return res.data;
};


export const deleteTask = async (id) => {
  const res = await api.delete(`/tasks/${id}`);
  return res.data;
};


export const markTaskDone = async (id) => {
  const res = await api.patch(`/tasks/${id}/complete`);
  return res.data;
};

export const getTaskStats = async () => {
  const res = await api.get("/tasks/stats");
  return res.data;
};

