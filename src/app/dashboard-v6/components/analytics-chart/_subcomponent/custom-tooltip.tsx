import { cn } from "@/lib/utils";
import { CHART_CONFIG } from "../constants";
import { CustomTooltipProps } from "../types";
import { formatValue } from "../utils/format-value";

export const CustomTooltip = ({
  active,
  payload,
  label,
  metric = "value",
}: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-sm border bg-background/95 backdrop-blur-sm p-2 shadow-none">
      <div className="space-y-1.5">
        <div className="flex justify-between items-center gap-3">
          <span className="text-[10px] text-muted-foreground">Month:</span>
          <span className="text-[10px] font-semibold">{label}</span>
        </div>
        {payload.map((entry, index) => {
          const value = entry.value ?? 0;
          const dataKey = entry.dataKey ?? entry.name ?? "";
          const color = entry.color ?? "";

          return (
            <div
              key={`tooltip-${dataKey}-${index}`}
              className="flex justify-between items-center gap-1"
            >
              <div className="flex items-center gap-1.5">
                <div
                  className={cn(
                    "w-2.5 h-2.5",
                    dataKey === "target" ? "rounded-full" : "rounded-sm",
                  )}
                  style={{ backgroundColor: color }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {CHART_CONFIG[dataKey as keyof typeof CHART_CONFIG]?.label ||
                    dataKey}
                  :
                </span>
              </div>
              <span className="text-[10px] font-semibold tabular-nums">
                {formatValue(value, metric)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
