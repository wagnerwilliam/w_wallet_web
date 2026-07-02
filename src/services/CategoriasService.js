const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CLIENT_TOKEN = import.meta.env.VITE_APP_CLIENT_TOKEN;

export const ObtenerCategorias = async (token) => {
  return await fetch(`${BACKEND_URL}api/categorias/`, {
    headers: {
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const crearCategoria = async (data, token) => {
  return await fetch(`${BACKEND_URL}api/categorias/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const editarCategoria = async (id, data, token) => {
  return await fetch(`${BACKEND_URL}api/categorias/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const eliminarCategoria = async (id, token) => {
  return await fetch(`${BACKEND_URL}api/categorias/eliminar/${id}`, {
    method: "DELETE",
    headers: {
      "client-token": CLIENT_TOKEN,
      Authorization: `Bearer ${token}`,
    },
  });
};
