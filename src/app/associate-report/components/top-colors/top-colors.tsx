"use client";

import React from "react";
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
import { ColorProps } from "./types";
import { cn } from "@/lib/utils";

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
      return `${value.toFixed(2)}`;
    case "arv":
      return Math.round(value).toString();
    default:
      return value.toString();
  }
};

const TopColors = ({ colors, grandTotal, className, quartor }: ColorProps) => {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring hover:ring-ring",
        className,
      )}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-border bg-muted/40">
        <span className="text-lg font-semibold text-foreground">
          Color-Group-Wise Sales - {quartor}
        </span>
      </div>

      {/* Sticky Header */}
      <div className="sticky top-0 z-10 border-b border-border">
        <Table className="table-fixed w-full text-xs">
          <TableHeader className="bg-primary">
            <TableRow>
              <TableHead className="w-[20%] p-1 text-left border-r border-border text-primary-foreground font-bold uppercase">
                Color Group
              </TableHead>
              <TableHead className="w-[20%] p-1 text-left border-r border-border text-primary-foreground font-bold uppercase">
                Color
              </TableHead>
              <TableHead className="w-[15%] p-1 text-right border-r border-border text-primary-foreground font-bold uppercase">
                Qty (K)
              </TableHead>
              <TableHead className="w-[15%] p-1 text-right border-r border-border text-primary-foreground font-bold uppercase">
                Rev (Cr)
              </TableHead>
              <TableHead className="w-[15%] p-1 text-right border-r border-border text-primary-foreground font-bold uppercase">
                Rev (%)
              </TableHead>
              <TableHead className="w-[15%] p-1 text-center text-primary-foreground font-bold uppercase">
                ARV
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>

      {/* Scrollable Body */}
      <ScrollArea className="flex-1 overflow-auto">
        <ScrollBar className="w-0 bg-transparent" />
        <Table className="table-fixed w-full text-xs">
          <TableBody>
            {colors.length > 0 ? (
              colors.map((group) => (
                <React.Fragment key={group.colorGroup}>
                  {group.colors.map((c, idx) => (
                    <TableRow
                      key={c.colorName}
                      className="border-b border-border hover:ring hover:ring-ring"
                    >
                      {idx === 0 && (
                        <TableCell
                          rowSpan={group.colors.length + (group.total ? 1 : 0)}
                          className="w-[20%] p-1 font-semibold border-r border-border align-top whitespace-normal break-words"
                        >
                          {group.colorGroup}
                        </TableCell>
                      )}
                      <TableCell className="w-[20%] p-1 border-r border-border whitespace-normal break-words">
                        {c.colorName}
                      </TableCell>
                      <TableCell className="w-[15%] p-1 text-right border-r border-border whitespace-nowrap">
                        {formatNumber(c.currQtr.qty, "qty")}
                      </TableCell>
                      <TableCell className="w-[15%] p-1 text-right border-r border-border whitespace-nowrap">
                        {formatNumber(c.currQtr.rev, "rev")}
                      </TableCell>
                      <TableCell className="w-[15%] p-1 text-right border-r border-border whitespace-nowrap">
                        {formatNumber(c.perOfRev, "percent")}
                      </TableCell>
                      <TableCell className="w-[15%] p-1 text-center whitespace-nowrap">
                        {formatNumber(c.ARV, "arv")}
                      </TableCell>
                    </TableRow>
                  ))}
                  {group.total && (
                    <TableRow className="font-semibold border-b border-border bg-primary/80 text-foreground hover:ring hover:ring-ring">
                      <TableCell className="w-[25%] p-1 text-center border-r border-border whitespace-normal break-words uppercase">
                        Total
                      </TableCell>
                      <TableCell className="w-[15%] p-1 text-right border-r border-border whitespace-nowrap">
                        {formatNumber(group.total.qty, "qty")}
                      </TableCell>
                      <TableCell className="w-[15%] p-1 text-right border-r border-border whitespace-nowrap">
                        {formatNumber(group.total.rev, "rev")}
                      </TableCell>
                      <TableCell className="w-[15%] p-1 text-right border-r border-border whitespace-nowrap">
                        {formatNumber(group.total.perOfRev, "percent")}
                      </TableCell>
                      <TableCell className="w-[15%] p-1 text-center whitespace-nowrap">
                        {formatNumber(group.total.ARV, "arv")}
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="p-1 text-center text-xs">
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
          <TableFooter className="text-primary-foreground bg-primary h-8">
            <TableRow className="font-bold">
              <TableCell className="w-[40%] p-1 border-r border-border">
                TOTAL
              </TableCell>
              <TableCell className="w-[15%] p-1 text-right border-r border-border">
                {formatNumber(grandTotal.qty, "qty")}
              </TableCell>
              <TableCell className="w-[15%] p-1 text-right border-r border-border">
                {formatNumber(grandTotal.rev, "rev")}
              </TableCell>
              <TableCell className="w-[15%] p-1 text-right border-r border-border">
                {formatNumber(grandTotal.perOfRev, "percent")}
              </TableCell>
              <TableCell className="w-[15%] p-1 text-center">
                {formatNumber(grandTotal.ARV, "arv")}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default TopColors;
