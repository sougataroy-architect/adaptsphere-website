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
  { title: "Where is AI showing up?", note: "Choose the situation closest to the decision on your desk.", options: ["We are exploring a first use case", "A team is piloting a copilot or agent", "AI is already part of day-to-day work", "Different teams are adopting AI independently"] },
  { title: "What work is it doing?", note: "Think about what happens after the model produces an answer.", options: ["Find information or draft content for a person", "Recommend a decision a person makes", "Update a system or trigger a workflow", "Take several steps across connected tools"] },
  { title: "What would make you pause?", note: "Pick the concern that would be hardest to explain to your leadership team.", options: ["People may see data they should not", "An answer may be wrong or hard to verify", "An action may happen without the right approval", "We may not know who owns a failure"] },
  { title: "How clear are the safeguards today?", note: "A candid estimate is more useful than a perfect answer.", options: ["Controls and owners are documented and tested", "Some controls exist, but coverage varies", "Teams rely on guidance or manual checks", "We do not yet have a clear picture"] }
];

type DecisionBrief = { headline: string; summary: string; priority: string; why: string; checks: string[]; evidence: string };
function decisionBrief(answers: number[]): DecisionBrief {
  const [adoption, authority, concern, safeguards] = answers;
  if (authority >= 2 || concern === 2) return {
    headline: "Set the action and approval boundary",
    summary: "Your answers point to AI that can move work forward in connected systems, with concern about access or approval. The key decision is which actions it may prepare, which it may complete, and which must stop for a person.",
    priority: "Start with the workflow that can make the most consequential change.",
    why: "An approval screen alone is not a control if the connected account can still perform the action directly. Permissions need to be enforced where the system changes.",
    checks: ["List each tool and system action the AI can call.", "Use separate permissions for reading, drafting, and changing records.", "Require an accountable person to approve high-impact or hard-to-reverse changes.", "Test denied actions, altered instructions, and approval bypass attempts."],
    evidence: "A written action map, named approvers, and test results showing prohibited actions are blocked."
  };
  if (concern === 0) return {
    headline: "Trace data access from user to answer",
    summary: "Your main concern is who can see information and whether the answer can be trusted. Map the data path through the user, AI service, connected sources, and any tools that store or return results.",
    priority: "Choose one workflow that uses sensitive or decision-critical information.",
    why: "A model can only respect access boundaries that are correctly applied by the connected identity and source systems.",
    checks: ["Identify every source, connector, service account, and output location.", "Confirm access follows the requesting user’s permissions and business purpose.", "Test a user who should not be able to retrieve a restricted record.", "Show where answers came from and define how users report an incorrect result."],
    evidence: "A data-flow and access map, restricted-access test results, and an answer review path."
  };
  if (concern === 3 || safeguards === 3 || adoption === 3) return {
    headline: "Name the people who run the control",
    summary: "Your answers suggest adoption may be moving faster than ownership and operating procedures. Before adding more use cases, make clear who is accountable when the workflow behaves unexpectedly.",
    priority: "Pick one live or planned workflow and walk it from approval through incident response.",
    why: "A control needs an owner who can review evidence, respond to exceptions, and stop access when conditions change.",
    checks: ["Name the business owner and technical operator.", "Assign responsibility for approvals, monitoring, incident triage, and access removal.", "Define what events are logged and who reviews them.", "Write a simple pause and recovery procedure, then rehearse it."],
    evidence: "A responsibility map, monitoring and escalation path, and a tested pause procedure."
  };
  if (concern === 1 || safeguards >= 2) return {
    headline: "Make the answer verifiable before expanding use",
    summary: "Your concern centers on whether people can rely on the output. Set a clear quality threshold and human review path for the decision the AI supports.",
    priority: "Start with the decision where a plausible but incorrect answer could cause the most rework or harm.",
    why: "A polished answer can still be unsupported. Teams need a way to check sources, recognize uncertainty, and correct errors before they affect the workflow.",
    checks: ["Define what a correct answer must include and which sources are allowed.", "Test representative, ambiguous, outdated, and adversarial inputs.", "Require citations or source links where users need to verify claims.", "Set a human review threshold and a path to correct recurring failures."],
    evidence: "A test set, agreed acceptance criteria, review rules, and a record of known failure cases."
  };
  if (adoption === 0) return {
    headline: "Choose a bounded first use case",
    summary: "You are still exploring. The best first step is a workflow with a clear owner, a measurable business task, limited data access, and a person who can review the result.",
    priority: "Compare a few everyday tasks before selecting a model or platform.",
    why: "Starting with the work and its boundaries helps avoid a demo that cannot be safely connected to real operations.",
    checks: ["Describe the task, current process, and person accountable for the outcome.", "Identify the minimum data and system access needed.", "Define what the AI may prepare and what a person decides.", "Agree how to test usefulness, errors, and access restrictions."],
    evidence: "A use-case brief, a bounded design, an accountable owner, and a test plan."
  };
  return {
    headline: "Turn scattered controls into one workflow view",
    summary: "Your answers suggest AI is in use across teams, but controls are not applied consistently. Build a shared view of the workflows before trying to standardize every tool at once.",
    priority: "Inventory the live workflows with the greatest access or decision authority first.",
    why: "A focused inventory helps leaders see where permissions, owners, approvals, and operating practices differ in ways that matter.",
    checks: ["Record each workflow, business owner, connected systems, and user group.", "Classify its data access and the actions it can take.", "Compare approval, logging, testing, and incident procedures.", "Assign the gaps that need a shared control and the team responsible for it."],
    evidence: "A prioritized workflow inventory, control gaps, assigned owners, and a sequence for closing them."
  };
}

