import { cn } from "@/lib/utils";
import { CHART_CONFIG } from "../constants";

export const ChartLegend = () => (
  <div className="flex flex-wrap gap-4">
    {Object.entries(CHART_CONFIG).map(([key, { label, color }]) => (
      <div key={key} className="flex items-center gap-2">
        <div
          className={cn(
            key === "target" ? "w-3 h-1.5 rounded-full" : "w-3 h-3 rounded-sm",
          )}
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
      </div>
    ))}
  </div>
);
