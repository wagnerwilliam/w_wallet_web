export const formatDate = (dateString) => {
  // 1. Validar que el valor no sea nulo, indefinido o vacío
  if (!dateString) return "Sin fecha";

  const date = new Date(dateString);

  // 2. Validar si el string se pudo convertir a una fecha válida
  if (isNaN(date.getTime())) return "Fecha inválida";

  // 3. Formatear la fecha de forma segura
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

export const formatRelativeDate = (date) => {
  const today = new Date();
  const value = new Date(date);

  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const valueDate = new Date(
    value.getFullYear(),
    value.getMonth(),
    value.getDate(),
  );

  const diff = (todayDate - valueDate) / (1000 * 60 * 60 * 24);

  if (diff === 0) return "Hoy";
  if (diff === 1) return "Ayer";

  return value.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
  });
};

export const formatEUR = (value) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};
