import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  // Wrap every table in a card with horizontal scroll
  table: ({ children }) => (
    <div className="table-card">
      <div className="table-scroll">
        <table>{children}</table>
      </div>
    </div>
  ),
};

export function ArticleMarkdown({ children }: { children: string }) {
  return (
    <div className="article">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
