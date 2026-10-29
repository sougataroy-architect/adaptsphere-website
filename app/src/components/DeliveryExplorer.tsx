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

type DecisionBrief = { headline: string; meaning: string; first: string; checks: string[]; done: string };
const decisionBriefs: DecisionBrief[] = [
  { headline: "Choose a safe first use case", meaning: "You are exploring AI or looking for a place to begin. Start with one everyday task where a person can check the work before it affects a customer, employee, or business record.", first: "Ask one team to name a repetitive task that takes time and has a clear human owner.", checks: ["Write down the task and who is responsible for the result.", "List the information the AI truly needs for that task.", "Decide what the AI may prepare and what the person must decide.", "Try it on sample work and have the owner check accuracy and access."], done: "A one-page use case: task, owner, allowed data, human check, and test results." },
  { headline: "Put a person at the right decision point", meaning: "The AI is helping with a recommendation or decision. Make it clear when a person needs to review the answer and what they should check before acting.", first: "Pick one decision the AI supports and define the point where work pauses for review.", checks: ["Show the person the source information behind the recommendation.", "Explain what the AI is unsure about or cannot verify.", "Give the reviewer a clear way to approve, correct, or reject the suggestion.", "Record who made the final decision for important cases."], done: "A simple review path with source evidence, a named decision owner, and a record of the decision." },
  { headline: "Limit what the AI can change", meaning: "The workflow can update records or trigger actions. Set permissions so the AI can only make approved changes, and pause for a person before changes with larger consequences.", first: "List the systems and actions the AI can reach. Start with the action that would be hardest to undo.", checks: ["Separate permission to read information from permission to change it.", "Limit the AI account to the specific records and actions it needs.", "Require approval before sending, spending, deleting, or changing important records.", "Test that blocked actions stay blocked, even when instructions try to bypass the rule."], done: "An action list, limited system permissions, approval points, and proof that blocked actions fail." },
  { headline: "Map the full chain of connected tools", meaning: "The AI can take several steps across tools. Each connection can add access and authority, so map how a request moves and where a person can stop it.", first: "Draw the path from the request through every AI step and connected system to the final action.", checks: ["Name the identity used at each step.", "Write down what information each tool can read or change.", "Set a limit on which steps can happen without human review.", "Test what happens when a tool returns bad information or stops responding."], done: "A workflow map showing identities, data, actions, approval points, and failure handling." },
  { headline: "Check who can see the information", meaning: "Your main concern is access to private or sensitive information. Check the whole path from the person asking, through the AI, to each connected data source.", first: "Choose one sensitive source and trace who can ask for it and what the AI returns.", checks: ["List the connected files, systems, and accounts.", "Confirm the AI follows the access rights of the person asking.", "Try a request from someone who should not see the information.", "Check that answers show their source and do not expose extra details."], done: "A source and access map, a test showing restricted information stays restricted, and a named owner." },
  { headline: "Make answers easy to check", meaning: "You are concerned that an AI answer may be wrong or hard to explain. Give people a clear way to verify important answers before they rely on them.", first: "Choose the answer type that could cause the most harm or rework if it were wrong.", checks: ["List the sources the AI is allowed to use.", "Ask it questions where the source is missing, old, or disagrees.", "Show reviewers where each important answer came from.", "Decide when the AI should say it does not know and ask a person."], done: "A small set of test questions, expected answers, source links, and a clear human review rule." },
  { headline: "Name who responds when something goes wrong", meaning: "You are unsure who owns the workflow or its failures. A useful control plan names people who can review activity, handle problems, and stop the AI if needed.", first: "For one workflow, name the business owner and the person who can change or pause the system.", checks: ["Decide who reviews approvals and unusual activity.", "Choose where staff report a wrong or unsafe result.", "Write down who investigates and who tells affected teams.", "Practice how to pause access and safely restart the workflow."], done: "A short responsibility list with an owner, support contact, escalation path, and pause procedure." },
  { headline: "Make one shared view of AI use", meaning: "Different teams are adopting AI in different ways. Create a simple list of the workflows with the most access or decision power so leaders can see what needs attention first.", first: "Ask each team to list its live AI workflows, then start with the ones that can see sensitive data or change systems.", checks: ["Record the business purpose and owner for each workflow.", "List the data, connected tools, and actions each one can use.", "Note how approvals, testing, and monitoring work today.", "Assign an owner and next review date to the most important gaps."], done: "A prioritized list of AI workflows with owners, access, actions, gaps, and next steps." },
];
function decisionBrief(answers: number[]): DecisionBrief {
  const [, authority, concern, safeguards] = answers;
  if (concern === 0) return decisionBriefs[4];
  if (concern === 1) return decisionBriefs[5];
  if (concern === 2) return decisionBriefs[2];
  if (concern === 3 || safeguards === 3) return decisionBriefs[6];
  if (authority === 3) return decisionBriefs[3];
  if (authority === 2) return decisionBriefs[2];
  if (authority === 1) return decisionBriefs[1];
  return decisionBriefs[0];
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
      </section> : <section aria-live="polite" className="pressure-result"><p className="pressure-label"><span className="signal-dot"/>YOUR AI WORKFLOW DECISION BRIEF</p><h3>{brief.headline}</h3><h4>What your answers point to</h4><p className="pressure-summary">{brief.meaning}</p><div className="pressure-priority"><strong>1. Start here</strong><span>{brief.first}</span></div><h4>2. Work through these checks</h4><ol className="pressure-checks">{brief.checks.map((check, i) => <li key={check}><span>{i + 1}</span>{check}</li>)}</ol><div className="pressure-action"><strong>3. You are ready to move on when</strong><p>{brief.done}</p></div><p className="pressure-disclaimer">This guide uses only your selections in this page. It is a starting point for discussion, not a formal security assessment. Your answers are not sent or saved.</p><button type="button" className="pressure-back" onClick={() => { setAnswers([-1, -1, -1, -1]); setAnswerStep(0); }}><RotateCcw size={14} aria-hidden="true"/>Start over</button></section>}
      {!finished && <div className="board-caption"><span className="signal-dot"/><span>Your selections stay on this page. No company details or email required.</span></div>}
    </div>}
  </figure>;
}
