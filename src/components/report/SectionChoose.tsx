import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Callout, H3, Prose, SectionCard, TableFrame, Td, Th } from "./Shell";

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
    key: "background",
    q: "What is your background?",
    options: [
      { label: "Non-technical", value: "nontech" },
      { label: "Some coding", value: "some" },
      { label: "Software engineer", value: "swe" },
      { label: "Data analyst", value: "analyst" },
      { label: "Student", value: "student" },
    ],
  },
  {
    key: "experience",
    q: "How much work experience do you have?",
    options: [
      { label: "Fresher", value: "fresher" },
      { label: "2–5 years", value: "2-5" },
      { label: "5–10 years", value: "5-10" },
      { label: "10+ years", value: "10+" },
    ],
  },
  {
    key: "goal",
    q: "What salary move are you actually making?",
    options: [
      { label: "Engineering-band switch", value: "eng" },
      { label: "Services → product", value: "product" },
      { label: "Promotion / internal mobility", value: "promo" },
      { label: "Analyst → DS/ML", value: "ds" },
      { label: "Domain premium", value: "domain" },
      { label: "Testing the waters", value: "test" },
    ],
  },
  {
    key: "budget",
    q: "What is your real budget?",
    options: [
      { label: "Free only", value: "free" },
      { label: "Under ₹15K", value: "u15" },
      { label: "₹15K–₹60K", value: "15-60" },
      { label: "₹60K–₹1.5L", value: "60-150" },
      { label: "₹1.5L+", value: "150+" },
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
  {
    key: "priority",
    q: "What matters most to you?",
    options: [
      { label: "Deepest skills", value: "skills" },
      { label: "Credential", value: "credential" },
      { label: "Placement operations", value: "placement" },
      { label: "Lowest cost", value: "cost" },
    ],
  },
  {
    key: "style",
    q: "How do you learn best?",
    options: [
      { label: "Live cohort", value: "live" },
      { label: "Self-paced", value: "self" },
      { label: "Weekend mentor", value: "weekend" },
    ],
  },
  {
    key: "discipline",
    q: "Your honest history with online courses?",
    options: [
      { label: "Finished most", value: "finished" },
      { label: "Abandoned one", value: "one" },
      { label: "Abandoned two or more", value: "two" },
    ],
  },
];

function recommend(a: Record<string, string>) {
  if (a["discipline"] === "two")
    return {
      pick: "Any live cohort — LogicMojo, Scaler or Great Learning",
      why: "Two abandoned courses is evidence, not a character flaw. Structure is the product you need to buy.",
    };
  if (a["budget"] === "free")
    return {
      pick: "DeepLearning.AI + Hugging Face + Kaggle",
      why: "Free is the rational choice when you can supply the structure yourself — build in public to compensate for the missing portfolio.",
    };
  if (a["budget"] === "u15")
    return {
      pick: "PW Skills",
      why: "Lowest-risk structured entry. Treat it as your first step, then reinvest in depth.",
    };
  if (a["priority"] === "placement" && a["budget"] === "150+" && a["time"] === "15+")
    return {
      pick: "Scaler",
      why: "You can afford and sustain the strongest placement operation available online in India.",
    };
  if (a["priority"] === "credential" || a["goal"] === "promo")
    return {
      pick: a["goal"] === "promo" ? "Simplilearn or upGrad" : "upGrad or Great Learning",
      why: "Your lever is recognition inside a process that weighs formal qualifications.",
    };
  if (a["style"] === "self")
    return {
      pick: "Udacity or the IBM AI Engineering certificate",
      why: "Self-paced with human project review is the only self-paced format that produces defensible work.",
    };
  if (a["style"] === "weekend")
    return {
      pick: "Great Learning",
      why: "Weekend mentor-led delivery has the highest completion rate for professionals with fixed weekends.",
    };
  if (
    (a["goal"] === "eng" || a["goal"] === "product" || a["goal"] === "ds") &&
    (a["time"] === "10-15" || a["time"] === "15+")
  )
    return {
      pick: "LogicMojo",
      why: "Engineering-band switch with 10+ weekly hours at mid-band pricing is exactly what this composite ranks first.",
    };
  return {
    pick: "LogicMojo, with DeepLearning.AI as free preparation",
    why: "Build foundations free, then buy the structure, review and premium layers that move the band.",
  };
}

function Quiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const done = quiz.every((q) => answers[q.key]);
  const result = done ? recommend(answers) : null;

  return (
    <div className="rounded-2xl border border-border bg-background p-5 md:p-6">
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
        Step 6 · AI Course Finder
      </p>
      <h3 className="mt-1.5 font-display text-xl font-bold text-ink">
        Eight questions to one shortlist
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Nothing is stored or sent anywhere. Answer honestly — especially the last
        question.
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

      <div className="mt-7">
        {result ? (
          <div className="rounded-2xl bg-hero-gradient p-5 shadow-glow">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary-foreground/80">
              Your shortlist
            </p>
            <p className="mt-1.5 font-display text-2xl font-bold text-primary-foreground">
              {result.pick}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
              {result.why}
            </p>
            <button
              type="button"
              onClick={() => setAnswers({})}
              className="mt-4 rounded-full border border-primary-foreground/35 px-4 py-2 text-xs font-bold text-primary-foreground"
            >
              Start again
            </button>
          </div>
        ) : (
          <p className="rounded-2xl bg-surface p-4 text-sm font-medium text-muted-foreground">
            Answer all eight questions and your shortlist appears here.
          </p>
        )}
      </div>
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
