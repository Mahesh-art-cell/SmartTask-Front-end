
import axios from "axios";

// const API_URL = "http://localhost:5000/api";  
const API_URL = "https://smarttask-back-end.onrender.com/api";

const api = axios.create({
  baseURL: API_URL,
});

// api.js
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// ✅ Named exports
export const getDashboardStats = async () => {
  const response = await api.get("/admin/stats");
  return response.data;
};

export const getAllUsers = async () => {
  const res = await api.get("/admin/users");
  return res.data;
};

export const deactivateUser = async (id) => {
  return await api.patch(`/admin/users/${id}/deactivate`);
};

export const activateUser = async (id) => {
  return await api.patch(`/admin/users/${id}/activate`);
};

export const getUserTasks = async (userId) => {
  const res = await api.get(`/admin/users/${userId}/tasks`);
  return res.data;
};



export default api; 
