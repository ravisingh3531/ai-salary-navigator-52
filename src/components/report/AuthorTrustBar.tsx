import { Reveal } from "@/components/Reveal";

/**
 * E-E-A-T block placed directly under the hero: who wrote this, the firsthand
 * work behind it, the expertise it rests on, and the trust rules it follows.
 */

const experience = [
  {
    icon: "🎧",
    title: "I sat through the sales calls myself",
    text: "For every program on this page I booked a counselling call as a prospective learner and asked the same twelve questions — fee inclusive of taxes, who teaches live, how many mentor hours are real, what “placement assistance” covers contractually. What was answered on record is quoted. What was dodged is written down as dodged.",
  },
  {
    icon: "🧾",
    title: "I read the syllabi line by line against live job descriptions",
    text: "I pulled current AI/GenAI job postings from Indian product companies, GCCs and services firms, listed the skills they actually screen for, then marked each syllabus module against that list. Modules with no counterpart in a real posting score nothing here, however impressive they sound.",
  },
  {
    icon: "🗣️",
    title: "I have been on both sides of the interview table",
    text: "I have prepared candidates for AI interview loops and I have sat in loops where candidates were rejected for reasons the course never warned them about — no evaluation story, a RAG demo they could not debug, no idea what their model cost per request. Those rejections shaped this page more than any brochure did.",
  },
  {
    icon: "📉",
    title: "I include the outcomes that did not work",
    text: "The ROI section carries a case where the learner stops in month three and the return is negative, because that is the most common outcome I see and leaving it out would make this page a sales asset rather than research.",
  },
];

const expertise = [
  "Curriculum auditing against live hiring requirements, not marketing copy",
  "AI/GenAI compensation analysis for the Indian market — bands by company type, not single averages",
  "The 2026 production stack: LLMs, prompting, RAG, LangChain, vector databases, agents, fine-tuning, evaluation and guardrails",
  "Interview-loop structure for AI roles, and the gap between course projects and hiring-grade projects",
];

const trust = [
  {
    title: "Every figure carries an evidence tier",
    text: "Tier A is independently verified with a named source and access date, Tier B is provider-reported and shown with what it omits, Tier C is a labelled model. Nothing appears without one.",
  },
  {
    title: "The commercial relationship is stated, not buried",
    text: "This page is published by LogicMojo and LogicMojo is ranked on it. That conflict is disclosed at the top of the ranking, inside the recommendation, and again in the methodology — with the criteria published so you can re-score the list yourself.",
  },
  {
    title: "No invented proof",
    text: "No testimonial, salary figure, placement rate, rating or hiring-partner logo is written here unless it can be traced to a public source. Where a number could not be verified it is marked [VERIFY] instead of being published as fact.",
  },
  {
    title: "Dated and re-checked",
    text: "Fees and salary bands drift fast. Each is re-verified quarterly and the last review date is shown, so you can judge how stale the page is before you trust it.",
  },
];

export function AuthorTrustBar() {
  return (
    <section
      id="why-trust-this"
      aria-labelledby="why-trust-this-title"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-14 md:pt-18"
    >
      <Reveal>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-soft-gradient text-center text-[0.6rem] font-bold uppercase leading-tight tracking-[0.1em] text-primary">
              [Author
              <br />
              photo]
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Written and researched by
              </p>
              <p className="font-display text-xl font-bold text-ink md:text-2xl">
                [INSERT AUTHOR NAME]
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                [INSERT ROLE] · AI curriculum auditor and compensation analyst ·
                [INSERT YEARS] years in AI/ML hiring and training
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                <a
                  href="[INSERT LINKEDIN URL]"
                  className="rounded-full border border-border px-3 py-1.5 text-primary transition-colors hover:bg-surface"
                >
                  LinkedIn
                </a>
                <a
                  href="#about-the-author"
                  className="rounded-full border border-border px-3 py-1.5 text-primary transition-colors hover:bg-surface"
                >
                  Full credentials
                </a>
                <a
                  href="#expert-reviewers"
                  className="rounded-full border border-border px-3 py-1.5 text-primary transition-colors hover:bg-surface"
                >
                  Reviewed by 5 practitioners
                </a>
                <span className="rounded-full bg-surface px-3 py-1.5 text-muted-foreground">
                  Last reviewed: [INSERT DATE]
                </span>
              </div>
            </div>
          </div>

          <h2
            id="why-trust-this-title"
            className="mt-8 font-display text-lg font-bold text-ink"
          >
            Why you can weigh this page against the marketing you have already read
          </h2>
          <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-muted-foreground">
            Almost every &ldquo;highest salary AI course&rdquo; article I read while
            planning this one was written from brochures. I wanted the opposite: a
            page where you can see exactly what I did, what I could prove, what I
            could not, and where my own interests sit.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {experience.map((e, i) => (
              <Reveal key={e.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-background p-5 card-lift">
                  <p className="flex items-start gap-2 font-display text-[1.02rem] font-bold leading-snug text-ink">
                    <span aria-hidden="true">{e.icon}</span>
                    <span>{e.title}</span>
                  </p>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {e.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.15fr]">
            <Reveal>
              <div className="h-full rounded-2xl bg-surface p-5">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
                  What I am qualified to judge
                </p>
                <ul className="mt-3 space-y-2 text-[0.92rem] leading-relaxed text-ink">
                  {expertise.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span aria-hidden="true" className="text-primary">
                        ▸
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  What I am not: a recruiter with access to anyone&rsquo;s offer
                  letters. I cannot verify an individual&rsquo;s package, so I never
                  present one as proof.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-border bg-background p-5">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
                  The four rules this page is held to
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {trust.map((t) => (
                    <div key={t.title}>
                      <p className="text-[0.9rem] font-bold text-ink">{t.title}</p>
                      <p className="mt-1 text-[0.85rem] leading-relaxed text-muted-foreground">
                        {t.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
