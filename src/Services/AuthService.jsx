import api from "./api";

// Login existing user
export const loginUser = async (credentials) => {
  const res = await api.post("/auth/login", credentials);
  return res.data;
};

// Register new user
export const registerUser = async (userData) => {
  const res = await api.post("/auth/register", userData);
  return res.data;
};


