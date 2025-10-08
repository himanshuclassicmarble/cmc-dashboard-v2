// performance-data.ts
import { PerformanceCardTypes, TimePeriod } from "./types";

export const timePeriods: TimePeriod[] = [
  { value: "Today", label: "Today" },
  { value: "MTD", label: "MTD" },
  { value: "YTD", label: "YTD" },
];

export const performanceCardData: Record<string, PerformanceCardTypes[]> = {
  Today: [
    {
      title: "Quantity",
      subtitle: "Quantitiy in Sq.ft",
      unit: "K",
      metrics: { cy: 150, py: 120, goly: 100, budget: 200, ach: 101 },
    },
    {
      title: "Value",
      subtitle: "",
      unit: "Cr",
      metrics: { cy: 50, py: 45, goly: 11.1, budget: 70, ach: 71 },
    },
    {
      title: "Avg. Rate",
      subtitle: "",
      unit: "",
      metrics: { cy: 3.2, py: 3.1, goly: 3.2, budget: 3.5, ach: 91 },
    },
  ],
  MTD: [
    {
      title: "Quantity",
      subtitle: "Quantitiy in Sq.ft",
      unit: "K",
      metrics: { cy: 1200, py: 1000, goly: 20, budget: 13000, ach: 93 },
    },
    {
      title: "Value",
      subtitle: "",
      unit: "Cr",
      metrics: { cy: 800, py: 750, goly: 6.7, budget: 1000, ach: 80 },
    },
    {
      title: "Avg. Rate",
      subtitle: "",
      unit: "",
      metrics: { cy: 2.5, py: 2.3, goly: 8.7, budget: 3, ach: 83 },
    },
  ],
  YTD: [
    {
      title: "Quantity",
      subtitle: "Quantitiy in Sq.ft",
      unit: "K",
      metrics: { cy: 5200, py: 4900, goly: 6.1, budget: 15000, ach: 65 },
    },
    {
      title: "Value",
      subtitle: "",
      unit: "Cr",
      metrics: { cy: 3000, py: 2800, goly: 7.1, budget: 5000, ach: 60 },
    },
    {
      title: "Avg. Rate",
      subtitle: "",
      unit: "",
      metrics: { cy: 5.8, py: 5.6, goly: 3.6, budget: 6.5, ach: 89 },
    },
  ],
};
