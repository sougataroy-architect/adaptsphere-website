"use client";
import { useId, useState } from "react";
import { WorkflowScene } from "./WorkflowScene";
import { Search, Lightbulb, Wrench, ArrowRight, ArrowLeft, Check, RotateCcw } from "lucide-react";

const steps = [
  { icon: Search, title: "Review your systems", detail: "Workflows, applications, data, and exposure", heading: "Understand the work before choosing AI.", description: "Map how work gets done, what information is used, which identities and tools are involved, and where untrusted inputs or sensitive actions enter.", evidence: "A system and access map, an agreed business problem, and open security questions." },
  { icon: Lightbulb, title: "Identify useful AI opportunities", detail: "Value, feasibility, authority, and risk", heading: "Choose a use case worth implementing.", description: "Compare business value with data access, tool authority, misuse exposure, and delivery effort. Decide what needs a person’s approval and how the team will verify the controls.", evidence: "A priority use case, a governed design, and a practical verification plan." },
  { icon: Wrench, title: "Build, integrate, and verify", detail: "Enforced safeguards and maintainable software", heading: "Put the solution into the existing workflow.", description: "Build the integrations and enforce boundaries in the surrounding systems. Test expected use, malicious instructions, denied actions, and failure paths before handover.", evidence: "Working system connections, control test results, and clear monitoring and response responsibilities." }
];
const visualCaptions = ["Example · late-order workflow", "Example · value and readiness", "Example · build and release gates"];
const questions = [
  { title: "What can the AI do?", note: "Choose the highest level of authority in the workflow.", options: ["Draft or summarize for a person", "Recommend a decision", "Change records or trigger actions", "I’m not sure what it can reach"] },
  { title: "What information can it use?", note: "Think about the broadest source connected to it.", options: ["Approved reference material", "Internal business data", "Customer, employee, or financial data", "The access boundary is unclear"] },
  { title: "Who owns the outcome?", note: "Choose what is closest to how the workflow operates today.", options: ["A named owner reviews each consequential action", "A team owns it, but approvals vary", "The system can act without a clear owner", "Ownership has not been assigned"] }
];
const recommendations = [
  { title: "Map the action boundary", action: "List every action the AI can initiate, the system that enforces each permission, and the point where a person must approve a consequential change.", why: "A workflow that can change systems needs an explicit boundary around its authority." },
  { title: "Prove the data boundary", action: "Trace the connected data sources, confirm access is limited to the intended users and purpose, and test what happens when a request reaches restricted information.", why: "The answer quality matters less if the workflow can read information the user should not see." },
  { title: "Assign an operational owner", action: "Name who approves changes, reviews exceptions, monitors failures, and can suspend access. Put those responsibilities beside the workflow runbook.", why: "A control without a person responsible for operating it is difficult to rely on." },
  { title: "Establish a control baseline", action: "Document the workflow’s data, permissions, actions, and accountable owner before expanding access or connecting more tools.", why: "The first useful decision is to make the current boundary visible and reviewable." }
];

function recommendationFor(answers: number[]) {
  if (answers[0] >= 2) return recommendations[0];
  if (answers[1] >= 2) return recommendations[1];
  if (answers[2] >= 2) return recommendations[2];
  if (answers.some(answer => answer === 3)) return recommendations[3];
  return recommendations[(answers[0] === 1 ? 0 : answers[1] === 1 ? 1 : 2)];
}

