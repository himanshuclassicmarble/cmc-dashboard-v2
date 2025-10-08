"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { CRMCardProps, CrmDataPoint, CrmDataProps } from "./types";

// Chart configuration for Shadcn ChartContainer
const chartConfig = {
  counts: {
    label: "Counts",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

// Inner chart component
const CrmChart: React.FC<CrmDataProps> = ({ chartData }) => {
  // Validate data
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
    <ChartContainer config={chartConfig} className="w-full h-[160px] p-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={validatedData}
          layout="vertical"
          barSize={18}
          margin={{ top: 0, right: 30, bottom: 0, left: 10 }}
        >
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="name"
            type="category"
            tickMargin={20}
            axisLine={false}
            fontSize={10}
            width={80} // prevent cutoff
          />
          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            fontSize={10}
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
          <Bar dataKey="counts" fill="var(--color-counts)" radius={0}>
            <LabelList
              dataKey="counts"
              position="insideRight"
              className="fill-foreground font-medium"
              fontSize={10}
            />
            <LabelList
              dataKey="change"
              position="right"
              offset={4}
              className="fill-foreground font-medium"
              fontSize={10}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

// Helper to format numbers
const formatValue = (value: number): string =>
  value.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

// Main CRM Card
const CRMCard: React.FC<CRMCardProps> = ({ data }) => {
  return (
    <Card className="w-full h-full p-0 flex flex-col gap-1.5 rounded-2xl shadow-none hover:bg-muted/20 transition-all duration-200">
      <div className="pt-3 px-4 pb-0 text-sm text-foreground flex flex-col items-start gap-0.5">
        <h1 className="flex items-center gap-2 sm:text-sm lg:text-lg">
          <TrendingUp className="h-4 w-4 text-primary" />
          CRM Data
        </h1>
      </div>

      <CardContent className="space-y-2 p-2">
        {/* Data grid: 3 columns always */}
        <div className="grid grid-cols-3 gap-2">
          {data.map((item) => (
            <div
              key={item.name}
              className="space-y-1 border border-border rounded-lg px-2 py-2"
            >
              <div className="text-[10px] font-semibold text-foreground uppercase tracking-wide">
                {item.name}
              </div>

              <div className="space-y-1">
                <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wide">
                  Counts{" "}
                  <span className="font-semibold text-foreground">(Nos.)</span>
                </div>
                <div className="text-sm font-bold text-foreground">
                  {formatValue(item.counts)}
                </div>

                <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wide">
                  Quantity{" "}
                  <span className="font-semibold text-foreground">
                    (sq.ft.)
                  </span>
                </div>
                <div className="text-sm font-bold text-foreground">
                  {formatValue(item.quantity)}K
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="w-full">
          <CrmChart chartData={data} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CRMCard;
