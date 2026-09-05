import { useState } from "react";
import { SectionCard } from "./Shell";

type Faq = { q: string; a: string };
type Group = { name: string; faqs: Faq[] };

export const faqGroups: Group[] = [
  {
    name: "Salary & outcomes",
    faqs: [
      {
        q: "Which AI course gives the highest salary in India?",
        a: "No course gives a salary — an employer does. The courses associated with the highest packages are the ones that build production-capable skills, a defensible portfolio and interview readiness, then put you in front of employers who pay premiums. On the weighting published on this page, LogicMojo ranks first on capability-per-rupee, and Scaler ranks first if placement infrastructure into product companies is what you are buying. Both answers are correct for different readers.",
      },
      {
        q: "Does an AI course actually increase salary?",
        a: "It increases the probability of a raise; it does not cause one. Courses that lead to real salary movement share four traits: current premium-layer skills, projects you designed and deployed, structured interview preparation, and a format you actually finish. Learners who complete a program and then spend three months applying, interviewing and negotiating see movement. Learners who complete a program and stop see none.",
      },
      {
        q: "What salary can I expect after an AI course?",
        a: "It depends far more on your starting point than on the course. A fresher with a deployed portfolio, a four-year developer switching into AI engineering, and a non-technical switcher land in three very different bands. Use the Tier A role ranges cited earlier as your anchor, then read the profile section — it gives a realistic first move, a twelve-month view and the single variable that decides where in the band you land.",
      },
      {
        q: "Which AI job pays the most in India in 2026?",
        a: "Roles that combine research-grade modelling with production ownership sit at the top: LLM and GenAI engineering, ML platform and MLOps engineering, applied research, and AI architecture. Within any of these, the premium goes to people who can make and defend architecture decisions — retrieval design, fine-tune versus RAG, evaluation, cost and latency — rather than to people who can call an API.",
      },
      {
        q: "Can a fresher get ₹10 LPA after an AI course?",
        a: "It happens, and it is not typical. When it happens, the fresher almost always has deployed projects with evaluation harnesses, a public GitHub with real commits, and interview readiness on both ML fundamentals and system design — plus a company type that pays those bands. Treat it as an achievable upper case with real work behind it, not as the expected outcome of enrolling.",
      },
      {
        q: "How much salary hike can a working professional expect?",
        a: "External switches typically move the number more than internal raises, because internal bands move incrementally while an external offer resets your baseline. The size of the move depends on the lever you pull: skill depth, company type, or both. Services-to-product moves are frequently the largest single jump, and they are bought with interview readiness as much as with syllabus coverage.",
      },
      {
        q: "Are the \u201caverage package\u201d claims on course pages real?",
        a: "They are usually technically accurate and practically misleading. An average is sensitive to a single outlier; a median is not. Ask for the median of enrolled learners, the denominator, the reporting window, whether the figure is fixed or total CTC, and whether eligibility filters removed most of the cohort. Any provider figure quoted on this page is labelled Tier B for exactly this reason.",
      },
      {
        q: "How long after finishing does salary move?",
        a: "Plan for eight to twelve months from starting a serious program to a signed offer: skills in months one to six, portfolio in months four to eight, applications and interviews in months six to ten, offer and negotiation in months eight to twelve. Internal raises typically lag external switches by a review cycle, so if speed matters, prepare to interview outside.",
      },
      {
        q: "Do AI salaries differ by city?",
        a: "Yes, though less than they used to. Bengaluru, Hyderabad, Pune, the NCR and Chennai carry the deepest AI hiring markets and the widest bands. Remote and hybrid arrangements have narrowed the gap for senior candidates, but company type — product, GCC or services — remains a stronger predictor of your number than the city on your offer letter.",
      },
      {
        q: "Product company vs. GCC vs. IT services — which pays more for AI?",
        a: "Product companies and top GCCs generally price AI roles above IT services for comparable skill, and both increasingly compete on the same candidates. GCCs have become a genuinely attractive middle path with strong bands and more stability. The practical implication: moving company type is often a larger lever than adding another certificate to your resume.",
      },
    ],
  },
  {
    name: "Skills & curriculum",
    faqs: [
      {
        q: "Which AI skills get the highest salary?",
        a: "Seven layers carry premiums in 2026: production RAG, fine-tuning and adaptation, agents with frameworks and MCP, open-weight models and local inference, evaluation and guardrails, MLOps and LLMOps, and AI system design. Notice that four of the seven are about making systems reliable and affordable rather than making them work once — that is where the pricing gap sits.",
      },
      {
        q: "Is GenAI or ML engineering better paid?",
        a: "At the top they converge, because the highest-paid people do both: classical ML rigour for evaluation and measurement, GenAI engineering for what is being built now. GenAI alone with no ML foundations tends to cap out, because you cannot answer why a metric was chosen. ML alone with no GenAI increasingly loses to candidates who can ship an LLM feature.",
      },
      {
        q: "Do I need MLOps to get a higher package?",
        a: "For engineering bands, effectively yes. MLOps is the capability that most separates engineer-band candidates from analyst-band candidates, because it proves you can run a model as a service other people depend on. You do not need to be a platform specialist — FastAPI, Docker, CI/CD, monitoring, drift and cost awareness are enough to change how you interview.",
      },
      {
        q: "Is prompt engineering enough for a well-paid role?",
        a: "No. Prompting is a necessary skill and not a differentiating one, because the market absorbed it in a year. What is priced is everything around the prompt: retrieval design, evaluation, guardrails, cost control, latency, versioning and failure handling. Treat prompting as table stakes and put your study hours into the layers that survive the next model release.",
      },
      {
        q: "What should a 2026 AI curriculum include?",
        a: "Foundations (Python, data, maths), classical ML with correct evaluation, deep learning in a real framework, NLP and transformers, then the premium layers: LLM engineering with open-weight options, production RAG, fine-tuning with LoRA/QLoRA, agents plus frameworks and MCP, evaluation and guardrails, MLOps/LLMOps, and AI system design with interview preparation. If any of the last six are missing, the syllabus is dated.",
      },
      {
        q: "PyTorch or TensorFlow — does it affect salary?",
        a: "Barely, and not in the way people fear. PyTorch dominates research and most new production work, and Hugging Face's ecosystem assumes it, so learning PyTorch first is the pragmatic choice. TensorFlow and Keras remain common in existing enterprise systems. Interviewers care whether you can debug a training loop, not which import statement you prefer.",
      },
      {
        q: "Will these skills still be paying a premium in 2028?",
        a: "The specific tools will churn; the underlying capabilities will not. Evaluation, retrieval design, adaptation decisions, reliability, cost reasoning and system design have all survived every model release so far, because they are engineering problems rather than API surfaces. Build depth in those and each new framework becomes a weekend of reading rather than a career threat.",
      },
      {
        q: "What are AI agents and why do employers pay for them?",
        a: "An agent is an LLM given tools, memory and a planning loop so it can take actions rather than only produce text. Employers pay for agent skills because agents fail expensively — loops, wrong tool calls, runaway token spend — and engineers who can contain those failures with evaluation, guardrails and cost controls are scarce. That scarcity is why agent frameworks and MCP appear in so many 2026 job descriptions.",
      },
    ],
  },
  {
    name: "Choosing a course",
    faqs: [
      {
        q: "Do IIT or university AI courses give higher packages?",
        a: "They help you clear filters, which is genuinely valuable — HR screens and promotion committees do weigh formal qualifications. They do not carry technical rounds. If your obstacle is being screened out before an interview, a credential is a rational purchase. If your obstacle is failing technical rounds, buy depth and a portfolio instead.",
      },
      {
        q: "Are expensive AI courses better for salary?",
        a: "Not reliably. Programs at three to five times the price generally do not reach a higher capability ceiling; they buy brand, placement infrastructure or an academic credential. Those can each be worth paying for — but only if that specific thing is your obstacle. Compare capability reached per rupee and per hour, then decide which purchase you are actually making.",
      },
      {
        q: "Live or self-paced — which produces better outcomes?",
        a: "Live cohorts produce meaningfully better outcomes for most people, because completion is the largest single variable in salary movement and live formats enforce it. Self-paced wins for genuinely self-directed learners and for anyone whose schedule cannot support fixed sessions. If you have abandoned two self-paced courses, that is data — buy the structure.",
      },
      {
        q: "AI course vs. data science course — which pays more?",
        a: "AI and GenAI engineering titles currently command higher premiums than generalist data science titles, mainly because the supply of engineers who can ship reliable LLM systems is thinner. That said, a strong data scientist who can deploy and evaluate models out-earns a GenAI enthusiast who cannot. The premium follows production capability, not the word on the certificate.",
      },
      {
        q: "How do I verify placement claims before enrolling?",
        a: "Ask five questions in writing: what is the median package of enrolled learners, what is the denominator, over what window, is it fixed or total CTC, and what eligibility filters applied. Then ask to speak to two alumni you choose from LinkedIn rather than two the provider selects. Vague answers to specific questions are themselves an answer.",
      },
      {
        q: "Can a free course lead to a high-paying AI job?",
        a: "Yes, and it regularly does — for people who can supply structure, sequence, review and accountability themselves. The free stack of DeepLearning.AI, Fast.ai, Hugging Face, Kaggle, NPTEL and official docs covers almost everything technically. What it cannot give you is feedback and enforcement, which is precisely what paid programs sell.",
      },
      {
        q: "Should I do two courses in parallel?",
        a: "Generally no. Two parallel programs usually mean twice the content consumption and half the building, and building is what changes your interviews. The one exception that works: a paid structured program as your spine, plus free material used surgically to fill a specific gap — the mathematics you skipped, or one framework your syllabus does not cover.",
      },
    ],
  },
  {
    name: "Eligibility",
    faqs: [
      {
        q: "Can a non-IT graduate get a high-paying AI job?",
        a: "Yes, and mechanical, electrical, civil, commerce and science graduates do it every year. The binding constraint is programming fluency, not your degree. Expect a longer runway — nine to fifteen months is realistic — and expect the first role to be entry band. Domain knowledge from your original field often becomes an advantage once you can build.",
      },
      {
        q: "Do I need a CS degree?",
        a: "No, and it matters less each year. What panels test is whether you can build, evaluate, deploy and defend systems. A CS degree helps with DSA-heavy product-company loops, which is why programs that include DSA are worth considering if that is your target. For GenAI engineering roles specifically, the portfolio does most of the work.",
      },
      {
        q: "Do I need maths?",
        a: "You need intuition, not a research background. Linear algebra, gradients, probability and statistics at a level where you can reason about why a model behaves as it does — that is what separates \u201cI ran the model\u201d from \u201cI understand the model\u201d in an interview. Any program that skips maths entirely is optimising for enrolment, not for your interviews.",
      },
      {
        q: "Can I do this while working full time?",
        a: "Yes — most successful learners do. Budget eight to fifteen hours a week for six to nine months and protect those hours as calendar blocks, not intentions. Evening or weekend live batches with recordings and a deferral option exist precisely for this. The honest failure mode is not difficulty; it is a quarter at work that eats every evening.",
      },
      {
        q: "Is it too late to start AI in 2026?",
        a: "No. The layers that now carry premiums — production RAG, agents, MCP, evaluation, LLMOps — are two to three years old, so nobody has a decade of experience in them. Being late to classical ML is irrelevant when the market is short of people who can make LLM systems reliable and affordable.",
      },
      {
        q: "Am I too senior for an AI course to change my package?",
        a: "Seniority changes what you should buy, not whether it works. With eight to fifteen years behind you, the value is in system design, evaluation thinking, agent architecture and cost reasoning — the vocabulary of technical judgement — rather than in another introduction to pandas. Seniors who can review and design AI systems are among the scarcest profiles in the market.",
      },
    ],
  },
  {
    name: "Cost & ROI",
    faqs: [
      {
        q: "How much does an AI course cost in India?",
        a: "Free to audit at the low end; ₹5,000–₹30,000 for entry programs; ₹40,000–₹1.2L for mid-band specialist programs; ₹1.5L–₹2.5L for credential-led university-branded programs; and ₹3L+ for premium bootcamps with placement operations. Capability ceiling does not rise linearly with price — above the mid band, you are usually buying brand, credential or placement access.",
      },
      {
        q: "Is no-cost EMI genuinely free?",
        a: "Usually the interest is absorbed into the fee rather than eliminated, and the agreement is often a bank or NBFC loan in your name. That has two consequences worth understanding before you sign: your credit profile is involved, and the schedule continues whether or not you keep attending. Read the loan document, not the landing page.",
      },
      {
        q: "What happens to my EMI if I stop attending?",
        a: "In most cases it continues, because your contract is with the lender, not the provider. This is the single most expensive detail learners skip. Ask for the refund window in writing, ask what happens to the loan on withdrawal, and ask both questions before the sales call ends — not after the first month.",
      },
      {
        q: "What's the ROI of an AI course?",
        a: "Model it as (realistic salary delta over 24 months × probability of achieving it) minus (fee + EMI interest + opportunity cost of hours). The probability term is where honest maths lives: at a 40% chance of finishing, a ₹1L program costs ₹2.5L in expectation. Completion, portfolio quality and post-course application effort explain most of the variance in outcomes.",
      },
      {
        q: "Can I get a refund if the course isn't as promised?",
        a: "Only within the written policy, which is often shorter than the first module. Before paying, get the refund window, the cut-off date and the exact conditions in an email. If a provider will not put its own published policy in writing on request, treat that as the most useful information you have received.",
      },
      {
        q: "How many portfolio projects do I need to negotiate a higher package?",
        a: "Three genuinely defensible projects beat twelve tutorials. The three that work best: one end-to-end ML system with correct evaluation, one production-style RAG or agent application with an evaluation harness, and one deployed service with monitoring. What makes them negotiable is your ability to explain what broke, what you changed and what it cost.",
      },
    ],
  },
];

