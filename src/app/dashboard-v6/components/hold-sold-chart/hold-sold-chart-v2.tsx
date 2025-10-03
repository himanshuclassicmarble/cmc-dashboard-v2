"use client";

import type React from "react";
import { useMemo } from "react";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Package, TrendingUp } from "lucide-react";
import { HoldSoldChartProps } from "./types";
import { EmptyState } from "./_subcomponents/empty-state";
import { Chart } from "./_subcomponents/bar-chart";
import { formatValue } from "./utils/format-value";

export const HoldSoldChartV2: React.FC<HoldSoldChartProps> = ({
  totalHeld,
  totalSold,
  chartData,
}) => {
  // ✅ Filter and sanitize chart data
  const sanitizedData = useMemo(() => {
    if (!chartData || !Array.isArray(chartData)) return [];
    return chartData.filter(
      (item) =>
        item &&
        item.day &&
        typeof item.soldStock === "number" &&
        typeof item.holdStock === "number",
    );
  }, [chartData]);

  // ✅ Sanitize totals
  const sanitizedTotals = useMemo(
    () => ({
      hold: {
        holdQuantity: Number(totalHeld?.holdQuantity) || 0,
      },
      sold: {
        soldQuantity: Number(totalSold?.soldQuantity) || 0,
      },
    }),
    [totalHeld, totalSold],
  );

  // ✅ Empty state
  if (!chartData || sanitizedData.length === 0) {
    return (
      <Card className="w-full p-2 flex flex-col gap-1.5 rounded-2xl shadow-none hover:bg-muted/20 transition-all duration-200">
        <CardHeader className="p-2 pb-0">
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-primary" />
            <CardTitle className="text-sm font-medium">
              Hold/Sold Data
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center p-4">
          <EmptyState message="No data available" />
        </CardContent>
      </Card>
    );
  }

  // ✅ Main UI
  return (
    <Card className="w-full h-full p-0 flex flex-col gap-1.5 rounded-2xl shadow-none hover:bg-muted/20 transition-all duration-200">
      <div className="pt-3 px-4 pb-0 text-sm text-foreground flex flex-col items-start gap-0.5">
        <h1 className="flex items-center gap-2 sm:text-sm lg:text-lg">
          <TrendingUp className="h-4 w-4 text-primary" />
          Hold / Sold Data
        </h1>
      </div>
      <CardContent className="flex-1 flex flex-col p-1.5 space-y-2">
        {/* Totals */}
        <div className="flex flex-row gap-1">
          {/* Sold */}
          <div className="flex-1 border border-border rounded-lg px-1.5 py-1.5">
            <div className="text-[10px] font-semibold text-foreground uppercase tracking-wide text-left flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-chart-1 flex-shrink-0" />
              Sold Stock
            </div>
            <div className="space-y-0.5">
              <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wide text-left">
                Quantity{" "}
                <span className="font-semibold text-foreground">(sq.ft.)</span>
              </div>
              <div className="text-sm font-bold text-primary text-left">
                {formatValue(sanitizedTotals.sold.soldQuantity)}K
              </div>
            </div>
          </div>

          {/* Hold */}
          <div className="flex-1 border border-border rounded-lg px-1.5 py-1.5">
            <div className="text-[10px] font-semibold text-foreground uppercase tracking-wide text-left flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-chart-2 flex-shrink-0" />
              Hold Stock
            </div>
            <div className="space-y-0.5">
              <div className="text-[9px] font-medium text-muted-foreground uppercase tracking-wide text-left">
                Quantity{" "}
                <span className="font-semibold text-foreground">(sq.ft.)</span>
              </div>
              <div className="text-sm font-bold text-primary text-left">
                {formatValue(sanitizedTotals.hold.holdQuantity)}K
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="flex-1 min-h-0 py-2">
          <Chart data={sanitizedData} />
        </div>
      </CardContent>
    </Card>
  );
};
