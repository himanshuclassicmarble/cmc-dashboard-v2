"use client";

import React, { FC, useMemo } from "react";
import { Calendar } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { getDateDisplay } from "./utils/get-date";
import { TabType, TimePeriodSelectorProps } from "./types";

/**
 * TimePeriodSelector
 */
export const TimePeriodSelector: FC<TimePeriodSelectorProps> = ({
  activeTab = "MTD",
  timePeriods = [],
  setActiveTabAction,
}) => {
  const resolvedActiveTab: TabType = useMemo(
    () =>
      timePeriods.find((p) => p.value === activeTab)?.value ??
      timePeriods[0]?.value ??
      "Today",
    [activeTab, timePeriods],
  );

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Tabs Section */}
      {timePeriods.length > 0 && (
        <Tabs
          value={resolvedActiveTab}
          onValueChange={(val) => setActiveTabAction?.(val as TabType)}
          className="w-auto"
        >
          <TabsList
            className="grid grid-cols-3 h-7 p-0.5 bg-muted/50 border border-border/50"
            aria-label="Select time period"
          >
            {timePeriods.map((period) => (
              <TabsTrigger
                key={period.value}
                value={period.value}
                className={cn(
                  "text-xs font-medium transition-all duration-200",
                  "px-2 py-1 h-6 rounded-sm",
                  "text-muted-foreground hover:text-foreground hover:bg-muted/30",
                  "data-[state=active]:!bg-blue-500 data-[state=active]:!text-white",
                )}
              >
                {period.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      {/* Date Display */}
      <div className="flex items-center gap-1 px-2 py-0.5 bg-muted/30 border border-border/50 rounded-md">
        <Calendar
          className="h-3 w-3 text-muted-foreground"
          aria-hidden="true"
        />
        <span className="text-xs font-medium text-foreground">
          {getDateDisplay(resolvedActiveTab)}
        </span>
      </div>
    </div>
  );
};
