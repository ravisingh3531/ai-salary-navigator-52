import { SectionCard, H3, Callout, TableFrame, Th, Td, Pill, ExperienceNote } from "./Shell";

const criteria = [
  {
    c: "Salary data quality",
    w: "18%",
    what:
      "Whether the salary numbers a program leans on can be traced to a source with a denominator, a time window and a fixed-vs-total-CTC definition — or whether they are marketing highs.",
  },
  {
    c: "Placement outcomes",
    w: "16%",
    what:
      "What the career service actually does, week by week: referrals, mock interviews, portfolio review, recruiter access. Assistance is scored; guarantees are treated as a red flag, not a plus.",
  },
  {
    c: "Curriculum depth",
    w: "14%",
    what:
      "Python → maths → classical ML with correct evaluation → deep learning. Programs that skip evaluation, leakage and metrics lose points regardless of how modern the later modules look.",
  },
  {
    c: "GenAI relevance (2026)",
    w: "14%",
    what:
      "LLM engineering, prompt engineering, embeddings and production RAG, LangChain/LangGraph, vector databases, fine-tuning with LoRA/QLoRA, agents and MCP, evaluation and guardrails. This is the layer employers pay a premium for right now.",
  },
  {
    c: "Projects and industry readiness",
    w: "12%",
    what:
      "Are projects deployed and defensible, or notebook clones every applicant submits? Human code review counts heavily; auto-graded quizzes count for little.",
  },
  {
    c: "Mentorship and support",
    w: "8%",
    what:
      "Live instruction in IST, doubt resolution latency, mentor channels between sessions, and whether a real engineer ever reads your code.",
  },
  {
    c: "Hiring network",
    w: "8%",
    what:
      "Breadth and realism of the recruiter network, and whether 'hiring partners' means an active pipeline or a logo wall.",
  },
  {
    c: "Affordability",
    w: "5%",
    what:
      "Fee, EMI terms, whether the EMI is a bank loan that continues if you stop attending, bonds, and income-share agreements.",
  },
  {
    c: "Salary ROI",
    w: "5%",
    what:
      "Capability gained per rupee spent, measured against the realistic band the capability unlocks — not against the highest package ever announced.",
  },
];

const sources = [
  {
    s: "Official course websites",
    use: "Current syllabus, fee, duration, batch mode, career-service wording. Re-checked because syllabi and fees change quarterly.",
    limit: "Marketing surface. Everything here is Tier B at best.",
  },
  {
    s: "Published placement reports",
    use: "Where a program publishes one, the denominator, window and CTC definition are read before the headline number.",
    limit: "Rarely audited. A report without a denominator tells you nothing.",
  },
  {
    s: "LinkedIn alumni paths",
    use: "Do alumni actually hold AI/ML/GenAI titles 12–24 months after finishing, or analytics-adjacent roles with an AI keyword?",
    limit: "Self-reported, survivorship-biased. Directional signal only.",
  },
  {
    s: "Reddit and Quora threads",
    use: "Unpaid, unfiltered accounts of support latency, refund handling, sales pressure and what career service really delivers.",
    limit: "Anonymous and skewed to complaints. Used for patterns, never single stories.",
  },
  {
    s: "Review platforms",
    use: "Volume and recency of ratings, and specifically what one-star reviews say about billing and career support.",
    limit: "Incentivised reviews are common. Weighted low.",
  },
  {
    s: "YouTube walkthroughs and demo sessions",
    use: "Actual teaching quality, slide currency, and whether 'live' sessions are live.",
    limit: "Selected footage. Confirms delivery style, not outcomes.",
  },
  {
    s: "Public salary datasets and role listings",
    use: "Cross-checking role bands against live job descriptions and their stated skill requirements.",
    limit: "Aggregated, lagging, and city-skewed.",
  },
];

export function SectionMethodology() {
  return (
    <SectionCard
      id="methodology"
      kicker="Methodology · How the ranking was built"
      title="How I Researched & Ranked These 10 Highest-Salary AI Courses"
      lead={
        <>
          <p>
            A salary-focused ranking has to survive one question: where did the
            number come from? So the scoring deliberately rewards what is
            verifiable and what compounds into pay — curriculum depth, 2026 GenAI
            relevance, deployed and defensible projects, real mentorship, an
            active hiring network, honest fees — and it refuses to reward the
            highest package a program has ever announced.
          </p>
          <p>
            Nine criteria, fixed weights, applied identically to all ten
            programs. Where a claim could not be independently confirmed, it is
            labelled instead of quietly promoted.
          </p>
        </>
      }
    >
      <div className="mb-6">
        <ExperienceNote label="How I built this scorecard">
          <p>I started with a spreadsheet and no weights. I listed every criterion I had ever argued about with a hiring manager, then cut the ones I could not evidence. Weighting came last, and it came from rejection patterns: candidates I have seen fail loops mostly failed on evaluation depth and project defensibility, so curriculum depth, GenAI relevance and projects carry more than brand or fee.</p>
          <p>The uncomfortable part of doing this honestly is that the sources contradict each other. A provider's “average package” and the same role's median on a public aggregate were rarely within touching distance of one another. Where they clashed, I published both and told you which one I would plan my finances around.</p>
        </ExperienceNote>
      </div>
      <div className="space-y-9">
        <div>
          <H3>The nine scoring criteria and their weights</H3>
          <TableFrame>
            <thead>
              <tr>
                <Th>Criterion</Th>
                <Th>Weight</Th>
                <Th>What is actually measured</Th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c) => (
                <tr key={c.c}>
                  <Td>
                    <span className="font-bold text-ink">{c.c}</span>
                  </Td>
                  <Td>
                    <Pill>{c.w}</Pill>
                  </Td>
                  <Td>{c.what}</Td>
                </tr>
              ))}
            </tbody>
          </TableFrame>
        </div>

        <div>
          <H3>What was cross-checked, and how far each source can be trusted</H3>
          <TableFrame>
            <thead>
              <tr>
                <Th>Source</Th>
                <Th>What it was used for</Th>
                <Th>Where it stops being reliable</Th>
              </tr>
            </thead>
            <tbody>
              {sources.map((s) => (
                <tr key={s.s}>
                  <Td>
                    <span className="font-bold text-ink">{s.s}</span>
                  </Td>
                  <Td>{s.use}</Td>
                  <Td>{s.limit}</Td>
                </tr>
              ))}
            </tbody>
          </TableFrame>
        </div>

        <div>
          <H3>The evidence tiers used everywhere on this page</H3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              [
                "Tier A",
                "Independently verifiable",
                "Live job listings, public salary datasets, published and dated reports with a stated denominator.",
              ],
              [
                "Tier B",
                "Course-reported",
                "Anything a provider publishes about its own outcomes, including fees, syllabi and placement figures.",
              ],
              [
                "Tier C",
                "Illustrative",
                "Scenario maths used to show how a variable behaves. Not a prediction and not evidence.",
              ],
            ].map(([tier, label, body]) => (
              <div
                key={tier}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
                  {tier}
                </p>
                <p className="mt-1 font-display text-lg font-bold text-ink">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Callout tone="primary">
          <p>
            <strong>Disclosure.</strong> This page is published by LogicMojo, and
            LogicMojo is ranked first on it. The weights above were fixed before
            scoring and are shown so you can re-weight them for yourself — where a
            different weighting puts a different program first, that is stated in
            the relevant review rather than hidden. Every provider-specific figure
            marked <em>[VERIFY]</em> must be confirmed on that provider's current
            page before you rely on it, including ours.
          </p>
        </Callout>
      </div>
    </SectionCard>
  );
}
