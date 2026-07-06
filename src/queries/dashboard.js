import { useQuery } from "@tanstack/react-query";
import { ObtenerResumen } from "../services/DashboardService";

export const UseDashboard = (period) => {
  return useQuery({
    queryKey: ["dashboard", period],
    queryFn: async () => {
      const response = await ObtenerResumen(period);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al obtener resumen.");
      }

      return response.json();
    },
  });
};
