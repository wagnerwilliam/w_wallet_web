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
        path: "/dashboard",
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
        path: "/expenses",
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
        path: "/goals",
        icon: TrophyIcon,
      },
      {
        label: "Resumen",
        path: "/summary",
        icon: ChartPieIcon,
      },
    ],
  },
];
