export interface PerformanceMetricType {
  cy: number;
  py: number;
  goly: number;
  budget: number;
  ach: number;
}

export type PerformanceCardTypes = {
  title: string;
  subtitle: string;
  unit: string;
  metrics: PerformanceMetricType;
};

// Growth/loss icon component
export interface GrowthIconProps {
  isNegative: boolean;
  className?: string;
}

// Mobile Performance Card Component
export interface MobilePerformanceCardProps {
  data: PerformanceCardTypes;
}

// Desktop Performance Card Component (original without accordion)
export interface PerformanceCardProps {
  data: PerformanceCardTypes;
  className?: string;
}

export type TabType = "Today" | "MTD" | "YTD";

export interface TimePeriod {
  label: string;
  value: TabType;
}
export interface TimePeriodSelectorProps {
  activeTab: TabType;
  setActiveTabAction: (tab: TabType) => void;
  timePeriods: TimePeriod[];
}
