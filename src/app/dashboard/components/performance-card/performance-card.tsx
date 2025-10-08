"use client";

import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PerformanceCardProps } from "./types";
import { Badge } from "@/components/ui/badge";
import { LineProgress } from "@/app/associate-report/components/graph-ui/line-progress-ui";
import { Separator } from "@/components/ui/separator";

const PerformanceCard: FC<PerformanceCardProps> = ({ data }) => {
  const { cy, py, goly, budget, ach } = data.metrics;

  const renderGroup = (
    titleLeft: string,
    valueLeft: number,
    titleRight: string,
    valueRight: number,
    progressTitle: string,
    progressValue?: number,
  ) => (
    <div className="flex-1 flex flex-col gap-1">
      {/* Actual / Previous Row */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">{titleLeft}</span>
          <span className="text-lg font-semibold text-foreground">
            {valueLeft}
          </span>
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">{titleRight}</span>
          <span className="text-lg font-semibold text-foreground">
            {valueRight}
          </span>
        </div>
      </div>

      {/* Progress */}
      {progressValue !== undefined && (
        <LineProgress
          title={progressTitle}
          value={progressValue}
          className="bg-chart-3/40"
        />
      )}
    </div>
  );

  return (
    <Card className="w-full p-2 flex flex-col gap-1.5 rounded-2xl shadow-none hover:bg-muted/20 transition-all duration-200">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-foreground">
          {data.title}
        </h2>
        <Badge
          variant="secondary"
          className="text-xs font-medium rounded-full px-2 py-0.5"
        >
          {data.unit}
        </Badge>
      </div>

      <CardContent className="flex flex-row gap-4 p-0 border-t border-border pt-2">
        {renderGroup("Current Year", cy, "Previous Year", py, "GoLY", goly)}
        <Separator orientation="vertical" />
        <div className="w-32 flex flex-col gap-1">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Budget</span>
            <span className="text-lg font-semibold text-foreground">
              {budget}
            </span>
          </div>
          <LineProgress title="Ach" value={ach} className="bg-chart-4/40" />
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceCard;
