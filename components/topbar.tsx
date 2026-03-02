"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommandSearch } from "./command-search";

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <header className="no-print fixed top-0 left-0 right-0 h-14 z-50 bg-background/95 backdrop-blur border-b border-border flex items-center px-4 gap-3">
        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-8 h-8 rounded-sm hover:bg-accent transition-colors"
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <Menu className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-[15px] text-foreground tracking-tight shrink-0"
        >
          HC
        </Link>

        {/* Left spacer — offset by sidebar width on lg so search centres over the content column */}
        <div className="flex-1 lg:pl-[240px]" />

        {/* Search trigger */}
        <button
          onClick={() => setCmdOpen(true)}
          className="flex items-center gap-2 h-8 px-3 rounded-sm border border-border bg-background text-muted-foreground text-sm hover:border-ring transition-colors w-full max-w-64 text-left"
          aria-label="Open search"
        >
          <span className="flex-1">Search...</span>
          <kbd className="hidden sm:flex items-center gap-0.5 text-[11px] font-mono bg-muted px-1.5 py-0.5 rounded-sm border border-border">
            ⌘K
          </kbd>
        </button>

        {/* Right spacer */}
        <div className="flex-1" />

        {/* Contact */}
        <Button variant="outline" size="sm" asChild>
          <a href="mailto:hayden.a.carnegie@gmail.com">Contact</a>
        </Button>
      </header>

      <CommandSearch open={cmdOpen} onOpenChange={setCmdOpen} />
    </>
  );
}
