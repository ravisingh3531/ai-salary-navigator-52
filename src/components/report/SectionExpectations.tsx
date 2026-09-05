import { Reveal } from "@/components/Reveal";
import { Callout, H3, Prose, SectionCard } from "./Shell";

const profiles = [
  {
    who: "Fresher with a strong portfolio",
    first: "Entry engineering band, with the top of it reachable",
    m12: "One step up, often through an internal move once you ship something",
    m24: "Mid band if you kept building in production",
    variable:
      "Whether three projects are deployed and defensible. A fresher with a running RAG service and an evaluation harness interviews like a two-year engineer; one with certificates interviews like a queue.",
    align: "LogicMojo, Scaler, DeepLearning.AI plus self-built projects",
  },
  {
    who: "Fresher with a certificate only",
    first: "Analyst / support-adjacent band, if anything moves at all",
    m12: "Entry band once real work exists on GitHub",
    m24: "Depends entirely on what you built in year one",
    variable:
      "The gap between certificate and evidence. Panels do not test certificates; they test whether you can explain a decision you made. This path is slower than course marketing implies — plan for a build phase after the course, not instead of one.",
    align: "PW Skills as a start, then a deeper program",
  },
  {
    who: "2–5 year developer moving to AI engineering",
    first: "A visible step above your current band, sometimes two on a switch",
    m12: "Engineering band with GenAI responsibilities",
    m24: "Senior engineering band if you own a system in production",
    variable:
      "Whether your portfolio proves production thinking — evaluation, monitoring, cost — or only model training. This is the single highest-probability profile on this page.",
    align: "LogicMojo, Scaler",
  },
  {
    who: "IT-services engineer moving to product / GCC",
    first: "A step change driven by company type as much as by skill",
    m12: "Product or GCC engineering band",
    m24: "Mid-to-senior band with domain plus AI depth",
    variable:
      "Interview readiness on DSA and system design alongside AI. The company-type lever is often worth more than the skill lever — and it is the reason placement infrastructure is worth paying for if you can afford it.",
    align: "Scaler for hiring access, LogicMojo for depth per rupee",
  },
  {
    who: "Data analyst moving to DS/ML",
    first: "The lower half of the DS/ML band",
    m12: "Mid DS/ML band",
    m24: "ML engineering band if you added deployment",
    variable:
      "Whether you replace dashboard framing with modelling rigour: metric choice, class imbalance, leakage, evaluation. Analysts who learn deployment move fastest.",
    align: "LogicMojo, upGrad, IBM certificate as a top-up",
  },
  {
    who: "Non-tech career switcher",
    first: "Entry band, and realistically after 9–15 months of work",
    m12: "Entry band consolidated, first real project ownership",
    m24: "Mid band if you closed the programming gap properly",
    variable:
      "Programming fluency. Switchers who treat Python as a prerequisite to master, not a module to survive, land the offers. Credentials help clear HR screens; they do not carry technical rounds.",
    align: "upGrad or Great Learning for the credential, plus prerequisite coding work",
  },
  {
    who: "8–15 year senior adding AI",
    first: "Lateral move at similar pay with a better trajectory",
    m12: "Premium for AI-plus-leadership scarcity",
    m24: "Architect, lead or head-of-AI band",
    variable:
      "Whether you can design and review AI systems, not just discuss them. Seniors are priced on judgement — agents, RAG architecture, evaluation and cost reasoning are the vocabulary of that judgement.",
    align: "LogicMojo for system design depth, executive programs for strategy framing",
  },
  {
    who: "Domain professional (finance, healthcare, marketing)",
    first: "Domain-plus-AI premium on your existing band",
    m12: "Applied AI role inside your domain",
    m24: "Scarce-profile premium where regulation makes domain knowledge expensive",
    variable:
      "Whether you apply AI to real domain data with correct evaluation and communicate it to non-technical stakeholders. Domain plus AI is one of the most underpriced combinations in the Indian market.",
    align: "LogicMojo, Great Learning",
  },
];

const timeline = [
  { phase: "Months 1–6", label: "Skills", text: "Foundations, ML, DL and the premium layers. Nothing visible to the market yet." },
  { phase: "Months 4–8", label: "Portfolio", text: "Projects designed, broken, debugged, deployed and documented on GitHub." },
  { phase: "Months 6–10", label: "Applications & interviews", text: "Referrals, applications, screens and technical loops. Rejections are data." },
  { phase: "Months 8–12", label: "Offer & negotiation", text: "The offer, then the part almost nobody prepares for — negotiating on it." },
];

