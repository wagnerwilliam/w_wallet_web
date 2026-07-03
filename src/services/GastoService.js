const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CLIENT_KEY = import.meta.env.VITE_APP_CLIENT_KEY;

export const obtenerGastos = async (accessToken) => {
  return await fetch(`${BACKEND_URL}api/gastos/`, {
    headers: {
      "client-key": CLIENT_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const crearGasto = async (data, accessToken) => {
  return await fetch(`${BACKEND_URL}api/gastos/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

export const editarGasto = async (id, data, accessToken) => {
  return await fetch(`${BACKEND_URL}api/gastos/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

export const eliminarGasto = async (id, accessToken) => {
  return await fetch(`${BACKEND_URL}api/gastos/eliminar/${id}`, {
    method: "DELETE",
    headers: {
      "client-key": CLIENT_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
