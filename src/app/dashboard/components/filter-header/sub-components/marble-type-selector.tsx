"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { MarbleTypeSelectorProps } from "../types";

export function MarbleTypeSelector({
  marbleTypes,
  selectedMarble,
  onSelectMarbleAction,
}: MarbleTypeSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "h-7 px-3 text-xs rounded-md border-border bg-background hover:bg-accent hover:text-accent-foreground flex items-center justify-between",
            selectedMarble &&
              "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20",
          )}
        >
          <span className="truncate">
            {selectedMarble || "Select Division"}
          </span>
          <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44 rounded-md border border-border bg-popover"
      >
        {/* All Types Option */}
        <DropdownMenuItem
          onClick={() => onSelectMarbleAction("")}
          className={cn(
            "text-xs rounded-sm py-1.5 px-2 font-medium cursor-pointer",
            !selectedMarble && "bg-accent text-accent-foreground",
          )}
        >
          <Check
            className={cn(
              "mr-2 h-3 w-3",
              !selectedMarble ? "opacity-100" : "opacity-0",
            )}
          />
          All Division
        </DropdownMenuItem>

        {/* Marble Options */}
        {marbleTypes.map((marble) => (
          <DropdownMenuItem
            key={marble}
            onClick={() => onSelectMarbleAction(marble)}
            className={cn(
              "text-xs rounded-sm py-1.5 px-2 font-medium cursor-pointer",
              selectedMarble === marble && "bg-accent text-accent-foreground",
            )}
          >
            <Check
              className={cn(
                "mr-2 h-3 w-3",
                selectedMarble === marble ? "opacity-100" : "opacity-0",
              )}
            />
            {marble}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
