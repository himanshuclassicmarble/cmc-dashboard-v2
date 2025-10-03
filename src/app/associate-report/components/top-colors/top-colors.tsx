"use client";

import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import { BarChart3 } from "lucide-react";
import { Fragment } from "react";
import { ColorProps } from "./types";
import { ScrollArea } from "@/components/ui/scroll-area";

const formatNumber = (
  value: number | undefined,
  type: "qty" | "rev" | "arv" | "percent",
) => {
  if (value === undefined || value === null || isNaN(value)) return "—";
  switch (type) {
    case "qty":
    case "rev":
      return value.toFixed(2);
    case "percent":
      return `${value.toFixed(1)}%`;
    case "arv":
      return Math.round(value).toString();
    default:
      return value.toString();
  }
};

const TopColors = ({ colors, grandTotal, className }: ColorProps) => {
  return (
    <div
      className={`flex flex-col border border-border rounded-none hover:ring hover:ring-ring overflow-hidden ${className}`}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-border bg-muted/40">
        <BarChart3 className="size-4 text-primary" />
        <span className="text-xs font-semibold tracking-wide text-foreground">
          Color-Group-Wise Sales
        </span>
      </div>

      {/* Scrollable Table */}
      <ScrollArea className="flex-1">
        <Table className="table-fixed w-full text-[10px]">
          {/* Sticky Header */}
          <TableHeader className="bg-primary uppercase sticky top-0 z-10">
            <TableRow>
              <TableHead className="w-[20%] p-1 font-semibold text-primary-foreground border-r border-border whitespace-normal break-words">
                Color Group
              </TableHead>
              <TableHead className="w-[25%] p-1 font-semibold text-primary-foreground border-r border-border whitespace-normal break-words">
                Color
              </TableHead>
              <TableHead className="w-[17.5%] p-1 text-right font-semibold text-primary-foreground border-r border-border">
                Qty (K)
              </TableHead>
              <TableHead className="w-[17.5%] p-1 text-right font-semibold text-primary-foreground border-r border-border">
                Rev (Cr)
              </TableHead>
              <TableHead className="w-[15%] p-1 text-right font-semibold text-primary-foreground border-r border-border">
                Rev (%)
              </TableHead>
              <TableHead className="w-[10%] p-1 text-center font-semibold text-primary-foreground">
                ARV
              </TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {colors.map((group) => (
              <Fragment key={group.colorGroup}>
                {group.colors.map((c, idx) => (
                  <TableRow
                    key={c.colorName}
                    className="border-b border-border"
                  >
                    {idx === 0 && (
                      <TableCell
                        rowSpan={group.colors.length + (group.total ? 1 : 0)}
                        className="w-[20%] p-1 font-semibold border-r border-border align-top whitespace-normal break-words hover:ring hover:ring-ring"
                      >
                        {group.colorGroup}
                      </TableCell>
                    )}
                    <TableCell className="w-[25%] p-1 border-r border-border whitespace-normal break-words hover:ring hover:ring-ring">
                      {c.colorName}
                    </TableCell>
                    <TableCell className="w-[17.5%] p-1 text-right border-r border-border whitespace-nowrap">
                      {formatNumber(c.currQtr.qty, "qty")}
                    </TableCell>
                    <TableCell className="w-[17.5%] p-1 text-right border-r border-border whitespace-nowrap">
                      {formatNumber(c.currQtr.rev, "rev")}
                    </TableCell>
                    <TableCell className="w-[15%] p-1 text-right border-r border-border whitespace-nowrap">
                      {c.currQtr.rev && grandTotal.rev > 0
                        ? formatNumber(
                            (c.currQtr.rev / grandTotal.rev) * 100,
                            "percent",
                          )
                        : formatNumber(c.perOfRev, "percent")}
                    </TableCell>
                    <TableCell className="w-[10%] p-1 text-center whitespace-nowrap">
                      {formatNumber(c.ARV, "arv")}
                    </TableCell>
                  </TableRow>
                ))}
                {group.total && (
                  <TableRow className="font-semibold border-b border-border bg-primary/80 text-foreground hover:ring hover:ring-ring">
                    <TableCell className="w-[25%] p-1 text-center border-r border-border whitespace-normal break-words uppercase">
                      Total
                    </TableCell>
                    <TableCell className="w-[17.5%] p-1 text-right border-r border-border whitespace-nowrap">
                      {formatNumber(group.total.qty, "qty")}
                    </TableCell>
                    <TableCell className="w-[17.5%] p-1 text-right border-r border-border whitespace-nowrap">
                      {formatNumber(group.total.rev, "rev")}
                    </TableCell>
                    <TableCell className="w-[15%] p-1 text-right border-r border-border whitespace-nowrap">
                      {group.total.rev && grandTotal.rev > 0
                        ? formatNumber(
                            (group.total.rev / grandTotal.rev) * 100,
                            "percent",
                          )
                        : formatNumber(group.total.perOfRev, "percent")}
                    </TableCell>
                    <TableCell className="w-[10%] p-1 text-center whitespace-nowrap">
                      {formatNumber(group.total.ARV, "arv")}
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            ))}
          </TableBody>

          {/* Sticky Footer */}
          <TableFooter className="bg-primary text-primary-foreground sticky bottom-0 z-10">
            <TableRow className="font-bold">
              <TableCell
                colSpan={2}
                className="w-[45%] p-1 border-r border-border whitespace-normal break-words"
              >
                TOTAL
              </TableCell>
              <TableCell className="w-[17.5%] p-1 text-right border-r border-border whitespace-nowrap">
                {formatNumber(grandTotal.qty, "qty")}
              </TableCell>
              <TableCell className="w-[17.5%] p-1 text-right border-r border-border whitespace-nowrap">
                {formatNumber(grandTotal.rev, "rev")}
              </TableCell>
              <TableCell className="w-[15%] p-1 text-right border-r border-border whitespace-nowrap">
                100.0%
              </TableCell>
              <TableCell className="w-[10%] p-1 text-center whitespace-nowrap">
                {formatNumber(grandTotal.ARV, "arv")}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default TopColors;
