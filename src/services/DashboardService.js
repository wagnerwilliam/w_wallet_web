import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const ObtenerResumen = async (period) => {
  console.log(period);

  return await apiFetch(`${BACKEND_URL}api/dashboard?period=${period}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
