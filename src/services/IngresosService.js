const API_URL = import.meta.env.VITE_API_URL;

export const ObtenerIngresos = async () => {
  return await fetch(`${API_URL}api/ingresos/`);
};

export const crearIngreso = async (data) => {
  return await fetch(`${API_URL}api/ingresos/crear`, {
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
