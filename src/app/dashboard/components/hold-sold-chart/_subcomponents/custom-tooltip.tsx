import { CHART_CONFIG } from "../constants";
import { TooltipProps } from "../types";
import { formatValue } from "../utils/format-value";

export const CustomTooltip: React.FC<TooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  return (
    <div className="rounded-lg border bg-background p-2 shadow-lg min-w-[150px]">
      <div className="flex items-center gap-1">
        <span className="font-semibold text-[10px]">Daily Distribution</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center gap-1">
          <span className="text-[10px] text-muted-foreground">Days:</span>
          <span className="font-semibold text-[10px]">{label}</span>
        </div>
        <div className="flex justify-between items-center gap-1">
          <div className="flex items-center gap-1">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: CHART_CONFIG.soldStock.color }}
            />
            <span className="text-[10px] text-muted-foreground">Sold:</span>
          </div>
          <span className="font-semibold text-[10px]">
            {formatValue(data.soldStock)}
          </span>
          <span className="text-[10px] text-muted-foreground">sq.ft</span>
        </div>
        <div className="flex justify-between items-center gap-1">
          <div className="flex items-center gap-1">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: CHART_CONFIG.holdStock.color }}
            />
            <span className="text-[10px] text-muted-foreground">Hold:</span>
          </div>
          <span className="font-semibold text-[10px]">
            {formatValue(data.holdStock)}
          </span>
          <span className="text-[10px] text-muted-foreground">sq.ft</span>
        </div>
        <div className="flex justify-between items-center gap-1 border-t pt-1">
          <span className="text-[10px] text-muted-foreground">Total:</span>
          <span className="font-semibold text-[10px]">
            {formatValue(data.totStock)}
          </span>
          <span className="text-[10px] text-muted-foreground">sq.ft</span>
        </div>
      </div>
    </div>
  );
};
