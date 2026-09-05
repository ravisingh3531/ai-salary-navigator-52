import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  Callout,
  H3,
  Pill,
  Prose,
  SectionCard,
  TableFrame,
  Td,
  Th,
} from "./Shell";

type Module = {
  n: number;
  name: string;
  covers: string;
  can: string;
  signal?: string;
};

const modules: Module[] = [
  {
    n: 1,
    name: "Programming & Data Foundations",
    covers:
      "Python for AI, NumPy, pandas, SQL, Git/GitHub, Colab, virtual environments and reproducible setups.",
    can: "Work like an engineer on real data, not like a student on a clean CSV.",
    signal: "Prerequisite for every engineering band — no premium starts below it.",
  },
  {
    n: 2,
    name: "Mathematics for AI (intuition-first)",
    covers:
      "Linear algebra, gradients and derivatives, probability, statistics, hypothesis testing — taught visually, then in code.",
    can: "Reason about why a model behaves the way it does, not just what it output.",
    signal:
      "The difference between “I ran the model” and “I understand the model” in interviews.",
  },
  {
    n: 3,
    name: "Core Machine Learning",
    covers:
      "Regression, trees, ensembles, XGBoost, SVMs, clustering, PCA, feature engineering, cross-validation, regularisation, class imbalance, metric selection.",
    can: "Build, tune and correctly evaluate models on messy, imbalanced, real data.",
    signal: "“Why this metric?” — asked at every band, failed at most of them.",
  },
  {
    n: 4,
    name: "Deep Learning",
    covers:
      "Backpropagation, optimisers, CNNs, RNNs/LSTMs, transfer learning, PyTorch end-to-end, GPU practicalities and memory limits.",
    can: "Train and debug real networks, including when loss refuses to move.",
    signal: "Proves you have trained something, not described it.",
  },
  {
    n: 5,
    name: "Natural Language Processing",
    covers:
      "Tokenisation, embeddings, text classification, NER, attention, transformer architecture (intuition → visual → code), Hugging Face.",
    can: "Explain a transformer at a whiteboard and build on pre-trained models.",
    signal: "Attention explained plainly is a standard screening question.",
  },
  {
    n: 6,
    name: "Computer Vision",
    covers:
      "CNN architectures, object detection, segmentation, vision transformers, augmentation pipelines.",
    can: "Fine-tune a vision model on a custom dataset you collected yourself.",
  },
  {
    n: 7,
    name: "Generative AI & LLMs",
    covers:
      "Training vs. inference, tokens and context windows, prompting basic → advanced, OpenAI/Anthropic/Google APIs, open-weight models (Llama, Mistral, Qwen, Gemma, DeepSeek), local inference with Ollama, cost/latency trade-offs.",
    can: "Build production-quality LLM applications and choose models against real constraints.",
    signal: "“When would you not use a hosted API?” — a budget and privacy question.",
  },
  {
    n: 8,
    name: "Embeddings, Vector DBs & RAG",
    covers:
      "ChromaDB/Pinecone/Qdrant, chunking strategy, hybrid search, re-ranking, query decomposition, RAG evaluation, production concerns.",
    can: "Architect and defend a production RAG system end to end.",
    signal:
      "The most common GenAI screening topic in India in 2026 — and the most commonly failed.",
  },
  {
    n: 9,
    name: "Fine-Tuning & Adaptation",
    covers:
      "Prompt vs. RAG vs. fine-tune decision framework, SFT, LoRA/QLoRA, DPO/RLHF concepts, evaluation, compute realities.",
    can: "Adapt an open-weight model and prove with numbers that it improved.",
    signal: "The decision, not the code, is what gets priced.",
  },
  {
    n: 10,
    name: "AI Agents",
    covers:
      "Planning, ReAct, tool use, memory, failure modes, cost control, agent evaluation.",
    can: "Build agents that reliably act instead of looping expensively.",
  },
  {
    n: 11,
    name: "Agent Frameworks & MCP",
    covers:
      "LangGraph, CrewAI, AutoGen, OpenAI Agents SDK with a when-to-use-which comparison; MCP concepts, custom tools, integration patterns.",
    can: "Work with exactly what Indian teams are adopting in 2026.",
    signal: "The fastest-growing requirement in GenAI job descriptions.",
  },
  {
    n: 12,
    name: "LLM Evaluation, Guardrails & Responsible AI",
    covers:
      "Evaluation methodology, LLM-as-judge and its pitfalls, hallucination detection, guardrails, PII handling, governance.",
    can: "Answer “how do you know it works?” with a harness, not an opinion.",
  },
  {
    n: 13,
    name: "MLOps & LLMOps",
    covers:
      "MLflow/W&B, model registries, packaging, FastAPI, Docker, CI/CD, cloud deployment, monitoring and drift, LLM observability, prompt versioning, cost optimisation.",
    can: "Run a model as a service that other people depend on.",
    signal: "The capability that most separates engineer-band candidates from the rest.",
  },
  {
    n: 14,
    name: "AI System Design & Interview Prep",
    covers:
      "Design cases, trade-off reasoning, scaling, project defence, GitHub portfolio construction, resume positioning, negotiation basics.",
    can: "Defend your work under pressure — and negotiate on it afterwards.",
  },
  {
    n: 15,
    name: "Capstone",
    covers:
      "Learner-designed, deployed AI system with documentation, an evaluation harness and a written architecture rationale.",
    can: "Walk into a technical round with something nobody else in the queue has.",
  },
];

