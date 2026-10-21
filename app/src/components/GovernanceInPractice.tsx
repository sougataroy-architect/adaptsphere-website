import styles from "./GovernanceInPractice.module.css";

const layers = [
  {
    number: "01",
    name: "Context",
    question: "What environment will it touch?",
    detail: "Accounts payable workflow; invoice and vendor records; finance operations; approval and payment systems.",
    tone: styles.context,
  },
  {
    number: "02",
    name: "Intent",
    question: "What may the agent do?",
    detail: "Read an invoice and vendor record, flag mismatches, and draft an exception for a person to review.",
    tone: styles.intent,
  },
  {
    number: "03",
    name: "Governance",
    question: "Who owns the decision over time?",
    detail: "The finance process owner approves the scope. IT configures access. Finance reviews exceptions; security tests the boundary and stop procedure.",
    tone: styles.governance,
  },
] as const;

const checks = [
  ["NIST AI RMF", "Govern the risk owner and review rules; map affected people, data, and systems; measure with allowed and denied-action tests; manage findings, monitoring, and change triggers."],
  ["RACI", "Name one accountable finance owner for the purpose and scope. Assign IT to configure it, security to advise and verify, and operations to handle exceptions."],
  ["Microsoft Entra", "Where the selected deployment supports it, assign a distinct agent identity and business sponsor; scope access, review it, and define how to suspend or revoke it."],
  ["COBIT", "Connect the agent decision to existing enterprise governance, risk ownership, and technology management practices rather than creating a separate AI committee for one workflow."],
] as const;

export function GovernanceInPractice() {
  return (
    <figure className={styles.figure} aria-labelledby="governance-example-title">
      <figcaption className={styles.caption}>
        <span className={styles.kicker}>A constructed service example</span>
        <h3 id="governance-example-title">An invoice agent that can flag an exception, but cannot pay it</h3>
        <p>One workflow, traced from business context to technical boundary and accountable review.</p>
      </figcaption>

      <ol className={styles.layers} aria-label="Context, intent, and governance example">
        {layers.map((layer) => (
          <li className={`${styles.layer} ${layer.tone}`} key={layer.name}>
            <span className={styles.layerIndex}>{layer.number}</span>
            <div>
              <h4>{layer.name}</h4>
              <strong>{layer.question}</strong>
              <p>{layer.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.boundary} aria-label="Example action boundary">
        <div className={styles.allowed}>
          <span className={styles.boundaryLabel}>Allowed</span>
          <p>Read invoice + vendor record <span aria-hidden="true">→</span> compare <span aria-hidden="true">→</span> draft exception for finance review</p>
        </div>
        <div className={styles.prohibited}>
          <span className={styles.boundaryLabel}>Prohibited</span>
          <p>Change vendor bank details <span aria-hidden="true">·</span> approve invoice <span aria-hidden="true">·</span> release payment</p>
        </div>
      </div>

      <div className={styles.frameworks}>
        <h4>How the governance tools fit</h4>
        <dl>
          {checks.map(([name, detail]) => (
            <div className={styles.frameworkRow} key={name}>
              <dt>{name}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className={styles.attribution}>
        Framework attribution: the Context–Intent–Governance structure is reproduced here in adapted form from Sougata Roy’s <a href="https://sougataroy.com/frameworks/intent-architecture-stack" target="_blank" rel="noreferrer">Intent Architecture Stack</a>. The invoice scenario and control mapping are AdaptSphere’s illustrative application, not a client case. NIST AI RMF actions are continuous and are not a prescribed step-by-step checklist.
      </p>
    </figure>
  );
}
