const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CLIENT_TOKEN = import.meta.env.VITE_APP_CLIENT_TOKEN;

export const Register = async (data) => {
  return await fetch(`${BACKEND_URL}api/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "client-token": CLIENT_TOKEN,
    },
    body: JSON.stringify(data),
  });
};

export const Login = async (data) => {
  return await fetch(`${BACKEND_URL}api/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "client-token": CLIENT_TOKEN,
    },
    body: JSON.stringify(data),
  });
};
