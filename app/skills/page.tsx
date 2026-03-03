import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Skills — Hayden Carnegie · Senior Product Designer",
  description:
    "Design practice, domain expertise, and tools: 10+ years across fintech UX (PSD2, Open Banking, KYC), healthtech, and regulated product design. Figma, Framer, design systems, and end-to-end UX leadership.",
};

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

function SkillTable({
  rows,
  col1Label = "Skill",
  col2Label = "How I Apply It",
}: {
  rows: { skill: string; description: string }[];
  col1Label?: string;
  col2Label?: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left font-semibold px-2 py-1 text-muted-foreground w-[220px]">
              {col1Label}
            </th>
            <th className="text-left font-semibold px-2 py-1 text-muted-foreground">
              {col2Label}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ skill, description }) => (
            <tr key={skill} className="border-b last:border-0 border-border">
              <td className="px-2 py-1.5 text-[color:var(--cv-body)] font-medium align-top">
                {skill}
              </td>
              <td className="px-2 py-1.5 text-muted-foreground leading-[1.6]">
                {description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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

        {/* Design Practice */}
        <div id="design-practice" className="mb-12 scroll-mt-20">
          <h3 className="text-base font-semibold text-foreground mb-2">Design Practice</h3>
          <p className="text-[14px] leading-[1.75] text-[color:var(--cv-body)] mb-5">
            10+ years leading design from first principles through delivery — spanning user research,
            journey mapping, interaction design, prototyping, and design system architecture.
            Experienced leading multidisciplinary teams, facilitating discovery workshops, and
            embedding design rigour into Agile delivery at pace.
          </p>
          <SkillTable
            rows={[
              { skill: "Product Design", description: "Lead end-to-end product design from discovery through delivery, aligning user needs with commercial and technical constraints." },
              { skill: "UX Strategy", description: "Define problem spaces, success metrics, and roadmap priorities grounded in research, data, and business objectives." },
              { skill: "Design Leadership", description: "Set design direction, raise quality standards, and create clarity in ambiguous problem spaces across teams." },
              { skill: "User Research", description: "Conduct interviews, usability testing, and insight synthesis to validate assumptions and uncover behavioural drivers." },
              { skill: "Stakeholder Management", description: "Translate complex problems into clear narratives, align cross-functional teams, and manage competing priorities." },
              { skill: "Interaction Design", description: "Design intuitive, feedback-rich flows that reduce friction and guide users toward confident decision-making." },
              { skill: "Information Architecture", description: "Structure complex systems and content hierarchies to improve clarity, findability, and cognitive load." },
              { skill: "Journey Mapping", description: "Map end-to-end user journeys to identify pain points, opportunity areas, and moments of friction." },
              { skill: "Design System Architecture", description: "Architect scalable component systems that improve consistency, accessibility, and developer handoff." },
              { skill: "Prototyping", description: "Build interactive prototypes at varying fidelities to test hypotheses, validate flows, and align stakeholders early." },
              { skill: "Wireframing", description: "Rapidly visualise concepts and flow structures to explore solutions before committing to UI detail." },
              { skill: "Design Sprints", description: "Facilitate structured problem-solving sessions to validate ideas quickly and reduce delivery risk." },
              { skill: "Workshop Facilitation", description: "Run collaborative workshops that align teams, extract insights, and drive shared ownership of outcomes." },
              { skill: "Accessibility", description: "Design inclusive experiences aligned with WCAG principles, ensuring usability across devices and abilities." },
              { skill: "Mentoring", description: "Coach designers and cross-functional teammates to raise craft quality and strategic thinking." },
              { skill: "Cross-functional Collaboration", description: "Partner closely with engineering, product, and commercial teams to ensure solutions are viable and scalable." },
              { skill: "Agile / Scrum", description: "Embed design within iterative delivery cycles, contributing to backlog refinement, sprint planning, and review." },
              { skill: "Design Operations", description: "Improve workflow efficiency through structured critique, documentation, and scalable design processes." },
            ]}
          />
        </div>

        {/* Domain Knowledge */}
        <div id="domain-knowledge" className="mb-12 scroll-mt-20">
          <h3 className="text-base font-semibold text-foreground mb-2">Domain Knowledge</h3>
          <p className="text-[14px] leading-[1.75] text-[color:var(--cv-body)] mb-5">
            Deep specialism in high-trust, compliance-aware product design. Brings regulatory
            literacy as a design asset — translating complex compliance requirements into clear,
            conversion-optimised user journeys.
          </p>
          <SkillTable
            col1Label="Domain Area"
            rows={[
              { skill: "Fintech", description: "Apply deep product expertise to financial systems, ensuring experiences are secure, scalable, and user-centric within high-trust environments." },
              { skill: "Open Banking (PSD2)", description: "Translate complex PSD2 framework requirements into intuitive flows that balance compliance and user clarity." },
              { skill: "Payment UX", description: "Design secure, friction-optimised payment journeys that increase conversion and reduce abandonment." },
              { skill: "KYC / Onboarding", description: "Build onboarding flows that streamline identity verification while maintaining regulatory accuracy and trust." },
              { skill: "Regulatory UX", description: "Embed regulation as an asset, turning constraints into clear, user-guided experiences that mitigate risk." },
              { skill: "Regulated Financial Products", description: "Break down complex financial requirements into digestible experiences that educate and empower users." },
              { skill: "Data-driven Design", description: "Use analytics and qualitative insights to prioritise design decisions, optimise flows, and measure impact." },
              { skill: "Digital Health", description: "Design with heightened sensitivity to clinical contexts, privacy expectations, and user wellbeing." },
              { skill: "Clinical UX", description: "Craft workflows that respect clinical integrity and support behaviours with evidence-backed design patterns." },
              { skill: "Behavioural Design", description: "Apply psychological principles to foster desired behaviours while maintaining trust and ethical design." },
              { skill: "High-trust & High-stakes UX", description: "Design products where user confidence is paramount — from medical data to financial outcomes." },
            ]}
          />
        </div>

        {/* Tools */}
        <div id="tools" className="mb-12 scroll-mt-20">
          <h3 className="text-base font-semibold text-foreground mb-2">Tools</h3>
          <p className="text-[14px] leading-[1.75] text-[color:var(--cv-body)] mb-5">
            Primary toolset centred on Figma for design and prototyping, with hands-on experience
            across the full design-to-dev pipeline. Comfortable reading and writing code, bridging
            handoff gaps, and working directly in tools alongside engineers.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-2">
                Design &amp; Prototyping
              </p>
              <SkillTable
                col1Label="Tool"
                col2Label="How I Apply It"
                rows={[
                  { skill: "Figma", description: "Lead design from discovery to prototype — building layout systems, interactive prototypes, and handoff-ready assets." },
                  { skill: "Framer", description: "Create high-fidelity interactive prototypes that feel like shipped products for user testing and stakeholder alignment." },
                  { skill: "Sketch", description: "Rapid sketching and early ideation with reusable symbols and design components." },
                  { skill: "Invision", description: "Validate concept flows through interactive mockups with client and team feedback loops." },
                  { skill: "Abstract", description: "Version control and collaboration on design artifacts across teams." },
                  { skill: "Zeplin", description: "Bridge design-to-development handoff with accurate specs, measurements, and assets." },
                  { skill: "Storybook", description: "Document and iterate UI components alongside developers in real code." },
                ]}
              />
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-2">
                Analytics &amp; Research
              </p>
              <SkillTable
                col1Label="Tool"
                col2Label="How I Apply It"
                rows={[
                  { skill: "Amplitude", description: "Analyse behavioural metrics to inform decisions and quantify UX impact." },
                  { skill: "Google Analytics", description: "Track engagement patterns, conversion funnels, and UX performance signals." },
                ]}
              />
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-muted-foreground mb-2">
                Frontend &amp; Implementation Awareness
              </p>
              <SkillTable
                col1Label="Tool"
                col2Label="How I Apply It"
                rows={[
                  { skill: "HTML", description: "Understand structure and accessibility implications to shape semantics and assist developers." },
                  { skill: "CSS", description: "Ensure that design choices are feasible and performant across responsive breakpoints." },
                  { skill: "jQuery", description: "Recognise dynamic interaction behaviours to inform prototype fidelity and interaction specs." },
                  { skill: "JSON", description: "Interface with data structures that power components and dynamic experiences." },
                ]}
              />
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
