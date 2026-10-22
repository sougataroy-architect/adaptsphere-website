import Image from "next/image";
import { SectionHeading } from "@/components/UI";
import styles from "./AgentThreatReview.module.css";

const threatChecks = [
  {
    title: "Instructions in untrusted content",
    detail: "Treat email, files, and retrieved pages as data. Test whether embedded instructions can trigger a tool action.",
  },
  {
    title: "Access beyond the task",
    detail: "Limit each identity and connector to the records and operations the approved workflow needs.",
  },
  {
    title: "Actions without the right approval",
    detail: "Pause consequential changes for a named person, then record the decision and result.",
  },
];

export function AgentThreatReview() {
  return (
    <div className={styles.section}>
      <SectionHeading
        label="Threats meet authority"
        title="A guardrail must hold when the agent is misled."
        text="Prompts guide model behavior. Enforced access boundaries determine what the surrounding system can actually reach and change."
      />
      <div className={styles.review}>
        <figure className={styles.photo}>
          <Image
            src="/visuals/agent-security-workshop-v1.png"
            alt="A business owner, security engineer, and AI engineer review an agent workflow together at a laptop."
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1152px) 52vw, 560px"
          />
          <figcaption>Business authority and technical safeguards are designed together.</figcaption>
        </figure>
        <div className={styles.checks}>
          <p className={styles.kicker}>What the review tests</p>
          <ol>
            {threatChecks.map((check, index) => (
              <li key={check.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3>{check.title}</h3>
                  <p>{check.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
