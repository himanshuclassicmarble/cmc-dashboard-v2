"use client";

import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineProgress } from "../graph-ui/line-progress-ui";
import { QuartorReportCardProps } from "./types";
import { Separator } from "@/components/ui/separator";

const QuartorReportCard: FC<QuartorReportCardProps> = ({ data }) => {
  const {
    act_qty,
    tgt_qty,
    qty_ach,
    act_rev,
    tgt_rev,
    rev_ach,
    act_avg,
    tgt_avg,
  } = data;

  const renderSection = (
    titleActual: string,
    actual: { value: number; unit: string },
    titleTarget: string,
    target: { value: number; unit: string },
    ach?: { value: number | null },
  ) => (
    <div className="flex flex-col border-t border-border pt-2">
      <div className="flex items-center justify-between gap-4">
        {/* Actual */}
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">{titleActual}</span>
          <span className="text-lg font-semibold text-foreground">
            {actual.value}
            <span className="ml-1 text-xs text-muted-foreground">
              {actual.unit}
            </span>
          </span>
        </div>

        <Separator orientation="vertical" className="h-8" />

        {/* Target */}
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">{titleTarget}</span>
          <span className="text-lg font-semibold text-foreground">
            {target.value}
            <span className="ml-1 text-xs text-muted-foreground">
              {target.unit}
            </span>
          </span>
        </div>
      </div>

      {/* Ach Progress */}
      {ach && <LineProgress title="Ach" value={ach.value} />}
    </div>
  );

  return (
    <Card className="w-full p-2 flex flex-col gap-2 rounded-2xl shadow-none hover:bg-muted/20 transition-all duration-200">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-foreground">
          {data.table}
        </h2>
      </div>

      <CardContent className="flex flex-col gap-2 p-0">
        {renderSection("Actual Qty", act_qty, "Target Qty", tgt_qty, qty_ach)}
        {renderSection("Actual Rev", act_rev, "Target Rev", tgt_rev, rev_ach)}
        {renderSection("Actual ARV", act_avg, "Target ARV", tgt_avg)}
      </CardContent>
    </Card>
  );
};

export default QuartorReportCard;
