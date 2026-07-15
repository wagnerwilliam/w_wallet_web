import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Servicios para el dashboard.
 *
 * Centraliza las peticiones HTTP relacionadas con la obtención
 * de la información y métricas del panel principal.
 */

/**
 * Obtiene el resumen del dashboard para el período indicado.
 *
 * @param {string} period Período de consulta (day, week, month, year, etc.).
 */
export const ObtenerResumen = async (period) => {
  return await apiFetch(`${BACKEND_URL}api/dashboard?period=${period}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
