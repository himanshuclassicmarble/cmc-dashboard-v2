"use client";

import { FC } from "react";
import { Progress } from "@/components/ui/progress";
import { CircularProgressProps } from "./types";

export const LineProgress: FC<CircularProgressProps> = ({
  title,
  value,
  className,
}) => {
  if (value === null) {
    return (
      <div className="flex items-center gap-3 w-full">
        <span className="text-[11px] text-muted-foreground">{title}</span>
        <div className="flex-1 h-2 rounded-full border-2 border-muted bg-muted/20 flex items-center justify-end px-2">
          <span className="text-[9px] font-medium text-muted-foreground">
            N/A
          </span>
        </div>
      </div>
    );
  }

  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="flex items-center gap-2 w-full">
      {/* Title */}
      <span className="text-xs text-muted-foreground">{title}</span>

      {/* Progress Bar */}
      <div className="flex-1 relative">
        <Progress
          value={clampedValue}
          className={`h-2 rounded-full p-0 ${className}`}
        />
      </div>

      <span className="text-xs font-semibold text-foreground text-right">
        {value.toLocaleString()}%
      </span>
    </div>
  );
};
