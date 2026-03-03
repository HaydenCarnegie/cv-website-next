import type { Metadata } from "next";
import { ExperienceCards } from "@/components/experience-cards";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Experience — Hayden Carnegie · Senior Product Designer",
  description:
    "10+ years of experience spanning fintech, healthtech, and regulated financial products — Leviathan UX, Automation Squared, Catalyst EU, Barkweb.",
};

export default function ExperiencePage() {
  return (
    <main className="max-w-[860px] mx-auto px-12 py-16">
      <PageHeader />

      <section aria-labelledby="experience-heading">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Experience
        </h2>
        <ExperienceCards />
      </section>
    </main>
  );
}
