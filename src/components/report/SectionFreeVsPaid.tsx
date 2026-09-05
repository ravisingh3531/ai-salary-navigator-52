import { Callout, Prose, SectionCard, TableFrame, Td, Th } from "./Shell";

const freeStack = [
  {
    step: "1",
    name: "DeepLearning.AI (audit)",
    role: "ML and DL foundations, attention and transformers",
    cost: "Free to audit",
  },
  {
    step: "2",
    name: "Fast.ai",
    role: "Train working models early, top-down and practical",
    cost: "Free",
  },
  {
    step: "3",
    name: "Hugging Face courses",
    role: "Transformers, RAG patterns, agents, evaluation — current and practitioner-written",
    cost: "Free",
  },
  {
    step: "4",
    name: "Kaggle",
    role: "Messy data, competition feedback, public notebooks as a portfolio surface",
    cost: "Free",
  },
  {
    step: "5",
    name: "NPTEL / SWAYAM",
    role: "Mathematics and classical ML rigour from IIT faculty",
    cost: "Free",
  },
  {
    step: "6",
    name: "Official docs (PyTorch, LangGraph, FastAPI, Docker)",
    role: "Production patterns, deployment and the details interviews probe",
    cost: "Free",
  },
];

const cannotGive = [
  "Accountability when a work sprint eats your evenings",
  "Human code review that tells you what is actually wrong",
  "A curated sequence, so you stop re-learning the same layer",
  "Doubt resolution in hours instead of forum silence",
  "Interview and project-defence practice against a real person",
  "Hiring channels, referrals and Indian market context",
];

export function SectionFreeVsPaid() {
  return (
    <SectionCard
      id="free-vs-paid"
      kicker="Section 15 · Free vs paid"
      title="Free vs. Paid AI Courses — Does Paying More Mean Earning More?"
      lead={
        <>
          <p>
            <strong className="text-ink">Direct answer: no.</strong> Price does not
            predict salary outcome. The premium skill layers, the portfolio, interview
            readiness and completion do. There is no price point on this page that buys a
            band you cannot reach for free — only price points that make reaching it far
            more likely.
          </p>
        </>
      }
    >
      <div className="space-y-7">
        <TableFrame caption="The 2026 free stack, in the order to use it">
          <thead>
            <tr>
              <Th>Order</Th>
              <Th>Resource</Th>
              <Th>What it does for your salary case</Th>
              <Th>Cost</Th>
            </tr>
          </thead>
          <tbody>
            {freeStack.map((f) => (
              <tr key={f.name}>
                <Td strong>{f.step}</Td>
                <Td strong>{f.name}</Td>
                <Td>{f.role}</Td>
                <Td>{f.cost}</Td>
              </tr>
            ))}
          </tbody>
        </TableFrame>

        <div className="rounded-2xl border border-border bg-background p-5">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            What free cannot give you
          </p>
          <ul className="mt-3 grid gap-2.5 md:grid-cols-2">
            {cannotGive.map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <Callout label="The honest line">
          Paid courses in 2026 sell structure, feedback, sequence, accountability and
          access. If you can supply those yourself, free is the rational choice and you
          should keep the money. If you have started and stopped before, the structure is
          the product — and your salary outcome depends on it far more than on the
          syllabus you are comparing.
        </Callout>

        <Prose>
          <p>
            A useful test: write down the six things above and mark which you can
            genuinely self-supply for nine consecutive months. Score five or six and buy
            nothing. Score two or three and buy the format that fills the gaps — not the
            most expensive brand that appears in your search results.
          </p>
        </Prose>
      </div>
    </SectionCard>
  );
}