function Item({ f }: { f: Faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors ${
        open ? "border-primary/35 bg-accent" : "border-border bg-background hover:bg-surface"
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start gap-3 px-4 py-3.5 text-left"
      >
        <span className="flex-1 text-[0.94rem] font-bold leading-snug text-ink">
          {f.q}
        </span>
        <span className="mt-0.5 text-primary">{open ? "−" : "+"}</span>
      </button>
      {open ? (
        <p className="border-t border-border/70 px-4 py-4 text-[0.92rem] leading-relaxed text-muted-foreground">
          {f.a}
        </p>
      ) : null}
    </div>
  );
}

export function SectionFaqs() {
  const total = faqGroups.reduce((n, g) => n + g.faqs.length, 0);
  return (
    <SectionCard
      id="frequently-asked-questions"
      kicker="Section 18 · FAQs"
      title="Frequently Asked Questions"
      lead={
        <p>
          {total} questions, answer-first, grouped by what you are actually trying to
          decide. Where a figure would be needed, the answer points you to the evidence
          tier rather than inventing a number.
        </p>
      }
    >
      <div className="space-y-8">
        {faqGroups.map((g) => (
          <div key={g.name}>
            <h3 className="font-display text-lg font-bold tracking-tight text-ink">
              {g.name}
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                {g.faqs.length} questions
              </span>
            </h3>
            <div className="mt-3 space-y-2.5">
              {g.faqs.map((f) => (
                <Item key={f.q} f={f} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
