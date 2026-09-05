const courses = [
  "AI & ML Course",
  "GenAI Course",
  "Data Science Course",
  "DSA & System Design",
];
const resources = [
  "Curriculum PDF",
  "Batch Schedule",
  "Project Portfolio",
  "Blog",
  "FAQs",
];
const social = ["LinkedIn", "YouTube", "Instagram", "X", "GitHub"];
const legal = ["Privacy Policy", "Terms", "Refund Policy"];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 grid-paper opacity-35" />
      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-foreground/15 font-display text-sm font-bold text-primary-foreground backdrop-blur">
                L
              </span>
              <span className="font-display text-lg font-bold text-primary-foreground">
                LogicMojo
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
              Live, mentor-led AI and engineering programs built for working
              professionals in India — production capability, not certificates.
            </p>
            <dl className="mt-6 space-y-1.5 text-sm text-primary-foreground/80">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>[EMAIL]</dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>[PHONE]</dd>
              </div>
              <div>
                <dt className="sr-only">WhatsApp</dt>
                <dd>[WHATSAPP]</dd>
              </div>
            </dl>
          </div>

          {[
            { title: "Courses", items: courses },
            { title: "Resources", items: resources },
            { title: "Follow", items: social },
          ].map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary-foreground/70">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {col.items.map((it) => (
                  <li key={it}>
                    <a
                      href="[INSERT LINK]"
                      className="text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/70">
          <p>
            © {new Date().getFullYear()} LogicMojo. Published by LogicMojo — a provider
            reviewed on this page; the scoring weights and evidence tiers are published in
            full above. Salary figures labelled Tier A (verified), Tier B
            (course-reported) or Tier C (illustrative). Fees and bands re-verified
            quarterly.
          </p>
          <ul className="flex gap-4">
            {legal.map((l) => (
              <li key={l}>
                <a href="[INSERT LINK]" className="hover:text-primary-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
