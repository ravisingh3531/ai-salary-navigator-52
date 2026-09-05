import { SectionCard, H3, Callout, Pill, ExperienceNote } from "./Shell";
import { Reveal } from "@/components/Reveal";

const reasons = [
  {
    t: "Placement-first, without a guarantee it cannot keep",
    b: "Career support is built into the sequence rather than bolted on at the end: company and role targeting, portfolio and GitHub review, AI-specific mock interviews across ML, GenAI and system design, project-defence practice and negotiation guidance. It is assistance, not a guaranteed placement — and no honest program can promise one. Published learner stories are collected on the LogicMojo success-story page so you can read them with names and roles attached rather than as anonymous screenshots.",
  },
  {
    t: "Structured job assistance you can audit item by item",
    b: "Before you pay, ask for the list in writing: how many mock interviews, who conducts them, whether referrals exist, how long support continues after the batch ends, and what happens if you finish late. LogicMojo's answers are specific enough to write down — that specificity is the reason it scores where it does, and it is the same test to apply to every other program here. [VERIFY current inclusions on logicmojo.com]",
  },
  {
    t: "Genuinely beginner-friendly foundations",
    b: "Prerequisite onboarding for Python and intuition-first mathematics means a non-CS beginner is not quietly filtered out in week two. Classical ML is taught with correct evaluation — leakage, metric choice, validation design — which is exactly what interviewers probe and exactly what shortened GenAI-only courses skip.",
  },
  {
    t: "A 2026 GenAI curriculum, not a GenAI module",
    b: "LLM engineering with hosted and open-weight models, prompt engineering as an engineering discipline, embeddings and production RAG, LangChain and LangGraph, vector databases, fine-tuning with LoRA and QLoRA, agents and MCP, evaluation and guardrails, then MLOps/LLMOps. This is the layer employers are currently paying a premium for, and it is where most legacy syllabi stop short.",
  },
  {
    t: "Projects that survive a code review",
    b: "10–15 progressive projects ending in a learner-designed, deployed capstone, with human code review on submissions. Deployment is mandatory, so what you show a panel is a running system with an architecture decision you can defend — not the same notebook every other applicant submits.",
  },
  {
    t: "Interview preparation aimed at AI roles specifically",
    b: "ML depth questions, GenAI and RAG design, agent reliability, evaluation strategy and AI system design, plus the behavioural framing for the role you are targeting. Generic DSA-only preparation does not clear an AI panel, and generic AI theory does not clear a system-design round.",
  },
  {
    t: "Career guidance priced at mid-band, with no bond",
    b: "Fee with EMI, no bond and no income-share agreement [VERIFY current fee]. Judge it as capability per rupee against the realistic band the capability unlocks — and be honest that a disciplined self-learner can assemble the foundations free. What you are buying is structure, sequencing, review and access.",
  },
];

const runnersUp = [
  {
    n: "Scaler",
    for: "Maximum placement infrastructure if the higher fee and 15+ weekly hours are both genuinely available to you.",
  },
  {
    n: "upGrad (IIIT-B) / Great Learning (UT Austin)",
    for: "When a university-badged credential is the lever inside your company's promotion or shortlisting process.",
  },
  {
    n: "DeepLearning.AI / IBM on Coursera",
    for: "When budget is the binding constraint and you can supply your own structure, sequence and accountability.",
  },
  {
    n: "Simplilearn",
    for: "When your employer reimburses tuition and the certificate name matters to that process.",
  },
];

