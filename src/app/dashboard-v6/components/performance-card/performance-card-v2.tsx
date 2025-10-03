"use client";

import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PerformanceCardProps } from "./types";
import { Badge } from "@/components/ui/badge";
import { CircularProgress } from "@/app/associate-report/components/circular-progress/circular-progress-ui";

const PerformanceCardV3: FC<PerformanceCardProps> = ({ data }) => {
  const { cy, py, goly, budget, ach } = data.metrics;

  return (
    <Card className="w-full p-2 flex flex-col gap-1.5 rounded-2xl shadow-none hover:bg-muted/20 transition-all duration-200">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-foreground">
          {data.title}
        </h2>
        <Badge
          variant="secondary"
          className="text-[10px] font-medium rounded-full px-2 py-0.5"
        >
          {data.unit}
        </Badge>
      </div>

      <CardContent className="flex flex-col gap-2 p-0">
        {/* Single row layout */}
        <div className="flex items-center justify-between border-t border-border pt-2">
          {/* CY / PY */}
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="flex flex-col">
              <span className="text-[11px] text-muted-foreground">
                Current Year
              </span>
              <span className="text-lg font-bold text-foreground">
                {cy}
                <span className="ml-1 text-[11px] text-muted-foreground">
                  {data.unit}
                </span>
              </span>
            </div>
            <span className="text-slate-400 font-medium">/</span>
            <div className="flex flex-col">
              <span className="text-[11px] text-muted-foreground">
                Prev Year
              </span>
              <span className="text-sm font-medium text-slate-500">
                {py}
                <span className="ml-1 text-[11px] text-muted-foreground">
                  {data.unit}
                </span>
              </span>
            </div>
            <div className="flex flex-col items-center">
              <CircularProgress title="GoLY" value={goly} />
            </div>
          </div>

          {/* Budget */}
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="flex flex-col items-start">
              <span className="text-[11px] text-muted-foreground">Budget</span>
              <span className="text-lg font-bold text-foreground">
                {budget}
                <span className="ml-1 text-[11px] text-muted-foreground">
                  {data.unit}
                </span>
              </span>
            </div>

            <div className="flex flex-col items-center">
              <CircularProgress value={ach} title="Ach" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceCardV3;
