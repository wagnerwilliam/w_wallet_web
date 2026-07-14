import { formatEUR } from "../formatters";

export const getStats = (goal) => {
  return [
    {
      title: "Objetivo",
      value: formatEUR(goal.target),
    },
    {
      title: "Ahorrado",
      value: formatEUR(goal.saved),
      color: "text-emerald-600",
    },
    {
      title: "Restante",
      value: formatEUR(goal.target - goal.saved),
    },
    {
      title: "Aportes",
      value: goal.totalMovements,
    },
  ];
};
