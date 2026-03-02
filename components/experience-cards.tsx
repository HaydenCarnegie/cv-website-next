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
    <article id={id} className="mb-12 last:mb-0 scroll-mt-8">
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
              Senior Product Designer (Director)
            </p>
            <p className="text-[13px] text-muted-foreground">
              <time dateTime="2022-05">May 2022</time> – Present &middot; Remote,
              United Kingdom
            </p>
          </>
        }
      >
        <p className="text-[15px] leading-[1.65] mb-4">
          Lead designer across a portfolio of high-trust fintech and healthtech
          products, including Volt.io, Evolve, IFX, Habitual, and Healthpath.
          Operating as an embedded senior design partner — owning design
          strategy, research, and delivery end-to-end across regulated,
          high-stakes environments.
        </p>
        <ul className="space-y-2">
          <li className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground">
            Designed the UX infrastructure underpinning £2.5B+ in transactions
            across Open Banking, cross-border payments, and crypto — working
            within strict PSD2, FCA, and KYC/AML compliance constraints
          </li>
          <li
            id="voltio"
            className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground"
          >
            Redesigned onboarding, authentication, and payment flow UX for
            regulated fintech clients including Volt.io — contributing to a
            platform that achieves up to 20% checkout conversion uplift and 80%
            repeat-purchase rates for merchants on its network
          </li>
          <li className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground">
            Established scalable design systems adopted across multiple
            products, creating a single source of truth for UI components and
            cutting design-to-dev handoff friction across distributed teams
          </li>
          <li
            id="healthpath"
            className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground"
          >
            Led end-to-end UX for Healthpath — redesigning sign-up and
            verification flows for NHS and personal health data handling, and
            rebuilding ecommerce navigation and appointment management UX —
            delivering measurable uplift in ecommerce sales through improved
            product discovery and equipping admin users with a more capable
            self-service panel
          </li>
          <li className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground">
            Partnered directly with founders and C-suite to define product
            strategy, translate business goals into design direction, and align
            cross-functional teams — providing design leadership at board level
          </li>
          <li className="text-[14px] leading-[1.65] relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-muted-foreground">
            Conducted data-driven, research-led design across payment flows,
            onboarding journeys, and trust-critical interactions — applying
            usability testing and iterative validation throughout
          </li>
        </ul>
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
            "Established the team's first design system and standardised screen layout conventions across all client projects — cutting design-to-dev handoff time by approximately 10 hours per sprint by giving developers a consistent structure for reviewing screens and generating accurate build estimations",
            "Mentored junior designers through structured critique sessions and growth frameworks, improving team output quality and supporting their professional development",
            "Facilitated discovery workshops with clients to define product scope, user needs, and design direction — running usability testing and iterative prototype validation throughout delivery to ensure design decisions were grounded in real user behaviour",
            "Defined and maintained design processes within Agile delivery — establishing sprint rhythms, review cadences, and handoff standards that kept engineering and design in sync across concurrent builds",
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
            "Led design for a learning app deployed to communities in Africa in partnership with Médecins Sans Frontières — designing for low-connectivity and accessibility-first constraints",
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

      {/* Barkweb */}
      <ExperienceCard
        id="barkweb"
        intro={
          <>
            <h3 className="text-base font-semibold text-foreground mb-1">
              Barkweb
            </h3>
            <p className="text-sm font-medium text-[color:var(--cv-body)] mb-1">
              UX Designer
            </p>
            <p className="text-[13px] text-muted-foreground">
              <time dateTime="2015-08">Aug 2015</time> –{" "}
              <time dateTime="2019-06">Jun 2019</time> &middot; 3 years 11 months
              &middot; Eastbourne
            </p>
          </>
        }
      >
        <ul className="space-y-2">
          {[
            "Identified key drop-off points in client journeys using Google Analytics, translating data into targeted design interventions and presenting findings directly to clients",
            "Partnered with clients to define design requirements, translating briefs into interactive prototypes using Framer and developing web templates on Barkweb's custom CMS using HTML5 and SCSS",
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
            <p className="text-[13px] text-muted-foreground mb-4">
              <time dateTime="2009">2009</time> –{" "}
              <time dateTime="2015">2015</time>
            </p>
            <p className="text-[14px] leading-[1.85] text-muted-foreground">
              <strong className="text-[color:var(--cv-body)] font-medium">
                Creative Designer &middot; Freelance
              </strong>{" "}
              <em>(Jan–Aug 2015, Brighton)</em> &nbsp;&middot;&nbsp;
              <strong className="text-[color:var(--cv-body)] font-medium">
                Web Designer &middot; Stealth Media Group
              </strong>{" "}
              <em>(2014, Brighton)</em> &nbsp;&middot;&nbsp;
              <strong className="text-[color:var(--cv-body)] font-medium">
                Web Design &amp; Admin &middot; Hanwood Holdings
              </strong>{" "}
              <em>(2013, Gibraltar)</em> &nbsp;&middot;&nbsp;
              <strong className="text-[color:var(--cv-body)] font-medium">
                Web Design &amp; Admin &middot; Equity Services
              </strong>{" "}
              <em>(2011–2012, Marbella)</em> &nbsp;&middot;&nbsp;
              <strong className="text-[color:var(--cv-body)] font-medium">
                Web Designer &middot; East Sussex Design
              </strong>{" "}
              <em>(2009–2011, Seaford)</em>
            </p>
          </>
        }
      />
    </>
  );
}
