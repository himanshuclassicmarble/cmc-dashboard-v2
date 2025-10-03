"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./modetoggle";
import { Menu } from "lucide-react";

const Header: FC = () => {
  return (
    <header className="w-full border-b border-border bg-background px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-none">
      {/* Logo / Brand */}
      <Link
        href="/"
        className="text-xl font-bold tracking-tight text-foreground"
      >
        CMC
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-base font-medium text-muted-foreground">
        <Link
          href="/dashboard"
          className="hover:text-foreground transition-colors duration-200 ease-in-out"
          aria-label="Navigate to Dashboard"
        >
          Dashboard
        </Link>
        <Link
          href="/reports"
          className="hover:text-foreground transition-colors duration-200 ease-in-out"
          aria-label="Navigate to Reports"
        >
          Reports
        </Link>
        <Link
          href="/settings"
          className="hover:text-foreground transition-colors duration-200 ease-in-out"
          aria-label="Navigate to Settings"
        >
          Settings
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open mobile menu">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/dashboard" className="w-full">
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/reports" className="w-full">
                Reports
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings" className="w-full">
                Settings
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          className="hover:bg-accent transition-colors duration-200"
        >
          Sign in
        </Button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9 cursor-pointer border border-border">
              <AvatarImage src="/avatar.png" alt="User profile" />
              <AvatarFallback className="bg-muted text-sm">HV</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 p-2">
            <DropdownMenuItem asChild className="hover:bg-accent rounded-md">
              <Link href="/profile" className="w-full">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="hover:bg-accent rounded-md">
              <Link href="/settings" className="w-full">
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-accent rounded-md">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
