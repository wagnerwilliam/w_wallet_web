/**
 * DataState Component
 * ------------------------------------------------------------
 * Componente de control de estado de datos para UI dinámica.
 *
 * Centraliza la lógica de renderizado condicional basada en:
 * loading, error y estado vacío de un conjunto de datos.
 * ------------------------------------------------------------
 * Flujo de prioridad de renderizado:
 * 1. isLoading → renderiza loadingComponent
 * 2. isError → renderiza errorComponent
 * 3. data vacío → renderiza emptyComponent
 * 4. data válido → renderiza children
 *
 * ------------------------------------------------------------
 * Props:
 *
 * @param {boolean} isLoading
 * Indica si la consulta de datos está en estado de carga.
 *
 * @param {boolean} isError
 * Indica si ocurrió un error en la obtención de datos.
 *
 * @param {Array} data
 * Array de datos a evaluar para determinar estado vacío.
 *
 * @param {React.ReactNode} loadingComponent
 * Componente UI a renderizar durante el estado de carga.
 *
 * @param {React.ReactNode} errorComponent
 * Componente UI a renderizar cuando ocurre un error.
 *
 * @param {React.ReactNode} emptyComponent
 * Componente UI a renderizar cuando no hay datos disponibles.
 *
 * @param {React.ReactNode} children
 * Contenido principal a renderizar cuando hay datos válidos.
 *
 * ------------------------------------------------------------
 * Nota:
 * Este componente es altamente reutilizable en módulos CRUD
 * y está diseñado para trabajar con estados asincrónicos
 * como los proporcionados por TanStack Query.
 */
const DataState = ({
  isLoading,
  isError,
  data = [],
  loadingComponent,
  errorComponent,
  emptyComponent,
  children,
}) => {
  if (isLoading) return loadingComponent;
  if (isError) return errorComponent;
  if (data.length === 0) return emptyComponent;

  return children;
};

export default DataState;
