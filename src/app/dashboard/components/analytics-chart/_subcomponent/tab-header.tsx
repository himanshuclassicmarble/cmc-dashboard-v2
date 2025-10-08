"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartLegend } from "./chart-legend";

interface TabHeaderProps {
  activeTab: "value" | "quantity";
  onTabChangeAction: (value: "value" | "quantity") => void;
}

export function TabHeader({ activeTab, onTabChangeAction }: TabHeaderProps) {
  // Type-safe handler that ensures the value is properly typed
  const handleTabChange = (value: string) => {
    if (value === "value" || value === "quantity") {
      onTabChangeAction(value);
    }
  };

  return (
    <div className="flex flex-wrap flex-col md:flex-row md:items-center md:justify-between sm:flex-row sm:items-center sm:justify-between gap-1">
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="grid w-full sm:w-auto grid-cols-2 bg-muted/50">
          <TabsTrigger
            value="value"
            className="text-sm font-medium data-[state=active]:bg-background"
          >
            Value
          </TabsTrigger>
          <TabsTrigger
            value="quantity"
            className="text-sm font-medium data-[state=active]:bg-background"
          >
            Quantity
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <ChartLegend />
    </div>
  );
}
