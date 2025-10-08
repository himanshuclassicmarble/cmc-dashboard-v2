"use client";

import React, { useState } from "react";
import { TabType } from "./types";
import { performanceCardData, timePeriods } from "./data";
import { TimePeriodSelector } from "./time-period-selector";
import PerformanceCard from "./performance-card";

const PerformanceView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("MTD");

  const cards = performanceCardData[activeTab] ?? [];

  return (
    <div className="flex flex-col gap-2 border border-border rounded-2xl p-1.5">
      <div className="flex flex-col md:flex-row gap-2">
        <TimePeriodSelector
          activeTab={activeTab}
          timePeriods={timePeriods}
          setActiveTabAction={setActiveTab}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <PerformanceCard data={cards[0]} />
        <PerformanceCard data={cards[1]} />
        <PerformanceCard
          data={cards[2]}
          className="md:col-span-2 lg:col-span-1"
        />
        {/*))}*/}
      </div>
    </div>
  );
};

export default PerformanceView;
