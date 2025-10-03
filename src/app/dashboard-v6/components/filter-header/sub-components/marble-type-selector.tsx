"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Building2 } from "lucide-react";
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
            "h-6 px-2 text-xs rounded-sm border-border bg-background hover:bg-accent hover:text-accent-foreground",
            selectedMarble &&
              "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20",
          )}
        >
          {/* Mobile: Show icon only */}
          <div className="flex items-center sm:hidden">
            <Building2 className="h-3 w-3" />
            {selectedMarble && (
              <div className="ml-1 w-1.5 h-1.5 bg-primary rounded-full" />
            )}
          </div>

          {/* Desktop: Show text */}
          <div className="hidden sm:flex items-center">
            <Building2 className="h-3 w-3 mr-1" />
            <span className="truncate max-w-16">
              {selectedMarble || "Division"}
            </span>
          </div>

          <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-40 rounded-md border border-border bg-popover"
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
          All Types
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
