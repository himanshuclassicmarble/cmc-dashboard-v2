"use client";

import { useState } from "react";
import { Executive, FilterHeaderProps } from "./types";
import { ExecutiveSelector } from "./sub-components/executive-selector";
import { MarbleTypeSelector } from "./sub-components/marble-type-selector";

export default function FilterHeader({
  executives,
  marbleTypes,
}: FilterHeaderProps) {
  const [selectedExecutive, setSelectedExecutive] = useState<Executive | null>(
    null,
  );
  const [selectedMarble, setSelectedMarble] = useState("");

  return (
    <div className="w-full max-w-7xl mx-auto h-8 bg-background border-b border-border">
      <div className="container mx-auto px-3 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left side */}
          {/*<div className="flex items-center gap-3">
            <TimePeriodSelector
              activeTab={activePeriod}
              setActiveTabAction={setActivePeriod}
              timePeriods={timePeriods}
            />
          </div>*/}

          {/* Right side */}
          <div className="flex items-center">
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
        </div>
      </div>
    </div>
  );
}