export function DeliveryExplorer() {
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState<"delivery" | "pressure">("delivery");
  const [answerStep, setAnswerStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([-1, -1, -1]);
  const id = useId();
  const step = steps[active];
  const recommendation = recommendationFor(answers);
  const finished = answerStep === questions.length;

  return <figure className="architecture-board interactive-board delivery-board">
    <figcaption><span className="signal-dot"/>{mode === "delivery" ? "HOW WE HELP" : "AI WORKFLOW PRESSURE TEST"}</figcaption>
    <div className="delivery-modes" role="tablist" aria-label="Explore AdaptSphere">
      <button type="button" role="tab" aria-selected={mode === "delivery"} onClick={() => setMode("delivery")}>How we help</button>
      <button type="button" role="tab" aria-selected={mode === "pressure"} onClick={() => setMode("pressure")}>Pressure-test a workflow <ArrowRight size={14} aria-hidden="true"/></button>
    </div>
    {mode === "delivery" ? <>
      <p className="explorer-hint">Choose a step to see how we help and what you receive.</p>
      <ol className="architecture-nodes">{steps.map(({icon: Icon, title, detail}, i) => <li key={title} className={active === i ? "node-selected" : ""}>
        <button type="button" id={`${id}-step-${i}`} aria-expanded={active === i} aria-controls={`${id}-panel`} onClick={() => setActive(i)}>
          <span className="node-icon"><Icon size={20} aria-hidden="true"/></span>
          <span className="node-copy"><span className="node-index">0{i+1}</span><strong>{title}</strong><span className="node-description">{detail}</span></span>
          <ArrowRight size={15} aria-hidden="true"/>
        </button>
      </li>)}</ol>
      <div className="delivery-art" key={active}><WorkflowScene variant={active} mode="delivery"/><span className="scene-example">{visualCaptions[active]}</span></div>
      <div className="control-panels"><section id={`${id}-panel`} aria-labelledby={`${id}-step-${active}`}>
        <h3>{step.heading}</h3><p>{step.description}</p><dl><div><dt>What you receive</dt><dd>{step.evidence}</dd></div></dl>
      </section></div>
      <div className="board-caption"><span className="signal-dot"/><span>Governance and security engineered throughout.</span></div>
    </> : <div className="pressure-test">
      <p className="explorer-hint">Three broad questions. Your answers stay in this browser and produce a control to check next.</p>
      <ol className="pressure-progress" aria-label="Pressure test progress">{questions.map((question, i) => <li key={question.title} className={answerStep >= i ? "reached" : ""}><span>{answerStep > i || finished ? <Check size={13} aria-hidden="true"/> : i + 1}</span><span className="sr-only">{question.title}</span></li>)}</ol>
      {!finished ? <section aria-live="polite" className="pressure-question">
        <h3>{questions[answerStep].title}</h3><p>{questions[answerStep].note}</p>
        <div className="pressure-options">{questions[answerStep].options.map((option, i) => <button type="button" key={option} className={answers[answerStep] === i ? "selected" : ""} aria-pressed={answers[answerStep] === i} onClick={() => setAnswers(current => current.map((value, index) => index === answerStep ? i : value))}><span>{option}</span><ArrowRight size={15} aria-hidden="true"/></button>)}</div>
        <div className="pressure-actions"><button type="button" className="pressure-back" disabled={answerStep === 0} onClick={() => setAnswerStep(current => current - 1)}><ArrowLeft size={15} aria-hidden="true"/>Back</button><button type="button" className="pressure-next" disabled={answers[answerStep] < 0} onClick={() => setAnswerStep(current => current + 1)}>{answerStep === 2 ? "Show my next control" : "Continue"}<ArrowRight size={15} aria-hidden="true"/></button></div>
      </section> : <section aria-live="polite" className="pressure-result"><p className="pressure-label"><span className="signal-dot"/>YOUR NEXT CONTROL TO CHECK</p><h3>{recommendation.title}</h3><p className="pressure-why">{recommendation.why}</p><div className="pressure-action"><strong>Take this back to your team</strong><p>{recommendation.action}</p></div><p className="pressure-disclaimer">A practical prompt for internal discussion, not a security assessment. No information is sent or saved.</p><button type="button" className="pressure-back" onClick={() => { setAnswers([-1, -1, -1]); setAnswerStep(0); }}><RotateCcw size={14} aria-hidden="true"/>Start again</button></section>}
      <div className="board-caption"><span className="signal-dot"/><span>Designed for a useful next decision, without a data handoff.</span></div>
    </div>}
  </figure>;
}
