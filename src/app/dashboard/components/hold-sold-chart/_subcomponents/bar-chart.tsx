import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useResponsiveFontSize } from "../hooks/use-responsive-font";
import { ChartDataItem } from "../types";
import { EmptyState } from "./empty-state";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { CHART_CONFIG, CHART_MARGINS } from "../constants";
import { CustomTooltip } from "./custom-tooltip";

// Chart component
export const Chart: React.FC<{ data: ChartDataItem[] }> = ({ data }) => {
  const fontSize = useResponsiveFontSize();
  if (!data.length) {
    return <EmptyState message="No chart data available" />;
  }
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer
          config={CHART_CONFIG}
          className="h-full max-h-[180px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={data}
            layout="horizontal"
            margin={CHART_MARGINS}
            barGap={3}
          >
            {/* Grid */}
            <CartesianGrid
              stroke="var(--border)"
              strokeOpacity={0.15}
              vertical={false}
            />
            {/* X Axis (days) */}
            <XAxis
              dataKey="day"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize,
                fill: "hsl(var(--muted-foreground))",
                fontWeight: 500,
              }}
            />
            {/* Hide Y axis (just values) */}
            <YAxis type="number" hide />
            {/* Tooltip */}
            <ChartTooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.04)" }}
              content={<CustomTooltip />}
            />
            {/* Sold Stock */}
            <Bar
              dataKey="soldStock"
              fill="var(--chart-1)"
              radius={[0, 0, 0, 0]}
              stackId="stack"
            >
              {/* Sold values inside the bars */}
              <LabelList
                dataKey="soldStock"
                position="center"
                className="font-semibold"
                fontSize={10}
                fill="var(--foreground)"
                formatter={(value: number) => {
                  if (!value || isNaN(value) || value <= 50) return ""; // hide if <= 50
                  return Math.round(value);
                }}
              />
            </Bar>
            {/* Hold Stock */}
            <Bar
              dataKey="holdStock"
              fill="var(--chart-2)"
              radius={[0, 0, 0, 0]}
              stackId="stack"
            >
              {/* Hold values inside the bars */}
              <LabelList
                dataKey="holdStock"
                position="center"
                className="font-semibold"
                fontSize={10}
                fill="var(--foreground)"
                formatter={(value: number) => {
                  if (!value || isNaN(value) || value <= 50) return ""; // hide if <= 50
                  return Math.round(value);
                }}
              />
              {/* Total values on top of bars */}
              <LabelList
                dataKey="totStock"
                position="top"
                offset={4}
                fill="var(--foreground)"
                fontSize={10}
                formatter={(value: number) => {
                  if (!value || isNaN(value)) return "";
                  return Math.round(value).toLocaleString();
                }}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
};
