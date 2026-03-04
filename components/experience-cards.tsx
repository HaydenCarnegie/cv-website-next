"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

function ExperienceCard({
  id,
  intro,
  children,
}: {
  id: string;
  intro: React.ReactNode;
  children?: React.ReactNode;
}) {
  const { ref, inView } = useInView({
    rootMargin: "-10% 0px -10% 0px",
    threshold: 0,
  });

  return (
    <article id={id} className="mb-12 last:mb-0 scroll-mt-20">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={cn(
          "pl-6 border-l-2 pb-1 transition-colors duration-300",
          inView ? "border-foreground" : "border-border"
        )}
      >
        {intro}
      </div>
      {children && <div className="mt-4 pl-7">{children}</div>}
    </article>
  );
}

export function ExperienceCards() {
  return (
    <>
      {/* Leviathan UX */}
      <ExperienceCard
        id="leviathan-ux"
        intro={
          <>
            <h3 className="text-base font-semibold text-foreground mb-1">
              Leviathan UX
            </h3>
            <p className="text-sm font-medium text-[color:var(--cv-body)] mb-1">
              Senior Product Designer (Contractor)
            </p>
            <p className="text-[13px] text-muted-foreground">
              <time dateTime="2022-05">May 2022</time> – Present &middot; Remote,
              United Kingdom
            </p>
          </>
        }
      >
        <p className="text-[15px] leading-[1.65] mb-6">
          Lead designer across a portfolio of high-trust fintech, healthtech,
          and crypto products. Embedded as a senior design partner: owning
          design strategy, research, and delivery end-to-end across regulated,
          high-stakes environments.
        </p>

        {/* Velocity.xyz */}
        <div id="velocity-xyz" className="scroll-mt-20 mb-6">
          <h4 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3 pb-2 border-b border-border">
            Velocity.xyz — stablecoin on/off ramp platform
          </h4>
          <ul className="space-y-2">
            {[
              "Owned end-to-end product design from greenfield, scoping and delivering the full wireframe architecture before branding was finalised, covering wallet creation, account management, beneficiary flows, transaction history, and send funds journeys.",
              "Simplified complex stablecoin fee structures into a clear, digestible breakdown UX, reducing cognitive load in a trust-sensitive, regulated space where transparency directly affects conversion.",
              "Rethemed ShadCN into a bespoke design system, establishing a scalable component foundation ready to absorb final brand decisions without rework.",
              "Produced sales collateral in parallel with product delivery, supporting the commercial team while the core product was still in development.",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Volt.io */}
        <div id="voltio" className="scroll-mt-20 mb-6">
          <h4 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3 pb-2 border-b border-border">
            Volt.io — Open Banking payments platform
          </h4>
          <ul className="space-y-2">
            {[
              "Designed pitch and sales collateral directly with C-suite, contributing to a $60M+ Series B close and helping secure enterprise clients including Shopify, Worldpay, Farfetch, and Primer.",
              "Embedded as sole design partner across the Fusebox product suite, owning look and feel across Entity Switcher, Circuit Breaker, Pay by Bank, Pay by Link, and Verify flows.",
              "Reworked the Pay by Bank end-user flow across multiple breakpoints and devices: UX research, simplified journey design, and a 40% improvement in complete transfers.",
              "Owned and extended the Volt design system across the full product suite, establishing consistent patterns and interaction standards that accelerated development cycles.",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* IFX Payments */}
        <div id="ifx-payments" className="scroll-mt-20 mb-6">
          <h4 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3 pb-2 border-b border-border">
            IFX Payments — FX and cross-border payments platform
          </h4>
          <ul className="space-y-2">
            {[
              "Embedded across two parallel workstreams: platform UX improvements and an AGP system acquisition, migrating and redesigning a legacy platform to a modern foundation.",
              "Designed authentication, sign-up, and compliance flows from scratch, addressing accessibility gaps and inconsistent implementation that had accumulated across the existing product.",
              "Rebuilt batch file payment processing end-to-end, reducing user friction in a high-stakes, compliance-adjacent workflow.",
              "Matured the design library into a functioning design system, establishing a single source of truth for development and eliminating inconsistency across the platform.",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Healthpath */}
        <div id="healthpath" className="scroll-mt-20">
          <h4 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-3 pb-2 border-b border-border">
            Healthpath — consumer healthtech and wellness platform
          </h4>
          <ul className="space-y-2">
            {[
              "Resolved sign-up drop-off and style inconsistencies across the platform, tightening the onboarding flow and contributing to a directional uplift in active users and subscriptions.",
              "Designed and shipped a consultant booking directory, giving users a new capability to discover and book health practitioners directly through the platform.",
              "Improved subscription and ecommerce flows alongside compliance-aware sign-up journeys, balancing conversion goals against data handling requirements in a health context.",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ExperienceCard>

      {/* Automation Squared */}
      <ExperienceCard
        id="automation-squared"
        intro={
          <>
            <h3 className="text-base font-semibold text-foreground mb-1">
              Automation Squared
            </h3>
            <p className="text-sm font-medium text-[color:var(--cv-body)] mb-1">
              Senior Product Designer (Design Lead)
            </p>
            <p className="text-[13px] text-muted-foreground">
              <time dateTime="2019-11">Nov 2019</time> –{" "}
              <time dateTime="2022-05">May 2022</time> &middot; 2 years 7 months
              &middot; Brighton
            </p>
          </>
        }
      >
        <ul className="space-y-2">
          {[
            "Led a multidisciplinary team of 8 (2 designers, 6 developers) across concurrent product builds, owning design quality, design direction, and delivery pace",
            "Established the team's first design system and standardised screen layout conventions across all client projects, cutting design-to-dev handoff time by approximately 10 hours per sprint by giving developers a consistent structure for reviewing screens and generating accurate build estimations",
            "Mentored junior designers through structured critique sessions and growth frameworks, improving team output quality and supporting their professional development",
            "Facilitated discovery workshops with clients to define product scope, user needs, and design direction; ran usability testing and iterative prototype validation throughout delivery to ensure design decisions were grounded in real user behaviour",
            "Defined and maintained design processes within Agile delivery, establishing sprint rhythms, review cadences, and handoff standards that kept engineering and design in sync across concurrent builds",
          ].map((item, i) => (
            <li
              key={i}
              className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </ExperienceCard>

      {/* Catalyst EU */}
      <ExperienceCard
        id="catalyst-eu"
        intro={
          <>
            <h3 className="text-base font-semibold text-foreground mb-1">
              Catalyst EU
            </h3>
            <p className="text-sm font-medium text-[color:var(--cv-body)] mb-1">
              UX Designer
            </p>
            <p className="text-[13px] text-muted-foreground">
              <time dateTime="2019-05">May 2019</time> –{" "}
              <time dateTime="2019-10">Oct 2019</time> &middot; 5 months &middot;
              Brighton
            </p>
          </>
        }
      >
        <p className="text-[15px] leading-[1.65] mb-4">
          Short-term embedded designer, delivering research-led UX improvements
          and leading design for an internationally deployed learning product.
        </p>
        <ul className="space-y-2">
          {[
            "Led UX improvements to the Learning Management System, using GA-backed data to identify underperforming user journeys and prioritise design interventions",
            "Led design for a learning app deployed to communities in Africa in partnership with Médecins Sans Frontières, designing for low-connectivity and accessibility-first constraints",
            "Facilitated design workshops to align internal stakeholders on product scope and user needs",
          ].map((item, i) => (
            <li
              key={i}
              className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </ExperienceCard>

      {/* Earlier Roles */}
      <ExperienceCard
        id="earlier-roles"
        intro={
          <>
            <h3 className="text-base font-semibold text-foreground mb-1">
              Earlier Roles
            </h3>
            <p className="text-[13px] text-muted-foreground">
              <time dateTime="2009">2009</time> –{" "}
              <time dateTime="2019">2019</time>
            </p>
          </>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left font-semibold px-2 py-1 text-muted-foreground">Company</th>
                <th className="text-left font-semibold px-2 py-1 text-muted-foreground">Dates</th>
                <th className="text-left font-semibold px-2 py-1 text-muted-foreground">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-0 border-border">
                <td className="px-2 py-1 text-[color:var(--cv-body)] font-medium">Barkweb</td>
                <td className="px-2 py-1 text-muted-foreground whitespace-nowrap">Aug 2015 – May 2019, Eastbourne</td>
                <td className="px-2 py-1 text-muted-foreground">Web Designer, Developer</td>
              </tr>
              <tr className="border-b last:border-0 border-border">
                <td className="px-2 py-1 text-[color:var(--cv-body)] font-medium">Freelance</td>
                <td className="px-2 py-1 text-muted-foreground whitespace-nowrap">Jan – Aug 2015, Brighton</td>
                <td className="px-2 py-1 text-muted-foreground">Creative Designer</td>
              </tr>
              <tr className="border-b last:border-0 border-border">
                <td className="px-2 py-1 text-[color:var(--cv-body)] font-medium">Stealth Media Group</td>
                <td className="px-2 py-1 text-muted-foreground whitespace-nowrap">2014, Brighton</td>
                <td className="px-2 py-1 text-muted-foreground">Web Designer, Asset Generator</td>
              </tr>
              <tr className="border-b last:border-0 border-border">
                <td className="px-2 py-1 text-[color:var(--cv-body)] font-medium">Hanwood Holdings</td>
                <td className="px-2 py-1 text-muted-foreground whitespace-nowrap">2013, Gibraltar</td>
                <td className="px-2 py-1 text-muted-foreground">Web Design &amp; Admin</td>
              </tr>
              <tr className="border-b last:border-0 border-border">
                <td className="px-2 py-1 text-[color:var(--cv-body)] font-medium">Equity Services</td>
                <td className="px-2 py-1 text-muted-foreground whitespace-nowrap">2011 – 2012, Marbella</td>
                <td className="px-2 py-1 text-muted-foreground">Web Design &amp; Admin</td>
              </tr>
              <tr>
                <td className="px-2 py-1 text-[color:var(--cv-body)] font-medium">East Sussex Design</td>
                <td className="px-2 py-1 text-muted-foreground whitespace-nowrap">2009 – 2011, Seaford</td>
                <td className="px-2 py-1 text-muted-foreground">Junior Web Designer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ExperienceCard>
    </>
  );
}
