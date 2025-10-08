import { useCallback } from "react";
import { AnalyticsDataPoint, ChartDataPoint } from "../types";

export const useDataTransform = (data: AnalyticsDataPoint[]) => {
  return useCallback(
    (metric: "value" | "quantity"): ChartDataPoint[] => {
      if (!Array.isArray(data) || data.length === 0) return [];

      return data
        .filter(
          (item) =>
            item?.month &&
            item?.currentYear &&
            item?.previousYear &&
            item?.target &&
            typeof item.currentYear === "object" &&
            typeof item.previousYear === "object" &&
            typeof item.target === "object",
        )
        .map((item, index) => ({
          month: item.month,
          currentYear: Number(item.currentYear[metric]) || 0,
          previousYear: Number(item.previousYear[metric]) || 0,
          target: Number(item.target[metric]) || 0,
          id: `${item.month}-${metric}-${index}`,
        }));
    },
    [data],
  );
};
