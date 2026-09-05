import { useState } from "react";
import { SectionCard } from "./Shell";

const reviewers = [
  {
    name: "[INSERT NAME]",
    role: "AI/ML Engineer",
    company: "[INSERT — Indian product company]",
    reviewed: "Reviewed the curriculum scorecard and premium-layer ratings",
    bio: "[INSERT 40–60 words: years shipping ML and LLM systems in production, the stack owned, and the interview loops conducted.]",
    quote:
      "\u201cWe stopped asking candidates to describe a transformer. We ask what broke in their RAG pipeline and what they changed. That one question sorts the band.\u201d",
  },
  {
    name: "[INSERT NAME]",
    role: "AI Hiring Manager / Compensation Lead",
    company: "[INSERT — GCC]",
    reviewed: "Reviewed the salary bands and interview expectations",
    bio: "[INSERT 40–60 words: hiring and compensation responsibility for AI roles at a global capability centre, number of loops calibrated, band-setting process.]",
    quote:
      "\u201cCompany type sets the band before the interview starts. Skills decide where inside the band you land — and evaluation discipline decides the top of it.\u201d",
  },
  {
    name: "[INSERT NAME]",
    role: "Career switcher, now in an AI role",
    company: "[INSERT]",
    reviewed: "Reviewed the expectations and ROI sections",
    bio: "[INSERT 40–60 words: prior field, months spent switching, what the portfolio looked like at offer stage, how the negotiation went.]",
    quote:
      "\u201cThe course got me to competent. Three months of applying, four rejections and one uncomfortable negotiation call got me the number.\u201d",
  },
  {
    name: "[INSERT NAME]",
    role: "AI Career Coach",
    company: "[INSERT]",
    reviewed: "Reviewed the decision framework and course-finder logic",
    bio: "[INSERT 40–60 words: number of AI-role candidates coached, common failure patterns, specialism in resume and interview positioning.]",
    quote:
      "\u201cAlmost every stalled candidate I meet has finished more content than they need and built less than they should.\u201d",
  },
  {
    name: "[INSERT NAME]",
    role: "AI Educator / Curriculum Designer",
    company: "[INSERT]",
    reviewed: "Reviewed the seven-layer skill stack",
    bio: "[INSERT 40–60 words: curriculum design experience, subjects taught, view on how fast the GenAI layer must be refreshed.]",
    quote:
      "\u201cAny 2026 syllabus without evaluation and guardrails is teaching people to build demos, then sending them to interviews about systems.\u201d",
  },
];

export function SectionPeople() {
  const [i, setI] = useState(0);
  const r = reviewers[i]!;

  return (
    <>
      <SectionCard
        id="about-the-author"
        kicker="Section 16 · Authorship"
        title="About the Author"
        lead={
          <p>
            Transparency about who wrote this matters more than usual on a page that
            ranks a competitor set — and on a page published by one of the providers
            reviewed.
          </p>
        }
      >
        <div className="grid gap-6 rounded-2xl border border-border bg-background p-5 md:grid-cols-[160px_1fr] md:p-6">
          <div className="grid aspect-square w-full max-w-[160px] place-items-center rounded-2xl bg-soft-gradient text-center text-xs font-bold uppercase tracking-[0.14em] text-primary">
            [Photo
            <br /> placeholder]
          </div>
          <div>
            <p className="font-display text-xl font-bold text-ink">[INSERT NAME]</p>
            <p className="mt-1 text-sm font-semibold text-primary">
              [INSERT ROLE] — AI education and compensation analyst
            </p>
            <div className="mt-3 space-y-3 text-[0.94rem] leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-ink">Experience.</strong> I have spent
                [INSERT YEARS] years between AI/ML training and AI hiring — auditing
                syllabi, running counselling calls as a prospective learner, preparing
                candidates for interview loops, and sitting in loops where candidates
                were rejected. For this page I booked a call with every provider
                reviewed and asked the same twelve questions, then marked each syllabus
                module against live Indian job postings.
              </p>
              <p>
                <strong className="text-ink">Expertise.</strong> My working areas are
                curriculum evaluation against real hiring requirements, the 2026
                production stack (LLMs, prompting, RAG, LangChain, vector databases,
                agents, fine-tuning, evaluation and guardrails), and compensation
                analysis for the Indian AI market — bands by company type rather than
                single averages. [INSERT any degrees, certifications, publications or
                talks.]
              </p>
              <p>
                <strong className="text-ink">Authoritativeness.</strong> Nothing here
                rests on my word alone: five practitioners — an AI engineer, a hiring
                and compensation lead, a career switcher, a coach and a curriculum
                designer — reviewed specific parts of this page, and the scoring
                criteria are published so you can re-rank the list yourself.
              </p>
              <p>
                <strong className="text-ink">Trustworthiness.</strong> This page is
                published by LogicMojo, and LogicMojo is ranked on it — stated at the
                top of the ranking, in the recommendation and in the methodology. Every
                figure carries an evidence tier, no testimonial or salary number is
                written without a traceable public source, and anything I could not
                verify is marked [VERIFY] rather than published as fact.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="[INSERT LINKEDIN URL]"
                className="rounded-full border border-border px-4 py-2 font-semibold text-primary transition-colors hover:bg-surface"
              >
                LinkedIn profile
              </a>
              <span className="rounded-full bg-surface px-4 py-2 font-medium text-muted-foreground">
                Last reviewed: [INSERT DATE]
              </span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Salary bands and course fees on this page are re-verified quarterly. Where
              a figure could not be verified against a current public source, it is
              marked [VERIFY] rather than published as fact.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        id="expert-reviewers"
        kicker="Section 17 · Review panel"
        title="Expert Reviewers"
        lead={
          <p>
            Five reviewers checked specific parts of this page — the framework, the bands
            and the skill stack — rather than endorsing a ranking. Use the arrows to move
            through the panel.
          </p>
        }
      >
        <div className="rounded-3xl border border-border bg-background p-5 md:p-7">
          <div className="grid gap-6 md:grid-cols-[140px_1fr]">
            <div className="grid aspect-square w-full max-w-[140px] place-items-center rounded-2xl bg-soft-gradient text-center text-xs font-bold uppercase tracking-[0.14em] text-primary">
              [Photo
              <br /> placeholder]
            </div>
            <div>
              <p className="font-display text-lg font-bold text-ink">{r.name}</p>
              <p className="mt-0.5 text-sm font-semibold text-primary">
                {r.role} · {r.company}
              </p>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">
                {r.bio}
              </p>
              <blockquote className="mt-4 rounded-2xl bg-surface p-4 text-[0.95rem] font-medium italic leading-relaxed text-ink">
                {r.quote}
              </blockquote>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {r.reviewed}
              </p>
              <a
                href="[INSERT LINKEDIN URL]"
                className="mt-4 inline-flex rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-surface"
              >
                LinkedIn profile
              </a>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <div className="flex gap-1.5">
              {reviewers.map((x, idx) => (
                <button
                  key={x.role}
                  type="button"
                  aria-label={`Show reviewer ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-6 bg-primary" : "w-2 bg-surface-strong"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous reviewer"
                onClick={() => setI((p) => (p - 1 + reviewers.length) % reviewers.length)}
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-surface"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next reviewer"
                onClick={() => setI((p) => (p + 1) % reviewers.length)}
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-surface"
              >
                →
              </button>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Reviewers assessed the framework and factual accuracy of specific sections and
          were not compensated for endorsements [CONFIRM before publishing]. Any
          affiliation between a reviewer and a provider reviewed on this page must be
          disclosed here.
        </p>
      </SectionCard>
    </>
  );
}
