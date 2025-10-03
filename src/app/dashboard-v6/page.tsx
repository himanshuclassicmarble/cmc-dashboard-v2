"use client";

import React from "react";
import { CRMdata } from "./components/crm-chart/data";
import { performanceCardData } from "./components/performance-card/data";
import { PerformanceCardTypes } from "./components/performance-card/types";
import { PerformanceCard } from "./components/performance-card/performance-card";
import CRMCard from "./components/crm-chart/crm-card";
import { AnalyticsChartData } from "./components/analytics-chart/data";
import { HoldSoldChartV2 } from "./components/hold-sold-chart/hold-sold-chart-v2";
import { sampleStockData } from "./components/hold-sold-chart/data";
import FilterHeader from "./components/filter-header/filter-header";
import { executives, marbleTypes } from "./components/filter-header/data";
import AnalyticsChart from "./components/analytics-chart/analytics-chart";
import AssociateInfo from "../associate-report/components/asscociate-info/assicicate-info";
import { associateData } from "../associate-report/components/asscociate-info/data";
import TopColors from "../associate-report/components/top-colors/top-colors";
import {
  grandTotal,
  topColors,
} from "../associate-report/components/top-colors/data";
import SalesTable from "../associate-report/components/sales-table/sales-table";
import {
  channelWiseSalesTable,
  customerSalesTable,
  qualitiesSalesTable,
  zoneWiseSalesTable,
} from "../associate-report/components/sales-table/data";
import PerformanceView from "./components/performance-card/performance-View";
import { QuartorCard } from "../associate-report/components/quartors/quartor-card";
import {
  allQuartorData,
  quartorToYear,
} from "../associate-report/components/quartors/data";

const HOLD_SOLD_CONFIG = {
  DEFAULT_HELD: { holdQuantity: 90, holdNumbers: 90 },
  DEFAULT_SOLD: { soldQuantity: 200, soldNumbers: 200 },
} as const;

const DashboardV6: React.FC = () => {
  const renderCRMCard = () => <CRMCard data={CRMdata} />;

  const renderAnalyticsChart = () => (
    <AnalyticsChart data={AnalyticsChartData} />
  );

  const renderHoldSoldChart = (
    customTotalHeld = HOLD_SOLD_CONFIG.DEFAULT_HELD,
  ) => (
    <HoldSoldChartV2
      totalHeld={customTotalHeld}
      totalSold={HOLD_SOLD_CONFIG.DEFAULT_SOLD}
      chartData={sampleStockData}
    />
  );

  return (
    <div className="w-full flex flex-col">
      {/* Give header a fixed height */}
      <FilterHeader executives={executives} marbleTypes={marbleTypes} />

      {/* Main now fills exactly remaining height = 100vh - 56px */}
      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col p-2 gap-2">
        <div className="flex flex-col gap-2 w-full h-full">
          <div className="w-full">
            <PerformanceView />
          </div>
          <div className="w-full flex flex-col gap-1.5 h-full">
            {renderAnalyticsChart()}
          </div>
          <div className="flex flex-col lg:flex-row gap-2 flex-1 h-full">
            <div className="flex-1 h-[350px]">{renderCRMCard()}</div>
            <div className="flex-1 h-[350px]">{renderHoldSoldChart()}</div>
          </div>
        </div>

        {/* Desktop UI: Visible on lg (≥1024px) */}
        <div className="hidden lg:grid lg:grid-cols-10 gap-2">
          {/* 🟥 Top Row: Associate + Quartor (span full width, 2 rows height) */}
          <div className="h-full col-span-10 flex flex-col gap-2">
            <div className="">
              <AssociateInfo associateInfo={associateData} />
            </div>
            <div className="w-full">
              <QuartorCard
                allQuartorData={allQuartorData}
                quartorToYearData={quartorToYear}
              />
            </div>
          </div>

          {/* 🟦 Bottom Section: remaining 8 rows */}
          <div className="h-full col-span-10 grid grid-cols-10 gap-2">
            {/* Left big column (4 cols) */}
            <div className="col-span-4 flex flex-col gap-2">
              <TopColors
                colors={topColors}
                grandTotal={grandTotal}
                className="h-[400px]"
              />
            </div>

            {/* Right side split into two columns (6 cols total) */}
            <div className="col-span-6 flex gap-2">
              <div className="w-full flex flex-col gap-2">
                <SalesTable table={customerSalesTable} className="h-[400px]" />
                <SalesTable
                  table={zoneWiseSalesTable}
                  tableColor="bg-blue-400"
                  className="h-60"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <SalesTable table={qualitiesSalesTable} className="h-[400px]" />
                <SalesTable table={channelWiseSalesTable} className="h-60" />
              </div>
            </div>
          </div>
        </div>

        {/* Tablet UI: Visible on md (≥768px and <1024px) */}
        <div className="hidden md:grid lg:hidden gap-2">
          {/* 🟥 Top: Associate Info */}
          <div>
            <AssociateInfo associateInfo={associateData} />
          </div>

          {/* 🟦 Row: Quartor + TopColors */}
          <div className="flex flex-row gap-2">
            <div className="">
              <QuartorCard
                allQuartorData={allQuartorData}
                quartorToYearData={quartorToYear}
              />
            </div>
            <div className="flex-1">
              <TopColors
                colors={topColors}
                grandTotal={grandTotal}
                className="h-[400px]"
              />
            </div>
          </div>

          {/* 🟨 Sales Tables (2x2 grid) */}
          <div className="grid grid-cols-2 gap-2">
            <SalesTable table={customerSalesTable} className="h-[300px]" />
            <SalesTable table={qualitiesSalesTable} className="h-[300px]" />
            <SalesTable table={zoneWiseSalesTable} className="h-[300px]" />
            <SalesTable table={channelWiseSalesTable} className="h-[300px]" />
          </div>
        </div>
        {/* Mobile UI: Visible on sm (<768px) */}
        <div className="md:hidden grid gap-2">
          <AssociateInfo associateInfo={associateData} />
          <QuartorCard
            allQuartorData={allQuartorData}
            quartorToYearData={quartorToYear}
          />
          <TopColors colors={topColors} grandTotal={grandTotal} />
          <SalesTable table={customerSalesTable} className="h-[300px]" />
          <SalesTable table={zoneWiseSalesTable} className="h-[300px]" />
          <SalesTable table={qualitiesSalesTable} className="h-[300px]" />
          <SalesTable table={channelWiseSalesTable} className="h-[300px]" />
        </div>
      </main>
    </div>
  );
};

export default DashboardV6;
