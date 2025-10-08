import AssociateInfo from "./components/asscociate-info/assicicate-info";
import { associateData } from "./components/asscociate-info/data";
import { allQuartorData, quartorToYear } from "./components/quartors/data";
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
    <div
      className={`
        grid gap-6 md:gap-2
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-10
      `}
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
          className="h-full max-h-[400px]"
          quartor={associateData.quarter}
        />
      </div>

      {/* Sales Tables */}
      <div className="col-span-full md:col-span-2 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2">
        <SalesTable
          table={customerSalesTable}
          className="h-[300px] lg:h-[400px]"
          quartor={associateData.quarter}
        />
        <SalesTable
          table={qualitiesSalesTable}
          className="h-[300px] lg:h-[400px]"
          quartor={associateData.quarter}
        />
        <SalesTable
          table={zoneWiseSalesTable}
          className="h-full max-h-[400px]"
          quartor={associateData.quarter}
        />
        <SalesTable
          table={channelWiseSalesTable}
          className="h-full max-h-[400px]"
          quartor={associateData.quarter}
        />
      </div>
    </div>
  );
};

export default CRMRoute;
