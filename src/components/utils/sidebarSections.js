import {
  HomeIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  Squares2X2Icon,
  TrophyIcon,
  ChartPieIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export const sidebarSections = [
  {
    title: "Inicio",
    items: [
      {
        label: "Dashboard",
        path: "/home",
        icon: HomeIcon,
      },
    ],
  },

  {
    title: "Finanzas",
    collapsible: true,
    items: [
      {
        label: "Ingresos",
        path: "/ingresos",
        icon: ArrowTrendingUpIcon,
      },
      {
        label: "Gastos",
        path: "/gastos",
        icon: ArrowTrendingDownIcon,
      },
      {
        label: "Categorías",
        path: "/categorias",
        icon: Squares2X2Icon,
      },
    ],
  },

  {
    title: "Planificación",
    collapsible: true,
    items: [
      {
        label: "Metas de ahorro",
        path: "/metas-ahorro",
        icon: TrophyIcon,
      },
      {
        label: "Resumen",
        path: "/resumen",
        icon: ChartPieIcon,
      },
    ],
  },
];
