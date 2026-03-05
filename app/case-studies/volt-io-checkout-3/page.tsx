import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Volt.io Checkout 3.0 — Leviathan UX · Hayden Carnegie",
  description:
    "Ground-up rebuild of Volt's consumer-facing checkout — replacing a conversion-leaking 2.0 experience with a production-ready checkout supporting 20+ countries, 5 locale variants, two payment rails, and full white-label merchant customisation.",
};

export default function VoltCheckout3CaseStudyPage() {
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
          <span className="text-[11px] text-muted-foreground uppercase tracking-[0.06em]">Volt.io · Open Banking · 2023–2024</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight mb-4 text-foreground">
          Volt.io — Checkout 3.0
        </h1>

        {/* TL;DR */}
        <p className="text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] border-l-2 border-border pl-4">
          Rebuilt Volt&apos;s consumer-facing checkout from the ground up — replacing a fragmented, conversion-leaking 2.0 experience with a production-ready checkout supporting 20+ countries, 5 locale variants, two payment rails, and full white-label merchant customisation. The rebuild addressed three structural failure modes that were causing live transaction abandonment. Conversion rate improvement was the primary commercial objective; qualitative signal from merchants and the internal product team confirmed the new checkout read as a credible, trustworthy payment surface.
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
            <p className="text-sm text-[color:var(--cv-body)]">2023–2024</p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-1">Team</p>
            <p className="text-sm text-[color:var(--cv-body)]">Lead designer (3 designers, 15 engineers, 2 PMs)</p>
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
            Volt&apos;s checkout is the point of truth for every payment. It&apos;s where a merchant&apos;s end user authorises a bank-to-bank transfer — and where Volt&apos;s conversion rate is made or lost. In 2.0, it was doing real damage.
          </p>
          <p>
            Three failure modes were compounding on each other. The UI was inconsistent and visually fragmented. At the moment a user is deciding whether to trust a payment surface with their bank credentials, that fragmentation isn&apos;t just an aesthetic problem — it&apos;s a trust problem. Merchants noticed. Some were actively raising it.
          </p>
          <p>
            The bank selection flow was the second failure point. The UX logic was confusing enough that users were abandoning at a step that should have been frictionless. Bank selection is not inherently hard — but the 2.0 implementation made it feel uncertain.
          </p>
          <p>
            The third was more fundamental: the system paused live transactions to fetch data it needed, rather than loading in the background. Users hit holds mid-flow. That kind of friction at the point of payment is often unrecoverable.
          </p>
          <p>
            Commercially, a checkout with these failure modes was a direct constraint on Volt&apos;s merchant acquisition story. You can&apos;t sell a payment infrastructure product while apologising for the checkout it produces.
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
                The starting point wasn&apos;t ideation — it was diagnosis. I mapped the 2.0 checkout flow in full: every state, every branch, every point where data was fetched or decisions were surfaced. This exposed where the logical stoppers were happening and why the bank selection UX was producing confusion. It also surfaced a fourth issue not in the original brief: error states were inconsistently handled, with some failures producing dead ends rather than recoverable paths.
              </p>
              <p>
                Stakeholder sessions with the PMs clarified priority order. Conversion rate was the primary metric — anything that reduced abandonment took precedence over visual refinement. That framing mattered for sequencing decisions throughout the project.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-border mb-6">
              <Image
                src="/case-studies/volt-checkout/discovery-flow.png"
                alt="Volt Checkout 2.0 flow audit — failure point mapping across the payment journey"
                width={1226}
                height={980}
                className="w-full h-auto"
              />
            </div>

            {/* Competitor analysis */}
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3">Competitive Analysis</p>
              <div className="flex flex-wrap gap-2">
                {["TrueLayer", "Trustly", "Plaid", "Tink", "Banked.com"].map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center px-3 py-1.5 rounded-md border border-border bg-muted/40 text-sm font-medium text-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Design Direction */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Design Direction</h3>
            <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
              <p>
                Early design direction had to resolve two things simultaneously: visual credibility and token architecture. These weren&apos;t separate workstreams — the token system was the mechanism through which white-label theming and localisation would be delivered, so the design language and the system structure had to be decided together.
              </p>
              <p>
                I established a token architecture operating across three layers: base tokens (colour primitives, type scales, spacing), semantic tokens (mapped to roles — background, surface, interactive, error states), and component tokens (overridable at merchant level for white-label theming). Locale strings were threaded through the same token structure, which meant localisation was a configuration concern rather than a design rework for each market.
              </p>
              <p>
                The visual direction prioritised trust signals: clear hierarchy, restrained colour use, explicit affordances at every decision point. Nothing decorative that couldn&apos;t serve a functional purpose at a payment moment.
              </p>
            </div>
            {/* Image placeholder — export from Figma: token architecture diagram or design system overview (three-layer structure), or before/after showing same checkout under two merchant themes */}
            <div className="rounded-lg bg-muted/50 border border-border aspect-[16/9] flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Image — token architecture / white-label theme comparison</p>
            </div>
          </div>

          {/* Iterative Design */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Iterative Design</h3>
            <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
              <p>
                The bank selection flow was the first thing I designed from scratch — the highest-priority conversion problem and the clearest test of whether the new interaction logic was working. I ran multiple iterations, varying how banks were surfaced, how search worked, how selection was confirmed, and pressure-tested each against the question of whether a user who&apos;d never seen this checkout before would know exactly what to do.
              </p>
              <p>
                Mobile layout required different decisions than desktop. Not a responsive adaptation — a distinct layout logic for each breakpoint, because the interaction model for selecting a bank on a small screen under time pressure is materially different from a desktop session.
              </p>
              <p>
                Localisation added a second constraint on every screen: strings had to work at different lengths without breaking layout. German and Polish strings consistently ran long. I built variable-length tolerance into the layout system early, rather than retrofitting it per locale.
              </p>
              <p>
                Error states and recovery paths were treated as first-class screens, not afterthoughts. The 2.0 dead ends were a known failure mode — in 3.0, every error state had a defined recovery action.
              </p>
            </div>
            {/* Image placeholder — export from Figma: bank selection flow iteration progression, or final annotated flow with key states (default, search active, selected, confirmed). Mobile and desktop side-by-side for the same step is ideal. */}
            <div className="rounded-lg bg-muted/50 border border-border aspect-[16/9] flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Image — bank selection flow / mobile &amp; desktop variants</p>
            </div>
          </div>

          {/* Prototyping & Handoff */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Prototyping &amp; Handoff</h3>
            <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
              <p>
                Every flow was prototyped before it moved to engineering. Prototypes served as the primary specification — interactive, navigable, with all key states linked. This reduced the volume of back-and-forth during build and gave engineers a shared reference they could interrogate rather than interpret from static screens.
              </p>
              <p>
                Handoff included component-level annotation, interaction notes for non-obvious states, and token references tied back to the design system — specifically mapping design token names to implementation variables to ensure the theming and localisation system translated cleanly into code.
              </p>
              <p>
                I stayed involved through QA. Implementation on a rebuild of this scope moves fast, and things drift. Having the original design decisions available to reference during build — and being present to make live calls where specifications needed to flex — was part of the delivery model, not an addition to it.
              </p>
            </div>
            {/* Image placeholder — export from Figma: handoff-annotated screen (bank selection confirmation or error recovery) + production screenshot of the same screen */}
            <div className="rounded-lg bg-muted/50 border border-border aspect-[16/9] flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Image — handoff annotation / production comparison</p>
            </div>
          </div>

        </div>
      </section>

      {/* What We Built */}
      <section className="mb-12">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          What We Built
        </h2>
        <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] mb-6">
          <p>
            A full ground-up rebuild of the Volt consumer checkout, shipped to production across 20+ markets.
          </p>
        </div>
        <ul className="space-y-2 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch] list-none">
          {[
            "Mobile and desktop layouts with distinct interaction logic per breakpoint",
            "5 locale variants — Spain, UK, Germany, Poland, France — with string localisation managed through the token system",
            "Currency support: GBP, EUR, USD via Plaid; AUD via PayTo",
            "White-label merchant theming via a three-layer token architecture (base, semantic, component)",
            "Redesigned bank selection flow with clearer UX logic and reduced abandonment potential",
            "Background data loading — logical stoppers from 2.0 removed",
            "First-class error states with defined recovery paths throughout",
            "Full design system underpinning all of the above, extensible for future markets and rails",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-muted-foreground mt-[0.35em] shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Outcome */}
      <section className="mb-12">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Outcome
        </h2>
        <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch]">
          <p>
            The primary metric was conversion rate. The three structural failure modes driving abandonment in 2.0 were addressed directly: the logical stoppers were eliminated, the bank selection flow was rebuilt with clearer UX logic, and the visual fragmentation undermining trust at point of payment was resolved.
          </p>
          <p>
            The token architecture delivered white-label and localisation capabilities at a system level — not as per-merchant customisation work, but as configuration. That had direct implications for Volt&apos;s merchant onboarding speed and the engineering overhead of supporting new markets.
          </p>
          <p>
            Merchant and internal feedback on the 3.0 checkout was positive. It read as a production-grade payment surface — a meaningfully different outcome from 2.0, where merchants were raising the checkout as a credibility concern.
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section className="mb-12">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Reflection
        </h2>
        <div className="space-y-4 text-[15px] leading-[1.75] text-[color:var(--cv-body)] max-w-[68ch]">
          <p>
            The hardest part of this project wasn&apos;t the UX. It was the constraint surface. Two payment rails with different flow requirements, 20+ regulatory markets, a white-label requirement that had to be baked into the system architecture from day one, and a full rebuild rather than an iteration — all running in parallel. That&apos;s not an unusual combination in fintech, but the margin for error is low when any one of those constraints is a compliance or conversion concern.
          </p>
          <p>
            The token architecture decision was the one I&apos;d defend most strongly if challenged. It would have been faster in the short term to solve white-labelling and localisation as separate, manual problems. We didn&apos;t, and the result was a system that could absorb new merchants, new locales, and new rails without rework. That kind of decision doesn&apos;t show up visibly in the shipped product — but it shows up in the maintenance cost.
          </p>
          <p>
            If I were doing this again, I&apos;d push for a formal mid-sprint audit of localisation strings earlier in the process. We caught the German and Polish length issues during design, which was the right time — but only because I was looking for them. On a project with more locales or a tighter timeline, that&apos;s the kind of thing that finds you in QA rather than in Figma.
          </p>
          <p>
            What made this project genuinely interesting was that checkout — which sounds contained — turns out to be one of the most consequential surfaces in a payments product. It&apos;s where the infrastructure becomes visible to an end user for the first time. Getting that surface wrong has a measurable cost. Getting it right is mostly invisible — which is the point.
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
