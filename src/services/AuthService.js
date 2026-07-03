const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CLIENT_KEY = import.meta.env.VITE_APP_CLIENT_KEY;

export const Register = async (data) => {
  return await fetch(`${BACKEND_URL}api/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
    },
    body: JSON.stringify(data),
  });
};

export const Login = async (data) => {
  return await fetch(`${BACKEND_URL}api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
    },
    body: JSON.stringify(data),
  });
};

export const refreshAccessToken = async () => {
  return await fetch(`${BACKEND_URL}api/auth/refresh`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
    },
  });
};

/**
 * acces 
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YTQ2N2JjMWY5Yzg2NjE3YjY0YjBiZWIiLCJpYXQiOjE3ODMwODQyNTYsImV4cCI6MTc4MzA4NDM3Nn0.vfNA2nD2e7zjECpaDpeNghfBHE-itI6OSmjYYguhXxM
 * 
 * refresh
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YTQ2N2JjMWY5Yzg2NjE3YjY0YjBiZWIiLCJpYXQiOjE3ODMwODQyNTYsImV4cCI6MTc4NTY3NjI1Nn0.hiTw4YQzB52VtsVb4BhQ0nj6UJly2SGAQ7NeRRx-8iw
 * 
 */