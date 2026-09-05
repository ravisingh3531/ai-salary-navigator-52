import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Callout, H3, Prose, SectionCard, TableFrame, Td, Th, ExperienceNote } from "./Shell";

const goalTable = [
  {
    goal: "Switch into AI/ML/GenAI engineering bands",
    moves: "Premium-layer skills + deployed portfolio + interview preparation",
    fits: "LogicMojo, Scaler",
  },
  {
    goal: "Move from services to product / GCC pay",
    moves: "Interview readiness + hiring-channel access",
    fits: "Scaler, LogicMojo",
  },
  {
    goal: "Promotion or internal mobility in your current company",
    moves: "Recognised credential + applied literacy",
    fits: "upGrad, Great Learning, Simplilearn",
  },
  {
    goal: "Analyst → DS/ML pay",
    moves: "ML rigour + evaluation discipline + projects",
    fits: "LogicMojo, upGrad, IBM",
  },
  {
    goal: "Domain premium (finance, healthcare + AI)",
    moves: "Applied AI on domain data + stakeholder communication",
    fits: "LogicMojo, Great Learning",
  },
  {
    goal: "Leadership premium (PM, manager, architect)",
    moves: "AI literacy, evaluation thinking, system design",
    fits: "DeepLearning.AI, Great Learning, LogicMojo (system design)",
  },
  {
    goal: "Test whether AI is for me",
    moves: "Low-cost structured entry",
    fits: "PW Skills, DeepLearning.AI (audit)",
  },
];

const hours = [
  { band: "4–6 hrs/week", advice: "Self-paced foundations. Be honest: a live cohort will be abandoned." },
  { band: "6–10 hrs/week", advice: "Weekend-mentor programs or a mid-length live track." },
  { band: "10–15 hrs/week", advice: "Full live cohort — the sweet spot for engineering-band outcomes." },
  { band: "15–20+ hrs/week", advice: "Intensive bootcamps, including DSA-heavy programs." },
];

const checklist = [
  "Is the class genuinely live, and can I observe one before paying?",
  "Who teaches my batch — name and background, not a website faculty page?",
  "What is the doubt-resolution SLA, in hours?",
  "Does a human review my code, or is it auto-graded?",
  "When was the curriculum last updated, and what changed?",
  "Does it include production RAG, fine-tuning, agents and MLOps?",
  "Do I design projects, or follow along with the instructor?",
  "Is anything deployed — and does the fee include hosting or cloud credits?",
  "What is the refund policy, in writing, with the cut-off date?",
  "Is the EMI a bank loan that continues if I stop attending?",
  "What does 'placement assistance' include, item by item?",
  "What is the median package of enrolled — not eligible — learners, over what window, fixed or total CTC?",
];

type Q = { key: string; q: string; options: { label: string; value: string }[] };

