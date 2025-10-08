import { ChartConfig } from "@/components/ui/chart";

export const CHART_CONFIG = {
  soldStock: {
    label: "Sold Stock",
    color: "var(--chart-1)",
  },
  holdStock: {
    label: "Hold Stock",
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--foreground)",
  },
} satisfies ChartConfig;

export const CHART_MARGINS = {
  left: 0,
  top: 15,
  right: 0,
  bottom: 0, // Reduced bottom margin
};
