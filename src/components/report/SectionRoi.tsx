import { Reveal } from "@/components/Reveal";
import { Callout, Prose, SectionCard } from "./Shell";

const scenarios = [
  {
    tag: "Scenario A",
    title: "4-year software engineer, mid-band program, completes, switches to a product company",
    rows: [
      ["Fee", "₹40K–₹1.2L on EMI"],
      ["Hours", "10–15 a week for 6–9 months"],
      ["Outcome modelled", "Switch into an AI engineering band at a product company"],
      ["Payback period", "Short — typically within the first months of the new band"],
    ],
    note:
      "The highest-probability scenario on this list, and it still depends on two things the course cannot do for you: finishing, and a portfolio that survives questioning.",
    tone: "success" as const,
  },
  {
    tag: "Scenario B",
    title: "IT-services engineer, same program, moves to a GCC",
    rows: [
      ["Fee", "₹40K–₹1.2L on EMI"],
      ["Hours", "10–15 a week, often alongside shift constraints"],
      ["Outcome modelled", "GCC engineering band — the company-type lever, not just the skill lever"],
      ["Payback period", "Short, because the band jump is structural rather than incremental"],
    ],
    note:
      "Model the company-type lever explicitly: two engineers with identical skills are priced differently by services and GCC employers. Much of this delta is bought with interview readiness, not extra syllabus.",
    tone: "success" as const,
  },
  {
    tag: "Scenario C",
    title: "Non-tech switcher, ₹2L credential program, entry AI role",
    rows: [
      ["Fee", "₹1.5L–₹2.5L, often on no-cost EMI"],
      ["Hours", "8–12 a week for 9–12 months, plus prerequisite coding time"],
      ["Outcome modelled", "Entry AI or analyst-adjacent band after 9–15 months"],
      ["Payback period", "Long, with high variance across individuals"],
    ],
    note:
      "The credential genuinely helps clear HR screening. Said plainly: this path is slower than the marketing suggests, and the programming gap — not the syllabus — is what determines whether it works.",
    tone: "warning" as const,
  },
  {
    tag: "Scenario D",
    title: "Enrols in a ₹2L program and stops at month three",
    rows: [
      ["Fee", "₹1.5L–₹2.5L — already committed"],
      ["Hours", "≈100 hours spent, no portfolio produced"],
      ["Outcome modelled", "No band movement whatsoever"],
      ["Payback period", "Never — the EMI continues regardless"],
    ],
    note:
      "This is the most common scenario in Indian EdTech and almost no comparison article models it. If the loan is a bank product, it does not pause when you do. Include this in your own maths before you sign anything.",
    tone: "warning" as const,
  },
];

const factors = [
  {
    name: "Completion",
    weight: "Most of the variance",
    text: "Everything else is conditional on this. Choose the format that makes finishing likely for you, even if a cheaper format looks more rational on a spreadsheet.",
  },
  {
    name: "Portfolio quality",
    weight: "The second lever",
    text: "Three deployed, defensible projects outperform twelve tutorials. Panels price what you can explain going wrong, not what ran once.",
  },
  {
    name: "Application & negotiation effort",
    weight: "The ignored lever",
    text: "Referrals, targeted applications, interview volume and one uncomfortable negotiation conversation routinely move the number more than an extra module would.",
  },
];

export function SectionRoi() {
  return (
    <SectionCard
      id="roi-reality"
      kicker="Section 11 · ROI"
      title="ROI Reality — Is an AI Course Worth It for Salary in India?"
      lead={
        <>
          <div className="rounded-2xl bg-soft-gradient p-5 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              The formula, stated once
            </p>
            <p className="mt-2 font-display text-[1.05rem] font-bold leading-snug text-ink">
              ROI = (realistic salary delta over 24 months × probability of achieving it)
              − (fee + EMI interest + opportunity cost of hours)
            </p>
          </div>
          <p>
            Four worked scenarios below, all{" "}
            <strong className="text-ink">[ILLUSTRATIVE / VERIFY]</strong>. They are
            modelled against the Tier A bands cited earlier, and the probability term is
            the part most articles quietly set to 1.0.
          </p>
        </>
      }
    >
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          {scenarios.map((s, i) => (
            <Reveal key={s.tag} delay={Math.min(i * 70, 220)}>
              <div
                className="h-full rounded-2xl border border-border bg-background p-5 card-lift"
                style={{
                  borderLeftWidth: 4,
                  borderLeftColor:
                    s.tone === "success" ? "var(--success)" : "var(--warning)",
                }}
              >
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
                  {s.tag}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink">
                  {s.title}
                </h3>
                <dl className="mt-4 space-y-2 text-sm">
                  {s.rows.map(([k, v]) => (
                    <div key={k} className="flex gap-3">
                      <dt className="w-28 shrink-0 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                        {k}
                      </dt>
                      <dd className="text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 rounded-xl bg-surface p-3.5 text-[0.88rem] leading-relaxed text-ink">
                  {s.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {factors.map((f, i) => (
            <Reveal key={f.name} delay={i * 90}>
              <div className="h-full rounded-2xl border border-primary/25 bg-accent p-5">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary">
                  {f.weight}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold text-ink">
                  {f.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-accent-foreground">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Callout>
          The course is roughly 40% of your salary outcome. What you build during it, and
          what you do in the three months after — applications, referrals, interviews,
          negotiation — is the other 60%. Any page that says otherwise is selling
          something.
        </Callout>

        <Prose>
          <p>
            One practical consequence: before comparing two fees, compare your honest
            probability of finishing each format. A ₹1L live cohort you complete beats a
            ₹20K self-paced course you abandon, and both lose to a free stack you
            actually work through — which is why the free option is treated seriously
            further down this page.
          </p>
        </Prose>
      </div>
    </SectionCard>
  );
}
