import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Skills — Hayden Carnegie · Senior Product Designer",
  description:
    "Design practice, domain knowledge, and tools for Senior Product Designer Hayden Carnegie — fintech, healthtech, regulatory UX specialist.",
};

const skillGroups = [
  {
    id: "design-practice",
    label: "Design Practice",
    skills: [
      "Product Design",
      "UX Strategy",
      "Design Leadership",
      "User Research",
      "Stakeholder Management",
      "Interaction Design",
      "Information Architecture",
      "Journey Mapping",
      "Design System Architecture",
      "Prototyping",
      "Wireframing",
      "Design Sprints",
      "Workshop Facilitation",
      "Accessibility",
      "Mentoring",
      "Cross-functional Collaboration",
      "Agile / Scrum",
      "Design Operations",
    ],
  },
  {
    id: "domain-knowledge",
    label: "Domain Knowledge",
    skills: [
      "Open Banking (PSD2)",
      "Payment UX",
      "KYC / Onboarding Compliance",
      "Regulatory UX",
      "Compliance-aware Design",
      "Regulated Financial Products",
      "Digital Health",
      "Clinical UX",
      "Behavioural Design",
      "High-trust & High-stakes UX",
      "Data-driven Design",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      "Figma",
      "Framer",
      "Sketch",
      "Invision",
      "Abstract",
      "Zeplin",
      "Storybook",
      "Amplitude",
      "Google Analytics",
      "HTML",
      "CSS",
      "jQuery",
      "JSON",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="max-w-[860px] mx-auto px-12 py-16">
      <header className="mb-16 pb-8 border-b border-border">
        <h1 className="text-[2.25rem] font-bold text-foreground tracking-[-0.02em] leading-[1.15] mb-2">
          Hayden Carnegie
        </h1>
        <p className="text-base text-muted-foreground">Senior Product Designer</p>
      </header>

      <section aria-labelledby="skills-heading">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Skills
        </h2>

        {skillGroups.map((group) => (
          <div
            key={group.id}
            id={group.id}
            className="mb-8 last:mb-0 scroll-mt-8"
          >
            <h3 className="text-[13px] font-semibold text-foreground mb-3">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2" role="list">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  role="listitem"
                  className="font-mono text-[12px] font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
