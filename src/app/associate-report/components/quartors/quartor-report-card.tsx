"use client";

import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircularProgress } from "../circular-progress/circular-progress-ui";
import { QuartorReportCardProps } from "./types";

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

  return (
    <Card className="w-full p-2 flex flex-col gap-1.5 rounded-2xl shadow-none hover:bg-muted/20 transition-all duration-200">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-foreground">
          {data.table}
        </h2>
        <Badge
          variant="secondary"
          className="text-[10px] font-medium rounded-full px-2 py-0.5"
        >
          Report
        </Badge>
      </div>

      <CardContent className="flex flex-col gap-2 p-0">
        {/* Qty Section */}
        <div className="flex items-center justify-between border-t border-border pt-2">
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col">
              <span className="text-[11px] text-muted-foreground">
                Actual Qty
              </span>
              <span className="text-lg font-bold text-foreground">
                {act_qty.value}
                <span className="ml-1 text-[11px] text-muted-foreground">
                  {act_qty.unit}
                </span>
              </span>
            </div>
            <span className="text-muted-foreground font-medium">/</span>
            <div className="flex flex-col">
              <span className="text-[11px] text-muted-foreground">
                Target Qty
              </span>
              <span className="text-sm font-medium text-foreground">
                {tgt_qty.value}
                <span className="ml-1 text-[11px] text-muted-foreground">
                  {tgt_qty.unit}
                </span>
              </span>
            </div>
          </div>

          {qty_ach && <CircularProgress title="Ach" value={qty_ach.value} />}
        </div>

        {/* Revenue Section */}
        <div className="flex items-center justify-between border-t border-border pt-2">
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col">
              <span className="text-[11px] text-muted-foreground">
                Actual Rev
              </span>
              <span className="text-lg font-bold text-foreground">
                {act_rev.value}
                <span className="ml-1 text-[11px] text-muted-foreground">
                  {act_rev.unit}
                </span>
              </span>
            </div>
            <span className="text-muted-foreground font-medium">/</span>
            <div className="flex flex-col">
              <span className="text-[11px] text-muted-foreground">
                Target Rev
              </span>
              <span className="text-sm font-medium text-foreground">
                {tgt_rev.value}
                <span className="ml-1 text-[11px] text-muted-foreground">
                  {tgt_rev.unit}
                </span>
              </span>
            </div>
          </div>

          {rev_ach && <CircularProgress title="Ach" value={rev_ach.value} />}
        </div>

        {/* ARV Section */}
        <div className="flex items-center justify-between border-t border-border pt-2">
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col">
              <span className="text-[11px] text-muted-foreground">
                Actual ARV
              </span>
              <span className="text-lg font-bold text-foreground">
                {act_avg.value}
                <span className="ml-1 text-[11px] text-muted-foreground">
                  {act_avg.unit}
                </span>
              </span>
            </div>
            <span className="text-muted-foreground font-medium">/</span>
            <div className="flex flex-col">
              <span className="text-[11px] text-muted-foreground">
                Target ARV
              </span>
              <span className="text-sm font-medium text-foreground">
                {tgt_avg.value}
                <span className="ml-1 text-[11px] text-muted-foreground">
                  {tgt_avg.unit}
                </span>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuartorReportCard;
