"use client";

import { useState } from "react";
import { Executive, FilterHeaderProps } from "./types";
import { ExecutiveSelector } from "./sub-components/executive-selector";
import { MarbleTypeSelector } from "./sub-components/marble-type-selector";
import { FinancialYearCalendar } from "./sub-components/financial-year-calendar";

export default function FilterHeader({
  executives,
  marbleTypes,
}: FilterHeaderProps) {
  const [selectedExecutive, setSelectedExecutive] = useState<Executive | null>(
    null,
  );
  const [selectedMarble, setSelectedMarble] = useState("");

  return (
    <header className="w-full max-w-7xl mx-auto h-16 md:h-10 bg-background border-b border-border px-2 py-1 md:py-2 flex flex-col md:flex-row md:justify-start md:items-center gap-2">
      {/* Selectors */}
      <div className="flex gap-2 items-center justify-start md:justify-end flex-wrap">
        <MarbleTypeSelector
          marbleTypes={marbleTypes}
          selectedMarble={selectedMarble}
          onSelectMarbleAction={setSelectedMarble}
        />
        <ExecutiveSelector
          executives={executives}
          selectedExecutive={selectedExecutive}
          onSelectExecutiveAction={setSelectedExecutive}
        />
      </div>

      {/* Calendar */}
      <div className="w-full max-w-32 md:w-auto">
        <FinancialYearCalendar />
      </div>
    </header>
  );
}
