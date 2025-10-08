"use client";

import * as React from "react";
import { format, startOfYear, addMonths } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function FinancialYearCalendar() {
  const [date, setDate] = React.useState<Date>();

  const now = new Date();
  const fyStart = addMonths(startOfYear(now), 3); // April 1

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full h-7 px-3 text-xs rounded-md border-border bg-background hover:bg-accent hover:text-accent-foreground flex items-center justify-between",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Select date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={{
            before: fyStart,
            after: now,
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
