const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CLIENT_TOKEN = import.meta.env.VITE_APP_CLIENT_TOKEN;

export const obtenerGastos = async (token) => {
  return await fetch(`${BACKEND_URL}api/gastos/`, {
    headers: {
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const crearGasto = async (data, token) => {
  return await fetch(`${BACKEND_URL}api/gastos/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const editarGasto = async (id, data, token) => {
  return await fetch(`${BACKEND_URL}api/gastos/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const eliminarGasto = async (id, token) => {
  return await fetch(`${BACKEND_URL}api/gastos/eliminar/${id}`, {
    method: "DELETE",
    headers: {
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
  });
};
