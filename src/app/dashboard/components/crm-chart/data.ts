import { CrmDataPoint } from "./types";

export const CRMdata: CrmDataPoint[] = [
  {
    name: "Leads",
    counts: 2500,
    quantity: 1,
    fill: "var(--chart-1)",
    change: "+12%",
  },
  {
    name: "Opportunity",
    counts: 300,
    quantity: 90,
    fill: "var(--chart-2)",
    change: "+8%",
  },
  {
    name: "Sales Order",
    counts: 40,
    quantity: 20,
    fill: "var(--chart-3)",
    change: "-3%",
  },
];
