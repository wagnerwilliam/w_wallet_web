import {
  WalletIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

export const getSummaryCards = (summary = {}) => [
  {
    title: "Disponible",
    value: summary.saldo ?? 0,
    icon: WalletIcon,
  },
  {
    title: "Ingresos",
    value: summary.ingresos ?? 0,
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "Gastos",
    value: summary.gastos ?? 0,
    icon: ArrowTrendingDownIcon,
  },
  {
    title: "Destinado a Metas",
    value: summary.destinado_metas ?? 0,
    icon: BanknotesIcon,
  },
];
