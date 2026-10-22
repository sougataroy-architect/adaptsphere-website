"use client";

import { useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import { site } from "@/lib/site";

const questions = [
  {
    title: "What would you like to move forward?",
    note: "Pick the closest fit. You can add context to the draft at the end.",
    progress: "Goal",
    options: [
      { value: "review AI governance", label: "Review AI governance", detail: "Clarify current use, ownership, permissions, and controls" },
      { value: "set authority for an agent", label: "Set boundaries for an agent", detail: "Define what an agent can access, decide, and change" },
      { value: "connect AI to existing systems", label: "Connect AI to existing systems", detail: "Plan a controlled integration with business applications or data" },
      { value: "build or improve a Microsoft AI solution", label: "Build or improve a Microsoft AI solution", detail: "Work with Microsoft 365, Copilot Studio, Foundry, or Power Platform" },
      { value: "decide on a useful first step", label: "Work out where to start", detail: "Explore the problem and identify a practical next move" },
    ],
  },
  {
    title: "Where does the work sit today?",
    note: "Choose the main environment. We can discuss connected systems in your message.",
    progress: "Environment",
    options: [
      { value: "Microsoft tools such as Microsoft 365, Copilot Studio, Foundry, or Power Platform", label: "Microsoft AI", detail: "Microsoft 365, Copilot Studio, Foundry, or Power Platform" },
      { value: "enterprise applications, APIs, and data sources", label: "Enterprise systems", detail: "Applications, APIs, databases, and connected workflows" },
      { value: "a website or digital platform", label: "A web or digital platform", detail: "Website engineering, integrations, deployment, or operations" },
      { value: "several connected environments", label: "More than one environment", detail: "AI and existing systems cross platform boundaries" },
      { value: "an environment we are still mapping", label: "Still figuring that out", detail: "The systems and data paths need to be understood first" },
    ],
  },
  {
    title: "What would be most useful next?",
    note: "This helps us understand the kind of conversation to prepare for.",
    progress: "Next step",
    options: [
      { value: "assess the current setup and agree priorities", label: "Assess the current setup", detail: "Map use, access, ownership, and control gaps" },
      { value: "choose a useful first use case", label: "Choose a first use case", detail: "Compare business value, readiness, and delivery considerations" },
      { value: "design, build, or integrate a solution", label: "Design or build a solution", detail: "Define scope, access boundaries, implementation, and verification" },
      { value: "act on findings from an existing review", label: "Act on existing findings", detail: "Turn known issues into owned, testable changes" },
    ],
  },
];

export function ContactConversationBuilder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(["", "", ""]);
  const [context, setContext] = useState("");
  const [message, setMessage] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const id = useId();
  const heading = useRef<HTMLHeadingElement>(null);
  const draft = useRef<HTMLTextAreaElement>(null);
  const question = questions[step];
  const subject = "AI workflow conversation";

  function go(next: number) {
    setStep(next);
    setCopyStatus("");
    requestAnimationFrame(() => {
      heading.current?.focus({ preventScroll: true });
      heading.current?.scrollIntoView({ block: "nearest", behavior: "instant" });
    });
  }

  function createDraft() {
    const extra = context.trim() ? `\n\nA little more context:\n${context.trim()}` : "";
    setMessage(
      `Hello AdaptSphere,\n\nI’d like to discuss how to ${answers[0]}. The work is in ${answers[1]}. A useful next step for us would be to ${answers[2]}.${extra}\n\nRegards,`,
    );
    go(3);
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
          <h2>Let’s make the first email easier.</h2>
          <p>Answer three short questions. We’ll prepare a draft you can review, edit, and send yourself.</p>
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
            <li className={step === 3 ? "reached" : ""} aria-current={step === 3 ? "step" : undefined}>
              <span>{step === 3 ? <Check size={13} aria-hidden="true" /> : 4}</span>Draft
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
              {step === questions.length - 1 && (
                <div className="contact-extra-context">
                  <label htmlFor={`${id}-context`}>Optional: what task or decision is on your mind?</label>
                  <textarea id={`${id}-context`} value={context} onChange={(event) => setContext(event.target.value)} rows={3} maxLength={1000} placeholder="A sentence or two is enough. Leave out sensitive information." />
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
              <h3 ref={heading} tabIndex={-1}>Review and edit the draft.</h3>
              <p className="finder-note">To: {site.email}<br />Subject: {subject}</p>
              <label className="contact-draft-label" htmlFor={`${id}-draft`}>Email message</label>
              <textarea ref={draft} id={`${id}-draft`} className="contact-draft" value={message} onChange={(event) => setMessage(event.target.value)} rows={8} />
              <div className="contact-privacy-note">
                <strong>Your answers stay in this page.</strong>
                <p>This flow sends nothing to AdaptSphere and does not store your answers. Opening your email app passes the draft to that app. You choose whether to send it. Keep confidential details and credentials out of an initial message.</p>
              </div>
              <div className="contact-draft-actions">
                <button type="button" className="button" onClick={() => void copyDraft()}>Copy email draft <ArrowRight size={16} aria-hidden="true" /></button>
                <a className="button button-secondary" href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}>Open email app <ArrowRight size={16} aria-hidden="true" /></a>
              </div>
              <p className="contact-copy-status" aria-live="polite">{copyStatus}</p>
              <button type="button" className="finder-back" onClick={() => go(2)}><ArrowLeft size={15} aria-hidden="true" />Back to answers</button>
              <button type="button" className="finder-reset" onClick={() => { setAnswers(["", "", ""]); setContext(""); setMessage(""); go(0); }}><RotateCcw size={14} aria-hidden="true" />Start again</button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
