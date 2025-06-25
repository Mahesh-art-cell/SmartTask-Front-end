
import api from './api';

const getTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

const createTask = async (task) => {
  const response = await api.post('/tasks', task);
  return response.data;
};

const updateTask = async (id, updates) => {
  const response = await api.put(`/tasks/${id}`, updates);
  return response.data;
};

const deleteTask = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};

export default { getTasks, createTask, updateTask, deleteTask };
