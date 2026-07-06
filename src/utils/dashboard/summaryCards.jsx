import {
  WalletIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

export const getSummaryCards = (summary = {}) => [
  {
    title: "Saldo actual",
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
    title: "Ahorro",
    value: summary.ahorro ?? 0,
    icon: BanknotesIcon,
  },
];
