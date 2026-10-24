import styles from "./GovernanceRaci.module.css";

const roles = ["Executive sponsor", "Business owner", "Operations + IT", "Risk + security"] as const;
const rows = [
  { task: "Approve business purpose", values: ["A", "R", "C", "C"] },
  { task: "Set access + data boundaries", values: ["I", "A", "R", "C"] },
  { task: "Monitor + respond to incidents", values: ["I", "A", "R", "C"] },
  { task: "Review continued need + retire", values: ["C", "A", "R", "C"] },
] as const;

const definitions = [
  ["A", "Accountable", "Owns the decision and its outcome."],
  ["R", "Responsible", "Carries out the work."],
  ["C", "Consulted", "Provides input before the decision."],
  ["I", "Informed", "Receives updates after the decision."],
] as const;

export function GovernanceRaci() {
  return <figure className={styles.figure}>
    <figcaption>
      <span>ILLUSTRATIVE RESPONSIBILITY MAP</span>
      <strong>Give each governance decision a named owner.</strong>
      <p>Example for an internal business agent. Replace role names and assignments with your organization’s actual authority.</p>
    </figcaption>
    <div className={styles.tableWrap} role="region" aria-label="Illustrative RACI matrix; scroll horizontally on narrow screens" tabIndex={0}>
      <table className={styles.table}>
        <thead><tr><th scope="col">Decision or activity</th>{roles.map(role => <th scope="col" key={role}>{role}</th>)}</tr></thead>
        <tbody>{rows.map(row => <tr key={row.task}><th scope="row">{row.task}</th>{row.values.map((value, index) => <td key={`${row.task}-${roles[index]}`}><span className={`${styles.mark} ${styles[value]}`} aria-label={`${definitions.find(([key]) => key === value)?.[1]}: ${roles[index]}`}>{value}</span></td>)}</tr>)}</tbody>
      </table>
    </div>
    <ul className={styles.legend} aria-label="RACI definitions">{definitions.map(([key, title, description]) => <li key={key}><span className={`${styles.mark} ${styles[key]}`} aria-hidden="true">{key}</span><span><strong>{title}</strong><small>{description}</small></span></li>)}</ul>
    <p className={styles.note}>A RACI matrix clarifies who decides, does, advises, and receives updates. It is a planning record, not an agent design method or a technical enforcement control. Name one accountable decision owner for each activity, then map that decision to configured access and review evidence.</p>
  </figure>;
}
