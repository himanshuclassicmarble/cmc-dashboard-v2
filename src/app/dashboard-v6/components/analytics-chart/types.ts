export interface YearData {
  value: number;
  quantity: number;
}

export interface AnalyticsDataPoint {
  month: string;
  currentYear: YearData;
  previousYear: YearData;
  target: YearData;
}

export interface ChartDataPoint {
  month: string;
  currentYear: number;
  previousYear: number;
  target: number;
  id: string;
}

export interface AnalyticsChartProps {
  data: AnalyticsDataPoint[];
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value?: number;
    dataKey?: string;
    color?: string;
    name?: string;
  }>;
  label?: string;
  metric?: "value" | "quantity";
}