const skillMap = [
  {
    skill: "Production RAG (chunking, hybrid retrieval, re-ranking, evaluation)",
    taught: "Rarely — a demo notebook at best",
    tested: "Almost every GenAI screen in India",
    lm: "Deep",
  },
  {
    skill: "Fine-tuning & adaptation (LoRA/QLoRA, SFT, the decision framework)",
    taught: "Occasionally, at concept level",
    tested: "Engineering and senior bands",
    lm: "Deep",
  },
  {
    skill: "Agents, frameworks & MCP (LangGraph, CrewAI, AutoGen, Agents SDK)",
    taught: "Very rarely, usually as one recorded module",
    tested: "The fastest-growing 2026 requirement",
    lm: "Comprehensive",
  },
  {
    skill: "Open-weight models & local inference (Llama, Mistral, Qwen, Ollama)",
    taught: "Almost never",
    tested: "Cost, privacy and on-prem conversations",
    lm: "Deep",
  },
  {
    skill: "Evaluation & guardrails (LLM-as-judge, hallucination detection)",
    taught: "Skipped",
    tested: "“How do you know it works?”",
    lm: "Deep",
  },
  {
    skill: "MLOps / LLMOps (FastAPI, Docker, CI/CD, monitoring, drift, cost)",
    taught: "Touched, not taught",
    tested: "Every engineer-band loop",
    lm: "Deep",
  },
  {
    skill: "AI system design & trade-off reasoning",
    taught: "Absent outside CS bootcamps",
    tested: "The round that sets your number",
    lm: "Comprehensive",
  },
];

const projects = [
  "EDA on a deliberately messy dataset",
  "End-to-end ML system with correct evaluation",
  "Feature engineering and model comparison study",
  "Transfer-learning image classifier",
  "Object detection application",
  "Transformer-based NLP classifier",
  "First LLM app with structured outputs and error handling",
  "Semantic search engine with retrieval evaluation",
  "Production-style RAG app: chunking, hybrid retrieval, re-ranking, citations, eval harness",
  "Fine-tuned domain model benchmarked against base",
  "Tool-using agent with memory and failure handling",
  "Multi-agent workflow with cost and reliability control",
  "Multi-modal application",
  "Deployed AI service: FastAPI + Docker + cloud + monitoring",
  "Learner-designed capstone with architecture rationale",
];

