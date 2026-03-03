import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Skills — Hayden Carnegie · Senior Product Designer",
  description:
    "Design practice, domain expertise, and tools: 10+ years across fintech UX (PSD2, Open Banking, KYC), healthtech, and regulated product design. Figma, Framer, design systems, and end-to-end UX leadership.",
};

type SkillGroup = {
  id: string;
  label: string;
  statement: string;
  skills?: string[];
  subGroups?: {
    label: string;
    skills: string[];
  }[];
};

const skillGroups: SkillGroup[] = [
  {
    id: "design-practice",
    label: "Design Practice",
    statement:
      "10+ years leading design from first principles through delivery — spanning user research, journey mapping, interaction design, prototyping, and design system architecture. Experienced leading multidisciplinary teams, facilitating discovery workshops, and embedding design rigour into Agile delivery at pace.",
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
    statement:
      "Deep specialism in high-trust, compliance-aware product design. Brings regulatory literacy as a design asset — translating complex compliance requirements into clear, conversion-optimised user journeys.",
    subGroups: [
      {
        label: "Fintech",
        skills: [
          "Open Banking (PSD2)",
          "Payment UX",
          "KYC / Onboarding Compliance",
          "Regulatory UX",
          "Compliance-aware Design",
          "Regulated Financial Products",
          "Data-driven Design",
        ],
      },
      {
        label: "Health & Behaviour",
        skills: [
          "Digital Health",
          "Clinical UX",
          "Behavioural Design",
          "High-trust & High-stakes UX",
        ],
      },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    statement:
      "Primary toolset centred on Figma for design and prototyping, with hands-on experience across the full design-to-dev pipeline. Comfortable reading and writing code, bridging handoff gaps, and working directly in tools alongside engineers.",
    subGroups: [
      {
        label: "Design & Prototyping",
        skills: ["Figma", "Framer", "Sketch", "Invision", "Abstract", "Zeplin", "Storybook"],
      },
      {
        label: "Analytics & Research",
        skills: ["Amplitude", "Google Analytics"],
      },
      {
        label: "Frontend",
        skills: ["HTML", "CSS", "jQuery", "JSON"],
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hayden Carnegie",
  hasSkill: [
    "Product Design",
    "UX Strategy",
    "Design Leadership",
    "Open Banking (PSD2)",
    "Payment UX",
    "KYC / Onboarding Compliance",
    "Regulatory UX",
    "Digital Health",
    "Design System Architecture",
    "Figma",
    "Framer",
    "User Research",
    "Behavioural Design",
  ],
  knowsAbout: [
    "Regulated Financial Products",
    "Fintech UX",
    "Healthtech UX",
    "Compliance-aware Design",
    "Design Operations",
  ],
};

export default function SkillsPage() {
  return (
    <main className="max-w-[860px] mx-auto px-12 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader />

      <section aria-labelledby="skills-heading">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Skills
        </h2>

        {skillGroups.map((group) => (
          <div key={group.id} id={group.id} className="mb-12 last:mb-0 scroll-mt-20">
            <h3 className="text-base font-semibold text-foreground mb-2">{group.label}</h3>
            <p className="text-[14px] leading-[1.75] text-[color:var(--cv-body)] mb-5">
              {group.statement}
            </p>

            {group.skills && (
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
            )}

            {group.subGroups && (
              <div className="flex flex-col gap-5">
                {group.subGroups.map((sub) => (
                  <div key={sub.label}>
                    <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-2">
                      {sub.label}
                    </p>
                    <div className="flex flex-wrap gap-2" role="list">
                      {sub.skills.map((skill) => (
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
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
