"use client";
import { FC, useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { CircularProgressProps } from "./types";

export const CircularProgress: FC<CircularProgressProps> = ({
  title,
  value,
  size = 64,
  innerRadius = 20,
  outerRadius = 25,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (value === null) {
    return (
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-muted bg-muted/20 flex items-center justify-center">
          <span className="text-[9px] font-medium text-muted-foreground">
            N/A
          </span>
        </div>
      </div>
    );
  }

  // Return placeholder during SSR
  if (!mounted) {
    return (
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-muted bg-muted/20" />
      </div>
    );
  }

  const chartData = [
    { name: "progress", value },
    { name: "rest", value: 100 - value },
  ];

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <PieChart
        width={size}
        height={size}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          isAnimationActive={false}
        >
          <Cell key="progress" fill="var(--chart-1)" />
          <Cell key="rest" fill="var(--chart-2)" />
        </Pie>
      </PieChart>
      {/* Center label */}
      <div className="absolute flex flex-col items-center justify-center">
        <span
          className="text-[11px] font-bold text-foreground leading-none"
          aria-label={`${value.toFixed(0)}% ${title}`}
        >
          {value.toFixed(0)}%
        </span>
        <span className="text-[8px] text-muted-foreground">{title}</span>
      </div>
    </div>
  );
};