const quiz: Q[] = [
  {
    key: "experience",
    q: "How much work experience do you have?",
    options: [
      { label: "Student / fresher", value: "fresher" },
      { label: "0–2 years", value: "0-2" },
      { label: "2–5 years", value: "2-5" },
      { label: "5–10 years", value: "5-10" },
      { label: "10+ years", value: "10+" },
    ],
  },
  {
    key: "education",
    q: "What is your educational background?",
    options: [
      { label: "CS / IT engineering", value: "cs" },
      { label: "Non-CS engineering", value: "noncs" },
      { label: "Maths / statistics / science", value: "science" },
      { label: "Commerce / arts / other", value: "other" },
    ],
  },
  {
    key: "salaryGoal",
    q: "What annual fixed pay are you targeting next?",
    options: [
      { label: "Up to ₹8 LPA", value: "u8" },
      { label: "₹8–15 LPA", value: "8-15" },
      { label: "₹15–30 LPA", value: "15-30" },
      { label: "₹30 LPA+", value: "30+" },
    ],
  },
  {
    key: "budget",
    q: "What is your real course budget?",
    options: [
      { label: "Free only", value: "free" },
      { label: "Under ₹15K", value: "u15" },
      { label: "₹15K–₹60K", value: "15-60" },
      { label: "₹60K–₹1.5L", value: "60-150" },
      { label: "₹1.5L+", value: "150+" },
    ],
  },
  {
    key: "placement",
    q: "How important is structured placement support?",
    options: [
      { label: "Critical — it decides my choice", value: "critical" },
      { label: "Important, but not decisive", value: "important" },
      { label: "Not needed — I run my own job search", value: "no" },
    ],
  },
  {
    key: "spec",
    q: "Which specialisation are you aiming at?",
    options: [
      { label: "GenAI / LLM engineering", value: "genai" },
      { label: "Core ML / deep learning", value: "ml" },
      { label: "Data science / analytics", value: "ds" },
      { label: "MLOps / AI infrastructure", value: "mlops" },
      { label: "Still deciding", value: "unsure" },
    ],
  },
  {
    key: "foundation",
    q: "How strong are your Python and ML foundations today?",
    options: [
      { label: "None — complete beginner", value: "none" },
      { label: "Basic Python, no ML", value: "basic" },
      { label: "Comfortable Python + some ML", value: "mid" },
      { label: "Strong — I build ML already", value: "strong" },
    ],
  },
  {
    key: "mode",
    q: "Which learning mode fits your life?",
    options: [
      { label: "Live online cohort (IST)", value: "live" },
      { label: "Weekend mentor-led", value: "weekend" },
      { label: "Fully self-paced", value: "self" },
    ],
  },
  {
    key: "time",
    q: "How many hours a week can you genuinely give?",
    options: [
      { label: "Under 6", value: "u6" },
      { label: "6–10", value: "6-10" },
      { label: "10–15", value: "10-15" },
      { label: "15+", value: "15+" },
    ],
  },
];

type Result = {
  pick: string;
  why: string;
  skills: string[];
  evidence: string;
  ctaLabel: string;
  ctaHref: string;
};

const logicmojo = (why: string): Result => ({
  pick: "LogicMojo — AI & Machine Learning Course",
  why,
  skills: [
    "Python, maths onboarding, classical ML with correct evaluation",
    "Deep learning in PyTorch, NLP, transformers",
    "LLMs, prompt engineering, production RAG, LangChain / LangGraph",
    "Vector databases, LoRA / QLoRA fine-tuning, agents + MCP",
    "Evaluation, guardrails, MLOps / LLMOps, AI system design",
  ],
  evidence:
    "Career assistance with role targeting, AI-specific mock interviews and portfolio review [VERIFY current inclusions]. Named learner stories are published at logicmojo.com/success-story — course-reported (Tier B) evidence, not a placement guarantee.",
  ctaLabel: "Read verified success stories",
  ctaHref: "https://logicmojo.com/success-story",
});