export function DeliveryExplorer() {
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState<"delivery" | "pressure">("delivery");
  const [answerStep, setAnswerStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([-1, -1, -1, -1]);
  const id = useId();
  const step = steps[active];
  const brief = decisionBrief(answers);
  const finished = answerStep === questions.length;

  return <figure className="architecture-board interactive-board delivery-board">
    <figcaption><span className="signal-dot"/>{mode === "delivery" ? "HOW WE HELP" : "AI WORKFLOW PRESSURE TEST"}</figcaption>
    <div className="delivery-modes" role="tablist" aria-label="Explore AdaptSphere">
      <button type="button" role="tab" aria-selected={mode === "delivery"} onClick={() => setMode("delivery")}>How we help</button>
      <button type="button" role="tab" aria-selected={mode === "pressure"} onClick={() => { setMode("pressure"); setAnswerStep(0); setAnswers([-1, -1, -1, -1]); }}><span>For AI leaders</span><strong>Find your next AI control</strong><small>4 questions · about 2 minutes</small><ArrowRight size={18} aria-hidden="true"/></button>
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
      <div className="pressure-intro"><h2>Find the next control your AI workflow needs.</h2><p>Answer four practical questions. Get a plain-language readout and a control plan you can take to your team. No company details needed.</p></div>
      <ol className="pressure-progress" aria-label={`Question ${Math.min(answerStep + 1, questions.length)} of ${questions.length}`}>{questions.map((question, i) => <li key={question.title} className={answerStep >= i ? "reached" : ""}><span>{answerStep > i || finished ? <Check size={13} aria-hidden="true"/> : i + 1}</span><span className="sr-only">{question.title}</span></li>)}</ol>
      {!finished ? <section aria-live="polite" className="pressure-question">
        <p className="pressure-question-count">QUESTION {answerStep + 1} OF {questions.length}</p><h3>{questions[answerStep].title}</h3><p>{questions[answerStep].note}</p>
        <div className="pressure-options">{questions[answerStep].options.map((option, i) => <button type="button" key={option} className={answers[answerStep] === i ? "selected" : ""} aria-pressed={answers[answerStep] === i} onClick={() => setAnswers(current => current.map((value, index) => index === answerStep ? i : value))}><span>{option}</span><ArrowRight size={15} aria-hidden="true"/></button>)}</div>
        <div className="pressure-actions"><button type="button" className="pressure-back" disabled={answerStep === 0} onClick={() => setAnswerStep(current => current - 1)}><ArrowLeft size={15} aria-hidden="true"/>Back</button><button type="button" className="pressure-next" disabled={answers[answerStep] < 0} onClick={() => setAnswerStep(current => current + 1)}>{answerStep === questions.length - 1 ? "Build my decision brief" : "Next question"}<ArrowRight size={15} aria-hidden="true"/></button></div>
      </section> : <section aria-live="polite" className="pressure-result"><p className="pressure-label"><span className="signal-dot"/>YOUR AI WORKFLOW DECISION BRIEF</p><h3>{brief.headline}</h3><p className="pressure-summary">{brief.summary}</p><p className="pressure-priority"><strong>Where to start</strong><span>{brief.priority}</span></p><h4>Why this matters</h4><p className="pressure-why">{brief.why}</p><h4>Checks for your team</h4><ol className="pressure-checks">{brief.checks.map((check, i) => <li key={check}><span>{i + 1}</span>{check}</li>)}</ol><div className="pressure-action"><strong>What a useful output looks like</strong><p>{brief.evidence}</p></div><p className="pressure-disclaimer">This guide uses only your selections in this page. It is a starting point for discussion, not a formal security assessment. Your answers are not sent or saved.</p><button type="button" className="pressure-back" onClick={() => { setAnswers([-1, -1, -1, -1]); setAnswerStep(0); }}><RotateCcw size={14} aria-hidden="true"/>Start over</button></section>}
      {!finished && <div className="board-caption"><span className="signal-dot"/><span>Your selections stay on this page. No company details or email required.</span></div>}
    </div>}
  </figure>;
}
