import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

/** Big white section card used by every deep-dive block on the page. */
export function SectionCard({
  id,
  kicker,
  title,
  lead,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Reveal as="section">
      <div
        id={id}
        className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 shadow-card md:p-9"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {kicker}
        </p>
        <h2 className="mt-2 font-display text-[1.55rem] font-bold leading-tight tracking-tight text-ink md:text-[2rem]">
          {title}
        </h2>
        <div className="mt-3 h-1 w-24 rounded-full bg-hero-gradient" />
        {lead ? (
          <div className="mt-5 space-y-4 text-[0.97rem] leading-relaxed text-muted-foreground">
            {lead}
          </div>
        ) : null}
        <div className="mt-7">{children}</div>
      </div>
    </Reveal>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-[1.4rem]">
      {children}
    </h3>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 text-[0.97rem] leading-relaxed text-muted-foreground">
      {children}
    </div>
  );
}

export function Callout({
  children,
  tone = "primary",
  label,
}: {
  children: ReactNode;
  tone?: "primary" | "warning" | "success";
  label?: string;
}) {
  const bar =
    tone === "warning"
      ? "var(--warning)"
      : tone === "success"
        ? "var(--success)"
        : "var(--primary)";
  return (
    <div
      className="rounded-2xl bg-surface p-5"
      style={{ borderLeft: `4px solid ${bar}` }}
    >
      {label ? (
        <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
          {label}
        </p>
      ) : null}
      <div className="text-[0.95rem] font-medium leading-relaxed text-ink">
        {children}
      </div>
    </div>
  );
}

/** Horizontally scrollable frame so wide tables never break mobile layout. */
export function TableFrame({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      {caption ? (
        <figcaption className="border-b border-border bg-surface px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          {children}
        </table>
      </div>
    </figure>
  );
}

export function Th({ children }: { children: ReactNode }) {
  return (
    <th
      scope="col"
      className="border-b border-border bg-surface-strong px-4 py-3 text-[0.78rem] font-bold uppercase tracking-[0.08em] text-ink"
    >
      {children}
    </th>
  );
}

export function Td({
  children,
  strong,
}: {
  children: ReactNode;
  strong?: boolean;
}) {
  return (
    <td
      className={`border-b border-border px-4 py-3 align-top leading-relaxed ${
        strong ? "font-semibold text-ink" : "text-muted-foreground"
      }`}
    >
      {children}
    </td>
  );
}

export function Pill({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "primary" | "success" | "warning";
}) {
  const map = {
    muted: "bg-surface-strong text-muted-foreground",
    primary: "bg-accent text-accent-foreground",
    success: "bg-surface text-ink",
    warning: "bg-surface text-ink",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] ${map[tone]}`}
    >
      {children}
    </span>
  );
}
