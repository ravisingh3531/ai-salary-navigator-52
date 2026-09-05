import { SectionCard, H3, Callout, TableFrame, Th, Td, ExperienceNote } from "./Shell";

const numbers = [
  {
    k: "Highest package",
    what: "The single best offer any learner ever received, often an outlier, often a total-CTC figure including joining bonus, stock and variable pay.",
    use: "Marketing. It tells you the ceiling of one person's luck, network and prior experience.",
    ask: "Was that learner a fresher or a senior engineer with eight years of experience already?",
  },
  {
    k: "Average package",
    what: "Mean of reported offers. A handful of very high offers drags the mean far above what most learners see.",
    use: "Weak. Means are distorted by exactly the outliers used in the headline.",
    ask: "How many learners are in this average, and how many enrolled learners are excluded from it?",
  },
  {
    k: "Median package",
    what: "The middle number: half of reported learners got less, half got more.",
    use: "The only figure worth negotiating your expectations against.",
    ask: "What is the median of everyone who enrolled — not everyone deemed placement-eligible?",
  },
  {
    k: "Fixed vs. total CTC",
    what: "Fixed is what reaches your account monthly. Total CTC can include variable pay, stock, insurance and retention bonuses.",
    use: "Always convert brochure numbers to fixed before comparing anything.",
    ask: "Is this figure fixed pay, and over what period is the variable component earned?",
  },
];

const assistanceVsGuarantee = [
  [
    "Placement assistance",
    "A set of services: portfolio review, mock interviews, referrals, recruiter events, resume and LinkedIn work.",
    "Honest and normal. Judge it by the itemised list and by how long it lasts after the batch ends.",
  ],
  [
    "Placement guarantee",
    "A promise of a job, usually hedged with eligibility rules: attendance thresholds, assessment scores, a location list, a salary floor you must accept.",
    "Read the eligibility clauses before the promise. Most guarantees are refund policies wearing a job-offer costume.",
  ],
  [
    "Money-back guarantee",
    "A refund if no job within N months, subject to the same eligibility clauses.",
    "Check who judges eligibility, what documentation you must file, and the deadline for filing it.",
  ],
  [
    "Pay-after-placement / ISA",
    "You pay a share of salary after employment above a threshold.",
    "Compute the total rupees you would pay over the full term, not the monthly figure. It is often the most expensive option overall.",
  ],
];

const redFlags = [
  "Any salary number without a denominator, a date range and a fixed-vs-total-CTC definition.",
  "\"100% placement\" or \"guaranteed job\" — no education provider controls hiring decisions.",
  "Hiring-partner logo walls with no answer to \"how many learners interviewed there last quarter?\"",
  "Testimonials with first names and no verifiable role, company or date.",
  "A syllabus with no evaluation, guardrails, retrieval quality or deployment content — a 2023 course with 2026 model names pasted in.",
  "\"Live\" sessions that turn out to be recordings with a chat window.",
  "Countdown timers, \"two seats left\", and a fee that drops the moment you hesitate.",
  "EMI arranged as a third-party bank loan that keeps running whether or not you keep attending.",
  "Refund terms that exist only verbally, on a sales call, and never in the enrolment document.",
  "Career support that ends the day the batch ends — which is the day you actually start needing it.",
];

const verify = [
  {
    t: "Ask for the denominator in writing",
    b: "\"Of the learners who enrolled in batches that ended 6–18 months ago, how many are placed in AI/ML/GenAI roles, and what is the median fixed pay?\" A program that has the number will send it. A program that deflects has answered you anyway.",
  },
  {
    t: "Check alumni on LinkedIn yourself",
    b: "Search the program name, then filter to people who finished 12–24 months ago. Do they hold AI/ML/GenAI titles, or analytics roles with an AI keyword in the description? Look at ten profiles, not one.",
  },
  {
    t: "Read the one-star reviews specifically",
    b: "Five-star reviews tell you about the sales experience. One-star reviews tell you about billing, refunds, support latency and what career service delivers in month seven.",
  },
  {
    t: "Attend a live demo and check the slides",
    b: "Are the model names, frameworks and tooling current? Does the instructor answer a hard question live, or defer it? Is the session actually live?",
  },
  {
    t: "Ask a graduate directly",
    b: "Message two alumni from the last year. Ask what the career service actually did, and whether they would pay again.",
  },
  {
    t: "Price the alternative honestly",
    b: "Before paying, list what you could learn free in the same months. If the paid program's only advantage is content you could get free, you are buying content — not structure, review and access.",
  },
];

