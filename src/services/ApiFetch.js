const CLIENT_KEY = import.meta.env.VITE_APP_CLIENT_KEY;
import { refreshAccessToken } from "./AuthService";

export const apiFetch = async (url, accesToken, options = {}) => {
  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accesToken}`,
      "client-key": CLIENT_KEY,
    },
  });
  console.log("entraa");
  console.log(response);

  if (response.status !== 401) {
    return response;
  }

  console.log("entraa 401");
  console.log(response);

  //
  // new refresh token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YTQ2N2JjMWY5Yzg2NjE3YjY0YjBiZWIiLCJpYXQiOjE3ODMwNzg1MDYsImV4cCI6MTc4NTY3MDUwNn0.5KBDJjwjygOV1jugLyAJJPTtZRUMUNJFHeShJguJdyM
  // Intentar renovar el access token
  const newAccessToken = await refreshAccessToken();

  if (!newAccessToken) {
    localStorage.removeItem("token");
    throw new Error("Sesión expirada");
  }

  localStorage.setItem("accesToken", newAccessToken);

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${newAccessToken}`,
      "client-key": CLIENT_KEY,
    },
  });
};
