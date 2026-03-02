"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CommandSearch } from "./command-search";
import { CV_PLAIN_TEXT, CV_MARKDOWN } from "@/lib/cv-data";

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

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

  function triggerDownload(content: string, mime: string, filename: string) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadTxt() {
    triggerDownload(CV_PLAIN_TEXT, "text/plain;charset=utf-8", "hayden-carnegie-cv.txt");
  }
  function downloadMd() {
    triggerDownload(CV_MARKDOWN, "text/markdown;charset=utf-8", "hayden-carnegie-cv.md");
  }
  function downloadPdf() {
    window.print();
  }

  return (
    <>
      <header className="no-print sticky top-0 h-14 z-50 bg-background/95 backdrop-blur border-b border-border flex items-center px-4 gap-3 relative">
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

        {/* Search trigger — mobile only, fills available space */}
        <button
          onClick={() => setCmdOpen(true)}
          className="lg:hidden flex-1 flex items-center gap-2 h-8 px-3 rounded-sm border border-border bg-background text-muted-foreground text-sm hover:border-ring transition-colors text-left"
          aria-label="Open search"
        >
          <span className="flex-1">Search...</span>
          <kbd className="hidden sm:flex items-center gap-0.5 text-[11px] font-mono bg-muted px-1.5 py-0.5 rounded-sm border border-border">
            ⌘K
          </kbd>
        </button>

        {/* Search trigger — desktop only, absolutely positioned to mirror content column */}
        <div className="hidden lg:flex absolute inset-0 items-center pl-[240px] pointer-events-none">
          <div className="w-full max-w-[860px] mx-auto px-12">
            <button
              onClick={() => setCmdOpen(true)}
              className="pointer-events-auto w-full flex items-center gap-2 h-8 px-3 rounded-sm border border-border bg-background text-muted-foreground text-sm hover:border-ring transition-colors text-left"
              aria-label="Open search"
            >
              <span className="flex-1">Search...</span>
              <kbd className="flex items-center gap-0.5 text-[11px] font-mono bg-muted px-1.5 py-0.5 rounded-sm border border-border">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-auto flex items-center justify-center w-8 h-8 rounded-sm hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {mounted && (theme === "dark"
            ? <Sun className="w-4 h-4 text-muted-foreground" />
            : <Moon className="w-4 h-4 text-muted-foreground" />)}
        </button>

        {/* Download dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-sm hover:bg-accent transition-colors"
              aria-label="Download CV"
            >
              <Download className="w-4 h-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={downloadTxt}>Plain Text (.txt)</DropdownMenuItem>
            <DropdownMenuItem onClick={downloadMd}>Markdown (.md)</DropdownMenuItem>
            <DropdownMenuItem onClick={downloadPdf}>PDF (print)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Contact */}
        <Button variant="outline" size="sm" asChild>
          <a href="mailto:hayden.a.carnegie@gmail.com">Contact</a>
        </Button>
      </header>

      <CommandSearch open={cmdOpen} onOpenChange={setCmdOpen} />
    </>
  );
}
