"use client";

import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  FileText,
  Briefcase,
  Wrench,
  GraduationCap,
  Download,
  Mail,
  ExternalLink,
} from "lucide-react";
import { CV_PLAIN_TEXT, CV_MARKDOWN } from "@/lib/cv-data";

interface CommandSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandSearch({ open, onOpenChange }: CommandSearchProps) {
  const router = useRouter();

  function navigate(path: string) {
    onOpenChange(false);
    router.push(path);
  }

  function action(fn: () => void) {
    onOpenChange(false);
    fn();
  }

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

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search pages, sections, and actions..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Overview">
          <CommandItem onSelect={() => navigate("/#summary")}>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
              Summary
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/#contact")}>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
              Contact
            </span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => navigate("/")}>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
              Home
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/experience")}>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
              Experience
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/skills")}>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
              Skills
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/education")}>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
              Education
            </span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Experience">
          <CommandItem onSelect={() => navigate("/experience#leviathan-ux")}>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-muted-foreground shrink-0" />
              Leviathan UX
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/experience#voltio")}>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-muted-foreground shrink-0" />
              Volt.io
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/experience#healthpath")}>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-muted-foreground shrink-0" />
              Healthpath
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/experience#earlier-roles")}>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-muted-foreground shrink-0" />
              Earlier Roles
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/experience#automation-squared")}>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-muted-foreground shrink-0" />
              Automation Squared
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/experience#catalyst-eu")}>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-muted-foreground shrink-0" />
              Catalyst EU
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/experience#earlier-roles")}>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-muted-foreground shrink-0" />
              Barkweb
            </span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Skills">
          <CommandItem onSelect={() => navigate("/skills#design-practice")}>
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-muted-foreground shrink-0" />
              Design Practice
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/skills#domain-knowledge")}>
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-muted-foreground shrink-0" />
              Domain Knowledge
            </span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/skills#tools")}>
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-muted-foreground shrink-0" />
              Tools
            </span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Education">
          <CommandItem onSelect={() => navigate("/education#qualifications")}>
            <span className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-muted-foreground shrink-0" />
              Qualifications
            </span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() =>
              action(() =>
                triggerDownload(CV_PLAIN_TEXT, "text/plain;charset=utf-8", "hayden-carnegie-cv.txt")
              )
            }
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-muted-foreground shrink-0" />
              Download CV (.txt)
            </span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              action(() =>
                triggerDownload(CV_MARKDOWN, "text/markdown;charset=utf-8", "hayden-carnegie-cv.md")
              )
            }
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-muted-foreground shrink-0" />
              Download CV (.md)
            </span>
          </CommandItem>
          <CommandItem onSelect={() => action(() => window.print())}>
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-muted-foreground shrink-0" />
              Print / Save PDF
            </span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              action(() => {
                window.location.href = "mailto:hayden.a.carnegie@gmail.com";
              })
            }
          >
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
              Email
            </span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              action(() => {
                window.open("https://linkedin.com/in/haydencarnegie", "_blank");
              })
            }
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" />
              LinkedIn
            </span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
