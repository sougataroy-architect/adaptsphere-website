"use client";

import { useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import { site } from "@/lib/site";

const questions = [
  {
    title: "What work are you trying to improve?",
    note: "Start with the business task or decision. Choose the closest fit, then add a little context if useful.",
    progress: "The work",
    options: [
      { value: "review AI use and governance", label: "Review AI use and governance", detail: "Understand current tools, ownership, access, and controls" },
      { value: "set boundaries for an AI agent", label: "Set boundaries for an agent", detail: "Decide what it may read, prepare, change, or hand to a person" },
      { value: "connect AI with existing systems", label: "Connect AI with existing systems", detail: "Plan a safe path through applications, APIs, and data" },
      { value: "build or improve a Microsoft AI solution", label: "Build or improve a Microsoft AI solution", detail: "Microsoft 365, Copilot Studio, Foundry, or Power Platform" },
      { value: "identify a practical AI starting point", label: "Find a practical starting point", detail: "Explore a business problem before choosing a tool" },
      { value: "resolve an issue with an AI system in production", label: "Improve a live AI system", detail: "Address access, reliability, operations, or a known control gap" },
    ],
  },
  {
    title: "Which systems and information are involved?",
    note: "Select the closest environment. You can name specific tools in the optional detail field.",
    progress: "Systems",
    options: [
      { value: "Microsoft 365, Copilot Studio, Foundry, or Power Platform", label: "Microsoft AI", detail: "Microsoft 365, Copilot Studio, Foundry, or Power Platform" },
      { value: "business applications, APIs, or databases", label: "Business applications and APIs", detail: "CRM, ERP, internal tools, databases, or connected workflows" },
      { value: "documents, knowledge bases, or collaboration sites", label: "Documents and company knowledge", detail: "SharePoint, file stores, intranets, or search" },
      { value: "a website, customer channel, or digital platform", label: "A website or digital platform", detail: "Web applications, customer experiences, deployment, or operations" },
      { value: "several connected environments", label: "Several connected systems", detail: "Information or actions cross platform boundaries" },
      { value: "systems we are still mapping", label: "Still mapping the environment", detail: "The first step may be to understand where data and work flow" },
    ],
  },
  {
    title: "What should the AI be able to do?",
    note: "Think about its role in the workflow. You can describe approval points and actions that should stay out of scope below.",
    progress: "Authority",
    options: [
      { value: "find and summarize approved information", label: "Find and summarize information", detail: "Read permitted sources and return a useful, traceable answer" },
      { value: "classify, route, or recommend a next step", label: "Classify or recommend", detail: "Help a person decide what should happen next" },
      { value: "prepare a draft for someone to review", label: "Prepare a draft", detail: "Create a response, document, or proposed update for review" },
      { value: "update a business record or start a workflow", label: "Update a record or start a workflow", detail: "Make a scoped change in an existing system" },
      { value: "take an external or consequential action", label: "Take a consequential action", detail: "For example, send externally, approve, purchase, or change access" },
      { value: "work this out with the team", label: "We have not decided yet", detail: "Clarify appropriate authority and human review first" },
    ],
  },
  {
    title: "What would make the next step useful?",
    note: "Tell us where you are in the work and what kind of help would move it forward.",
    progress: "Next step",
    options: [
      { value: "assess the current workflow, access, and controls", label: "Assess the current setup", detail: "Map the workflow, access paths, ownership, and open risks" },
      { value: "choose and prioritize a use case", label: "Choose a use case", detail: "Compare business value, data access, risk, and readiness" },
      { value: "design the solution and its operating controls", label: "Design the solution", detail: "Set scope, identity, permissions, review points, and ownership" },
      { value: "build, integrate, and verify a solution", label: "Build or integrate", detail: "Implement the workflow and test allowed and denied actions" },
      { value: "improve an existing deployment or act on findings", label: "Improve an existing deployment", detail: "Turn a known issue into an owned, testable change" },
      { value: "discuss the situation and agree a first step", label: "Talk it through", detail: "Start with the problem; the right engagement can follow" },
    ],
  },
];

const emptyAnswers = () => ["", "", "", ""];

export function ContactConversationBuilder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(emptyAnswers);
  const [details, setDetails] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const id = useId();
  const heading = useRef<HTMLHeadingElement>(null);
  const draft = useRef<HTMLTextAreaElement>(null);
  const question = questions[step];
  const subject = "AI workflow and implementation conversation";

  function go(next: number) {
    setStep(next);
    setCopyStatus("");
    requestAnimationFrame(() => {
      heading.current?.focus({ preventScroll: true });
      heading.current?.scrollIntoView({ block: "nearest", behavior: "instant" });
    });
  }

  function createDraft() {
    const optionalLines = [
      details[0].trim() ? `Current workflow or challenge: ${details[0].trim()}` : "",
      details[1].trim() ? `Systems or information involved: ${details[1].trim()}` : "",
      details[2].trim() ? `Approval points or actions to keep out of scope: ${details[2].trim()}` : "",
      details[3].trim() ? `Useful outcome, workflow owner, or timing: ${details[3].trim()}` : "",
    ].filter(Boolean);
    const detailSection = optionalLines.length ? `\n\nA little more context\n${optionalLines.map((line) => `• ${line}`).join("\n")}` : "";
    setMessage(
      `Hello AdaptSphere,\n\nI’d like to discuss an AI implementation question.\n\nWhat we are trying to improve: ${answers[0]}.\nSystems and information involved: ${answers[1]}.\nThe AI’s intended role: ${answers[2]}.\nA useful next step: ${answers[3]}.${detailSection}\n\nI can provide more detail in a conversation, including who owns the workflow and any timing or review requirements.\n\nRegards,`,
    );
    go(4);
  }

  async function copyDraft() {
    const text = `To: ${site.email}\nSubject: ${subject}\n\n${message}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("Email draft copied. You can paste it into your email app.");
    } catch {
      const temporary = document.createElement("textarea");
      temporary.value = text;
      temporary.setAttribute("readonly", "");
      temporary.style.position = "fixed";
      temporary.style.left = "-9999px";
      document.body.appendChild(temporary);
      temporary.select();
      const copied = document.execCommand("copy");
      temporary.remove();
      if (copied) setCopyStatus("Email draft copied. You can paste it into your email app.");
      else {
        draft.current?.focus();
        draft.current?.select();
        setCopyStatus("Select and copy the draft above, then paste it into your email app.");
      }
    }
  }

  return (
    <section className="section finder-section contact-builder-section">
      <div className="container">
        <div className="finder-intro">
          <p className="eyebrow">A useful first conversation</p>
          <h2>Start with the work, systems, and decisions.</h2>
          <p>Four short steps shape a specific email draft. Review it, edit anything, then send it yourself.</p>
          <p className="finder-privacy">Your answers stay in this page while you work. The site does not save them.</p>
          <a className="text-link" href={`mailto:${site.email}`}>Or email us directly <ArrowRight size={16} aria-hidden="true" /></a>
        </div>

        <div className="finder-workspace contact-builder-workspace">
          <ol className="finder-progress" aria-label="Contact questions">
            {questions.map((item, index) => (
              <li key={item.progress} className={step >= index ? "reached" : ""} aria-current={step === index ? "step" : undefined}>
                <span>{step > index ? <Check size={13} aria-hidden="true" /> : index + 1}</span>{item.progress}
              </li>
            ))}
            <li className={step === 4 ? "reached" : ""} aria-current={step === 4 ? "step" : undefined}>
              <span>{step === 4 ? <Check size={13} aria-hidden="true" /> : 5}</span>Draft
            </li>
          </ol>

          {step < questions.length ? (
            <>
              <h3 ref={heading} tabIndex={-1}>{question.title}</h3>
              <p className="finder-note">{question.note}</p>
              <fieldset className="finder-options">
                <legend className="sr-only">{question.title}</legend>
                {question.options.map((option) => (
                  <label key={option.value} className={answers[step] === option.value ? "selected" : ""}>
                    <input
                      type="radio"
                      name={`${id}-question-${step}`}
                      value={option.value}
                      checked={answers[step] === option.value}
                      onChange={() => setAnswers((current) => current.map((answer, index) => index === step ? option.value : answer))}
                    />
                    <span><strong>{option.label}</strong><span>{option.detail}</span></span>
                  </label>
                ))}
              </fieldset>
              {step < 4 && (
                <div className="contact-extra-context">
                  <label htmlFor={`${id}-detail-${step}`}>
                    {step === 0 ? "Optional: what happens today or where does the work get stuck?" : step === 1 ? "Optional: which systems or information sources are involved?" : step === 2 ? "Optional: what should require a person’s approval or stay out of scope?" : "Optional: what outcome would help, who owns the workflow, or when are you hoping to act?"}
                  </label>
                  <textarea
                    id={`${id}-detail-${step}`}
                    value={details[step]}
                    onChange={(event) => setDetails((current) => current.map((detail, index) => index === step ? event.target.value : detail))}
                    rows={2}
                    maxLength={180}
                    placeholder={step === 0 ? "A sentence is enough. Leave out confidential details." : step === 1 ? "For example, SharePoint, Dynamics, or an internal API." : step === 2 ? "For example, a person approves external messages or record changes." : "For example, reduce manual triage; owned by Operations; this quarter."}
                  />
                </div>
              )}
              <div className="finder-actions">
                <button type="button" className="finder-back" disabled={step === 0} onClick={() => go(step - 1)}><ArrowLeft size={15} aria-hidden="true" />Back</button>
                <button type="button" className="button" disabled={!answers[step]} onClick={() => step === questions.length - 1 ? createDraft() : go(step + 1)}>
                  {step === questions.length - 1 ? "Prepare my email" : "Continue"}<ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </>
          ) : (
            <div className="contact-draft-view">
              <p className="eyebrow">Your message is ready</p>
              <h3 ref={heading} tabIndex={-1}>Review and edit the project brief.</h3>
              <p className="finder-note">To: {site.email}<br />Subject: {subject}</p>
              <label className="contact-draft-label" htmlFor={`${id}-draft`}>Email message</label>
              <textarea ref={draft} id={`${id}-draft`} className="contact-draft" value={message} onChange={(event) => setMessage(event.target.value)} rows={13} />
              <div className="contact-privacy-note">
                <strong>Your answers stay in this page.</strong>
                <p>This flow sends nothing to AdaptSphere and does not store your answers. Opening your email app passes the draft to that app. You choose whether to send it. Keep confidential details and credentials out of an initial message.</p>
              </div>
              <div className="contact-draft-actions">
                <button type="button" className="button" onClick={() => void copyDraft()}>Copy email draft <ArrowRight size={16} aria-hidden="true" /></button>
                <a className="button button-secondary" href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}>Open email app <ArrowRight size={16} aria-hidden="true" /></a>
              </div>
              <p className="contact-copy-status" aria-live="polite">{copyStatus}</p>
              <button type="button" className="finder-back" onClick={() => go(3)}><ArrowLeft size={15} aria-hidden="true" />Back to answers</button>
              <button type="button" className="finder-reset" onClick={() => { setAnswers(emptyAnswers()); setDetails(["", "", "", ""]); setMessage(""); go(0); }}><RotateCcw size={14} aria-hidden="true" />Start again</button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
