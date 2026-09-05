import { Reveal } from "@/components/Reveal";
import { Callout, SectionCard } from "./Shell";

const flags = [
  ["Guaranteed job or guaranteed salary", "No provider controls an employer's hiring decision — the guarantee is either conditional in the fine print or meaningless."],
  ["\"Average package\" with no median or denominator", "One outlier alumnus can lift an average by lakhs; the median and the headcount are what you asked for."],
  ["\"Highest package\" with no prior-experience context", "A ₹45L offer to an alumnus with eight years at a product company is not a course outcome."],
  ["Placement percentage on \"eligible\" learners only", "Eligibility filters — attendance, assessments, mock scores — can quietly remove most of the cohort from the denominator."],
  ["Packages quoted as total CTC with variable and ESOPs folded in", "Ask for fixed CTC; variable pay and paper equity are not your monthly salary."],
  ["\"AI role\" applied to support or testing titles", "Placement into an AI-adjacent support seat is counted as an AI placement more often than you would expect."],
  ["Hiring-partner logos with no evidence of hires", "A logo wall proves a company exists, not that it interviewed a single alumnus."],
  ["\"Live\" that turns out to be recordings", "Ask to observe a real session before paying. A recorded core with monthly masterclasses is not a live cohort."],
  ["No last-updated date on the curriculum", "In a field that changed twice in 2025, an undated syllabus is a warning about the syllabus."],
  ["No RAG, agents, fine-tuning or MLOps in a 2026 syllabus", "The premium layers are missing, so the premium band is missing too."],
  ["\"10+ projects\" with no descriptions", "Unnamed projects are usually guided notebooks. Ask what you design versus what you follow."],
  ["Manufactured scarcity", "\"Two seats left\" and countdown timers are conversion tooling, not batch management."],
  ["Testimonials without full names, companies or LinkedIn", "Unverifiable praise is copywriting. Verifiable praise is evidence."],
  ["Refund window shorter than the first module, or hidden EMI terms", "If you cannot see the loan agreement before signing, you are not being sold a course."],
  ["Certificates presented as the primary outcome", "Nobody is paid a premium for a PDF. The portfolio and the interview carry the number."],
];

export function SectionRedFlags() {
  return (
    <SectionCard
      id="red-flags"
      kicker="Section 14 · Due diligence"
      title="Red Flags — How to Spot Inflated Salary and Placement Claims Before You Pay"
      lead={
        <p>
          Fifteen flags, each with the tell. None of them proves bad intent on its own —
          three together usually do.
        </p>
      }
    >
      <div className="space-y-6">
        <ul className="grid gap-3 md:grid-cols-2">
          {flags.map(([flag, tell], i) => (
            <Reveal as="li" key={flag} delay={Math.min(i * 30, 240)}>
              <div className="h-full rounded-2xl border border-border bg-background p-4 card-lift">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg font-display text-[0.72rem] font-bold text-primary-foreground"
                    style={{ background: "var(--warning)" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[0.92rem] font-bold leading-snug text-ink">
                      {flag}
                    </p>
                    <p className="mt-1.5 text-[0.86rem] leading-relaxed text-muted-foreground">
                      {tell}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
        <Callout tone="warning" label="On sales calls">
          Get everything in writing, never pay on the same call, and treat urgency as
          information about the seller. A provider confident in its program will happily
          let you think for two days.
        </Callout>
      </div>
    </SectionCard>
  );
}
