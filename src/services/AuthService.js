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
      "client-key": CLIENT_KEY,
    },
  });
};

/**
 * acces 
 * 
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YTQ2N2JjMWY5Yzg2NjE3YjY0YjBiZWIiLCJpYXQiOjE3ODMwODA3MTksImV4cCI6MTc4MzA4MDgzOX0.4lG1rOr_J9wZ2vFU3Oi4y7SLpCXpOAGT4ZNctgy3mmA
 * 
 * refresh
 * 
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YTQ2N2JjMWY5Yzg2NjE3YjY0YjBiZWIiLCJpYXQiOjE3ODMwODA3MTksImV4cCI6MTc4NTY3MjcxOX0.9mqrXtnTlJNq22mgmzVkDpu40WnKS-qVan16FkLpFug
 * 
 * 
 * 
 */