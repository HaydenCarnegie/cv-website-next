import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Velocity.XYZ Platform — Leviathan UX · Hayden Carnegie",
  description:
    "Greenfield platform design for Velocity.XYZ — a stablecoin on/off ramp fintech. Sole designer across 7+ flows, Travel Rule compliance, and a bespoke design system, delivered pre-launch in 9 months.",
};

export default function VelocityXYZCaseStudyPage() {
  return (
    <main className="max-w-[860px] mx-auto px-12 py-16">

      {/* Back */}
      <div className="mb-10">
        <Button variant="ghost" size="sm" asChild className="-ml-2 text-muted-foreground">
          <Link href="/case-studies">← Case Studies</Link>
        </Button>
      </div>

      {/* Header */}
      <section className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge>Case Study</Badge>
          <span className="text-[11px] text-muted-foreground uppercase tracking-[0.06em]">Velocity.XYZ · Fintech · Jun 2025–Feb 2026</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight mb-4 text-foreground">
          Velocity.XYZ — Platform Design
        </h1>

        {/* TL;DR */}
        <p className="text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] border-l-2 border-border pl-4">
          Sole designer on a greenfield fintech platform. Designed the full Velocity.XYZ stablecoin on/off ramp from zero across 7+ core flows — wallet management, beneficiary journeys, transaction history, and Travel Rule compliance — alongside a bespoke ShadCN-based design system. Delivered pre-launch in 9 months ahead of Series A.
        </p>
      </section>

      {/* Meta row */}
      <section className="mb-12">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Role &amp; Scope
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1">Client</p>
            <p className="text-sm text-[color:var(--cv-body)]">Velocity.XYZ</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1">Sector</p>
            <p className="text-sm text-[color:var(--cv-body)]">Fintech — stablecoin on/off ramp</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1">Duration</p>
            <p className="text-sm text-[color:var(--cv-body)]">9 months</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1">Team</p>
            <p className="text-sm text-[color:var(--cv-body)]">1 designer · 1 front-end dev · 3 back-end devs · 2 PMs · 1 brand designer</p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="mb-12">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          The Problem
        </h2>
        <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch]">
          <p>
            Velocity.XYZ is building infrastructure to automate the stablecoin on/off ramp — handling the conversion layer invisibly so users transact in the asset they want without managing the mechanics underneath.
          </p>
          <p>
            When I joined, none of this existed visually or structurally. No brand, no design system, no product screens. The company was pre-launch and targeting Series A, which meant the commercial pressure wasn&apos;t abstract: the platform needed to look credible enough to support fundraising conversations while it was still being built.
          </p>
          <p>
            I was brought in as sole designer to build it from the ground up.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="mb-12">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Process
        </h2>
        <div className="space-y-12">

          {/* Discovery */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Discovery &amp; Research</h3>
            <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
              <p>
                With no existing product to audit, research was about establishing foundations rather than diagnosing problems. I ran a competitor analysis across stablecoin and crypto on/off ramp platforms, paired with a SWOT analysis to map Velocity&apos;s positioning. Pattern research covered established conventions in fintech and crypto UX — transaction flows, wallet management, compliance-heavy journeys — giving me a reference set before a single screen was drawn.
              </p>
              <p>
                Stablecoin infrastructure, fiat/crypto rails, and Travel Rule compliance aren&apos;t standard UX territory. Getting into the detail early with the founders and PMs wasn&apos;t optional — it was the only way to design flows that were technically honest, not just visually coherent.
              </p>
            </div>
            {/* Image placeholder — export from Figma: competitor analysis or research artefacts */}
            <div className="rounded-lg bg-muted/50 border border-border aspect-[16/9] flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Image — research &amp; discovery</p>
            </div>
          </div>

          {/* Design Direction */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Design Direction</h3>
            <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
              <p>
                With no brand to work from, the direction decision was pragmatic: build in high-fidelity wireframe state using ShadCN as the component foundation. This let engineering move in parallel — real components, real architecture — without brand decisions blocking design progress.
              </p>
              <p>
                The product was built and partially handed off before branding was finalised. Re-theming was a token-level operation, not a redraw, because the ShadCN foundation was treated as a proper design system from day one rather than a placeholder. Additional screens were designed against new requirements as they surfaced post-theming.
              </p>
            </div>
            {/* Image placeholder — export from Figma: wireframe state vs themed state comparison */}
            <div className="rounded-lg bg-muted/50 border border-border aspect-[16/9] flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Image — wireframe to themed comparison</p>
            </div>
          </div>

          {/* Iterative Flow Design */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Iterative Flow Design</h3>
            <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
              <p>
                The core platform covered wallet creation, account management, beneficiary flows, transaction history, and send funds journeys. Each was designed from scratch: structure first, then states and edge cases.
              </p>
              <p>
                Travel Rule was the most demanding flow. The FATF requirement to share originator and beneficiary data on crypto transactions above a threshold varies by jurisdiction — and Velocity needed to handle both fiat and crypto rails, with an integration to third-party Travel Rule software adding an external dependency to an already complex multi-step journey. The design challenge was handling jurisdictional variance without making the flow feel bureaucratic to users who just want to move money.
              </p>
            </div>
            {/* Image placeholder — export from Figma: Travel Rule flow or send funds journey */}
            <div className="rounded-lg bg-muted/50 border border-border aspect-[16/9] flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Image — flow design / Travel Rule</p>
            </div>
          </div>

          {/* Prototyping & Handoff */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Prototyping &amp; Handoff</h3>
            <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
              <p>
                Screens were handed off on a rolling basis rather than as a single delivery, with a standup rhythm keeping design and engineering aligned. Design QA sessions caught visual and interaction drift before it compounded, keeping the cost of corrections low throughout the build.
              </p>
            </div>
            {/* Image placeholder — export from Figma: final hi-fi screens */}
            <div className="rounded-lg bg-muted/50 border border-border aspect-[16/9] flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Image — final screens / handoff</p>
            </div>
          </div>

        </div>
      </section>

      {/* Outcome */}
      <section className="mb-12">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Outcome
        </h2>
        <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-8">
          <p>
            The full platform shipped — wallet creation, account management, beneficiary flows, transaction history, send funds, and Travel Rule compliance across fiat and crypto rails. All of it designed and delivered within a 9-month engagement at 3 days a week.
          </p>
          <p>
            For a pre-launch product targeting Series A, the benchmark was credibility: a platform that looked and felt like a serious fintech product. Internal feedback from founders and PMs was consistently strong, and the design system and component library are in place to support development post-launch.
          </p>
        </div>

        {/* Testimonial placeholder */}
        <div className="rounded-lg border border-dashed border-border p-5 bg-muted/20">
          <p className="text-xs text-muted-foreground italic">Testimonial placeholder — add once received</p>
        </div>
      </section>

      {/* Reflection */}
      <section className="mb-12">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Reflection
        </h2>
        <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch]">
          <p>
            The hardest part of this engagement wasn&apos;t any individual flow — it was sustained context switching. Running Velocity alongside another active project meant constantly reloading domain context, mid-sprint, across two very different product spaces. At 3 days a week over 9 months, there was little margin for the slow, exploratory thinking that flows like Travel Rule genuinely benefit from.
          </p>
          <p>
            Unclear briefs were a recurring friction point. A meaningful amount of time went to clarifying scope before design could start — conversations that, documented earlier, would have freed up real design time. If I were doing this again, I&apos;d push harder at the start to establish a brief process, even on a fast-moving startup engagement where the instinct is to move first and clarify later.
          </p>
          <p>
            What made it worth it was the breadth. Designing an entire fintech platform from zero — architecture, flows, design system, compliance journeys — in a single engagement is rare. No brand, no precedent, no existing product: it forced a level of first-principles thinking that a redesign engagement rarely demands.
          </p>
        </div>
      </section>

      {/* Footer nav */}
      <div className="pt-8 border-t border-border">
        <Button variant="ghost" size="sm" asChild className="-ml-2 text-muted-foreground">
          <Link href="/case-studies">← Case Studies</Link>
        </Button>
      </div>

    </main>
  );
}
