"use client";

import React from "react";
import { CRMdata } from "./components/crm-chart/data";
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
  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <FilterHeader executives={executives} marbleTypes={marbleTypes} />

      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col p-2 gap-2">
        {/* Top Section */}
        <div className="flex flex-col gap-2 w-full">
          <PerformanceView />
          <AnalyticsChart data={AnalyticsChartData} />

          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 h-[350px]">
              <CRMCard data={CRMdata} />
            </div>
            <div className="flex-1 h-[350px]">
              <HoldSoldChartV2
                totalHeld={HOLD_SOLD_CONFIG.DEFAULT_HELD}
                totalSold={HOLD_SOLD_CONFIG.DEFAULT_SOLD}
                chartData={sampleStockData}
              />
            </div>
          </div>
        </div>

        {/* Unified Responsive Layout */}
        <div
          className="grid gap-2
                        sm:grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-10"
        >
          {/* Associate Info + Quartor (full width) */}
          <div className="col-span-full flex flex-col gap-2">
            <AssociateInfo associateInfo={associateData} />
            <QuartorCard
              allQuartorData={allQuartorData}
              quartorToYearData={quartorToYear}
            />
          </div>

          {/* Top Colors */}
          <div className="col-span-full md:col-span-2 lg:col-span-4">
            <TopColors
              colors={topColors}
              grandTotal={grandTotal}
              className="h-[400px]"
            />
          </div>

          {/* Sales Tables */}
          <div className="col-span-full md:col-span-2 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-2">
            <SalesTable
              table={customerSalesTable}
              className="h-[300px] lg:h-[400px]"
            />
            <SalesTable
              table={qualitiesSalesTable}
              className="h-[300px] lg:h-[400px]"
            />
            <SalesTable
              table={zoneWiseSalesTable}
              className="h-[300px] lg:h-60"
            />
            <SalesTable
              table={channelWiseSalesTable}
              className="h-[300px] lg:h-60"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardV6;
