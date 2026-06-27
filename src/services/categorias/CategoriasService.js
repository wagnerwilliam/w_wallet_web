const API_URL = import.meta.env.VITE_API_URL;

export const ObtenerCategorias = async () => {
  return await fetch(`${API_URL}api/categorias/`);
};

export const crearCategoria = async (data) => {
  return await fetch(`${API_URL}api/categorias/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const editarCategoria = async (id, data) => {
  return await fetch(`${API_URL}api/categorias/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const eliminarCategoria = async (id) => {
  return await fetch(`${API_URL}api/categorias/eliminar/${id}`, {
    method: "DELETE",
  });
};
