import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import article from "@/content/highest-salary-ai-courses.md?raw";

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

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <span className="font-serif text-lg font-bold tracking-tight text-foreground">
            LogicMojo
          </span>
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            AI Salary Research · 2026
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10 md:py-16">
        <article className="article">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article}</ReactMarkdown>
        </article>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-muted-foreground">
          <p className="font-serif text-base font-bold text-foreground">LogicMojo</p>
          <p className="mt-2">
            AI &amp; Machine Learning Course — live IST cohorts, production GenAI and
            MLOps, 10–15 interview-defensible projects, career guidance.
          </p>
          <p className="mt-4 text-xs">
            Salary figures on this page are labelled by evidence tier. Reviewed
            quarterly. © {new Date().getFullYear()} LogicMojo.
          </p>
        </div>
      </footer>
    </div>
  );
}