const questions = [
  "Why this evaluation metric for this problem, and what would change it?",
  "How did you handle class imbalance, and what did it cost you?",
  "Explain attention to a stakeholder who has never seen a neural network.",
  "Design a RAG system over 50,000 internal documents. Where does it break?",
  "How do you detect hallucination in production without human review of everything?",
  "Fine-tune or RAG for this requirement — and what makes you sure?",
  "How would you serve this model at 500 requests per second within budget?",
  "An agent loops and burns ₹40,000 of tokens overnight. Contain it.",
  "What do you monitor after deployment, and what does drift look like here?",
  "Walk me through the trade-off between latency, cost and answer quality.",
  "Which parts of your capstone would you rebuild, and why?",
  "What did you get wrong in this project, and what did you change?",
  "How do you version prompts and know a change was an improvement?",
  "Where would you put a guardrail, and what does it block?",
  "How do you evaluate an LLM feature when there is no labelled data yet?",
];

export function SectionExpectations() {
  return (
    <SectionCard
      id="realistic-salary-expectations"
      kicker="Section 10 · Expectations"
      title="Realistic Salary Expectations After an AI Course — By Profile and Timeline"
      lead={
        <>
          <p>
            The honest answer to "what number should I expect, and when?" depends far
            more on your starting point than on which course you buy. Below, eight
            profiles with a realistic first move, a twelve- and twenty-four-month view,
            and the one variable that decides where in the band you land.
          </p>
          <p>
            All movement described here is <strong className="text-ink">[ILLUSTRATIVE]</strong>{" "}
            and anchored to the Tier A role bands cited earlier on this page — no
            invented averages, no highest-package anecdotes.
          </p>
        </>
      }
    >
      <div className="space-y-10">
        <div className="grid gap-4 md:grid-cols-2">
          {profiles.map((p, i) => (
            <Reveal key={p.who} delay={Math.min(i * 50, 250)}>
              <div className="h-full rounded-2xl border border-border bg-background p-5 card-lift">
                <h3 className="font-display text-lg font-bold leading-snug text-ink">
                  {p.who}
                </h3>
                <dl className="mt-4 space-y-2.5 text-sm">
                  {[
                    ["First move", p.first],
                    ["12 months", p.m12],
                    ["24 months", p.m24],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-3">
                      <dt className="w-24 shrink-0 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-primary">
                        {k}
                      </dt>
                      <dd className="text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 rounded-xl bg-surface p-3.5 text-[0.88rem] leading-relaxed text-ink">
                  <strong>What decides your position in the band:</strong> {p.variable}
                </p>
                <p className="mt-3 text-[0.82rem] text-muted-foreground">
                  <strong className="text-ink">Courses that align:</strong> {p.align}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="space-y-5">
          <H3>How long does it take for salary to move after an AI course?</H3>
          <Prose>
            <p>
              Direct answer: eight to twelve months from starting a serious program to a
              signed offer, assuming you finish. Internal raises typically lag external
              switches by one review cycle, because internal bands move in increments
              and external offers reset the baseline.
            </p>
          </Prose>
          <ol className="grid gap-3 md:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.phase} delay={i * 90}>
                <div className="h-full rounded-2xl bg-soft-gradient p-4 shadow-card">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary">
                    {t.phase}
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-ink">
                    {t.label}
                  </p>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {t.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="space-y-5">
          <H3>What interviewers actually test at premium-paying companies</H3>
          <Prose>
            <p>
              Fifteen question types that recur across product companies and GCCs. If
              your course does not prepare you to answer these out loud, it is not
              preparing you for the band you are targeting.
            </p>
          </Prose>
          <ul className="grid gap-2.5 md:grid-cols-2">
            {questions.map((q, i) => (
              <li
                key={q}
                className="flex gap-3 rounded-xl border border-border bg-card p-3.5 text-sm leading-relaxed text-muted-foreground shadow-card"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-surface-strong font-display text-[0.7rem] font-bold text-primary">
                  {i + 1}
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <Callout label="The pattern">
            Twelve of these fifteen are judgement questions, not syntax questions. That
            is why a portfolio you designed beats a portfolio you copied — you cannot
            answer "what would you change" about someone else's notebook.
          </Callout>
        </div>
      </div>
    </SectionCard>
  );
}
