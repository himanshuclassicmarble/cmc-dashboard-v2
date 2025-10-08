import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { SalesTableProps } from "./types";
import { cn } from "@/lib/utils";

const formatNumber = (
  value: number | null,
  type: "qty" | "rev" | "percent" | "arv",
) => {
  if (value === null || isNaN(value)) return "—";
  switch (type) {
    case "qty":
    case "rev":
      return value.toFixed(2);
    case "percent":
      return `${value.toFixed(2)}`;
    case "arv":
      return Math.round(value).toString();
    default:
      return value.toString();
  }
};

const SalesTable = ({ table, className, quartor }: SalesTableProps) => {
  const { tableTitle, tableKey, tableData, tableTotal } = table;

  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring hover:ring-ring",
        className,
      )}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-border">
        <span className="text-lg font-semibold tracking-wide text-foreground">
          {tableTitle} - {quartor}
        </span>
      </div>

      {/* Sticky Header */}
      <div className="sticky top-0 z-10 border-b border-border">
        <Table className="table-fixed w-full text-xs">
          <TableHeader className="bg-primary">
            <TableRow>
              <TableHead className="w-[30%] p-1 text-left border-r border-border text-primary-foreground uppercase font-bold">
                {tableKey}
              </TableHead>
              <TableHead className="w-[17.5%] p-1 text-right border-r border-border text-primary-foreground uppercase font-bold">
                Qty (K)
              </TableHead>
              <TableHead className="w-[17.5%] p-1 text-right border-r border-border text-primary-foreground uppercase font-bold">
                Rev (Cr)
              </TableHead>
              <TableHead className="w-[17.5%] p-1 text-right border-r border-border text-primary-foreground uppercase font-bold">
                Rev (%)
              </TableHead>
              <TableHead className="w-[17.5%] p-1 text-center text-primary-foreground uppercase font-bold">
                ARV
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>

      {/* Scrollable Body */}
      <ScrollArea className="flex-1 overflow-auto">
        <ScrollBar className="w-0 bg-transparent " />
        <Table className="table-fixed w-full text-xs">
          <TableBody>
            {tableData.length > 0 ? (
              tableData.map((row) => (
                <TableRow
                  key={row.key}
                  className="border-b border-border hover:ring hover:ring-ring"
                >
                  <TableCell className="w-[30%] p-1 border-r border-border whitespace-normal break-words">
                    {row.key}
                  </TableCell>
                  <TableCell className="w-[17.5%] p-1 text-right border-r border-border">
                    {formatNumber(row.qty, "qty")}
                  </TableCell>
                  <TableCell className="w-[17.5%] p-1 text-right border-r border-border">
                    {formatNumber(row.rev, "rev")}
                  </TableCell>
                  <TableCell className="w-[17.5%] p-1 text-right border-r border-border">
                    {formatNumber(row.revPercent, "percent")}
                  </TableCell>
                  <TableCell className="w-[17.5%] p-1 text-center">
                    {formatNumber(row.arv, "arv")}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="p-1 text-center text-xs">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 z-10 border-t border-border">
        <Table className="table-fixed w-full text-xs">
          <TableFooter className="text-primary-foreground bg-primary pb-6 h-8">
            <TableRow className="font-bold">
              <TableCell className="w-[30%] p-1 border-r border-border">
                TOTAL
              </TableCell>
              <TableCell className="w-[17.5%] p-1 text-right border-r border-border">
                {formatNumber(tableTotal.qty, "qty")}
              </TableCell>
              <TableCell className="w-[17.5%] p-1 text-right border-r border-border">
                {formatNumber(tableTotal.rev, "rev")}
              </TableCell>
              <TableCell className="w-[17.5%] p-1 text-right border-r border-border">
                {formatNumber(tableTotal.revPercent, "percent")}
              </TableCell>
              <TableCell className="w-[17.5%] p-1 text-center">
                {formatNumber(tableTotal.arv, "arv")}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default SalesTable;
