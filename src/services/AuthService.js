const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const registrarUsurio = async (data) => {
  return await fetch(`${BACKEND_URL}api/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
