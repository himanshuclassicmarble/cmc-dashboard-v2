// types.ts

// A simple value object used across your data (matches your data file)
export interface MetricValue {
  label: string; // e.g. "FT2" or "" (empty string is fine)
  value: number;
  unit: string; // e.g. "K", "Cr", "%" or ""
}

// UI-level Metric used by your MetricCard component
export interface Metric {
  key: string;
  label: string; // UI label like "Qty", "Rev"
  act: MetricValue;
  tgt: MetricValue;
  ach?: MetricValue;
}

// The raw data shape for each quarter / table (matches your data file)
export interface QuartorData {
  table: string;

  tgt_qty: MetricValue;
  act_qty: MetricValue;
  qty_ach?: MetricValue;

  tgt_rev: MetricValue;
  act_rev: MetricValue;
  rev_ach?: MetricValue;

  tgt_avg: MetricValue;
  act_avg: MetricValue;
}

// Props interfaces
export interface LGDataCardProps {
  quartorToYear: QuartorData[];
  className?: string;
}

export interface QualityCardProps {
  quartorToYearData: QuartorData[];
  allQuartorData: QuartorData[];
  className?: string;
}

export interface QuartorReportCardProps {
  data: QuartorData;
}
