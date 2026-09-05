import { Reveal } from "@/components/Reveal";
import { reviews, type Review } from "./reviewData";
import { Callout, H3, Pill, SectionCard } from "./Shell";

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[0.78rem] font-medium text-muted-foreground">
          {label}
        </span>
        <span className="font-display text-sm font-bold text-ink">
          {value.toFixed(1)}
        </span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-surface-strong">
        <div
          className="h-full rounded-full bg-hero-gradient transition-[width] duration-700"
          style={{ width: `${value * 10}%` }}
        />
      </div>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-primary">
        {title}
      </p>
      <p className="mt-1.5 text-[0.94rem] leading-relaxed text-muted-foreground">
        {body}
      </p>
    </div>
  );
}

function List({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "good" | "bad";
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        tone === "good" ? "border-primary/30 bg-accent" : "border-border bg-background"
      }`}
    >
      <p
        className={`text-[0.72rem] font-bold uppercase tracking-[0.14em] ${
          tone === "good" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                tone === "good" ? "bg-primary" : "bg-muted-foreground"
              }`}
            />
            <span className={tone === "good" ? "text-accent-foreground" : "text-muted-foreground"}>
              {it}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <Reveal as="article">
      <div
        id={`review-${r.rank}`}
        className={`scroll-mt-24 overflow-hidden rounded-3xl border shadow-card ${
          r.rank === 1 ? "border-primary/40" : "border-border"
        }`}
      >
        <header
          className={`p-6 md:p-7 ${
            r.rank === 1 ? "bg-hero-gradient" : "bg-surface"
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl font-display text-lg font-bold ${
                r.rank === 1
                  ? "bg-primary-foreground/15 text-primary-foreground backdrop-blur"
                  : "bg-card text-primary shadow-card"
              }`}
            >
              {r.medal ?? r.rank}
            </span>
            <div>
              <p
                className={`text-[0.7rem] font-bold uppercase tracking-[0.16em] ${
                  r.rank === 1 ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                Rank #{r.rank} · Overall {r.scores.overall.toFixed(1)}/10
              </p>
              <h3
                className={`mt-1 font-display text-xl font-bold leading-tight md:text-2xl ${
                  r.rank === 1 ? "text-primary-foreground" : "text-ink"
                }`}
              >
                {r.name}
              </h3>
            </div>
          </div>
          <p
            className={`mt-4 text-sm leading-relaxed ${
              r.rank === 1 ? "text-primary-foreground/85" : "text-muted-foreground"
            }`}
          >
            {r.tagline}
          </p>
        </header>

        <div className="space-y-6 bg-card p-6 md:p-7">
          <Block title="1 · Overview & salary positioning" body={r.overview} />
          <Block title="2 · Salary-relevant curriculum" body={r.curriculum} />
          {r.tools ? <Block title="Tools covered" body={r.tools} /> : null}
          <Callout label="Premium-layer verdict">{r.premiumVerdict}</Callout>
          <Block title="3 · Projects & interview readiness" body={r.projects} />
          <Block title="4 · Delivery & completion likelihood" body={r.delivery} />
          <Block
            title="5 · Placement, career support & outcome transparency"
            body={r.support}
          />
          <Block title="6 · Fees, EMI & salary ROI" body={r.fees} />

          <div className="grid gap-4 md:grid-cols-2">
            <List title="7 · Who this is best for" items={r.bestFor} tone="good" />
            <List
              title="8 · Who should choose differently"
              items={r.chooseDifferently}
              tone="bad"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <List title="9 · Pros" items={r.pros} tone="good" />
            <List title="9 · Trade-offs" items={r.cons} tone="bad" />
          </div>

          <div className="rounded-2xl bg-soft-gradient p-5 shadow-card">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-primary">
              10 · Verdict, rating & next step
            </p>
            <p className="mt-2 text-[0.96rem] font-medium leading-relaxed text-ink">
              {r.verdict}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill tone="primary">Capability ceiling: {r.ceiling}</Pill>
              <Pill>{r.bands}</Pill>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <ScoreBar label="Salary-relevant curriculum depth" value={r.scores.curriculum} />
              <ScoreBar label="Portfolio & interview readiness" value={r.scores.portfolio} />
              <ScoreBar label="Placement & career infrastructure" value={r.scores.placement} />
              <ScoreBar label="Outcome transparency" value={r.scores.transparency} />
              <ScoreBar label="Accessibility & completion likelihood" value={r.scores.completion} />
              <ScoreBar label="ROI & value" value={r.scores.roi} />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="font-display text-3xl font-bold text-ink">
                {r.scores.overall.toFixed(1)}
                <span className="text-base text-muted-foreground">/10</span>
              </span>
              <a
                href="#final-verdict"
                className="rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-glow transition-transform duration-200 hover:scale-[1.03]"
              >
                {r.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function SectionReviews() {
  return (
    <SectionCard
      id="in-depth-reviews-top-10"
      kicker="Section 8 · Reviews"
      title="In-Depth Reviews — Top 10 AI Courses for Salary Potential in India (2026)"
      lead={
        <>
          <p>
            Every course below is reviewed against the{" "}
            <strong className="text-ink">identical ten-part structure</strong> — no
            expansion for the #1 pick, no compression for lower ranks. Course-reported
            claims are labelled Tier B with what they omit; salary bands reference the
            Tier A ranges from the salary section; ROI figures are illustrative.
          </p>
          <p>
            Ratings are out of ten on six pillars, weighted exactly as published above.
            Re-weight them for your own situation and the order will change — that is
            the honest answer to "which is best".
          </p>
        </>
      }
    >
      <div className="space-y-8">
        <H3>The ten, reviewed on one lens</H3>
        {reviews.map((r) => (
          <ReviewCard key={r.rank} r={r} />
        ))}
      </div>
    </SectionCard>
  );
}
