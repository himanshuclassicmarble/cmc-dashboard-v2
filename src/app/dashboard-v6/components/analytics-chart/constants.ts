import { ChartConfig } from "@/components/ui/chart";

export const SCREEN_BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 1024,
} as const;

export const CHART_CONFIG: ChartConfig = {
  currentYear: {
    label: "Current Year",
    color: "var(--chart-1)",
  },
  previousYear: {
    label: "Previous Year",
    color: "var(--chart-2)",
  },
  target: {
    label: "Target",
    color: "var(--chart-3)",
  },
};

export const CHART_MARGINS = {
  top: 25,
  right: 20,
  left: 0,
  bottom: 0,
};
