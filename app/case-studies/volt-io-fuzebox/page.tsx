import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Fuzebox Merchant Portal Redesign — Leviathan UX · Hayden Carnegie",
  description:
    "Full ground-up redesign of Fuzebox, Volt.io's merchant portal, as sole designer across 20+ product flows — transforming a dev-built MVP into a cohesive, research-informed Open Banking platform.",
};

export default function FuzeboxCaseStudyPage() {
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
          <span className="text-[11px] text-muted-foreground uppercase tracking-[0.06em]">Volt.io · Open Banking · 2022–2023</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          Fuzebox Merchant Portal Redesign
        </h1>

        {/* TL;DR */}
        <p className="text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] border-l-2 border-border pl-4">
          Led a full ground-up redesign of Fuzebox — Volt.io's merchant portal — as sole designer across 20+ product flows, transforming a dev-built MVP into a cohesive, research-informed platform used by Volt's live merchant network.
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
            <p className="text-sm text-[color:var(--cv-body)]">Volt.io</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1">Sector</p>
            <p className="text-sm text-[color:var(--cv-body)]">Open Banking / Fintech</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1">Duration</p>
            <p className="text-sm text-[color:var(--cv-body)]">~12 months</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1">Team</p>
            <p className="text-sm text-[color:var(--cv-body)]">Sole designer</p>
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
            Volt.io operates at the infrastructure layer of Open Banking payments, enabling merchants to accept real-time bank-to-bank payments across Europe. Fuzebox is the merchant-facing control plane — the portal through which Volt's clients manage transactions, accounts, payouts, onboarding, and more.
          </p>
          <p>
            The original Fuzebox had been built by engineering without design input. It functioned, but the experience showed the seams: inconsistent UI patterns, no coherent visual language, friction in core workflows, and nothing that reflected Volt's brand. As the merchant list grew and the product matured, the gap between what Fuzebox looked like and what a serious Open Banking infrastructure product needed to look like became a commercial liability.
          </p>
          <p>
            I was brought in to fix it — not a facelift, a full redesign from the ground up.
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
            <h3 className="text-sm font-semibold mb-3">Discovery &amp; Heuristic Evaluation</h3>
            <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
              <p>
                Before designing anything, I audited the existing Fuzebox product against established UX heuristics — mapping where the interface violated user expectations, created unnecessary cognitive load, or diverged from Volt's brand guidelines. This gave me a structured evidence base to prioritise redesign effort, rather than reacting to surface-level inconsistency.
              </p>
              <p>
                I paired the heuristic evaluation with stakeholder sessions to understand which flows were highest priority commercially, and where merchant feedback was sharpest. The audit covered the full product: login, dashboard, transactions, bank accounts, applications, customers, users, banks, connect, onboarding, AIS verification, Circuit Breaker, Checkout Branding, Payouts, Accumulator, Workflows, Refunds, and Volt Accounts.
              </p>
            </div>
            {/* Image placeholder — export from Figma: heuristic audit frame with annotated screenshots of original UI, or a before/after of one representative flow */}
            <div className="rounded-lg bg-muted/50 border border-border aspect-[16/9] flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Image — heuristic audit / before state</p>
            </div>
          </div>

          {/* Design System */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Design System Foundation</h3>
            <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
              <p>
                Early in the process I established a design system grounded in Volt's brand guidelines. Defining tokens (colour, typography, spacing, elevation), core components, and interaction patterns upfront meant that as I moved through each flow, I was composing from a consistent library rather than reinventing at every screen.
              </p>
              <p>
                The system evolved throughout the engagement. As new flows surfaced edge cases — new data states, new interaction patterns — I extended the system rather than working around it.
              </p>
            </div>
            {/* Image placeholder — export from Figma: component overview page showing token layer and core components */}
            <div className="rounded-lg bg-muted/50 border border-border aspect-[16/9] flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Image — design system overview</p>
            </div>
          </div>

          {/* Iterative Flow Design */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Iterative Flow Design</h3>
            <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
              <p>
                Each of the 20+ flows followed a consistent process: research the current state, define the target experience, design iteratively across fidelity levels, validate with stakeholders, and produce a prototype for engineering handoff and review.
              </p>
              <p>
                Flows ranged in complexity — from relatively contained surfaces like Refunds and Volt Accounts, to multi-step, state-heavy flows like Onboarding, AIS Verification, and Workflows. The more complex flows required careful state mapping: empty states, loading states, error states, partial data.
              </p>
              <p>
                Throughout, the dual constraint was brand fidelity and usability — every design decision had to hold up against both Volt's visual identity and the functional expectations of a professional merchant managing financial flows.
              </p>
            </div>
            {/* Image placeholder — export from Figma: one complex flow in sequence (Onboarding or Workflows), mid-fi or hi-fi */}
            <div className="rounded-lg bg-muted/50 border border-border aspect-[16/9] flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Image — flow design sequence</p>
            </div>
          </div>

          {/* Prototyping & Handoff */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Prototyping &amp; Handoff</h3>
            <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
              <p>
                Every flow was prototyped before handoff to engineering. Prototypes served two purposes: internal review — catching interaction gaps before build — and stakeholder alignment, giving product and engineering a navigable reference rather than a static spec.
              </p>
              <p>
                Handoff packages included annotated screen specs, interaction notes, and design system references, structured to reduce back-and-forth with engineers during implementation.
              </p>
            </div>
            {/* Image placeholder — export from Figma: final hi-fi screens from a visually strong flow (Checkout Branding or Dashboard) */}
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
            Every redesigned flow shipped to Volt's live merchant network. The full platform — spanning transactions, payouts, onboarding, account management, and more — went from a dev-built MVP to a coherent, brand-aligned product within the engagement period.
          </p>
          <p>
            The engagement closed with a structured junior designer handoff — a signal that the design system and documentation were mature enough to transfer, not just the screens.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure className="rounded-lg border border-border p-5 bg-muted/30">
            <blockquote className="text-sm leading-relaxed italic text-[color:var(--cv-body)] mb-3">
              &ldquo;Smooth and seamless design to development collaboration.&rdquo;
            </blockquote>
            <figcaption className="text-xs text-muted-foreground">— Marta Duda, Volt.io</figcaption>
          </figure>
          <figure className="rounded-lg border border-border p-5 bg-muted/30">
            <blockquote className="text-sm leading-relaxed italic text-[color:var(--cv-body)] mb-3">
              &ldquo;I love working with Hayden as he is rapid and understands the story problem near instantly.&rdquo;
            </blockquote>
            <figcaption className="text-xs text-muted-foreground">— Hanna Kazlouskaya, Volt.io</figcaption>
          </figure>
        </div>
      </section>

      {/* Reflection */}
      <section className="mb-12">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Reflection
        </h2>
        <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch]">
          <p>
            The biggest design challenge on Fuzebox wasn't any individual flow — it was maintaining coherence across 20+ flows being redesigned in parallel, at pace, without a design team. The design system was the answer to that problem, but it required discipline to maintain it as a living resource rather than letting individual flows drift.
          </p>
          <p>
            If I were doing this again, I'd push harder earlier for a formal design review checkpoint mid-engagement — not just retros, but a structured audit of the product as a whole to catch any divergence before it compounded.
          </p>
          <p>
            What made this engagement interesting was the domain itself: Open Banking infrastructure is genuinely complex. Merchants aren't casual users — they're operations teams managing financial flows across banking rails they don't fully control. Designing for that context required understanding the product deeply, not just the interface.
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