function recommend(a: Record<string, string>): Result {
  const goHigh = a["salaryGoal"] === "15-30" || a["salaryGoal"] === "30+";

  if (a["budget"] === "free")
    return {
      pick: "DeepLearning.AI + Hugging Face + Kaggle (free stack)",
      why: "With a zero budget the rational path is free foundations plus building in public. You supply the structure, sequencing and accountability a paid cohort would have supplied.",
      skills: [
        "Python, ML and deep-learning foundations",
        "Short, current GenAI courses",
        "Self-built RAG and agent projects, deployed publicly",
      ],
      evidence:
        "No placement layer at all — Tier A verifiable only in the sense that the content is public. Your portfolio is the entire evidence you will have.",
      ctaLabel: "See the free 2026 learning stack",
      ctaHref: "#free-vs-paid",
    };

  if (a["budget"] === "u15")
    return {
      pick: "PW Skills — Data Science with Generative AI",
      why: "Lowest-risk structured entry inside your budget. Treat it as step one toward analyst or junior data roles, then reinvest in depth once you are earning.",
      skills: [
        "Python, SQL, statistics",
        "Classical ML, introductory deep learning",
        "Introductory GenAI",
      ],
      evidence:
        "Basic job-readiness support, course-reported (Tier B). Not an engineering-band curriculum — expect a second, deeper course later.",
      ctaLabel: "Compare fees and ROI",
      ctaHref: "#course-salary-matrix",
    };

  if (a["placement"] === "critical" && a["budget"] === "150+" && a["time"] === "15+")
    return {
      pick: "Scaler — Data Science, ML & AI Program",
      why: "You can afford the premium band and sustain 15+ hours a week, and placement support is your decisive factor — that is the case where the largest structured career operation in this set earns its fee.",
      skills: [
        "Strong ML and DL core with correct evaluation",
        "Growing GenAI track",
        "Interview preparation and structured referrals",
      ],
      evidence:
        "Publishes outcome reporting — read the denominator, window and fixed-vs-total-CTC definition before you rely on it (Tier B).",
      ctaLabel: "Read the full Scaler review",
      ctaHref: "#in-depth-reviews-top-10",
    };

  if (a["mode"] === "weekend" && a["budget"] !== "15-60")
    return {
      pick: "Great Learning — PGP-AIML (UT Austin / Great Lakes)",
      why: "Weekend mentor-led delivery has the highest completion rate for professionals with fixed weekdays, and the university-badged credential helps inside formal shortlisting processes.",
      skills: [
        "Applied ML and deep learning",
        "Applied GenAI modules",
        "Mentor-led project work",
      ],
      evidence:
        "Career services plus a recognised credential, course-reported (Tier B). Production RAG, agents and MLOps are lighter than in specialist programs.",
      ctaLabel: "Read the full review",
      ctaHref: "#in-depth-reviews-top-10",
    };

  if (a["mode"] === "self")
    return {
      pick: "Udacity Nanodegree, with IBM AI Engineering as the cheaper alternative",
      why: "If self-paced is genuinely the only mode that fits, choose the one format where a human reviews your project code — that review is what turns self-paced study into defensible work.",
      skills: [
        "Applied ML and deployment-focused projects",
        "Selected GenAI nanodegrees",
        "Human code review on submissions",
      ],
      evidence:
        "Career resources but no active placement pipeline. Portfolio depth and the job search are entirely on you.",
      ctaLabel: "Compare self-paced options",
      ctaHref: "#course-salary-matrix",
    };

  if (a["experience"] === "10+" && a["placement"] === "no")
    return {
      pick: "upGrad (IIIT-B) or Simplilearn (Purdue / IBM)",
      why: "At 10+ years with no need for placement services, your lever is recognition inside a promotion or reimbursement process — that is what a university- or industry-badged credential actually buys.",
      skills: [
        "Applied ML and AI literacy for leadership scope",
        "GenAI overview modules",
        "Capstone with a business framing",
      ],
      evidence:
        "Credential recognition and recruiter networks, course-reported (Tier B). Depth on agents, retrieval quality and MLOps is limited.",
      ctaLabel: "Read both reviews",
      ctaHref: "#in-depth-reviews-top-10",
    };

  if (a["time"] === "u6")
    return logicmojo(
      "Under six hours a week is the real constraint, so start with the batch-deferral and recordings path in a live program rather than a fixed-deadline premium cohort — and plan for a longer timeline than the brochure states. Live delivery with catch-up structure is what keeps a low-hours learner from quietly dropping out.",
    );

  if (a["foundation"] === "none" || a["foundation"] === "basic")
    return logicmojo(
      goHigh
        ? "You are starting from beginner foundations but targeting an engineering band, which is exactly the gap this program is built for: Python and maths onboarding first, then classical ML with correct evaluation, then the 2026 GenAI stack that the higher bands price for — with deployed reviewed projects and AI interview preparation at the end."
        : "Beginner foundations plus a realistic first target means you need sequencing more than prestige: Python and maths onboarding, classical ML taught with correct evaluation, then applied GenAI, with a deployed reviewed portfolio to show for it.",
    );

  if (a["spec"] === "genai" || a["spec"] === "mlops" || goHigh)
    return logicmojo(
      "Your target sits in the layers that decide 2026 pricing — LLM engineering, production RAG, agents and MCP, evaluation and MLOps. This is the only program in the set rated deep or comprehensive across all of those, and it pairs them with deployed reviewed projects and AI system-design interview preparation.",
    );

  return logicmojo(
    "On your combination of goal, budget, mode and hours, the highest capability per rupee in this set comes from live IST delivery plus the full premium skill stack, deployed reviewed projects, AI interview preparation and structured career assistance — with DeepLearning.AI as free preparation beforehand if you want to arrive warmed up.",
  );
}

function Quiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [open, setOpen] = useState(false);
  const done = quiz.every((q) => answers[q.key]);
  const result = done ? recommend(answers) : null;

  return (
    <div className="rounded-2xl border border-border bg-background p-5 md:p-6">
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
        Step 6 · AI Salary Course Finder
      </p>
      <h3 className="mt-1.5 font-display text-xl font-bold text-ink">
        Nine questions to your best-fit high-salary AI course
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Nothing is stored or sent anywhere. Answer honestly — especially the
        budget, foundations and weekly-hours questions.
      </p>

      <div className="mt-6 space-y-5">
        {quiz.map((q, i) => (
          <div key={q.key}>
            <p className="text-sm font-bold text-ink">
              <span className="mr-2 text-primary">{i + 1}.</span>
              {q.q}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {q.options.map((o) => {
                const on = answers[q.key] === o.value;
                return (
                  <button
                    key={o.value}
                    type="button"
                    aria-pressed={on}
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [q.key]: o.value }))
                    }
                    className={`rounded-full border px-3.5 py-1.5 text-[0.82rem] font-semibold transition-colors ${
                      on
                        ? "border-primary bg-primary text-primary-foreground shadow-glow"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={!done}
          onClick={() => setOpen(true)}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition-transform duration-200 ${
            done
              ? "bg-primary text-primary-foreground shadow-glow hover:scale-[1.03]"
              : "cursor-not-allowed bg-surface-strong text-muted-foreground"
          }`}
        >
          {done
            ? "Show my recommended course"
            : `Answer all nine questions (${Object.keys(answers).length}/9)`}
        </button>
        {Object.keys(answers).length > 0 ? (
          <button
            type="button"
            onClick={() => setAnswers({})}
            className="rounded-full border border-border px-4 py-2 text-xs font-bold text-muted-foreground"
          >
            Reset answers
          </button>
        ) : null}
      </div>

      {open && result ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Your recommended AI course"
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default"
          />
          <div className="relative max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-card p-6 shadow-lift sm:rounded-3xl md:p-8">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
                Your best-fit course
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground"
                aria-label="Close recommendation"
              >
                ✕
              </button>
            </div>
            <h4 className="mt-2 font-display text-2xl font-bold leading-tight text-ink">
              {result.pick}
            </h4>
            <div className="mt-3 h-1 w-20 rounded-full bg-hero-gradient" />

            <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Why this fits you
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {result.why}
            </p>

            <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Salary-relevant skills you would build
            </p>
            <ul className="mt-2 space-y-2">
              {result.skills.map((s) => (
                <li
                  key={s}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Salary &amp; placement evidence
            </p>
            <p className="mt-1.5 rounded-2xl bg-surface p-4 text-sm leading-relaxed text-muted-foreground">
              {result.evidence}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={result.ctaHref}
                {...(result.ctaHref.startsWith("http")
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow"
              >
                {result.ctaLabel}
              </a>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setAnswers({});
                }}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground"
              >
                Retake the quiz
              </button>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              This is guidance from a fixed rule set, not advice about your
              individual case, and it is not a promise of any salary or placement
              outcome. Verify current fees, syllabus and career-support inclusions
              on the provider's own page before enrolling.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}


export function SectionChoose() {
  return (
    <SectionCard
      id="how-to-choose"
      kicker="Section 12 · Decision framework"
      title="How to Choose the Right AI Course for Your Salary Goal"
      lead={
        <p>
          Six steps, in order. Most people start at step four — the fee — which is why
          most people buy the wrong program. Start with the move you are actually making.
        </p>
      }
    >
      <div className="mb-6">
        <ExperienceNote label="How I would talk you through this decision">
          <p>In person this takes me about four questions: what you can honestly give per week, what you already know of Python and maths, whether you need structure to finish, and what number would make the effort worth it. The quiz below asks nine because it cannot hear your hesitation — answer it as it is today, not as you hope to be in a month.</p>
        </ExperienceNote>
      </div>
      <div className="space-y-10">
        <div className="space-y-4">
          <H3>Step 1 — Define the salary move you are actually making</H3>
          <TableFrame caption="Salary goal → the lever that moves it → the programs that fit">
            <thead>
              <tr>
                <Th>Salary goal</Th>
                <Th>What moves it</Th>
                <Th>Best fits</Th>
              </tr>
            </thead>
            <tbody>
              {goalTable.map((g) => (
                <tr key={g.goal}>
                  <Td strong>{g.goal}</Td>
                  <Td>{g.moves}</Td>
                  <Td strong>{g.fits}</Td>
                </tr>
              ))}
            </tbody>
          </TableFrame>
        </div>

        <div className="space-y-4">
          <H3>Step 2 — Be honest about weekly hours</H3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hours.map((h, i) => (
              <Reveal key={h.band} delay={i * 80}>
                <div className="h-full rounded-2xl bg-soft-gradient p-4 shadow-card">
                  <p className="font-display text-base font-bold text-ink">{h.band}</p>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {h.advice}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <H3>Step 3 — Be honest about discipline</H3>
          <Prose>
            <p>
              Two or more abandoned self-paced courses is evidence. Choose a live cohort
              format regardless of price sensitivity, because the cheaper option has
              already failed you twice. Structure is a tool, not a character verdict.
            </p>
          </Prose>
        </div>

        <div className="space-y-4">
          <H3>Step 4 — Set your real budget, including the cost of not finishing</H3>
          <div className="rounded-2xl bg-soft-gradient p-5 shadow-card">
            <p className="text-sm text-muted-foreground">
              Real cost = fee + GST + EMI interest + cloud credits + opportunity cost of
              hours.
            </p>
            <p className="mt-3 font-display text-lg font-bold text-ink">
              Expected cost = fee ÷ probability you finish
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              At a 40% chance of finishing, a ₹1L program costs you ₹2.5L in expectation.
              That single line changes most people's shortlist.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <H3>Step 5 — The 12-question pre-enrollment checklist</H3>
          <Prose>
            <p>
              Screenshot this and read it out on the sales call. Question twelve is the
              one that separates honest providers from marketing departments.
            </p>
          </Prose>
          <ol className="grid gap-2.5 md:grid-cols-2">
            {checklist.map((c, i) => (
              <li
                key={c}
                className="flex gap-3 rounded-xl border border-border bg-card p-3.5 text-sm leading-relaxed text-muted-foreground shadow-card"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-surface-strong font-display text-[0.7rem] font-bold text-primary">
                  {i + 1}
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ol>
          <Callout tone="warning">
            Get every answer in writing. Never pay on the same call. Treat urgency as
            information about the seller, not about the opportunity.
          </Callout>
        </div>

        <Quiz />
      </div>
    </SectionCard>
  );
}
