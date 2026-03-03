"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

// All section IDs across every page — hook ignores IDs not in the DOM
const ALL_SECTION_IDS = [
  // Home
  "summary",
  "contact",
  // Experience
  "leviathan-ux",
  "voltio",
  "healthpath",
  "automation-squared",
  "catalyst-eu",
  "earlier-roles",
  // Skills
  "design-practice",
  "domain-knowledge",
  "tools",
  // Education
  "qualifications",
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  sub?: boolean;
  sectionId: string;
  childSectionIds?: string[];
  activeSection: string | null;
  pathname: string;
}

function NavItem({
  href,
  children,
  sub,
  sectionId,
  childSectionIds = [],
  activeSection,
  pathname,
}: NavItemProps) {
  const [path] = href.split("#");
  const isOnPath = path === "/" ? pathname === "/" : pathname === path;

  let isActive = false;
  let isBoldOnly = false;

  if (isOnPath && activeSection) {
    if (activeSection === sectionId) {
      // Sub-items get bold text only; top-level items get full highlight
      if (sub) {
        isBoldOnly = true;
      } else {
        isActive = true;
      }
    } else if (childSectionIds.includes(activeSection)) {
      // Keep parent highlighted when a child section is active
      isActive = true;
    }
  }

  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center h-9 px-3 text-sm rounded-sm border-l-2 border-transparent transition-colors",
        sub && "pl-7 h-[30px] text-[13px]",
        isActive
          ? "bg-accent text-foreground font-medium border-l-foreground"
          : isBoldOnly
          ? "text-foreground font-semibold"
          : sub
          ? "text-muted-foreground hover:bg-accent hover:text-foreground"
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
  const pathname = usePathname();
  const activeSection = useActiveSection(ALL_SECTION_IDS);
  const nav = { activeSection, pathname };

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
        onClick={(e) => {
          if ((e.target as Element).closest("a")) onClose();
        }}
        className={cn(
          "fixed top-14 left-0 w-[240px] h-[calc(100vh-3.5rem)] z-40",
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
            <NavItem href="/#summary" sectionId="summary" {...nav}>Summary</NavItem>
            <NavItem href="/#contact" sectionId="contact" {...nav}>Contact</NavItem>
          </div>

          {/* Experience */}
          <div className="mb-5">
            <GroupLabel>Experience</GroupLabel>
            <NavItem
              href="/experience"
              sectionId="leviathan-ux"
              childSectionIds={["voltio", "healthpath"]}
              {...nav}
            >
              Leviathan UX
            </NavItem>
            <NavItem href="/experience#voltio" sectionId="voltio" sub {...nav}>
              ↳ Volt.io
            </NavItem>
            <NavItem href="/experience#healthpath" sectionId="healthpath" sub {...nav}>
              ↳ Healthpath
            </NavItem>
            <NavItem href="/experience#automation-squared" sectionId="automation-squared" {...nav}>
              Automation Squared
            </NavItem>
            <NavItem href="/experience#catalyst-eu" sectionId="catalyst-eu" {...nav}>
              Catalyst EU
            </NavItem>
            <NavItem href="/experience#earlier-roles" sectionId="earlier-roles" {...nav}>
              Earlier Roles
            </NavItem>
          </div>

          {/* Skills */}
          <div className="mb-5">
            <GroupLabel>Skills</GroupLabel>
            <NavItem href="/skills#design-practice" sectionId="design-practice" {...nav}>
              Design Practice
            </NavItem>
            <NavItem href="/skills#domain-knowledge" sectionId="domain-knowledge" {...nav}>
              Domain Knowledge
            </NavItem>
            <NavItem href="/skills#tools" sectionId="tools" {...nav}>
              Tools
            </NavItem>
          </div>

          {/* Education */}
          <div className="mb-5">
            <GroupLabel>Education</GroupLabel>
            <NavItem href="/education#qualifications" sectionId="qualifications" {...nav}>
              Qualifications
            </NavItem>
          </div>

        </div>
      </nav>
    </>
  );
}
