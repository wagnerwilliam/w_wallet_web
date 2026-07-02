const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CLIENT_TOKEN = import.meta.env.VITE_APP_CLIENT_TOKEN;

export const ObtenerIngresos = async (token) => {
  return await fetch(`${BACKEND_URL}api/ingresos/`, {
    headers: {
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const crearIngreso = async (data, token) => {
  return await fetch(`${BACKEND_URL}api/ingresos/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const editarIngreso = async (id, data, token) => {
  return await fetch(`${BACKEND_URL}api/ingresos/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const eliminarIngreso = async (id, token) => {
  return await fetch(`${BACKEND_URL}api/ingresos/eliminar/${id}`, {
    method: "DELETE",
    headers: {
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
  });
};
