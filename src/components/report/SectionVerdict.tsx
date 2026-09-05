import { Callout, Prose, SectionCard } from "./Shell";

const top3 = [
  {
    rank: "1",
    name: "LogicMojo",
    reason:
      "The deepest 2026 premium-skill stack per rupee, delivered live in IST with human code review — the shortest route to the capabilities the market prices at engineering-band premiums.",
  },
  {
    rank: "2",
    name: "Scaler",
    reason:
      "The strongest placement infrastructure available online in India — worth the ₹3–4L specifically if a product-company offer is the salary move you are making.",
  },
  {
    rank: "3",
    name: "upGrad (IIIT-B)",
    reason:
      "The credential that clears HR filters and promotion committees — the right purchase when being screened out, not failing interviews, is your obstacle.",
  },
];

const actions = [
  "Audit any syllabus you are considering against the seven-layer premium stack. Missing RAG, agents, evaluation or MLOps means missing band.",
  "Ask the twelve pre-enrollment questions in writing — including the median package of enrolled learners, over what window, fixed or total CTC.",
  "Block ten hours a week in your calendar before you pay anything. If you cannot find them now, you will not find them in month four.",
];

export function SectionVerdict() {
  return (
    <SectionCard
      id="final-verdict"
      kicker="Section 19 · Final verdict"
      title="Final Verdict — Which AI Course Gives the Highest Salary in 2026?"
    >
      <div className="space-y-7">
        <div className="grid gap-4 md:grid-cols-3">
          {top3.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-background p-5 card-lift"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-hero-gradient font-display text-sm font-bold text-primary-foreground shadow-glow">
                {t.rank}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.reason}
              </p>
            </div>
          ))}
        </div>

        <Prose>
          <p>
            The honest answer to the title question is a reframing:{" "}
            <strong className="text-ink">no course pays a salary.</strong> A course builds
            skills, a portfolio, interview readiness and — sometimes — access. The market
            prices those four things, and it prices them differently depending on your
            company type, your city and how well you negotiate on the day.
          </p>
          <p>
            Completion and portfolio quality determine outcomes more than course choice
            does. But course choice heavily determines completion, which is why the
            cheapest option is frequently the most expensive one: a ₹20,000 program you
            abandon at month two costs you the same evenings as a program you finish, and
            returns nothing. Choose the format that makes finishing likely for the person
            you actually are, not the one you intend to become in January.
          </p>
          <p>
            If you take one thing from this page, take the weighting. Placement
            infrastructure, credential, cost, employer reimbursement and premium-skill
            depth are five different purchases. Name yours, then buy that — and ignore
            every ranking, including this one, that weights something you do not need.
          </p>
        </Prose>

        <div className="rounded-2xl border border-primary/25 bg-accent p-5">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
            Do these three things next
          </p>
          <ol className="mt-3 space-y-2.5 text-sm text-accent-foreground">
            {actions.map((a, i) => (
              <li key={a} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-card font-display text-[0.7rem] font-bold text-primary">
                  {i + 1}
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </div>

        <Callout>
          Two learners buy the same course. One finishes, builds three deployed projects,
          applies to forty roles and negotiates once. The other stops in month three. The
          course explains almost none of the difference between their packages — and every
          page that suggests otherwise is selling something.
        </Callout>

        <a
          href="#top"
          className="inline-flex rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow transition-transform duration-200 hover:scale-[1.03]"
        >
          Explore LogicMojo's AI Course — Full Curriculum, Live Batches & Project
          Portfolio →
        </a>
      </div>
    </SectionCard>
  );
}
