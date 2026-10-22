"use client";

import { useId, useState } from "react";
import { ArrowRight } from "lucide-react";

const prompts = [
  {
    title: "The task and your role",
    detail: "What work your team wants help with, and your role in the organization.",
    example: "Our team handles [business task], and I’m responsible for [your role].",
  },
  {
    title: "The workflow and systems",
    detail: "The tools, applications, and data sources the work touches.",
    example: "The workflow currently uses [tools or applications] and [data sources].",
  },
  {
    title: "The authority boundary",
    detail: "What the agent should do, and what must stay outside its authority.",
    example: "We want AI to [assist with an action]; a person must still decide [decision].",
  },
  {
    title: "The decision owner",
    detail: "Who approves actions, owns the workflow, or reviews exceptions.",
    example: "[Role or team] owns this workflow, and [role or team] reviews exceptions.",
  },
  {
    title: "Timing",
    detail: "An approximate timeframe, if one is already known.",
    example: "We are exploring a first step around [timeframe], if that is practical.",
  },
];

export function ContactPromptExplorer() {
  const [active, setActive] = useState(0);
  const id = useId();
  const prompt = prompts[active];

  return <div className="contact-prompt-explorer">
    <ol className="contact-prompt-options" aria-label="Choose a detail to include in your first message">
      {prompts.map((item, index) => <li key={item.title}>
        <button type="button" aria-pressed={active === index} aria-controls={`${id}-preview`} onClick={() => setActive(index)}>
          <span className="contact-prompt-number">0{index + 1}</span>
          <span className="contact-prompt-title">{item.title}</span>
          <ArrowRight size={16} aria-hidden="true"/>
        </button>
      </li>)}
    </ol>
    <div className="contact-prompt-preview" id={`${id}-preview`} aria-live="polite">
      <span className="contact-prompt-kicker">{prompt.title}</span>
      <p>{prompt.detail}</p>
      <div className="contact-prompt-example">
        <span>A useful first line</span>
        <p>{prompt.example}</p>
      </div>
    </div>
  </div>;
}
