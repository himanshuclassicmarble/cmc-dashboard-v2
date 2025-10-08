import { Slider } from "@/components/ui/slider";
import { ChartDataPoint } from "../types";

export const ScrollControl = ({
  scrollPosition,
  onScrollChange,
  maxScroll,
  visibleData,
  visibleDataCount,
  totalDataLength,
}: {
  scrollPosition: number;
  onScrollChange: (value: number[]) => void;
  maxScroll: number;
  visibleData: ChartDataPoint[];
  visibleDataCount: number;
  totalDataLength: number;
}) => (
  <div className="space-y-3 pt-4 border-t">
    <Slider
      value={[scrollPosition]}
      onValueChange={onScrollChange}
      max={maxScroll}
      min={0}
      step={1}
      className="w-full"
    />
    <div className="text-center">
      <span className="text-sm font-medium text-muted-foreground">
        {visibleData[0]?.month} - {visibleData[visibleData.length - 1]?.month}
        <span className="ml-2 text-xs opacity-70">
          ({visibleDataCount} of {totalDataLength})
        </span>
      </span>
    </div>
  </div>
);
