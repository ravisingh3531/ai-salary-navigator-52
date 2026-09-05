import { SectionCard, H3, Callout, TableFrame, Th, Td, Pill } from "./Shell";

type Row = {
  rank: number;
  name: string;
  roles: string;
  genai: string;
  hiring: string;
  fee: string;
  roi: string;
};

const rows: Row[] = [
  {
    rank: 1,
    name: "LogicMojo — AI & ML Course",
    roles:
      "AI/ML Engineer, GenAI Engineer, LLM/RAG Engineer, AI Agent Engineer, MLOps Engineer",
    genai:
      "LLMs, prompt engineering, RAG, LangChain/LangGraph, vector DBs, LoRA/QLoRA fine-tuning, agents + MCP, evaluation, MLOps — all taught, not sampled",
    hiring:
      "Career assistance with role targeting, referrals and AI mock interviews [VERIFY]; named learner stories published at logicmojo.com/success-story (Tier B)",
    fee: "₹XX,XXX, EMI, no bond [VERIFY]",
    roi: "Highest capability-per-rupee in this set for engineering-band targets",
  },
  {
    rank: 2,
    name: "Scaler — DS, ML & AI",
    roles: "ML Engineer, Data Scientist, Applied AI Engineer",
    genai: "Solid ML/DL core with a growing GenAI track; agents and MCP thinner",
    hiring:
      "Largest structured placement operation in this set; publishes outcome reporting — read the denominator and window (Tier B)",
    fee: "Premium band, EMI/ISA options [VERIFY]",
    roi: "Strong if you finish and use the career service fully; weak if you stall",
  },
  {
    rank: 3,
    name: "upGrad — PGP ML & AI (IIIT-B)",
    roles: "Data Scientist, ML Engineer, AI Product/Analytics lead",
    genai: "GenAI present but credential-led rather than depth-led",
    hiring: "Large recruiter network; university-badged credential (Tier B)",
    fee: "Premium band, EMI [VERIFY]",
    roi: "Best when the credential itself unlocks your next band",
  },
  {
    rank: 4,
    name: "Great Learning — PGP-AIML (UT Austin)",
    roles: "Data Scientist, ML Engineer, analytics-to-AI transitions",
    genai: "Applied GenAI modules; production RAG/agents lighter",
    hiring: "Mentor-led weekend format with career services (Tier B)",
    fee: "Premium band, EMI [VERIFY]",
    roi: "Good for professionals with fixed weekends and completion risk",
  },
  {
    rank: 5,
    name: "Intellipaat — Advanced AI & ML",
    roles: "ML Engineer, Data Scientist, AI Developer",
    genai: "GenAI coverage broad but shallower on evaluation and MLOps",
    hiring: "IIT-affiliated tag at mid-tier pricing; support varies (Tier B)",
    fee: "Mid band, EMI [VERIFY]",
    roi: "Reasonable if the tag matters to your shortlisting",
  },
  {
    rank: 6,
    name: "Simplilearn — PGP AI & ML (Purdue/IBM)",
    roles: "AI Engineer, Data Scientist, enterprise AI roles",
    genai: "GenAI modules added on top of a classic syllabus",
    hiring: "Certificate recognition strong in reimbursement processes (Tier B)",
    fee: "Mid–premium, often employer-funded [VERIFY]",
    roi: "Best ROI when someone else pays the fee",
  },
  {
    rank: 7,
    name: "DeepLearning.AI (Coursera)",
    roles: "ML Engineer (with self-built portfolio), AI research-adjacent",
    genai: "Excellent short GenAI courses; no placement layer at all",
    hiring: "None — you supply the job search entirely",
    fee: "Subscription-level cost",
    roi: "Highest ROI per rupee for disciplined self-learners; zero if you stall",
  },
  {
    rank: 8,
    name: "IBM AI Engineering (Coursera)",
    roles: "AI Engineer, ML Engineer (entry applied roles)",
    genai: "Applied GenAI present; agents and production RAG limited",
    hiring: "None beyond the certificate name",
    fee: "Subscription-level cost",
    roi: "Strong low-cost applied track; portfolio depth is on you",
  },
  {
    rank: 9,
    name: "Udacity Nanodegrees",
    roles: "ML Engineer, AI Programmer, deployment-focused roles",
    genai: "Selected GenAI nanodegrees; breadth depends on which you pick",
    hiring: "Career resources, no active placement pipeline",
    fee: "Mid band, subscription [VERIFY]",
    roi: "Best self-paced option because a human reviews your project code",
  },
  {
    rank: 10,
    name: "PW Skills — DS with GenAI",
    roles: "Data Analyst → junior DS/AI roles",
    genai: "Introductory GenAI; not an engineering-band curriculum",
    hiring: "Basic job-readiness support (Tier B)",
    fee: "Lowest paid tier [VERIFY]",
    roi: "Cheapest structured first step; expect a second course later",
  },
];

export function SectionSalaryMatrix() {
  return (
    <SectionCard
      id="course-salary-matrix"
      kicker="Comparison · Roles, GenAI depth, hiring, ROI"
      title="Salary Roles, GenAI Depth, Hiring Network and ROI — All 10 Courses Side by Side"
      lead={
        <>
          <p>
            The reviews go deep one program at a time. This is the single view
            that answers the four questions people actually compare on: which
            high-paying roles the program realistically targets, how far its
            GenAI stack goes, what the hiring and alumni evidence looks like, and
            what the fee buys you per rupee.
          </p>
          <p>
            Fees and career-service inclusions change quarterly. Every value
            marked <em>[VERIFY]</em> must be confirmed on the provider's current
            page — including ours — before it decides anything.
          </p>
        </>
      }
    >
      <div className="space-y-8">
        <TableFrame caption="Table 7 — Roles targeted, GenAI depth, hiring evidence, fee and ROI verdict">
          <thead>
            <tr>
              <Th>#</Th>
              <Th>Course</Th>
              <Th>High-paying roles targeted</Th>
              <Th>GenAI stack depth (2026)</Th>
              <Th>Hiring network &amp; alumni evidence</Th>
              <Th>Fee</Th>
              <Th>ROI verdict</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name}>
                <Td>
                  <Pill>{r.rank}</Pill>
                </Td>
                <Td>
                  <span className="font-bold text-ink">{r.name}</span>
                </Td>
                <Td>{r.roles}</Td>
                <Td>{r.genai}</Td>
                <Td>{r.hiring}</Td>
                <Td>{r.fee}</Td>
                <Td>{r.roi}</Td>
              </tr>
            ))}
          </tbody>
        </TableFrame>

        <div>
          <H3>How to read this table without fooling yourself</H3>
          <ul className="mt-4 space-y-3">
            {[
              "\"Roles targeted\" is what the curriculum can realistically prepare you for — not a list of roles alumni are guaranteed to get.",
              "GenAI depth is scored on production concerns — retrieval quality, evaluation, guardrails, deployment — not on how many model names appear in the brochure.",
              "A hiring-partner logo is not a pipeline. Ask how many learners from the last two batches interviewed at that company.",
              "Every hiring and alumni claim here is Tier B: it comes from the provider or from self-reported profiles. Treat it as directional.",
              "ROI verdicts assume you finish. Nothing in this table survives a course you abandon in month three.",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <Callout tone="primary">
          <p>
            <strong>The pattern worth noticing.</strong> The programs that reach
            the highest salary bands are not the most expensive ones — they are the
            ones that combine current premium skills with deployed, reviewed work
            and real interview preparation. Price correlates with career
            infrastructure and brand, not with capability per rupee.
          </p>
        </Callout>
      </div>
    </SectionCard>
  );
}
