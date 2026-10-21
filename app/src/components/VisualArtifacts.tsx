import styles from "./VisualArtifacts.module.css";

type Kind = "flow" | "gate" | "layers" | "cycle" | "matrix" | "network" | "compare" | "record" | "timeline";
export type ArtifactSpec = { title: string; caption: string; kind: Kind; labels: readonly string[] };

const ink = ["#31586b", "#52745b", "#8b6823", "#765b8e", "#a45f48"];

function Diagram({ item }: { item: ArtifactSpec }) {
  const labels = item.labels.slice(0, 5);
  const positions = [[60, 83], [180, 83], [300, 83], [420, 83], [300, 152]] as const;
  const colors = labels.map((_, i) => ink[(i + item.kind.length) % ink.length]);
  if (item.kind === "cycle") return <svg viewBox="0 0 480 205" role="img" aria-label={`${item.title}: ${labels.join(", ")}`}>
    <ellipse cx="240" cy="100" rx="165" ry="68" fill="none" stroke="#c7d1c5" strokeWidth="3" strokeDasharray="7 8"/>
    {labels.map((label, i) => { const a = -Math.PI / 2 + i * Math.PI * 2 / labels.length; const x = 240 + Math.cos(a) * 165; const y = 100 + Math.sin(a) * 68; return <g key={label}><circle cx={x} cy={y} r="9" fill={colors[i]}/><rect x={x - 52} y={y - 27} width="104" height="54" rx="14" fill="#fffdf7" stroke={colors[i]} strokeWidth="2"/><text x={x} y={y + 4} textAnchor="middle">{label}</text></g>; })}
    <circle cx="240" cy="100" r="35" fill="#e8ebd8" stroke="#bac095" strokeWidth="2"/><text x="240" y="104" textAnchor="middle">REVIEW</text>
  </svg>;
  if (item.kind === "matrix" || item.kind === "compare") return <svg viewBox="0 0 480 205" role="img" aria-label={`${item.title}: ${labels.join(", ")}`}>
    <path d="M240 23v158M40 102h400" stroke="#bcc7bc" strokeWidth="2" strokeDasharray={item.kind === "matrix" ? "0" : "5 5"}/>
    {labels.map((label, i) => { const x = i % 2 ? 360 : 120; const y = i < 2 ? 58 : 146; return <g key={label}><rect x={x - 72} y={y - 24} width="144" height="48" rx="12" fill={i % 2 ? "#f5eacc" : "#e2edf1"} stroke={colors[i]} strokeWidth="2"/><text x={x} y={y + 4} textAnchor="middle">{label}</text><circle cx={x + (x < 240 ? 57 : -57)} cy={y} r="6" fill={colors[i]}/></g>; })}
  </svg>;
  if (item.kind === "layers") return <svg viewBox="0 0 480 205" role="img" aria-label={`${item.title}: ${labels.join(", ")}`}>
    {labels.map((label, i) => <g key={label}><path d={`M${240 - (labels.length - i) * 31} ${45 + i * 31}h${(labels.length - i) * 62}l31 20h-${(labels.length - i) * 62}z`} fill={["#e2edf1", "#e8ebd8", "#f5eacc", "#eae2f2", "#f1dfd5"][i]} stroke={colors[i]} strokeWidth="2"/><text x="240" y={59 + i * 31} textAnchor="middle">{label}</text></g>)}
  </svg>;
  if (item.kind === "record") return <svg viewBox="0 0 480 205" role="img" aria-label={`${item.title}: ${labels.join(", ")}`}>
    <path d="M93 25h214l78 60v96H93z" fill="#fffdf7" stroke="#bac095" strokeWidth="2"/><path d="M307 25v60h78" fill="#e8ebd8" stroke="#bac095" strokeWidth="2"/>
    {labels.map((label, i) => <g key={label}><circle cx="124" cy={105 + i * 22} r="7" fill={colors[i]}/><text x="145" y={110 + i * 22} textAnchor="start">{label}</text><path d={`M145 ${116 + i * 22}h${145 + (i % 2) * 45}`} stroke="#d8ded5" strokeWidth="2"/></g>)}
    <circle cx="362" cy="157" r="24" fill="#52745b"/><path d="m351 157 8 8 15-18" fill="none" stroke="#fffdf7" strokeWidth="3"/>
  </svg>;
  if (item.kind === "network") return <svg viewBox="0 0 480 205" role="img" aria-label={`${item.title}: ${labels.join(", ")}`}>
    {positions.slice(0, labels.length).map(([x, y], i) => i > 0 && <line key={`l-${i}`} x1={positions[i - 1][0]} y1={positions[i - 1][1]} x2={x} y2={y} stroke="#a9b69f" strokeWidth="3" strokeDasharray={i === 2 ? "6 5" : undefined}/>)}
    {labels.map((label, i) => <g key={label}><circle cx={positions[i][0]} cy={positions[i][1]} r="29" fill={["#e2edf1", "#e8ebd8", "#f5eacc", "#eae2f2", "#f1dfd5"][i]} stroke={colors[i]} strokeWidth="2"/><text x={positions[i][0]} y={positions[i][1] + 48} textAnchor="middle">{label}</text></g>)}
  </svg>;
  if (item.kind === "timeline") return <svg viewBox="0 0 480 205" role="img" aria-label={`${item.title}: ${labels.join(", ")}`}>
    <path d="M48 102h384" stroke="#9aa988" strokeWidth="4"/>
    {labels.map((label, i) => { const x = 55 + i * (370 / Math.max(1, labels.length - 1)); return <g key={label}><circle cx={x} cy="102" r="10" fill={colors[i]} stroke="#fffdf7" strokeWidth="3"/><path d={`M${x} 89v-${i % 2 ? 26 : 0}M${x} 115v${i % 2 ? 0 : 30}`} stroke={colors[i]} strokeWidth="2"/><rect x={x - 47} y={i % 2 ? 28 : 142} width="94" height="34" rx="9" fill="#fffdf7" stroke={colors[i]}/><text x={x} y={i % 2 ? 50 : 164} textAnchor="middle">{label}</text></g>; })}
  </svg>;
  if (item.kind === "gate") return <svg viewBox="0 0 480 205" role="img" aria-label={`${item.title}: ${labels.join(", ")}`}>
    <path d="M45 103h95m195 0h100" stroke="#9aa988" strokeWidth="4"/><path d="m140 103 50-50v100z" fill="#e8ebd8" stroke="#52745b" strokeWidth="2"/><rect x="188" y="67" width="104" height="72" rx="18" fill="#31586b"/><path d="M210 102h60m-30-22v44" stroke="#fffdf7" strokeWidth="4"/>
    {labels.slice(0, 3).map((label, i) => <g key={label}><rect x={22 + i * 165} y={i === 1 ? 20 : 159} width="132" height="30" rx="10" fill={["#e2edf1", "#e8ebd8", "#f5eacc"][i]} stroke={ink[i]}/><text x={88 + i * 165} y={i === 1 ? 40 : 179} textAnchor="middle">{label}</text></g>)}
  </svg>;
  return <svg viewBox="0 0 480 205" role="img" aria-label={`${item.title}: ${labels.join(", ")}`}>
    {labels.map((label, i) => <g key={label}><rect x={18 + i * (444 / labels.length)} y={58 + (i % 2) * 18} width={Math.min(94, 444 / labels.length - 8)} height="76" rx={item.kind === "flow" ? 14 : 32} fill={["#e2edf1", "#e8ebd8", "#f5eacc", "#eae2f2", "#f1dfd5"][i]} stroke={colors[i]} strokeWidth="2"/><circle cx={40 + i * (444 / labels.length)} cy={81 + (i % 2) * 18} r="8" fill={colors[i]}/><text x={65 + i * (444 / labels.length)} y={100 + (i % 2) * 18} textAnchor="middle">{label}</text>{i < labels.length - 1 && <path d={`M${111 + i * (444 / labels.length)} 98h${Math.max(8, 444 / labels.length - 28)}m-9-7 9 7-9 7`} fill="none" stroke="#8f9b8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>}</g>)}
  </svg>;
}

export function VisualArtifact({ item, compact = false, className = "" }: { item: ArtifactSpec; compact?: boolean; className?: string }) {
  return <figure className={`${styles.artifact} ${compact ? styles.compact : ""} ${className}`}><figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption><Diagram item={item}/></figure>;
}

export function VisualArtifactGrid({ items, label }: { items: readonly ArtifactSpec[]; label?: string }) {
  return <div className={styles.grid} aria-label={label}>{items.map((item, i) => <VisualArtifact key={`${item.title}-${i}`} item={item}/>)}</div>;
}

const services: Record<string, readonly ArtifactSpec[]> = {
  "governed-ai-architecture": [
    { title: "From intent to permitted tool", caption: "Each step narrows the route from a business request to an authorized operation.", kind: "flow", labels: ["Work need", "Agent", "Tool scope", "Approved change"] },
    { title: "Keep the trust boundaries visible", caption: "Model, application identity, connectors, and business records have separate control owners.", kind: "layers", labels: ["Business rules", "API boundary", "Agent runtime", "Model"] },
  ],
  "ai-governance-assessment": [
    { title: "Compare intent with configuration", caption: "The assessment traces policy claims to settings, observed behavior, and evidence.", kind: "compare", labels: ["Intended use", "Configured access", "Observed result", "Finding"] },
    { title: "Rank findings by what they affect", caption: "Separate the exposed resource, the control gap, the decision owner, and the verification step.", kind: "record", labels: ["Resource", "Gap", "Owner", "Retest"] },
  ],
  "agent-governance": [
    { title: "Authority travels with the agent", caption: "Purpose and approval must match identity, tools, allowed effects, and review conditions.", kind: "gate", labels: ["Approved purpose", "Identity", "Allowed action"] },
    { title: "Review when the authority changes", caption: "Ownership changes, new tools, incidents, or retirement should reopen the authorization decision.", kind: "cycle", labels: ["Approve", "Operate", "Review", "Change", "Retire"] },
  ],
  "ai-integration-modernization": [
    { title: "Put business rules at the interface", caption: "The integration checks identity and validates the requested operation before records change.", kind: "gate", labels: ["Agent request", "API checks", "Business record"] },
    { title: "Design for failure and recovery", caption: "A safe integration defines what happens when access, validation, or a downstream system fails.", kind: "timeline", labels: ["Request", "Validate", "Commit", "Log", "Recover"] },
  ],
  "platform-engineering": [
    { title: "A release is a controlled path", caption: "Changes move through reviewable environments before production operation.", kind: "flow", labels: ["Develop", "Review", "Test", "Release"] },
    { title: "Operations owns the recovery route", caption: "Monitoring, rollback, incident response, and handover belong in the operating plan.", kind: "cycle", labels: ["Observe", "Diagnose", "Recover", "Learn"] },
  ],
  "governance-remediation": [
    { title: "Close the finding with evidence", caption: "An agreed fix is complete when its owner can show the changed control and a passing retest.", kind: "timeline", labels: ["Finding", "Decision", "Fix", "Retest", "Close"] },
    { title: "Separate ownership of decision and change", caption: "Business authority chooses the response; technical owners implement it; reviewers confirm evidence.", kind: "matrix", labels: ["Business owner", "IT implementer", "Risk reviewer", "Evidence"] },
  ],
};

export function ServiceArtifacts({ slug }: { slug: string }) { return <VisualArtifactGrid items={services[slug] ?? []} label="Engagement diagrams"/>; }
export function ServiceArtifactAt({ slug, index }: { slug: string; index: number }) { const item = services[slug]?.[index]; return item ? <VisualArtifact item={item}/> : null; }

const articleEntries: Record<string, readonly ArtifactSpec[]> = {
  "authorize-the-schedule-that-runs-the-agent": [
    { title: "A run log cannot approve a schedule", caption: "The event record describes what ran; authority also needs an approver and a review trigger.", kind: "compare", labels: ["Run history", "Approval record", "Owner", "Next review"] },
    { title: "Add the trigger to the authority record", caption: "Include the time or event, intended effect, accountable owner, and stop condition.", kind: "record", labels: ["Trigger", "Purpose", "Effect", "Owner"] },
    { title: "Owner departure must reach active triggers", caption: "Offboarding should expose unattended schedules for a new decision before they continue.", kind: "flow", labels: ["Owner leaves", "Find triggers", "Suspend", "Reapprove"] },
  ],
  "authorize-the-agent-chain": [
    { title: "The final effect belongs to the whole chain", caption: "A chain can combine retrieval, interpretation, and external action across multiple agents.", kind: "network", labels: ["Request", "Retrieve", "Decide", "Act"] },
    { title: "Record shared authority once", caption: "Identify the initiator, composition approver, combined scope, and owner of the outcome.", kind: "record", labels: ["Initiator", "Approver", "Combined scope", "Owner"] },
    { title: "Test each handoff and the final effect", caption: "A constrained edge between agents is as important as the permissions of each component.", kind: "gate", labels: ["Agent A", "Scoped handoff", "Agent B"] },
  ],
  "agent-authorization-before-autonomy": [
    { title: "Different actions require different authority", caption: "Read, change, and send each have different consequences and should be scoped separately.", kind: "matrix", labels: ["Read", "Change", "Send", "Approve"] },
    { title: "Make authority traceable to an identity", caption: "Tie the business owner and technical maintainer to the identity and tools they govern.", kind: "network", labels: ["Owner", "Identity", "Tool", "Evidence"] },
    { title: "Test allowed and denied paths", caption: "Include revoked access, missing dependencies, unexpected input, and approval-required actions.", kind: "compare", labels: ["Allowed", "Denied", "Revoked", "Failure"] },
    { title: "Ownership changes reopen review", caption: "Sponsor departure or a changed workflow should trigger a fresh access decision.", kind: "cycle", labels: ["Sponsor", "Review", "Continue", "Remove"] },
  ],
  "modernization-is-an-ai-control": [
    { title: "A direct database link skips the rule boundary", caption: "The connection may work while bypassing the application’s validation and approval rules.", kind: "compare", labels: ["Direct access", "Business rule", "Approved API", "Record"] },
    { title: "Expose only deliberate operations", caption: "A narrow interface validates identity and request before calling the legacy system.", kind: "gate", labels: ["Agent", "Validated API", "Legacy app"] },
    { title: "Preserve validation and transaction rules", caption: "Check business invariants, approval points, and rollback behavior before automation.", kind: "layers", labels: ["Approval", "Validation", "Transaction", "System"] },
    { title: "Modernize one recoverable slice", caption: "Scope the workflow, denied-action tests, recovery plan, and separate development assistance from runtime AI.", kind: "timeline", labels: ["Scope", "Build", "Test", "Recover", "Expand"] },
  ],
  "governance-that-survives-deployment": [
    { title: "Turn a policy sentence into an operating control", caption: "Link the requirement to a setting, named owner, procedure, and retained record.", kind: "flow", labels: ["Requirement", "Setting", "Owner", "Evidence"] },
    { title: "A configured safeguard still needs an operator", caption: "Access review, incident action, and ownership transfer keep the setting effective over time.", kind: "network", labels: ["Configuration", "Review", "Incident", "Operator"] },
    { title: "Keep evidence that answers a question", caption: "Record what acted, under which authority, on which resource, and with what result.", kind: "record", labels: ["Identity", "Authority", "Resource", "Outcome"] },
    { title: "Changes reopen the governance decision", caption: "New data, tools, models, and purposes can alter exposure and should trigger review.", kind: "cycle", labels: ["Current scope", "Change", "Reassess", "Approve"] },
  ],
};

const insightOverview: Record<string, ArtifactSpec> = {
  "authorize-the-schedule-that-runs-the-agent": { title: "A schedule extends an agent’s authority through time", caption: "Review who approved the trigger, what it can do unattended, and when it should stop.", kind: "cycle", labels: ["Approve", "Schedule", "Run", "Review"] },
  "authorize-the-agent-chain": { title: "The composed workflow has a combined effect", caption: "Follow the request across delegated agents and stop at the actual business change.", kind: "network", labels: ["Request", "Agent A", "Agent B", "External effect"] },
  "agent-authorization-before-autonomy": { title: "Autonomy begins inside a named boundary", caption: "Purpose, identity, permitted actions, approval, and evidence belong in one review path.", kind: "gate", labels: ["Purpose", "Identity", "Action"] },
  "modernization-is-an-ai-control": { title: "The application interface carries the business rules", caption: "A narrow API can validate an AI request before the legacy application changes a record.", kind: "layers", labels: ["Agent request", "API rules", "App logic", "Record"] },
  "governance-that-survives-deployment": { title: "Governance connects policy to daily operations", caption: "A requirement lives through a configured setting, an operating owner, and reviewable evidence.", kind: "flow", labels: ["Policy", "Setting", "Operator", "Evidence"] },
};
export function InsightArtifactAt({ slug, index }: { slug: string; index: number }) { const item = articleEntries[slug]?.[index]; return item ? <VisualArtifact item={item}/> : null; }
export function InsightOverview({ slug }: { slug: string }) { const item = insightOverview[slug]; return item ? <VisualArtifact item={item}/> : null; }

const microsoft: readonly ArtifactSpec[] = [
  { title: "Content permission is the first boundary", caption: "A Copilot response can reflect the signed-in user’s access to connected content.", kind: "flow", labels: ["User access", "SharePoint", "Retrieval", "Response"] },
  { title: "Environment policy shapes agent capability", caption: "Copilot Studio and Power Platform policy can restrict connectors, channels, knowledge, and makers.", kind: "layers", labels: ["Tenant", "Environment", "Agent", "Connector"] },
  { title: "Translate the decision into evidence", caption: "A RACI owner approves the boundary; admins configure it; logs and tests support review.", kind: "network", labels: ["Business owner", "Admin", "Control", "Evidence"] },
];
export function MicrosoftArtifacts() { return <VisualArtifactGrid items={microsoft} label="Microsoft governance diagrams"/>; }

const about: readonly ArtifactSpec[] = [
  { title: "Start with a working business process", caption: "The workflow and existing systems determine the useful place for AI.", kind: "flow", labels: ["People", "Applications", "Information", "AI option"] },
  { title: "Implementation joins four kinds of work", caption: "Architecture connects business rules, identity, integrations, and operations.", kind: "network", labels: ["Architecture", "Identity", "Integration", "Operations"] },
];
export function AboutArtifacts() { return <VisualArtifactGrid items={about} label="How AdaptSphere works diagrams"/>; }
export function AboutArtifactAt({ index }: { index: number }) { const item = about[index]; return item ? <VisualArtifact item={item}/> : null; }

const delivery: readonly ArtifactSpec[] = [
  { title: "1 · Map", caption: "Record the workflow, systems, identities, and open questions.", kind: "network", labels: ["Workflow", "Data", "Identity", "Actions"] },
  { title: "2 · Design", caption: "Decide how access, tools, approvals, and ownership fit together.", kind: "layers", labels: ["Purpose", "Identity", "Tools", "Owner"] },
  { title: "3 · Implement", caption: "Configure the agreed integration and verify both allowed and blocked paths.", kind: "gate", labels: ["Request", "Control", "System"] },
  { title: "4 · Handover", caption: "Leave the team with operating instructions, recovery steps, and review owners.", kind: "record", labels: ["Runbook", "Monitor", "Recover", "Review"] },
];
export function DeliveryArtifacts() { return <VisualArtifactGrid items={delivery} label="Delivery stages"/>; }
export function DeliveryArtifactAt({ index }: { index: number }) { const item = delivery[index]; return item ? <VisualArtifact item={item} compact/> : null; }
