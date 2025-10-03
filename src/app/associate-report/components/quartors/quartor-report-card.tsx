"use client";

import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartPie } from "lucide-react";
import { CircularProgress } from "../circular-progress/circular-progress-ui";
import { Metric, QuartorData, QuartorReportCardProps } from "./types";

const MetricCard: FC<Metric> = ({ label, act, tgt, ach }) => (
  <div className="relative flex items-center justify-between border-t border-border">
    <div className="flex flex-col flex-1">
      <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 font-bold border border-slate-200/80 shadow-sm">
        {label}
      </Badge>

      <div className="flex items-end gap-1">
        <div>
          <h1 className="text-base font-semibold text-slate-800">
            {act.value}
            {act.unit}
          </h1>
          <p className="text-[10px] font-semibold text-slate-500">(Actual)</p>
        </div>
        <div>
          <h1 className="text-xs text-slate-400 font-medium">
            / {tgt.value}
            {tgt.unit}
          </h1>
          <p className="text-[10px] font-semibold text-slate-500">(Target)</p>
        </div>
      </div>
    </div>

    {ach && (
      <div className="flex items-center gap-2">
        <CircularProgress value={ach.value} title="Ach" />
      </div>
    )}
  </div>
);

const QuartorReportCard: FC<QuartorReportCardProps> = ({ data }) => {
  const metrics: Metric[] = [
    {
      key: "qty",
      label: "Qty",
      act: data.act_qty,
      tgt: data.tgt_qty,
      ach: data.qty_ach ?? null,
    },
    {
      key: "rev",
      label: "Rev",
      act: data.act_rev,
      tgt: data.tgt_rev,
      ach: data.rev_ach ?? null,
    },
    {
      key: "arv",
      label: "ARV",
      act: data.act_avg,
      tgt: data.tgt_avg,
    },
  ];

  return (
    <Card className="w-full p-2 flex flex-col gap-0 hover:bg-muted/40 shadow-none">
      <div className="text-sm pb-4 flex items-center gap-2 font-semibold tracking-wider uppercase text-foreground">
        <ChartPie className="size-6 text-primary" />
        {data.table}
      </div>

      <CardContent className="flex flex-col gap-1.5 p-0">
        {metrics.map((m) => (
          <MetricCard
            key={m.key}
            label={m.label}
            act={m.act}
            tgt={m.tgt}
            ach={m.ach}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default QuartorReportCard;
