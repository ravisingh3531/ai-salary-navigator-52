import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { Reveal } from "@/components/Reveal";
import raw from "@/content/highest-salary-ai-courses.md?raw";

const title =
  "Which AI Courses Give the Highest Salary in 2026? Top 10 Compared";
const description =
  "A salary-outcome comparison of the top 10 AI courses for Indian learners in 2026: GenAI and MLOps depth, placement support, fees, EMI, ROI and realistic package expectations by role.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Section = { id: string; heading: string; body: string };

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

/** Split the markdown into the H1, the intro block, and one entry per H2. */
function parseArticle(markdown: string) {
  const lines = markdown.split("\n");
  const h1 = (lines.find((l) => l.startsWith("# ")) ?? "").replace("# ", "");
  const withoutH1 = lines.filter((l) => !l.startsWith("# ")).join("\n");

  const parts = withoutH1.split(/\n(?=## )/);
  const intro = (parts[0] ?? "").replace(/^---$|^\s*---\s*$/gm, "").trim();

  const sections: Section[] = [];
  for (const part of parts.slice(1)) {
    const nl = part.indexOf("\n");
    const heading = part.slice(3, nl === -1 ? undefined : nl).trim();
    const body = (nl === -1 ? "" : part.slice(nl + 1))
      .replace(/^\s*---\s*$/gm, "")
      .trim();
    if (heading.toLowerCase() === "table of contents") continue;
    sections.push({ id: slugify(heading), heading, body });
  }

  return { h1, intro, sections };
}

const quickStats = [
  { value: "150+", label: "AI programs assessed for salary relevance" },
  { value: "10", label: "Courses reviewed on one identical salary lens" },
  { value: "6", label: "Comparison tables, every figure evidence-tagged" },
  { value: "37", label: "Questions answered, from hikes to ESOPs" },
];

const evidenceTiers = [
  {
    tier: "Tier A",
    name: "Independently verified",
    text: "Salary ranges from named third-party aggregates, each with a source and access date. Shown as ranges with medians, never single 'typical' numbers.",
    tone: "success" as const,
  },
  {
    tier: "Tier B",
    name: "Course-reported",
    text: "Any placement percentage or 'average package' a provider publishes — always shown alongside what the claim leaves out.",
    tone: "warning" as const,
  },
  {
    tier: "Tier C",
    name: "Illustrative",
    text: "Modelled examples: ROI scenarios, payback periods, 'a learner in this profile might see…'. Clearly hypothetical.",
    tone: "primary" as const,
  },
];

const pillars = [
  { weight: "25%", name: "Salary-relevant curriculum depth" },
  { weight: "20%", name: "Portfolio & interview readiness" },
  { weight: "20%", name: "Placement & career infrastructure" },
  { weight: "15%", name: "Outcome transparency & credibility" },
  { weight: "10%", name: "Accessibility & completion likelihood" },
  { weight: "10%", name: "ROI & value per rupee" },
];

const ranked = [
  { n: 1, course: "LogicMojo AI & ML", note: "Best overall for salary-focused AI growth" },
  { n: 2, course: "Scaler DS/ML/AI", note: "Best placement infrastructure for product roles" },
  { n: 3, course: "upGrad (IIIT-B)", note: "Best university credential signal" },
  { n: 4, course: "Great Learning (UT Austin)", note: "Best mentor-led weekend program" },
  { n: 5, course: "Intellipaat (IIT-affiliated)", note: "Best IIT tag at mid-tier pricing" },
  { n: 6, course: "Simplilearn (Purdue/IBM)", note: "Best for employer-funded upskilling" },
  { n: 7, course: "DeepLearning.AI", note: "Best foundations at near-zero cost" },
  { n: 8, course: "IBM AI Engineering", note: "Best low-cost applied track" },
  { n: 9, course: "Udacity Nanodegrees", note: "Best human project review, self-paced" },
  { n: 10, course: "PW Skills DS + GenAI", note: "Best ultra-affordable entry for freshers" },
];

function Index() {
  const { h1, intro, sections } = useMemo(() => parseArticle(raw), []);
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-background">
      {/* Reading progress */}
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent">
        <div
          className="h-full bg-hero-gradient transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-hero-gradient font-display text-sm font-bold text-primary-foreground shadow-glow">
              L
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              LogicMojo
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#the-high-salary-ai-skill-stack--what-employers-actually-pay-a-p">
              Skill stack
            </a>
            <a className="transition-colors hover:text-primary" href="#ai-salary-by-role-in-india-2026--verified-ranges-not-brochure-nu">
              Salary by role
            </a>
            <a className="transition-colors hover:text-primary" href="#in-depth-reviews-all-10-courses-on-one-salary-lens">
              Reviews
            </a>
            <a className="transition-colors hover:text-primary" href="#frequently-asked-questions">
              FAQs
            </a>
          </nav>
          <a
            href="#ready-to-build-the-skills-that-get-priced-at-the-top-of-the-ban"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-200 hover:scale-[1.03]"
          >
            Explore the course
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 grid-paper opacity-40" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl animate-float-slow" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-background/15 blur-3xl animate-float-slow" />

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:pb-24 md:pt-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
            Salary research · India · 2026
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-[2.1rem] font-bold leading-[1.12] tracking-tight text-primary-foreground md:text-[3.4rem]">
            {h1}
          </h1>

          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-primary-foreground/85">
            No course pays a salary — an employer does. This page ranks the top 10
            AI courses on the four things that actually move your package: skills,
            portfolio, interview readiness and hiring access.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {quickStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="h-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 backdrop-blur-sm card-lift">
                  <p className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-primary-foreground/80">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative h-10 bg-background [clip-path:ellipse(75%_100%_at_50%_100%)]" />
      </section>

      {/* Evidence tiers */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            How to read every number here
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Three evidence tiers, tagged on every figure
          </h2>
        </Reveal>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {evidenceTiers.map((t, i) => (
            <Reveal key={t.tier} delay={i * 110}>
              <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-card card-lift">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      background:
                        t.tone === "success"
                          ? "var(--success)"
                          : t.tone === "warning"
                            ? "var(--warning)"
                            : "var(--primary)",
                    }}
                  />
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {t.tier}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Intro card + quick answer */}
      <section className="mx-auto max-w-6xl px-5 pb-4">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-9">
            <ArticleMarkdown>{intro}</ArticleMarkdown>
          </div>
        </Reveal>
      </section>

      {/* Scoring pillars + ranked shortlist */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="h-full rounded-3xl bg-soft-gradient p-6 shadow-card md:p-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                The scoring system, published in full
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Six weighted pillars. Re-weigh them yourself if your situation
                differs — that is the point of publishing them.
              </p>
              <ul className="mt-6 space-y-3">
                {pillars.map((p, i) => (
                  <li key={p.name} className="flex items-center gap-3">
                    <span className="grid h-10 w-14 shrink-0 place-items-center rounded-lg bg-card font-display text-sm font-bold text-primary shadow-card">
                      {p.weight}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-ink">{p.name}</p>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-strong">
                        <div
                          className="h-full rounded-full bg-hero-gradient transition-[width] duration-700"
                          style={{ width: `${(i === 0 ? 100 : (parseInt(p.weight) / 25) * 100).toFixed(0)}%` }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                The ranked shortlist
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                "#1" means strongest composite for salary-focused growth — not the
                highest package for everyone.
              </p>
              <ol className="mt-6 space-y-2.5">
                {ranked.map((r) => (
                  <li
                    key={r.n}
                    className={`flex items-start gap-3 rounded-xl border p-3 transition-colors ${
                      r.n === 1
                        ? "border-primary/35 bg-accent"
                        : "border-border bg-background hover:bg-surface"
                    }`}
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg font-display text-sm font-bold ${
                        r.n === 1
                          ? "bg-hero-gradient text-primary-foreground shadow-glow"
                          : "bg-surface-strong text-primary"
                      }`}
                    >
                      {r.n}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">{r.course}</p>
                      <p className="text-xs text-muted-foreground">{r.note}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body: sticky TOC + section cards */}
      <div className="mx-auto max-w-6xl gap-8 px-5 pb-16 lg:grid lg:grid-cols-[250px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-border bg-card p-4 shadow-card">
            <p className="px-1 pb-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              On this page
            </p>
            <nav className="max-h-[70vh] space-y-0.5 overflow-y-auto pr-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`block rounded-lg px-2.5 py-2 text-[0.82rem] leading-snug transition-colors ${
                    active === s.id
                      ? "bg-accent font-semibold text-primary"
                      : "text-muted-foreground hover:bg-surface hover:text-ink"
                  }`}
                >
                  {s.heading}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0 space-y-6">
          {/* Mobile TOC */}
          <details className="rounded-2xl border border-border bg-card p-4 shadow-card lg:hidden">
            <summary className="cursor-pointer text-sm font-bold text-ink">
              Jump to a section
            </summary>
            <nav className="mt-3 space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground"
                >
                  {s.heading}
                </a>
              ))}
            </nav>
          </details>

          {sections.map((s, i) => (
            <Reveal as="section" key={s.id} delay={40}>
              <div
                id={s.id}
                className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 shadow-card md:p-9"
              >
                <div className="mb-5 flex items-baseline gap-3">
                  <span className="font-display text-sm font-bold text-primary/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h2 className="font-display text-[1.55rem] font-bold leading-tight tracking-tight text-ink md:text-[2rem]">
                  {s.heading}
                </h2>
                <div className="mt-3 h-1 w-24 rounded-full bg-hero-gradient" />
                <div className="mt-6">
                  <ArticleMarkdown>{s.body}</ArticleMarkdown>
                </div>
              </div>
            </Reveal>
          ))}
        </main>
      </div>

      {/* Footer CTA */}
      <footer className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 grid-paper opacity-35" />
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-2xl">
            <span className="font-display text-xl font-bold text-primary-foreground">
              LogicMojo
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary-foreground md:text-4xl">
              Build the skills that get priced at the top of the band
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Live IST cohorts, the 2026 GenAI and MLOps stack, 10–15
              interview-defensible projects with human code review, AI-specific
              interview preparation and structured career guidance — at mid-band
              pricing with EMI.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#top"
                className="rounded-full bg-card px-5 py-2.5 text-sm font-bold text-primary shadow-lift transition-transform duration-200 hover:scale-[1.03]"
              >
                Talk to the LogicMojo team
              </a>
              <a
                href="#in-depth-reviews-all-10-courses-on-one-salary-lens"
                className="rounded-full border border-primary-foreground/35 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Re-read the reviews
              </a>
            </div>
            <dl className="mt-9 grid grid-cols-2 gap-4 text-primary-foreground/85 sm:grid-cols-4">
              {[
                ["Batch", "[INSERT: date]"],
                ["Fee", "₹XX,XXX (EMI)"],
                ["Duration", "X months"],
                ["Weekly", "10–15 hours"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-3">
                  <dt className="text-[0.7rem] uppercase tracking-[0.14em]">{k}</dt>
                  <dd className="mt-1 text-sm font-bold text-primary-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-12 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/70">
            Published by LogicMojo. Salary figures labelled by evidence tier —
            Tier A verified, Tier B course-reported, Tier C illustrative. Reviewed
            quarterly. © {new Date().getFullYear()} LogicMojo.
          </p>
        </div>
      </footer>
    </div>
  );
}