const delivery = [
  "Genuinely live IST batches — evening and weekend — with real instructors, not recordings relabelled as live",
  "In-session doubt resolution plus mentor channels between classes",
  "Human code review on submissions, not an auto-grader",
  "Recordings with a structured catch-up path when work explodes",
  "Cohort accountability: you are visible to a group that notices when you stop",
  "Prerequisite onboarding for Python and mathematics before the main sequence",
  "Batch deferral and transfer options",
  "Continuous curriculum refresh — agents, MCP and open-weight models were added as the market moved",
];

const career = [
  "AI-role-specific interview preparation: ML, GenAI, system design and case rounds",
  "Project defence practice — being asked what broke and what you changed",
  "Portfolio and GitHub review before you start applying",
  "Resume positioning for AI/ML/GenAI titles rather than generic developer titles",
  "Career guidance on company type and role targeting (product vs. GCC vs. services)",
  "Negotiation guidance [VERIFY against the current LogicMojo page]",
  "No bond, no income-share agreement",
];

const roiBands = [
  {
    band: "₹0",
    market: "MOOC audits, Fast.ai, Kaggle, NPTEL",
    capability: "Level 2–3, with heavy self-direction",
    salary: "Analyst / junior with a self-built portfolio",
    lm: false,
  },
  {
    band: "₹500–₹5K",
    market: "Udemy courses, single MOOC certificates",
    capability: "Level 2",
    salary: "Little movement on its own",
    lm: false,
  },
  {
    band: "₹5K–₹40K",
    market: "PW Skills, entry bootcamps",
    capability: "Level 2–3",
    salary: "Entry band",
    lm: false,
  },
  {
    band: "₹40K–₹1.2L",
    market: "Mid-tier bootcamps and specialists",
    capability: "Level 3–4 where delivery is strong",
    salary: "Engineering bands, where premiums begin",
    lm: true,
  },
  {
    band: "₹1.2L–₹2.5L",
    market: "upGrad, Great Learning, Simplilearn, Intellipaat premium",
    capability: "Level 3–4",
    salary: "Credential clears filters; band still depends on portfolio",
    lm: false,
  },
  {
    band: "₹2.5L+",
    market: "Scaler, IIT/IIM executive programs",
    capability: "Level 4 (Scaler) / literacy (executive)",
    salary: "Product-company access via placement operations",
    lm: false,
  },
];

const bestFit = [
  "Engineers with 2–10 years moving into AI/ML/GenAI engineering bands",
  "IT-services professionals targeting product companies and GCC roles",
  "Analysts moving up to ML/DS pay",
  "Self-taught learners who need structure, code review and a portfolio",
  "Seniors adding agents, RAG and AI system design to existing depth",
  "Career switchers who want engineering capability, not an overview",
];

const redirects = [
  ["Placement infrastructure and partner access is the primary purchase", "Scaler"],
  [
    "Your promotion process, employer or visa pathway specifically values a university credential",
    "upGrad (IIIT-B) or Great Learning (UT Austin)",
  ],
  ["Your employer is reimbursing and HR recognition is the goal", "Simplilearn"],
  ["You are fully self-directed with time rather than budget", "DeepLearning.AI plus self-built projects"],
  ["You are a fresher testing whether AI is for you under ₹15K", "PW Skills"],
  [
    "Your schedule genuinely cannot accommodate any live session",
    "A self-paced track with human project review (Udacity), then return for depth",
  ],
];

