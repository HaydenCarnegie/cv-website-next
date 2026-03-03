import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Hayden Carnegie — Senior Product Designer CV",
};

export default function HomePage() {
  return (
    <main className="max-w-[860px] mx-auto px-12 py-16">
      <PageHeader />

      {/* Summary */}
      <section id="summary" className="mb-16 scroll-mt-20" aria-labelledby="summary-heading">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Summary
        </h2>
        <p className="text-[15px] leading-[1.75] max-w-[68ch]">
          Senior Product Designer and founder of Leviathan UX, with 10+ years
          of design leadership across fintech, crypto, and healthtech.
          Specialises in regulatory UX and compliance-aware design — from
          PSD2-compliant Open Banking and cross-border payments to digital
          health — delivering end-to-end product design underpinned by user
          research and scalable design systems. Track record of designing UX
          infrastructure that has underpinned £2.5B+ in transactions, partnering
          directly with founders and C-suite to shape product strategy and drive
          cross-functional alignment.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-16 scroll-mt-20" aria-labelledby="contact-heading">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Contact
        </h2>
        <address className="not-italic">
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
                Email
              </span>
              <a
                href="mailto:hayden.a.carnegie@gmail.com"
                className="font-mono text-xs text-[color:var(--cv-body)] hover:text-foreground transition-colors"
              >
                hayden.a.carnegie@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
                Phone
              </span>
              <a
                href="tel:+447903700886"
                className="font-mono text-xs text-[color:var(--cv-body)] hover:text-foreground transition-colors"
              >
                +44 (0) 7903 700 886
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
                Location
              </span>
              <span className="font-mono text-xs text-[color:var(--cv-body)]">
                Eastbourne, United Kingdom
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
                LinkedIn
              </span>
              <a
                href="https://linkedin.com/in/haydencarnegie"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[color:var(--cv-body)] hover:text-foreground transition-colors"
              >
                linkedin.com/in/haydencarnegie
              </a>
            </div>
          </div>
        </address>
      </section>

      {/* Card grid */}
      <section className="mb-16" aria-labelledby="highlights-heading">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Case Study — Volt.io Fuzebox (col-span-2) */}
          <Card className="md:col-span-2">
            <CardHeader>
              <Badge className="w-fit mb-1">Case Study</Badge>
              <CardTitle className="text-base">Volt.io — Fuzebox Merchant Portal Redesign</CardTitle>
              <CardDescription>
                Full platform redesign across 20+ flows for an Open Banking payments infrastructure company
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Led a ground-up redesign of Fuzebox as sole designer — transforming a dev-built MVP into a cohesive, brand-aligned merchant portal. Covered login through to payouts, onboarding, AIS verification, and more, underpinned by a design system built from scratch.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/case-studies/volt-io-fuzebox">Read case study →</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Case Study — Healthpath */}
          <Card>
            <CardHeader>
              <Badge className="w-fit mb-1">Case Study</Badge>
              <CardTitle className="text-base">Healthpath</CardTitle>
              <CardDescription>
                End-to-end UX for NHS health data and ecommerce
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Placeholder — redesigned sign-up and verification flows for NHS
                and personal health data handling, rebuilding ecommerce
                navigation and appointment management UX.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/experience#healthpath">Read more →</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Experience Highlight — Design Systems */}
          <Card>
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-1">Experience</Badge>
              <CardTitle className="text-base">Design Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Placeholder — established scalable design systems adopted across
                multiple products, creating a single source of truth and cutting
                design-to-dev handoff friction.
              </p>
            </CardContent>
          </Card>

          {/* Experience Highlight — Regulatory UX */}
          <Card>
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-1">Experience</Badge>
              <CardTitle className="text-base">Regulatory UX</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Placeholder — 10+ years designing within PSD2, FCA, KYC/AML,
                and NHS compliance constraints across Open Banking, cross-border
                payments, and digital health products.
              </p>
            </CardContent>
          </Card>

          {/* Quote 1 — Marta Duda, Volt.io */}
          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-sm leading-relaxed italic text-muted-foreground border-l-2 border-border pl-4 mb-3">
                &ldquo;Smooth and seamless design to development collaboration.&rdquo;
              </blockquote>
              <cite className="text-xs text-muted-foreground not-italic">
                — Marta Duda, Volt.io
              </cite>
            </CardContent>
          </Card>

          {/* Quote 2 — Hanna Kazlouskaya, Volt.io */}
          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-sm leading-relaxed italic text-muted-foreground border-l-2 border-border pl-4 mb-3">
                &ldquo;Rapid and understands the story problem near instantly.&rdquo;
              </blockquote>
              <cite className="text-xs text-muted-foreground not-italic">
                — Hanna Kazlouskaya, Volt.io
              </cite>
            </CardContent>
          </Card>

        </div>
      </section>
    </main>
  );
}
