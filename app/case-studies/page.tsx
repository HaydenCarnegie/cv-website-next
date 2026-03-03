import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Case Studies — Hayden Carnegie · Senior Product Designer",
  description:
    "Portfolio case studies from Leviathan UX — in-depth breakdowns of UX and product design work across fintech, Open Banking, and healthtech.",
};

const caseStudies = [
  {
    slug: "volt-io-fuzebox",
    badge: "Case Study",
    title: "Volt.io — Fuzebox Merchant Portal Redesign",
    meta: "Open Banking · 2022–2023",
    description:
      "Full platform redesign across 20+ flows for an Open Banking payments infrastructure company — transforming a dev-built MVP into a cohesive, brand-aligned merchant portal.",
    colSpan: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="max-w-[860px] mx-auto px-12 py-16">

      <header className="mb-16 pb-8">
        <h1 className="text-[2.25rem] font-bold text-foreground tracking-[-0.02em] leading-[1.15] mb-2">
          Case Studies
        </h1>
        <p className="text-base text-muted-foreground">Leviathan UX — selected work</p>
      </header>

      <section aria-labelledby="case-studies-heading">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((cs) => (
            <Card key={cs.slug} className={cs.colSpan ? "md:col-span-2" : ""}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="w-fit">{cs.badge}</Badge>
                  <span className="text-[11px] text-muted-foreground uppercase tracking-[0.06em]">{cs.meta}</span>
                </div>
                <CardTitle className="text-base">{cs.title}</CardTitle>
                <CardDescription>{cs.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/case-studies/${cs.slug}`}>Read case study →</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}
