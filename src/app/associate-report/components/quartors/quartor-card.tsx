"use client";

import QuartorReportCard from "./quartor-report-card";
import { QualityCardProps } from "./types";

export function QuartorCard({
  quartorToYearData,
  allQuartorData,
}: QualityCardProps) {
  if (!quartorToYearData?.length) {
    return <div className="text-red-500">No year-to-date data available</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {/* Main quartor-to-year card */}
      <QuartorReportCard data={quartorToYearData[0]} />

      {/* Loop through all quartor data */}
      {allQuartorData?.map((data, index) => (
        <QuartorReportCard key={data.table || index} data={data} />
      ))}
    </div>
  );
}
