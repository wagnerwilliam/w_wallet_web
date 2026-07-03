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

export const Logout = async () => {
  return await fetch(`${BACKEND_URL}api/auth/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
    },
  });
};
