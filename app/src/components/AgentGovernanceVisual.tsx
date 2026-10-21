import styles from "./AgentGovernanceVisual.module.css";

const steps = [
  { label: "INPUT", title: "Invoice + vendor records", detail: "The agent receives read-only access to these records." },
  { label: "CHECK", title: "Compare invoice with purchase order", detail: "Flag a mismatch for the accounts-payable team." },
  { label: "AGENT OUTPUT", title: "Prepare an exception draft", detail: "The agent drafts a note; it does not change a business record." },
  { label: "HUMAN DECISION", title: "Finance reviewer decides", detail: "A person approves or rejects any payment action." },
] as const;

export function AgentGovernanceVisual() {
  return (
    <div className={styles.diagram} aria-label="Invoice exception governance example">
      <p className={styles.context}>EXAMPLE WORKFLOW <span aria-hidden="true">/</span> ACCOUNTS PAYABLE</p>

      <div className={styles.authorization}>
        <span className={styles.authorizationMark} aria-hidden="true">A</span>
        <div>
          <span className={styles.eyebrow}>AUTHORITY SET BEFORE LAUNCH</span>
          <strong>Finance process owner</strong>
          <p>Approves the purpose and limits: read invoice records and draft exceptions for review.</p>
        </div>
      </div>

      <ol className={styles.flow} aria-label="What happens in the invoice exception workflow">
        {steps.map((step, index) => (
          <li className={styles.step} key={step.label}>
            <span className={styles.number} aria-hidden="true">0{index + 1}</span>
            <div className={styles.stepCopy}>
              <span className={styles.stepLabel}>{step.label}</span>
              <strong>{step.title}</strong>
              <p>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.boundaries}>
        <section className={styles.permitted} aria-label="Actions permitted to the agent">
          <span>PERMITTED</span>
          <p>Read invoice + vendor data <b aria-hidden="true">·</b> draft an exception</p>
        </section>
        <section className={styles.prohibited} aria-label="Actions blocked for the agent">
          <span>BLOCKED</span>
          <p>Approve payment <b aria-hidden="true">·</b> release funds <b aria-hidden="true">·</b> change bank details</p>
        </section>
      </div>

      <p className={styles.enforcement}>IT enforces the approved scope through the agent identity and its access permissions.</p>
    </div>
  );
}
