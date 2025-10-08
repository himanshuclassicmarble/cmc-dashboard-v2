"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnalyticsChartProps } from "./types";
import { useDataTransform } from "./hooks/use-data-transform";
import { getVisibleDataCount } from "./utils/responsive-chart";
import { ErrorState } from "./_subcomponent/error-state";
import { Chart } from "./_subcomponent/trend-chart";
import { ScrollControl } from "./_subcomponent/scroll-control";
import { TabHeader } from "./_subcomponent/tab-header";
import { useScreenSize } from "./hooks/use-screensize";

export default function AnalyticsChart({ data }: AnalyticsChartProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTab, setActiveTab] = useState<"value" | "quantity">("value");

  const screenSize = useScreenSize();
  const transformData = useDataTransform(data);

  // Visible data calculation
  const visibleDataCount = useMemo(
    () => getVisibleDataCount(screenSize),
    [screenSize],
  );

  const needsScrolling = screenSize !== "desktop";
  const maxScroll = Math.max(0, (data?.length || 0) - visibleDataCount);

  const currentData = useMemo(
    () => transformData(activeTab),
    [transformData, activeTab],
  );

  const visibleData = useMemo(
    () =>
      needsScrolling
        ? currentData.slice(scrollPosition, scrollPosition + visibleDataCount)
        : currentData,
    [currentData, needsScrolling, scrollPosition, visibleDataCount],
  );

  const handleScrollChange = useCallback((value: number[]) => {
    setScrollPosition(value[0]);
  }, []);

  const handleTabChange = useCallback((value: "value" | "quantity") => {
    setActiveTab(value);
  }, []);

  // Reset scroll when tab changes
  useEffect(() => {
    setScrollPosition(0);
  }, [activeTab]);

  // Error states
  if (!data || !Array.isArray(data)) {
    return <ErrorState message="No data provided" />;
  }

  if (currentData.length === 0) {
    return <ErrorState message="Invalid data format" />;
  }

  return (
    <Card className="w-full p-2 flex flex-col gap-1.5 rounded-2xl shadow-none hover:bg-muted/20 transition-all duration-200">
      <CardContent className="p-2 space-y-2">
        <TabHeader activeTab={activeTab} onTabChangeAction={handleTabChange} />

        {needsScrolling && (
          <ScrollControl
            scrollPosition={scrollPosition}
            onScrollChange={handleScrollChange}
            maxScroll={maxScroll}
            visibleData={visibleData}
            visibleDataCount={visibleDataCount}
            totalDataLength={data.length}
          />
        )}

        <Chart data={visibleData} screenSize={screenSize} metric={activeTab} />
      </CardContent>
    </Card>
  );
}
