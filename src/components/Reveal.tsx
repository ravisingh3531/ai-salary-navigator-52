import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Starts translated + transparent, animates in when it
 * enters the viewport. Falls back to visible if IntersectionObserver is absent.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("reveal-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.transitionDelay = `${delay}ms`;
            target.classList.add("reveal-in");
            observer.unobserve(target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as never} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
