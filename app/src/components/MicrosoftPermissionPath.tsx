import styles from "./MicrosoftPermissionPath.module.css";

const steps = [
  { number: "01", title: "A person’s access", text: "The user already has permissions to company content." },
  { number: "02", title: "Content retrieval", text: "Microsoft 365 Copilot can reference content that user is allowed to access." },
  { number: "03", title: "Grounded response", text: "The response can reflect that content in the user’s work context." },
];

export function MicrosoftPermissionPath() {
  return <figure className={styles.figure}>
    <figcaption>
      <span>MICROSOFT 365 CONTENT PATH</span>
      <strong>Existing permissions shape what Copilot can surface.</strong>
    </figcaption>
    <ol className={styles.path}>
      {steps.map((step, index) => <li key={step.number}>
        <span className={styles.number}>{step.number}</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
        {index < steps.length - 1 && <span className={styles.arrow} aria-hidden="true">→</span>}
      </li>)}
    </ol>
    <p className={styles.note}>Copilot does not replace SharePoint or OneDrive permissions. Broad existing access can still make content discoverable; review the source permissions and the workload configuration.</p>
  </figure>;
}
