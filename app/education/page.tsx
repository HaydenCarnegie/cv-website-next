import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education — Hayden Carnegie · Senior Product Designer",
  description:
    "Education background — Hayden Carnegie, Senior Product Designer with 10+ years across fintech, healthtech, and regulated financial products.",
};

export default function EducationPage() {
  return (
    <main className="max-w-[860px] mx-auto px-12 py-16">
      <header className="mb-16 pb-8 border-b border-border">
        <h1 className="text-[2.25rem] font-bold text-foreground tracking-[-0.02em] leading-[1.15] mb-2">
          Hayden Carnegie
        </h1>
        <p className="text-base text-muted-foreground">Senior Product Designer</p>
      </header>

      <section aria-labelledby="education-heading">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6 pb-3 border-b border-border">
          Education
        </h2>

        <article id="qualifications" className="scroll-mt-8">
          <h3 className="text-base font-semibold text-foreground mb-1">
            Secondary Education
          </h3>
          <p className="text-[13px] text-muted-foreground">
            11 GCSEs (C or above)
          </p>
        </article>
      </section>
    </main>
  );
}
