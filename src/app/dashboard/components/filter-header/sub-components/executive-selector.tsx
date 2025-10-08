"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Executive } from "../types";

interface ExecutiveSelectorProps {
  executives: Executive[];
  selectedExecutive: Executive | null;
  onSelectExecutiveAction: (executive: Executive | null) => void;
}

export function ExecutiveSelector({
  executives,
  selectedExecutive,
  onSelectExecutiveAction,
}: ExecutiveSelectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "h-7 px-3 text-xs rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground flex items-center justify-between min-w-[160px] max-sm:max-w-[400px]",
            selectedExecutive &&
              "border-primary/30 text-primary hover:bg-primary/10",
          )}
        >
          <span className="text-sm font-semibold truncate max-sm:max-w-[160px] w-full">
            {selectedExecutive ? selectedExecutive.name : "Select Executive"}
          </span>
          <ChevronDown
            className={cn(
              "ml-2 h-3 w-3 text-muted-foreground transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-72 p-0 rounded-md border border-border bg-popover text-popover-foreground shadow-lg">
        <Command className="bg-popover text-popover-foreground">
          <CommandInput
            placeholder="Search executives..."
            className="h-8 text-xs border-0 focus:ring-0 bg-popover text-popover-foreground placeholder:text-muted-foreground"
          />
          <CommandList>
            <CommandEmpty className="text-xs py-4 text-center text-muted-foreground">
              No executive found.
            </CommandEmpty>

            <CommandGroup className="p-1">
              {/* All Executives Option */}
              <CommandItem
                onSelect={() => {
                  onSelectExecutiveAction(null);
                  setOpen(false);
                }}
                className="p-2 rounded-sm hover:bg-accent text-popover-foreground transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3 text-muted-foreground" />
                    <div>
                      <div className="text-xs font-medium text-foreground">
                        All Executives
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Show all
                      </div>
                    </div>
                  </div>
                  <Check
                    className={cn(
                      "h-3 w-3",
                      selectedExecutive === null ? "opacity-100" : "opacity-0",
                    )}
                  />
                </div>
              </CommandItem>

              {/* Executive List */}
              {executives.map((executive) => (
                <CommandItem
                  key={executive.id}
                  onSelect={() => {
                    onSelectExecutiveAction(executive);
                    setOpen(false);
                  }}
                  className="p-2 rounded-sm hover:bg-accent text-popover-foreground transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-foreground">
                        {executive.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {executive.designation}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {executive.email}
                      </span>
                    </div>
                    <Check
                      className={cn(
                        "h-3 w-3",
                        selectedExecutive?.id === executive.id
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
