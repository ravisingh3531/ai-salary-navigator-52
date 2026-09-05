import { Reveal } from "@/components/Reveal";
import { Prose, SectionCard } from "./Shell";

const items = [
  {
    name: "GUVI (IIT-Madras incubated)",
    strength:
      "Vernacular instruction across Tamil, Telugu, Hindi and more, genuine Tier-2/3 accessibility, mobile-first delivery and low fees.",
    missed:
      "Outcomes cluster in the entry band. Advanced deep learning, agent frameworks and MLOps are thin, so the ceiling sits below the layers that carry premiums. For a first-generation learner in a smaller city it is often the right first step — just not a complete route to engineering-band pay on its own.",
  },
  {
    name: "Udemy AI / ML / GenAI bootcamps",
    strength:
      "₹500–₹3,000 during sales, and the best instructors update faster than any accredited program can.",
    missed:
      "No code review, no accountability, no cohort and no hiring channel. Quality swings wildly between instructors, and lifetime access quietly becomes lifetime postponement. Excellent as a targeted top-up on a specific tool; not a program that changes how a hiring panel sees you.",
  },
  {
    name: "Fast.ai",
    strength:
      "Free, and arguably the best top-down pedagogy in the field — you train a working model before you meet the theory.",
    missed:
      "It assumes real coding ability and offers no support, no structure enforcement and no mapping to Indian hiring. Learners who can finish it rarely needed a paid course; learners who need structure usually stall in lesson three.",
  },
  {
    name: "NPTEL / SWAYAM",
    strength:
      "Free, rigorous IIT instruction with genuine academic depth, especially in mathematics and classical ML.",
    missed:
      "Lecture-heavy with no portfolio, no deployment and no career pathway. Its highest-value use is as the mathematics supplement alongside a build-focused program, which is exactly how strong self-learners use it.",
  },
  {
    name: "IIT Madras BS in Data Science",
    strength:
      "A genuine online degree at outstanding value, with real assessment rigour and a formal qualification at the end.",
    missed:
      "It is a multi-year degree and not primarily an AI program. For students who want a formal qualification it is a serious option — but it answers a different question than 'how do I move my package in twelve months'.",
  },
  {
    name: "Google Cloud / AWS / Azure AI certifications",
    strength:
      "Authoritative, employer-recognised and directly valuable for cloud and platform roles.",
    missed:
      "Each is bound to a vendor ecosystem with limited modelling depth. As a supplement for MLOps-band candidates they are strong; as a primary AI education they teach you a console rather than a craft.",
  },
  {
    name: "Hugging Face courses",
    strength:
      "Free, current, practitioner-grade material on transformers, diffusion, agents and evaluation, written by people shipping the libraries.",
    missed:
      "They are topic modules rather than a sequenced program, with no assessment, portfolio or support. Strongly recommended as a supplement to any paid course — and rarely sufficient as the spine of a career move.",
  },
  {
    name: "Analytics Vidhya",
    strength:
      "A respected community with competitions, blackbelt-style programs and a genuinely useful content library.",
    missed:
      "Depth and outcome transparency vary by program, and career support is inconsistent. The community and competition side delivers more value for most readers than the paid tracks do.",
  },
  {
    name: "iNeuron and similar low-cost providers",
    strength:
      "Very low prices, occasionally with surprisingly broad syllabi and lifetime access.",
    missed:
      "Delivery consistency, support responsiveness and curriculum currency are all unreliable, and organisational churn has affected learner experience. When a program's price is its only argument, expect to supply the structure yourself.",
  },
  {
    name: "IISc/TalentSprint, IIM and IIT executive programs",
    strength:
      "Institutional prestige, senior peer cohorts and strong strategic framing for leaders.",
    missed:
      "Premium pricing for strategic rather than build-focused content. They are excellent for directors, product leaders and founders deciding where AI fits — and a poor purchase if the goal is an engineering-band offer.",
  },
];

export function SectionAlsoConsidered() {
  return (
    <SectionCard
      id="also-considered"
      kicker="Section 9 · Also considered"
      title="Also Considered — 10 Options That Didn't Make the Top 10 (And Why)"
      lead={
        <p>
          The lens here is the same one used throughout: salary impact for a general
          Indian learner. Several of these are excellent education — they simply do not
          add up to a route into the bands where AI premiums live.
        </p>
      }
    >
      <div className="space-y-4">
        {items.map((it, i) => (
          <Reveal key={it.name} delay={Math.min(i * 40, 240)}>
            <div className="rounded-2xl border border-border bg-background p-5 card-lift">
              <h3 className="font-display text-lg font-bold text-ink">{it.name}</h3>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary">
                    Genuine strength
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {it.strength}
                  </p>
                </div>
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Why it missed the top 10
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {it.missed}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
        <Prose>
          <p>
            Any of these can be exactly right for a specific reader — a Tamil-speaking
            fresher in Coimbatore, a platform engineer who needs one cloud certificate,
            a VP who needs to evaluate AI proposals. The ranking above optimises for one
            thing: salary-focused AI capability for a general Indian learner.
          </p>
        </Prose>
      </div>
    </SectionCard>
  );
}
