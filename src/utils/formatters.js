export const formatDate = (dateString) => {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
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