export function SectionLogicMojo() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <SectionCard
      id="why-logicmojo-is-ranked-1"
      kicker="Section 7 · Editor's deep dive"
      title="Why LogicMojo Is Ranked #1 for Salary-Focused AI Career Growth (2026)"
      lead={
        <>
          <p>
            <strong className="text-ink">
              The criteria are stated openly, because a different weighting produces
              a different winner.
            </strong>{" "}
            Weight placement infrastructure and product-company partner access and
            Scaler wins. Weight the academic credential and it is upGrad (IIIT-B) or
            Great Learning (UT Austin). Weight cost alone and DeepLearning.AI and IBM
            win outright. Weight employer reimbursement and HR recognition and it is
            Simplilearn.
          </p>
          <p>
            LogicMojo ranks #1 here because this page weights the levers that actually
            move an Indian learner's package: premium-skill curriculum depth, an
            interview-defensible portfolio, technical interview preparation, AI-role
            career support and completion likelihood — all measured{" "}
            <em>relative to fee and hours</em>. On that composite it scored highest. It
            is the only program on this list rated Deep or Comprehensive across every
            2026 premium layer — production RAG, fine-tuning, agents and frameworks,
            MCP, open-weight models, MLOps/LLMOps and AI system design — delivered live
            in IST with human code review, at mid-band pricing with no bond and no ISA.
          </p>
          <p>
            <strong className="text-ink">Disclosure:</strong> this page is published on
            a LogicMojo property. The scoring pillars, weights and evidence tiers are
            published above so you can re-weight them and reach your own answer.
          </p>
        </>
      }
    >
      <div className="space-y-12">
        {/* 1 — Curriculum */}
        <div className="space-y-5">
          <H3>1) Does the curriculum target the skills employers pay a premium for?</H3>
          <Prose>
            <p>
              Fifteen modules, each listed with what you can <em>do</em> at the end and
              the salary signal it sends. Tap any module to open it.
            </p>
          </Prose>
          <ul className="space-y-2.5">
            {modules.map((m, i) => {
              const isOpen = open === m.n;
              return (
                <Reveal as="li" key={m.n} delay={Math.min(i * 25, 200)}>
                  <div
                    className={`overflow-hidden rounded-2xl border transition-colors ${
                      isOpen ? "border-primary/35 bg-accent" : "border-border bg-background hover:bg-surface"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : m.n)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
                    >
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg font-display text-sm font-bold ${
                          isOpen
                            ? "bg-hero-gradient text-primary-foreground shadow-glow"
                            : "bg-surface-strong text-primary"
                        }`}
                      >
                        {m.n}
                      </span>
                      <span className="flex-1 text-[0.95rem] font-bold text-ink">
                        {m.name}
                      </span>
                      <span className="text-primary">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen ? (
                      <div className="space-y-3 border-t border-border/70 px-4 py-4 text-sm leading-relaxed">
                        <p className="text-muted-foreground">{m.covers}</p>
                        <p className="text-ink">
                          <strong>You can now:</strong> {m.can}
                        </p>
                        {m.signal ? (
                          <p className="rounded-xl bg-card px-3 py-2 text-[0.85rem] font-medium text-primary shadow-card">
                            Salary signal — {m.signal}
                          </p>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <TableFrame caption="Visual 3 — What most AI courses teach vs. what premium-paying employers test">
            <thead>
              <tr>
                <Th>Premium skill layer</Th>
                <Th>What most courses teach</Th>
                <Th>What employers actually test</Th>
                <Th>LogicMojo coverage</Th>
              </tr>
            </thead>
            <tbody>
              {skillMap.map((r) => (
                <tr key={r.skill}>
                  <Td strong>{r.skill}</Td>
                  <Td>{r.taught}</Td>
                  <Td>{r.tested}</Td>
                  <Td strong>
                    <Pill tone="primary">{`✅ ${r.lm}`}</Pill>
                  </Td>
                </tr>
              ))}
            </tbody>
          </TableFrame>
        </div>

        {/* 2 — Projects */}
        <div className="space-y-5">
          <H3>
            2) Does the practical learning produce a portfolio that survives a
            technical round?
          </H3>
          <Prose>
            <p>
              Ten to fifteen progressive projects, guided at first and independent by
              the end — each one defensible in an interview and publishable on GitHub.
              Human code review on submissions; deployment is mandatory, not optional.
            </p>
          </Prose>
          <ol className="grid gap-2.5 sm:grid-cols-2">
            {projects.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-3 text-sm text-muted-foreground card-lift"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-surface-strong font-display text-[0.7rem] font-bold text-primary">
                  {i + 1}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
          <Callout label="Why this matters for salary">
            Interviewers at product companies and GCCs price the candidate who can
            explain what broke and what they changed. Twelve copy-along notebooks are
            worth less than three projects you designed, broke, debugged and deployed.
          </Callout>
        </div>

        {/* 3 — Delivery */}
        <div className="space-y-5">
          <H3>3) Is the delivery built for people who have to finish?</H3>
          <ul className="grid gap-2.5 md:grid-cols-2">
            {delivery.map((d) => (
              <li
                key={d}
                className="flex gap-3 rounded-xl bg-surface p-3.5 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <Prose>
            <p>
              Completion is the precondition for any salary outcome. This delivery
              model is as much the reason for the ranking as the syllabus is.
            </p>
          </Prose>
          <Callout tone="warning" label="Test this yourself">
            Ask any provider, including this one: Can I sit in on a real class? Who
            teaches my batch? What is the doubt-resolution SLA? Does a human review my
            code? Can I defer if work explodes?
          </Callout>
        </div>

        {/* 4 — Career */}
        <div className="space-y-5">
          <H3>
            4) Does the interview preparation and career assistance target premium
            roles?
          </H3>
          <ul className="space-y-2.5">
            {career.map((c) => (
              <li
                key={c}
                className="flex gap-3 rounded-xl border border-border bg-background p-3.5 text-sm text-muted-foreground"
              >
                <span className="font-bold text-primary">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <Callout tone="warning">
            This is career assistance, not a guaranteed placement. This page makes no
            outcome promise, publishes no placement percentage of its own, and any
            provider figure quoted anywhere here is labelled Tier B with what it
            omits.
          </Callout>
        </div>

        {/* 5 — ROI */}
        <div className="space-y-5">
          <H3>5) What is the ROI case — honestly framed?</H3>
          <TableFrame caption="Price band vs. capability reached vs. salary band typically unlocked">
            <thead>
              <tr>
                <Th>Price band (₹)</Th>
                <Th>What the market offers</Th>
                <Th>Capability typically reached</Th>
                <Th>Salary band typically unlocked</Th>
                <Th>LogicMojo</Th>
              </tr>
            </thead>
            <tbody>
              {roiBands.map((r) => (
                <tr key={r.band} className={r.lm ? "bg-accent/60" : undefined}>
                  <Td strong>{r.band}</Td>
                  <Td>{r.market}</Td>
                  <Td>{r.capability}</Td>
                  <Td>{r.salary}</Td>
                  <Td strong>
                    {r.lm
                      ? "LogicMojo — full-stack 2026 curriculum, live IST mentorship, 10–15 projects, interview prep"
                      : "—"}
                  </Td>
                </tr>
              ))}
            </tbody>
          </TableFrame>
          <div className="rounded-2xl bg-soft-gradient p-5 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              The value formula
            </p>
            <p className="mt-2 font-display text-lg font-bold text-ink">
              (capability level reached × probability of completion) ÷ (₹ spent +
              hours spent)
            </p>
          </div>
          <Prose>
            <p>
              Said plainly: programs at three to five times the price generally do{" "}
              <em>not</em> reach a higher capability ceiling. They buy brand, placement
              infrastructure or an academic credential. Those are legitimate purchases —
              you should simply know which one you are making.
            </p>
          </Prose>
          <Callout>
            For a working professional the scarcer resource is not money — it is the
            8–12 weekly hours you will spend for months. A course costing ₹40,000
            less but teaching a 2023 stack does not save money; it costs the same hours
            and returns an analyst-band outcome.
          </Callout>
        </div>

        {/* 6 — Fit */}
        <div className="space-y-5">
          <H3>
            6) Who is LogicMojo the right fit for — and when another program serves you
            better
          </H3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/30 bg-accent p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Best fit
              </p>
              <ul className="mt-3 space-y-2 text-sm text-accent-foreground">
                {bestFit.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Choose differently if…
              </p>
              <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                {redirects.map(([when, who]) => (
                  <li key={when}>
                    <span>{when}</span>
                    <span className="mt-1 block font-bold text-ink">→ {who}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a
            href="#final-verdict"
            className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-glow transition-transform duration-200 hover:scale-[1.03]"
          >
            Explore the full LogicMojo AI course curriculum, batch schedule and project
            list →
          </a>
        </div>
      </div>
    </SectionCard>
  );
}
