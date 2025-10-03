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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "h-6 px-2 text-xs rounded-sm border border-border bg-background hover:bg-accent hover:text-accent-foreground flex items-center",
            selectedExecutive &&
              "border-secondary text-secondary-foreground hover:bg-accent/70",
          )}
        >
          {/* Mobile Avatar */}
          <div className="flex items-center sm:hidden">
            {selectedExecutive ? (
              <Avatar className="h-4 w-4">
                <AvatarImage src={selectedExecutive.avatar} />
                <AvatarFallback className="text-xs bg-secondary text-foreground">
                  {selectedExecutive.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            ) : (
              <User className="h-3 w-3 text-muted-foreground" />
            )}
          </div>

          {/* Desktop Executive Name */}
          <div className="hidden sm:flex items-center gap-1 truncate">
            {selectedExecutive ? (
              <div className="flex items-center gap-1 truncate">
                <Avatar className="h-4 w-4">
                  <AvatarImage src={selectedExecutive.avatar} />
                  <AvatarFallback className="text-xs bg-secondary text-foreground">
                    {selectedExecutive.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="truncate text-xs font-medium text-foreground max-w-[80px]">
                  {selectedExecutive.name}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1 truncate">
                <User className="h-3 w-3 text-muted-foreground" />
                <span className="truncate text-xs text-muted-foreground max-w-[60px]">
                  Executives
                </span>
              </div>
            )}
          </div>

          <ChevronDown
            className={cn(
              "ml-1 h-3 w-3 text-muted-foreground transition-transform duration-200",
              open ? "rotate-180" : "",
            )}
          />
        </Button>
      </PopoverTrigger>

      {/* Popover Panel */}
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
              <CommandItem
                onSelect={() => {
                  onSelectExecutiveAction(null);
                  setOpen(false);
                }}
                className="p-2 rounded-sm hover:bg-accent text-popover-foreground transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 w-full">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-muted">
                    <User className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-foreground truncate">
                      All Executives
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      Show all
                    </div>
                  </div>
                  <Check
                    className={cn(
                      "ml-auto h-3 w-3",
                      selectedExecutive === null ? "opacity-100" : "opacity-0",
                    )}
                  />
                </div>
              </CommandItem>

              {executives.map((executive) => (
                <CommandItem
                  key={executive.id}
                  onSelect={() => {
                    onSelectExecutiveAction(executive);
                    setOpen(false);
                  }}
                  className="p-2 rounded-sm hover:bg-accent text-popover-foreground transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 w-full">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={executive.avatar} />
                      <AvatarFallback className="text-xs bg-muted text-foreground">
                        {executive.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-foreground truncate">
                        {executive.name}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {executive.designation}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {executive.email}
                      </div>
                    </div>
                    <Check
                      className={cn(
                        "ml-auto h-3 w-3",
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
