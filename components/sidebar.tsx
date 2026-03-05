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
  "velocity-xyz",
  "voltio",
  "ifx-payments",
  "healthpath",
  "automation-squared",
  "catalyst-eu",
  "earlier-roles",
  // Case Studies
  "case-studies",
  "volt-io-fuzebox",
  "volt-io-checkout-3",
  "velocity-xyz-platform",
  // Skills
  "design-practice",
  "domain-knowledge",
  "tools",
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
  scrollspyMounted: boolean;
  pathname: string;
}

function NavItem({
  href,
  children,
  sub,
  sectionId,
  childSectionIds = [],
  activeSection,
  scrollspyMounted,
  pathname,
}: NavItemProps) {
  const [path] = href.split("#");
  const isOnPath = path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(path + "/");

  let isActive = false;
  let isBoldOnly = false;

  if (isOnPath) {
    if (activeSection) {
      if (activeSection === sectionId) {
        if (sub) {
          isBoldOnly = true;
        } else {
          isActive = true;
        }
      } else if (childSectionIds.includes(activeSection)) {
        isActive = true;
      }
    } else if (scrollspyMounted) {
      // Mounted but no sections found in DOM — detail page, activate by path alone
      isActive = true;
    }
    // If not yet mounted, show nothing to avoid flash
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

function GroupLabel({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-[11px] font-medium uppercase tracking-widest text-muted-foreground px-3 py-1 mb-1 hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { activeId: activeSection, mounted: scrollspyMounted } = useActiveSection(ALL_SECTION_IDS);
  const nav = { activeSection, scrollspyMounted, pathname };

  const isHome = pathname === "/";
  const isExperience = pathname === "/experience" || pathname.startsWith("/experience/");
  const isCaseStudies = pathname === "/case-studies" || pathname.startsWith("/case-studies/");
  const isSkills = pathname === "/skills" || pathname.startsWith("/skills/");

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
            <GroupLabel href="/">Overview</GroupLabel>
            {isHome && (
              <>
                <NavItem href="/#summary" sectionId="summary" {...nav}>Summary</NavItem>
                <NavItem href="/#contact" sectionId="contact" {...nav}>Contact</NavItem>
              </>
            )}
          </div>

          {/* Experience */}
          <div className="mb-5">
            <GroupLabel href="/experience">Experience</GroupLabel>
            {isExperience && (
              <>
                <NavItem
                  href="/experience"
                  sectionId="leviathan-ux"
                  childSectionIds={["velocity-xyz", "voltio", "ifx-payments", "healthpath"]}
                  {...nav}
                >
                  Leviathan UX
                </NavItem>
                <NavItem href="/experience#velocity-xyz" sectionId="velocity-xyz" sub {...nav}>
                  ↳ Velocity.xyz
                </NavItem>
                <NavItem href="/experience#voltio" sectionId="voltio" sub {...nav}>
                  ↳ Volt.io
                </NavItem>
                <NavItem href="/experience#ifx-payments" sectionId="ifx-payments" sub {...nav}>
                  ↳ IFX Payments
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
              </>
            )}
          </div>

          {/* Case Studies */}
          <div className="mb-5">
            <GroupLabel href="/case-studies">Case Studies</GroupLabel>
            {isCaseStudies && (
              <>
                <NavItem href="/case-studies/velocity-xyz-platform" sectionId="velocity-xyz-platform" {...nav}>
                  Velocity Platform
                </NavItem>
                <NavItem href="/case-studies/volt-io-checkout-3" sectionId="volt-io-checkout-3" {...nav}>
                  Volt Checkout
                </NavItem>
                <NavItem href="/case-studies/volt-io-fuzebox" sectionId="volt-io-fuzebox" {...nav}>
                  Volt Fuzebox
                </NavItem>
              </>
            )}
          </div>

          {/* Skills */}
          <div className="mb-5">
            <GroupLabel href="/skills">Skills</GroupLabel>
            {isSkills && (
              <>
                <NavItem href="/skills#design-practice" sectionId="design-practice" {...nav}>
                  Design Practice
                </NavItem>
                <NavItem href="/skills#domain-knowledge" sectionId="domain-knowledge" {...nav}>
                  Domain Knowledge
                </NavItem>
                <NavItem href="/skills#tools" sectionId="tools" {...nav}>
                  Tools
                </NavItem>
              </>
            )}
          </div>

        </div>
      </nav>
    </>
  );
}