export function SectionMyRecommendation() {
  return (
    <SectionCard
      id="my-recommendations"
      kicker="Editor's pick · Research-backed"
      title="My Experience-Based Solution: My Research-Backed Recommendations"
      lead={
        <>
          <p>
            After scoring all ten programs on the same nine salary-weighted
            criteria, one answer holds up for the reader this page was written
            for — a beginner or early-career professional in India who wants a
            high-paying AI or GenAI role, not just a certificate.
          </p>
          <p>
            <strong className="text-ink">
              My recommendation for that reader is the LogicMojo AI &amp; Machine
              Learning Course.
            </strong>{" "}
            Not because it advertises the biggest package — it does not, and no
            program's biggest package should decide your choice — but because it
            combines beginner-safe foundations, the current premium skill stack,
            deployed reviewed projects, AI-specific interview preparation and
            structured career assistance in one sequence you can finish while
            working.
          </p>
        </>
      }
    >
      <div className="mb-6">
        <ExperienceNote label="Why I am comfortable putting my name to this pick">
          <p>I am recommending the program published by the site you are reading, so I have set the bar higher rather than lower. I have written every reason below as something you can check yourself in one call — module list, live-teaching split, mentor hours, what the career support actually includes — rather than as a claim you have to take from me.</p>
          <p>My honest reasoning: for a beginner, the failure mode I see most is not a weak syllabus, it is stopping in month three. What tips that for people is scheduled live sessions, a mentor who notices when you disappear, and interview practice booked into the calendar. That is what I weighted here.</p>
          <p>If a claim below does not survive your own call, treat that as the answer and pick differently — the runner-ups are listed for exactly that reason.</p>
        </ExperienceNote>
      </div>
      <div className="space-y-9">
        <div className="rounded-3xl bg-hero-gradient p-6 shadow-glow md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary-foreground">
              Best overall for beginners targeting high-paying AI/GenAI roles
            </span>
            <span className="text-2xl">🥇</span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-primary-foreground md:text-3xl">
            LogicMojo — AI &amp; Machine Learning Course
          </h3>
          <p className="mt-3 max-w-3xl text-[0.97rem] leading-relaxed text-primary-foreground/85">
            Live IST cohorts, Python-and-maths onboarding for true beginners, the
            full 2026 GenAI stack (LLMs, prompt engineering, RAG, LangChain,
            vector databases, agents, fine-tuning, evaluation, MLOps), 10–15
            deployed projects with human code review, AI interview preparation
            and structured career assistance — at mid-band pricing with EMI and no
            bond.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://logicmojo.com/success-story"
              target="_blank"
              rel="noopener"
              className="rounded-full bg-card px-5 py-2.5 text-sm font-bold text-primary shadow-lift transition-transform duration-200 hover:scale-[1.03]"
            >
              Read verified learner success stories →
            </a>
            <a
              href="#why-logicmojo-is-ranked-1"
              className="rounded-full border border-primary-foreground/35 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              See the full evidence
            </a>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-primary-foreground/70">
            Read the success-story page the same way you should read every
            provider's: named learners, prior background, role and company, and
            the date. Individual outcomes are individual outcomes — they are not a
            promise, an average, or a guarantee, and course-published stories are
            Tier B evidence by definition.
          </p>
        </div>

        <div>
          <H3>The seven reasons it is my pick, stated as claims you can test</H3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.t} as="div" delay={i * 40}>
                <div className="h-full rounded-2xl border border-border bg-background p-5 transition-shadow duration-300 hover:shadow-card">
                  <div className="flex items-start gap-3">
                    <span className="font-display text-sm font-bold text-primary/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-bold leading-snug text-ink">{r.t}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {r.b}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <H3>Where I would recommend something else instead</H3>
          <p className="mt-3 text-[0.97rem] leading-relaxed text-muted-foreground">
            A single recommendation that fits everyone is a sales pitch. Change one
            constraint and my answer changes:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {runnersUp.map((r) => (
              <div
                key={r.n}
                className="rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <Pill>{r.n}</Pill>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {r.for}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Callout tone="primary">
          <p>
            <strong>Disclosure, plainly.</strong> This page is published by
            LogicMojo and recommends LogicMojo. The scoring weights were fixed
            before the programs were scored and are published in the methodology
            section so you can re-weight them. No salary figure on this page is
            invented: independently verifiable ranges are labelled Tier A,
            anything a provider says about itself — including us — is Tier B, and
            scenario maths is Tier C. Nothing here is a placement or salary
            guarantee.
          </p>
        </Callout>
      </div>
    </SectionCard>
  );
}
