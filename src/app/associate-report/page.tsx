import AssociateInfo from "./components/asscociate-info/assicicate-info";
import { associateData } from "./components/asscociate-info/data";
import {
  allQuartorData,
  Q2YlgData,
  quartorToYear,
} from "./components/quartors/data";
import { QuartorCard } from "./components/quartors/quartor-card";
import {
  channelWiseSalesTable,
  customerSalesTable,
  qualitiesSalesTable,
  zoneWiseSalesTable,
} from "./components/sales-table/data";
import SalesTable from "./components/sales-table/sales-table";
import { grandTotal, topColors } from "./components/top-colors/data";
import TopColors from "./components/top-colors/top-colors";

const CRMRoute = () => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      {/* Desktop UI: lg and above */}
      <div className="hidden lg:grid lg:grid-cols-10 gap-2 max-h-[calc(100vh-4rem)]">
        <div className="col-span-10 flex flex-col gap-1.5">
          <AssociateInfo associateInfo={associateData} />
          <QuartorCard
            allQuartorData={allQuartorData}
            quartorToYearData={quartorToYear}
          />
        </div>

        <div className="col-span-10 grid grid-cols-10 gap-2">
          {/* Left big column */}
          <div className="col-span-4">
            <TopColors
              colors={topColors}
              grandTotal={grandTotal}
              className="h-[400px]"
            />
          </div>

          {/* Right split columns */}
          <div className="col-span-6 grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <SalesTable table={customerSalesTable} className="h-[400px]" />
              <SalesTable table={zoneWiseSalesTable} className="h-60" />
            </div>
            <div className="flex flex-col gap-2">
              <SalesTable table={qualitiesSalesTable} className="h-[400px]" />
              <SalesTable table={channelWiseSalesTable} className="h-60" />
            </div>
          </div>
        </div>
      </div>

      {/* Tablet UI: md only */}
      <div className="hidden md:grid lg:hidden gap-2">
        <AssociateInfo associateInfo={associateData} />

        {/* Quartor + TopColors stacked */}
        <div className="grid grid-cols-1 gap-2">
          <QuartorCard
            allQuartorData={allQuartorData}
            quartorToYearData={quartorToYear}
          />
          <TopColors
            colors={topColors}
            grandTotal={grandTotal}
            className="h-[400px]"
          />
        </div>

        {/* Sales Tables 2x2 */}
        <div className="grid grid-cols-2 gap-2">
          <SalesTable table={customerSalesTable} className="h-[300px]" />
          <SalesTable table={qualitiesSalesTable} className="h-[300px]" />
          <SalesTable table={zoneWiseSalesTable} className="h-[300px]" />
          <SalesTable table={channelWiseSalesTable} className="h-[300px]" />
        </div>
      </div>

      {/* Mobile UI: sm only */}
      <div className="md:hidden flex flex-col gap-2">
        <AssociateInfo associateInfo={associateData} />
        <QuartorCard
          allQuartorData={allQuartorData}
          quartorToYearData={quartorToYear}
        />
        <TopColors
          colors={topColors}
          grandTotal={grandTotal}
          className="h-[300px]"
        />

        {/* Sales Tables stacked vertically */}
        <SalesTable table={customerSalesTable} className="h-[300px]" />
        <SalesTable table={zoneWiseSalesTable} className="h-[300px]" />
        <SalesTable table={qualitiesSalesTable} className="h-[300px]" />
        <SalesTable table={channelWiseSalesTable} className="h-[300px]" />
      </div>
    </div>
  );
};

export default CRMRoute;
