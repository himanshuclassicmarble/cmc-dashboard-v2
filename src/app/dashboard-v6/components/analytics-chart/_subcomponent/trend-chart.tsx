import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { ChartDataPoint } from "../types";
import { formatValue } from "../utils/format-value";
import { getFontSize } from "../utils/responsive-chart";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { CHART_CONFIG, CHART_MARGINS } from "../constants";
import { CustomTooltip } from "./custom-tooltip";

export const Chart = ({
  data,
  screenSize,
  metric,
}: {
  data: ChartDataPoint[];
  screenSize: string;
  metric: "value" | "quantity";
}) => {
  const fontSize = getFontSize(screenSize);

  if (!data?.length) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-sm text-muted-foreground">No chart data available</p>
      </div>
    );
  }

  const formatValueForMetric = (value: number) => formatValue(value, metric);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ChartContainer config={CHART_CONFIG} className="h-[250px] w-full">
        <ComposedChart
          data={data}
          margin={CHART_MARGINS}
          barCategoryGap="5%"
          barGap={2}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="hsl(var(--border))"
            strokeOpacity={0.3}
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontWeight: 500,
              fontSize: fontSize,
            }}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontWeight: 500,
              fontSize: fontSize - 1,
            }}
            tickFormatter={formatValueForMetric}
          />

          <ChartTooltip
            cursor={{ fill: "hsl(var(--muted)/20)" }}
            content={<CustomTooltip metric={metric} />}
          />

          <Bar
            dataKey="currentYear"
            fill="var(--color-currentYear)"
            name="currentYear"
            radius={[0, 0, 0, 0]}
          >
            <LabelList
              dataKey="currentYear"
              position="top"
              offset={8}
              className="fill-foreground font-medium"
              fontSize={fontSize}
              formatter={formatValueForMetric}
            />
          </Bar>

          <Bar
            dataKey="previousYear"
            fill="var(--color-previousYear)"
            name="previousYear"
            radius={[0, 0, 0, 0]}
          >
            <LabelList
              dataKey="previousYear"
              position="top"
              offset={8}
              className="fill-foreground font-medium"
              fontSize={fontSize}
              formatter={formatValueForMetric}
            />
          </Bar>

          <Line
            type="monotone"
            dataKey="target"
            stroke="var(--color-target)"
            strokeWidth={3}
            dot={{
              fill: "var(--color-target)",
              strokeWidth: 2,
              r: 5,
            }}
            activeDot={{
              r: 7,
              stroke: "var(--color-target)",
              strokeWidth: 2,
              fill: "hsl(var(--background))",
            }}
            name="target"
          >
            <LabelList
              dataKey="target"
              position="top"
              fill="var(--color-target)"
              fontSize={fontSize}
              fontWeight="600"
              offset={12}
              formatter={formatValueForMetric}
            />
          </Line>
        </ComposedChart>
      </ChartContainer>
    </ResponsiveContainer>
  );
};
