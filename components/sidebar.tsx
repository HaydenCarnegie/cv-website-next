"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { CV_PLAIN_TEXT } from "@/lib/cv-data";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

function NavItem({
  href,
  children,
  sub,
}: {
  href: string;
  children: React.ReactNode;
  sub?: boolean;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href.split("#")[0]) &&
        href.split("#")[0] !== "/";

  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center h-9 px-3 text-sm rounded-sm border-l-2 border-transparent transition-colors",
        sub ? "pl-7 h-[30px] text-[13px] text-muted-foreground" : "",
        isActive
          ? "bg-accent text-foreground font-medium border-l-foreground"
          : "text-[color:var(--cv-body)] hover:bg-accent hover:text-foreground"
      )}
    >
      {children}
    </Link>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[11px] font-medium uppercase tracking-widest text-muted-foreground px-3 py-1 mb-1">
      {children}
    </span>
  );
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const { theme, setTheme } = useTheme();

  function downloadTxt() {
    const blob = new Blob([CV_PLAIN_TEXT], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hayden-carnegie-cv.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <nav
        aria-label="CV navigation"
        className={cn(
          "fixed top-14 left-0 w-[240px] h-[calc(100vh-3.5rem)] z-40",
          "bg-[var(--sidebar)] border-r border-border",
          "flex flex-col overflow-y-auto overflow-x-hidden",
          "transition-transform duration-250 ease-in-out",
          "lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex-1 px-2 py-4 flex flex-col">

          {/* Overview */}
          <div className="mb-5">
            <GroupLabel>Overview</GroupLabel>
            <NavItem href="/#summary">Summary</NavItem>
            <NavItem href="/#contact">Contact</NavItem>
          </div>

          {/* Experience */}
          <div className="mb-5">
            <GroupLabel>Experience</GroupLabel>
            <NavItem href="/experience">Leviathan UX</NavItem>
            <NavItem href="/experience#voltio" sub>↳ Volt.io</NavItem>
            <NavItem href="/experience#healthpath" sub>↳ Healthpath</NavItem>
            <NavItem href="/experience#automation-squared">Automation Squared</NavItem>
            <NavItem href="/experience#catalyst-eu">Catalyst EU</NavItem>
            <NavItem href="/experience#barkweb">Barkweb</NavItem>
            <NavItem href="/experience#earlier-roles">Earlier Roles</NavItem>
          </div>

          {/* Skills */}
          <div className="mb-5">
            <GroupLabel>Skills</GroupLabel>
            <NavItem href="/skills#design-practice">Design Practice</NavItem>
            <NavItem href="/skills#domain-knowledge">Domain Knowledge</NavItem>
            <NavItem href="/skills#tools">Tools</NavItem>
          </div>

          {/* Education */}
          <div className="mb-5">
            <GroupLabel>Education</GroupLabel>
            <NavItem href="/education#qualifications">Qualifications</NavItem>
          </div>

        </div>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-border flex flex-col gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2 h-8 px-2 text-[13px] text-muted-foreground border border-border rounded-sm hover:bg-accent hover:text-[color:var(--cv-body)] transition-colors w-full text-left"
            aria-label="Toggle dark mode"
          >
            <span>{theme === "dark" ? "☾" : "☀"}</span>
            <span>{theme === "dark" ? "Dark mode" : "Light mode"}</span>
          </button>
          <button
            onClick={downloadTxt}
            className="flex items-center gap-2 h-8 px-2 text-[13px] text-muted-foreground border border-border rounded-sm hover:bg-accent hover:text-[color:var(--cv-body)] transition-colors w-full text-left"
            aria-label="Download plain text CV"
          >
            <span>↓</span>
            <span>Plain Text</span>
          </button>
        </div>
      </nav>
    </>
  );
}
