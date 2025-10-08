interface ChartDataItem {
  day: string;
  totStock: number;
  soldStock: number;
  holdStock: number;
}

export const sampleStockData: ChartDataItem[] = [
  { day: "01-07", totStock: 190, soldStock: 100, holdStock: 90 },
  { day: "08-14", totStock: 50, soldStock: 25, holdStock: 25 },
  { day: "15-30", totStock: 150, soldStock: 60, holdStock: 90 },
  { day: "31-60", totStock: 180, soldStock: 80, holdStock: 100 },
  { day: "61-90", totStock: 200, soldStock: 110, holdStock: 90 },
  { day: "91-180", totStock: 250, soldStock: 160, holdStock: 90 },
  { day: "181+", totStock: 300, soldStock: 220, holdStock: 80 },
];
