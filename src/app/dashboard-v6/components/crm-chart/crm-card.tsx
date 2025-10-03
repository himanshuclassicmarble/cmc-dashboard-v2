import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { CRMCardProps, CrmDataPoint, CrmDataProps } from "./types";

const chartConfig = {
  counts: {
    label: "Counts",
    color: "var(--chart-1)",
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig;

const CrmChart: React.FC<CrmDataProps> = ({ chartData }) => {
  const validatedData = chartData.map((item) => ({
    ...item,
    counts:
      typeof item.counts === "number" && !isNaN(item.counts) ? item.counts : 0,
    quantity:
      typeof item.quantity === "number" && !isNaN(item.quantity)
        ? item.quantity
        : 0,
  }));

  return (
    <div className="w-full">
      <ChartContainer
        config={chartConfig}
        className="w-full h-full max-h-[150px] p-0"
      >
        <BarChart
          data={validatedData}
          layout="vertical"
          barSize={20}
          margin={{ top: 0, right: 40, bottom: 0, left: 10 }}
        >
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
            tickMargin={15}
            fontSize={8}
          />
          <XAxis
            dataKey="counts"
            type="number"
            tickLine={false}
            axisLine={false}
            tickMargin={0}
            fontSize={8}
            unit=" Nos"
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload as CrmDataPoint;
                return (
                  <div className="bg-background px-3 py-2 border border-border rounded-lg shadow-md text-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor: data.fill || "var(--chart-1)",
                        }}
                      />
                      <p className="font-semibold text-foreground">{label}</p>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-foreground/80">
                        <span className="font-medium">Numbers:</span>{" "}
                        {data.counts}
                      </p>
                      <p
                        className={`font-medium ${
                          data.change.startsWith("+")
                            ? "text-green-600"
                            : data.change.startsWith("-")
                              ? "text-red-600"
                              : "text-foreground"
                        }`}
                      >
                        Change: {data.change}
                      </p>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar
            dataKey="counts"
            layout="vertical"
            fill="var(--color-counts)"
            radius={0}
          >
            <LabelList
              dataKey="counts"
              position="insideRight"
              offset={2}
              className="fill-foreground"
              fontSize={10}
            />
            <LabelList
              dataKey="change"
              position="right"
              offset={2}
              className="fill-foreground font-medium"
              fontSize={10}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

// Format value function
const formatValue = (value: number): string =>
  value.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

// Main CRM Card Component
const CRMCard: React.FC<CRMCardProps> = ({ data }) => {
  return (
    <Card className="w-full h-full  p-0 flex flex-col gap-1.5 rounded-2xl shadow-none hover:bg-muted/20 transition-all duration-200">
      <CardContent className="p-1.5 space-y-1.5">
        <div className="pt-2 px-2 sm:text-sm lg:text-lg font-medium text-foreground truncate flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          CRM Data
        </div>

        {/* Data Grid */}
        <div className="flex flex-row gap-1">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex-1 space-y-1 border border-border rounded-lg px-1.5 py-1.5"
            >
              {/* Stage Name */}
              <div className="text-[10px] font-semibold text-foreground uppercase tracking-wide text-left">
                {item.name}
              </div>

              <div className="space-y-1">
                {/* Counts */}
                <div className="space-y-0.5">
                  <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wide text-left">
                    Counts{" "}
                    <span className="font-semibold text-foreground">
                      (Nos.)
                    </span>
                  </div>
                  <div className="text-sm font-bold text-foreground text-left">
                    {formatValue(item.counts)}
                  </div>
                </div>

                {/* Quantity */}
                <div className="space-y-0.5">
                  <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wide text-left">
                    Quantity{" "}
                    <span className="font-semibold text-foreground">
                      (sq.ft.)
                    </span>
                  </div>
                  <div className="text-sm font-bold text-foreground text-left">
                    {formatValue(item.quantity)}K
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="flex items-center justify-center">
          <CrmChart chartData={data} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CRMCard;
