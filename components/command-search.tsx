"use client";

import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

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

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search pages and sections..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => navigate("/")}>Home</CommandItem>
          <CommandItem onSelect={() => navigate("/experience")}>
            Experience
          </CommandItem>
          <CommandItem onSelect={() => navigate("/skills")}>Skills</CommandItem>
          <CommandItem onSelect={() => navigate("/education")}>
            Education
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Experience">
          <CommandItem
            onSelect={() => navigate("/experience#leviathan-ux")}
          >
            Leviathan UX
          </CommandItem>
          <CommandItem onSelect={() => navigate("/experience#voltio")}>
            Volt.io
          </CommandItem>
          <CommandItem
            onSelect={() => navigate("/experience#healthpath")}
          >
            Healthpath
          </CommandItem>
          <CommandItem
            onSelect={() => navigate("/experience#automation-squared")}
          >
            Automation Squared
          </CommandItem>
          <CommandItem
            onSelect={() => navigate("/experience#catalyst-eu")}
          >
            Catalyst EU
          </CommandItem>
          <CommandItem onSelect={() => navigate("/experience#barkweb")}>
            Barkweb
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Skills">
          <CommandItem onSelect={() => navigate("/skills#design-practice")}>
            Design Practice
          </CommandItem>
          <CommandItem
            onSelect={() => navigate("/skills#domain-knowledge")}
          >
            Domain Knowledge
          </CommandItem>
          <CommandItem onSelect={() => navigate("/skills#tools")}>
            Tools
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