export function SectionBeyondMarketing() {
  return (
    <SectionCard
      id="beyond-marketing"
      kicker="Buyer's guide · Salary claims decoded"
      title="How to Choose an AI Course for the Highest Salary — and What to Look For Beyond Highest-Package Marketing"
      lead={
        <>
          <p>
            Almost every disappointing course purchase in India starts the same
            way: a learner compares headline packages instead of comparing what
            the program does. Salary follows capability, evidence of capability,
            and access to the rooms where hiring decisions get made. Marketing
            optimises for none of those.
          </p>
          <p>
            Here is the reading order that protects you: decode the number, decode
            the promise, price the ROI, then verify both against sources the
            provider does not control.
          </p>
        </>
      }
    >
      <div className="mb-6">
        <ExperienceNote label="The line that has cost the most people I have spoken to">
          <p>“Highest package”. Every time someone has quoted me a life-changing number from an ad, it has been a single outlier, usually a senior hire, sometimes total CTC with stock spread over four years. I now ask providers one question in writing: what is the median fixed component for learners from my background, in the last two cohorts? The quality of the answer tells you more than the brochure.</p>
          <p>Same with “assistance” versus “guarantee”. I have read the fine print on programs where the guarantee lapsed if you declined one offer, whatever the salary. Read the clause, not the badge.</p>
        </ExperienceNote>
      </div>
      <div className="space-y-9">
        <div>
          <H3>Step 1 — Highest vs. average vs. median: four numbers, one that matters</H3>
          <TableFrame caption="Table 8 — What each salary figure actually means">
            <thead>
              <tr>
                <Th>Figure</Th>
                <Th>What it is</Th>
                <Th>How much to trust it</Th>
                <Th>The question that tests it</Th>
              </tr>
            </thead>
            <tbody>
              {numbers.map((n) => (
                <tr key={n.k}>
                  <Td>
                    <span className="font-bold text-ink">{n.k}</span>
                  </Td>
                  <Td>{n.what}</Td>
                  <Td>{n.use}</Td>
                  <Td>{n.ask}</Td>
                </tr>
              ))}
            </tbody>
          </TableFrame>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Rule of thumb: plan your finances around the median fixed pay for the
            role and city you are targeting, treat the average as optimistic, and
            treat the highest package as entertainment.
          </p>
        </div>

        <div>
          <H3>Step 2 — Placement assistance vs. placement guarantee</H3>
          <TableFrame caption="Table 9 — Four career-support models, decoded">
            <thead>
              <tr>
                <Th>Model</Th>
                <Th>What you are actually buying</Th>
                <Th>How to evaluate it</Th>
              </tr>
            </thead>
            <tbody>
              {assistanceVsGuarantee.map(([a, b, c]) => (
                <tr key={a}>
                  <Td>
                    <span className="font-bold text-ink">{a}</span>
                  </Td>
                  <Td>{b}</Td>
                  <Td>{c}</Td>
                </tr>
              ))}
            </tbody>
          </TableFrame>
          <Callout tone="primary">
            <p>
              A program that says <em>"we assist, we do not guarantee"</em> and then
              itemises the assistance is more trustworthy than one that guarantees a
              job and buries the eligibility rules. Guarantees are a marketing
              instrument; assistance is a service you can audit.
            </p>
          </Callout>
        </div>

        <div>
          <H3>Step 3 — Price the ROI before you price the fee</H3>
          <div className="mt-4 rounded-2xl border border-border bg-background p-5 md:p-6">
            <p className="font-mono text-sm leading-relaxed text-ink">
              Real cost = fee + EMI interest + (weekly hours × months × your hourly
              value)
            </p>
            <p className="mt-2 font-mono text-sm leading-relaxed text-ink">
              Payback months = real cost ÷ realistic monthly increase in fixed pay
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Use the median band for the role you are targeting, not the headline.
              A ₹1.5L program that adds a realistic ₹25,000 to monthly fixed pay
              pays back in roughly six to eight months once EMI interest and time
              cost are included — and a ₹15,000 program you abandon in month three
              has an ROI of exactly minus one hundred percent. Completion is the
              variable with the largest effect on your return, which is why
              structure, live delivery and accountability are worth paying for if
              your own history says you need them.
            </p>
          </div>
        </div>

        <div>
          <H3>Step 4 — Ten red flags that should end the conversation</H3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {redFlags.map((f, i) => (
              <div
                key={f}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-card"
              >
                <span className="font-display text-sm font-bold text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{f}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <H3>Step 5 — Six ways to verify any claim in an afternoon</H3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {verify.map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-background p-5">
                <p className="font-bold leading-snug text-ink">{v.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.b}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Apply all six to LogicMojo too. A recommendation that cannot survive
            your own verification does not deserve your fee.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
